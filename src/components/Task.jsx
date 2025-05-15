import { TasksContext } from '../context/TasksContext';

import { useContext } from 'react';

import { CircleX } from 'lucide-react'

function TaskComponent({task, ind}) {
    const { toggleTask, removeTask } = useContext(TasksContext)

    return (
        <div className="flex h-fit max-w-screen py-2 text-[var(--text)]">
            <div className="flex items-center justify-center px-4">
                <input type="checkbox" 
                checked={task.isComplete}
                onChange={() => toggleTask(ind)}
                className='cursor-pointer size-6'/>
            </div>

            <div className="w-[65%] md:w-[80%] lg:w-full ml-1">
                    <h1 className='mt-1 text-lg'>{task.title}</h1>
                    <p className='text-sm break-words h-6 overflow-auto'>{task.description}</p>
            </div>

            <div className="flex items-center justify-center px-4">
                <CircleX size={28} className='cursor-pointer'
                onClick={() => removeTask(ind)}/>
            </div>
        </div>
    )
}

export default TaskComponent;