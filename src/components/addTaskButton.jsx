import { NotebookPen } from 'lucide-react'

import '../scripts/Task'

function handleClick(e){
    e.preventDefault()
    console.log('log')
}

function AddTaskButton() {
    return(
        <button id='add_task' onClick={handleClick}
        className='flex bg-black items-center 
        cursor-pointer h-fit w-fit p-4 rounded-lg m-4
        border-2 hover:border-indigo-500 duration-200
        hover:text-lg active:text-base active:scale-95'>
            <NotebookPen />
            <p className='ml-2'>Přidat zadání</p>
        </button>
    )
}

export default AddTaskButton