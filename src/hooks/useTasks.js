import { useState, useEffect, useCallback } from 'react';
import produce from 'immer';

import api from '../api';

export default function useTasks() {
    const [ tasks, setTasks ] = useState([]);

    const move = useCallback((from, to) => {

        setTasks(produce(tasks, draft =>{

            const dragged = draft[from];
            
            draft.splice(from, 1);
            draft.splice(to, 0, dragged);

        }))

        console.log(tasks)
    }, [tasks])

    const updateTaskList = useCallback((taskId, taskName) => {

        const updatedTasks = tasks.map(task => {
            return task.id === taskId 
            ? { ...task, taskName: taskName }
            : task 
        })

        setTasks(updatedTasks);

    }, [tasks])

    const handleCreate = useCallback(async (taskName) => {

        const { data } = await api.post('/tasks', {
            taskName: taskName
        });

        setTasks(oldTasks => [ ...oldTasks, data ])

    }, [])

    const handleUpdate = useCallback(async (taskName, taskObject) => {

        const { data } = await api.post(`/tasks/${taskObject.id}`, {
            taskName: taskName,
            complete: taskObject.complete
        });

        const updatedTasks = tasks.map(task => {
            return task.id === taskObject.id 
            ? { ...task, taskName: data.taskName, updatedAt: data.updatedAt }
            : task 
        })

        setTasks(updatedTasks);

    }, [tasks])

    const completeTask = useCallback(async (taskChecked) => {

        const { data } = await api.post(`/tasks/${taskChecked.id}`, {
            taskName: taskChecked.taskName,
            complete: !taskChecked.complete
        })

        const updatedTasks = tasks.map(task => {
            return task.id === taskChecked.id 
            ? { ...task, complete: data.complete, updatedAt: data.updatedAt }
            : task 
        })

        setTasks(updatedTasks);

    }, [tasks])

    const handleDelete = useCallback( async (id) => {
        
        await api.delete(`/tasks/${id}`);

        const updatedTasks = tasks.filter(task => task.id !== id);

        setTasks(updatedTasks);

    }, [tasks])

    useEffect(() => {
        
        (async () => {
            const { data } = await api.get('/tasks');

            setTasks(data);
        })();

    }, []);

    return { tasks, move, handleCreate, handleDelete, handleUpdate, updateTaskList, completeTask }
}