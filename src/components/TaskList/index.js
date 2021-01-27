import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '../../api';
import useClickOutside from '../../hooks/useClickOutside';
import Task from '../Task';

import { 
    TaskTable,
    ButtonNew,  
    CreateTaskRow
} from './styles';


export default function TaskList() {
    const [ formTask, setFormTask ] = useState(false);
    const [ tasks, setTasks ] = useState([]);

    const createTaskRef = useRef(null);

    const createTask = useCallback(async (event) => {
        
        if (!createTaskRef.current.contains(event.target) && createTaskRef.current.value) {
            
            const { data } = await api.post('/tasks', {
                taskName: createTaskRef.current.value
            });
    
            setTasks(oldTasks => [ ...oldTasks, data ])

            createTaskRef.current.value = '';
            setFormTask(false);
        }

    }, [])

    const updateTask = useCallback((taskId, taskName) => {

        const updatedTasks = tasks.map(task => {
            return task.id === taskId 
            ? { ...task, taskName: taskName }
            : task 
        })

        setTasks(updatedTasks);

    }, [tasks])

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

    async function completeTask(taskChecked) {

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
    }

    async function handleDelete(id) {

        await api.delete(`/tasks/${id}`);

        const updatedTasks = tasks.filter(task => task.id !== id);

        setTasks(updatedTasks);

    }

    useClickOutside(createTaskRef, () => {
        setFormTask(false);
    })

    useEffect(() => {
        
        (async () => {
            const { data } = await api.get('/tasks');

            setTasks(data);
        })();

    }, []);

    useEffect(() => {    

        document.addEventListener('mousedown', createTask);

        return () => {
            document.removeEventListener('mousedown', createTask);
        }

    }, [createTask])
    
    useEffect(() => {
        
        if (formTask) {
            createTaskRef.current.focus()
        }

    }, [formTask])

    return (
        <TaskTable>
            <thead>
                <tr>
                    <th></th>
                    <th>Your Tasks</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((task) => {
                        return(
                            <Task 
                                key={task.id}
                                task={task}
                                updateTask={updateTask}
                                completeTask={completeTask}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            />
                        )
                    })
                }
                <CreateTaskRow open={formTask}>
                    <td></td>
                    <td>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input 
                                ref={createTaskRef} 
                                name="taskName" 
                                id="taskName" 
                                type="text" 
                            />
                        </form>
                    </td>
                </CreateTaskRow>
                <tr>
                    <td></td>
                    <td><ButtonNew onClick={() => setFormTask(true)}><MdAdd/> New</ButtonNew></td>
                </tr>
            </tbody>
        </TaskTable>
    )
}
