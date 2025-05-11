import {CircleX } from 'lucide-react'

import { Task } from '../scripts/Task'

function TaskComponent({task, ind, removeButtonHandler}) {
    return (
        <div id="task" className="flex h-16 text-black">
            <div className="flex items-center justify-center px-4">
                <input type="checkbox" 
                checked={task.isComplete}
                onClick="task.toggle"
                className='size-8 cursor-pointer'/>
            </div>

            <div className="w-full ml-1">
                    <h1 className='text-lg mt-1'>{task.title}</h1>
                    <p className='text-sm'>{task.description}</p>
            </div>

            <div className="justify-center items-center flex px-4">
                <CircleX size={32} className='cursor-pointer' onClick={() => removeButtonHandler(ind)}/>
            </div>
        </div>
    )
}

export default TaskComponent;