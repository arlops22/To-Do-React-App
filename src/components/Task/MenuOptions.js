import React, { useState, useEffect, useRef, useCallback } from 'react';

import useClickOutside from '../../hooks/useClickOutside';

import {
    MdDelete, 
    MdMoreHoriz, 
    MdEdit 
} from 'react-icons/md';

import  {
    MenuAction,
    PopUpMenu,
    FormUpdateTask
} from './styles';


export default function MenuOptions({ task, setTasks, updateTask, deleteTask }) {
    const [ menuAction, setMenuAction ] = useState(false);
    const [ updateForm, setUpdateForm ] = useState(false);
    const [ taskName, setTaskName ] = useState(task.taskName);

    const menuRef = useRef(null);
    const formRef = useRef(null);

    const handleUpdate = useCallback((event) => {

        if (!formRef.current.contains(event.target)) {
            
            updateTask(taskName, task)
            
            setUpdateForm(false);
        }

    }, [task, updateTask, taskName])


    useEffect(() => {

        if (updateForm) {
            formRef.current.children[0].focus()
        }

    }, [updateForm])

    useEffect(() => {
        
        setTasks(task.id, taskName);
        
    }, [taskName]) 

    useEffect(() => {

        document.addEventListener('mousedown', handleUpdate);

        return () => {
            document.removeEventListener('mousedown', handleUpdate);
        }

    }, [handleUpdate])

    useClickOutside(menuRef, () => {
        setMenuAction(false);
    })

    return (
        <>
            <MenuAction>
                <button onClick={() => setMenuAction(prevState => !prevState)}><MdMoreHoriz/></button>
                <PopUpMenu ref={menuRef} open={menuAction}>
                    <li><button onClick={() => { setUpdateForm(true); setMenuAction(false); }}><MdEdit />Update</button></li>
                    <li><button onClick={() => deleteTask(task.id)}><MdDelete />Delete</button></li>
                </PopUpMenu>

            </MenuAction>
            <FormUpdateTask 
                ref={formRef} 
                open={updateForm} 
                onSubmit={(e) => e.preventDefault()}
            >
                <input 
                    onChange={(event) => setTaskName(event.target.value)} 
                    name="taskName" 
                    type="text"
                    value={taskName}
                />
            </FormUpdateTask>
        </>
    )
}
