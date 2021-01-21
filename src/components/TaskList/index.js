import React, { useState, useEffect, useRef } from 'react';
import { MdAdd } from 'react-icons/md';

import api from '../../api';
import useClickOutside from '../../hooks/useClickOutside';
import MenuOptions from './MenuOptions';

import { 
    TaskTable, 
    TaskData,  
    ButtonNew,  
    CreateTaskRow
} from './styles';


export default function TaskList() {
    const [ formTask, setFormTask ] = useState(false);
    const [ tasks, setTasks ] = useState([]);

    const createRef = useRef(null);

    useClickOutside(createRef, () => {
        setFormTask(false);
    })

    useEffect(() => {
        
        (async () => {
            const { data } = await api.get('/tasks');

            setTasks(data);
        })();

    }, []);

    useEffect(() => {
        
        if (formTask) {
            createRef.current.value = '';
            createRef.current.focus()
        }

    }, [formTask])


    async function handleDelete(id) {

        await api.delete(`/tasks/${id}`);

        const updatedTasks = tasks.filter(task => task.id !== id);

        setTasks(updatedTasks);

    }

    async function changeTaskStatus(taskChecked) {

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

    async function handleCreateTask(e) {
        e.preventDefault();

        const { taskName } = e.target.elements; 

        const { data } = await api.post('/tasks', {
            taskName: taskName.value
        });

        setTasks(
            [ ...tasks, data ]
        )
        
        setFormTask(false);
    }

    async function handleUpdate(e, taskObject) {

        const { data } = await api.post(`/tasks/${taskObject.id}`, {
            taskName: e.target.value,
            complete: taskObject.complete
        });

        const updatedTasks = tasks.map(task => {
            return task.id === taskObject.id 
            ? { ...task, taskName: data.taskName, updatedAt: data.updatedAt }
            : task 
        })

        setTasks(updatedTasks);
    }

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
                            <tr key={task.id}>
                                <td>
                                    <input 
                                        checked={task.complete} 
                                        onChange={() => changeTaskStatus(task)} 
                                        type="checkbox" 
                                        name="aciton-input" 
                                        id="aciton-input"
                                    />
                                </td>
                                <td>
                                    <TaskData status={task.complete}>{task.taskName}</TaskData>
                                    <MenuOptions 
                                        update={handleUpdate} 
                                        deleteTask={handleDelete} 
                                        task={task} 
                                    />
                                </td>                    
                            </tr>
                        )
                    })
                }
                <CreateTaskRow open={formTask}>
                    <td></td>
                    <td>
                        <form onSubmit={handleCreateTask}>
                            <input 
                                ref={createRef} 
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
