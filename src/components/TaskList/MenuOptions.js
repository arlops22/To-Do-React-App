import React, { useState, useEffect, useRef } from 'react';

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


export default function MenuOptions(props) {
    const [ menuAction, setMenuAction ] = useState(false);
    const [ updateTask, setUpdateTask ] = useState(false);

    const menuRef = useRef(null);
    const formRef = useRef(null);

    useClickOutside(menuRef, () => {
        setMenuAction(false);
    })

    useClickOutside(formRef, () => {
        setUpdateTask(false);
    })

    useEffect(() => {

        if (updateTask) {
            formRef.current.children[0].value = props.task.taskName;
            formRef.current.children[0].focus()
        }

    }, [updateTask, props.task.taskName])

    function handleSubmit(e) {
        e.preventDefault();

        setUpdateTask(false);
    }

    return (
        <>
            <MenuAction>
                <button onClick={() => setMenuAction(prevState => !prevState)}><MdMoreHoriz/></button>
                <PopUpMenu ref={menuRef} open={menuAction}>
                    <li><button onClick={() => { setUpdateTask(true); setMenuAction(false); }}><MdEdit />Update</button></li>
                    <li><button onClick={() => props.deleteTask(props.task.id)}><MdDelete />Delete</button></li>
                </PopUpMenu>

            </MenuAction>
            <FormUpdateTask 
                ref={formRef} 
                open={updateTask} 
                onSubmit={(e) => handleSubmit(e)}
            >
                <input 
                    onChange={(event) => props.update(event, props.task)} 
                    name="taskName" 
                    type="text" 
                />
            </FormUpdateTask>
        </>
    )
}
