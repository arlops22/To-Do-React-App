import React, { memo, useRef, useContext } from 'react';
import { BiGridVertical } from 'react-icons/bi';
import { useDrag, useDrop } from 'react-dnd';

import { Context } from '../../Context/TaskContext';
import MenuOptions from './MenuOptions';

import { TableRow, TaskData } from './styles';

function Task({ task, index }) {
    const { move, completeTask } = useContext(Context);
    
    const ref = useRef(null);

    const [ {isDragging}, dragRef ] = useDrag({
        item: { type: 'LIST', index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [ , dropRef] = useDrop({
        accept: 'LIST',
        hover(item, monitor) {
            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggetOffset = monitor.getClientOffset();
            const draggedTop = draggetOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            move(draggedIndex, targetIndex);
            item.index = targetIndex;
        }
    })

    dragRef(dropRef(ref));


    return (
        <TableRow isDragging={isDragging} ref={ref}>
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
                    task={task} 
                />
            </td>                    
        </TableRow>
    )
}

export default memo(Task);