import { NotebookPen } from 'lucide-react'

function TaskForm({addButtonHandler}) {
    return(
        <form className='flex items-center' id='task_form'>
            <button id='add_task' onClick={addButtonHandler}
            className='flex bg-black items-center 
            cursor-pointer h-fit w-fit p-4 rounded-lg m-4
            border-2 hover:border-indigo-500 duration-200
            hover:text-lg active:text-base active:scale-95'
            type="button">
                <NotebookPen />
                <p className='ml-2'>Přidat zadání</p>
            </button>
            <div className='ml-4 my-4 w-3xl'>
                <div>
                    <input type="text" id='title' placeholder='Název zadání' maxLength={50}/>    
                </div>
                <div className='mt-4'>
                    <input type="textarea" id='desc' 
                    placeholder='Popis' maxLength={150} 
                    required className='w-full'/>
                </div>
            </div>
        </form>
    )    
}

export default TaskForm