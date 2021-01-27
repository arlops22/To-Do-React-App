import React, { memo } from 'react';
import { BiGridVertical } from 'react-icons/bi';

import MenuOptions from './MenuOptions';

import { TableRow, TaskData } from './styles';

function Task({ task, completeTask, updateTask, handleDelete, handleUpdate }) {

    return (
        <TableRow>
            <td>
                <button className='drag-button'><BiGridVertical size={`1.25em`} /></button>
                <input 
                    checked={task.complete} 
                    onChange={() => completeTask(task)} 
                    type="checkbox" 
                    name="aciton-input" 
                    id={`action-input-${task.id}`}
                />
                <label htmlFor={`action-input-${task.id}`}><span></span></label>
            </td>
            <td>
                <TaskData status={task.complete}>{task.taskName}</TaskData>
                <MenuOptions 
                    setTasks={updateTask}
                    updateTask={handleUpdate} 
                    deleteTask={handleDelete} 
                    task={task} 
                />
            </td>                    
        </TableRow>
    )
}

export default memo(Task);