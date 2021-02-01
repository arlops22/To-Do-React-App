import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { MdAdd } from 'react-icons/md';

import useClickOutside from '../../hooks/useClickOutside';
import Task from '../Task';
import { Context } from '../../Context/TaskContext';

import { 
    TaskTable,
    ButtonNew,  
    CreateTaskRow
} from './styles';


export default function TaskList() {
    const [ formTask, setFormTask ] = useState(false);

    const { tasks, handleCreate } = useContext(Context);

    const createTaskRef = useRef(null);
   
    const createTask = useCallback((event) => {
        
        if (!createTaskRef.current.contains(event.target) && createTaskRef.current.value) {
            
            handleCreate(createTaskRef.current.value);

            createTaskRef.current.value = '';
            setFormTask(false);
        }

    }, [])

    useClickOutside(createTaskRef, () => {
        setFormTask(false);
    })
    
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
                    tasks.map((task, index) => {
                        return(
                            <Task 
                                key={task.id}
                                task={task}
                                index={index}
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
