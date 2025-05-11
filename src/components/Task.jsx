import {CircleX } from 'lucide-react'

function Task({title, description, isCompleted}) {
    return (
        <div id="task" className="flex h-16 text-black">
            <div div className="flex items-center justify-center px-4">
                <input type="checkbox" 
                checked={isCompleted}
                onClick="() => isCompleted === true ? isCompleted = false : isCompleted = true"
                className='size-8 cursor-pointer'/>
            </div>

            <div className="w-full ml-1">
                    <h1 className='text-lg mt-1'>{title}</h1>
                    <p className='text-sm'>{description}</p>
            </div>

            <div className="justify-center items-center flex px-4">
                <CircleX size={32} className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default Task;