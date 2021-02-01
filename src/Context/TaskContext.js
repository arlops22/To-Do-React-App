import React, { createContext } from 'react';

import useTasks from '../hooks/useTasks';

const Context = createContext();

function TaskProvider({ children }) {

    const { tasks, move, handleCreate, handleDelete, handleUpdate, updateTaskList, completeTask } = useTasks()

    return(
        <Context.Provider value={{ tasks, move, handleCreate, handleDelete, handleUpdate, updateTaskList, completeTask }}>
            {children}
        </Context.Provider>
    )

}

export { Context, TaskProvider };