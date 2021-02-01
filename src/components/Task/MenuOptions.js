import React, { useState, useContext, useEffect, useRef, useCallback } from 'react';

import useClickOutside from '../../hooks/useClickOutside';
import { Context } from '../../Context/TaskContext';

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


export default function MenuOptions({ task }) {
    const [ menuAction, setMenuAction ] = useState(false);
    const [ updateForm, setUpdateForm ] = useState(false);
    const [ taskName, setTaskName ] = useState(task.taskName);

    const { handleDelete, handleUpdate, updateTaskList } = useContext(Context);

    const menuRef = useRef(null);
    const formRef = useRef(null);

    const updateTask = useCallback((event) => {

        if (!formRef.current.contains(event.target)) {
            
            handleUpdate(taskName, task);
            
            setUpdateForm(false);
        }

    }, [task, handleUpdate, taskName])


    useEffect(() => {

        if (updateForm) {
            formRef.current.children[0].focus()
        }

    }, [updateForm])

    useEffect(() => {
        
        updateTaskList(task.id, taskName);
        
    }, [taskName]) 

    useEffect(() => {

        document.addEventListener('mousedown', updateTask);

        return () => {
            document.removeEventListener('mousedown', updateTask);
        }

    }, [updateTask])

    useClickOutside(menuRef, () => {
        setMenuAction(false);
    })

    return (
        <>
            <MenuAction>
                <button onClick={() => setMenuAction(prevState => !prevState)}><MdMoreHoriz/></button>
                <PopUpMenu ref={menuRef} open={menuAction}>
                    <li><button onClick={() => { setUpdateForm(true); setMenuAction(false); }}><MdEdit />Update</button></li>
                    <li><button onClick={() => handleDelete(task.id)}><MdDelete />Delete</button></li>
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
