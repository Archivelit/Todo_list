import AddTaskButton from '../components/addTaskButton.jsx'

function TaskForm() {
    return(
        <form className='flex items-center' id='TaskForm'>
            <AddTaskButton id='AddButton'/>
            <div className='ml-4 my-4 w-3xl'>
                <div>
                    <input type="text" id='name' placeholder='Název zadání' required/>    
                </div>
                <div className='mt-4'>
                    <input type="textarea" id='desc' 
                    placeholder='Popis'maxLength={150} 
                    required className='w-full'/>
                </div>
            </div>
        </form>
    )    
}

export default TaskForm