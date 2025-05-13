import { NotebookPen, Funnel, FunnelX } from 'lucide-react'
import { useState, useEffect} from 'react'

import Filter from '../filter'

function TaskForm({addButtonHandler}) {
    const[filtersDisplay, setFiltersDisplay] = useState('none')

    function changeDisplay(){
        setFiltersDisplay(filtersDisplay === "none" ? "block" : "none")
    }

    useEffect(() => {
        document.getElementById('filters').style.display = filtersDisplay
    }, [filtersDisplay])

    return(
        <form className='items-center inline lg:flex' id='task_form'>
            <div className='flex mb-8 min-h-fit md:max-h-20'>
                <button id='add_task' onClick={addButtonHandler}
                className='flex items-center p-4 mx-4 mt-4 duration-200 border-2 rounded-lg cursor-pointer h-fit w-fit hover:border-sky-500 active:text-base active:scale-95'
                type="button">
                    <NotebookPen />
                    <p className='ml-2'>Přidat zadání</p>
                </button>
                <div className='relative'>
                    <button id='filter' onClick={changeDisplay}
                    className='flex items-center p-4 mx-4 mt-4 duration-200 border-2 rounded-lg cursor-pointer h-fit w-fit hover:border-sky-500 active:text-base active:scale-95'
                    type="button">
                        <Funnel />
                        <p className='ml-2'>Filtry</p>
                    </button>
                    <div id='filters' className='bg-[var(--text)] mt-2 rounded-lg text-[var(--primary)] h-28 pt-0.5 px-1'>
                        <button id='clear_filters' onClick={() => {
                            document.querySelectorAll('.filter input[type="checkbox"]')
                            .forEach(filter => filter.checked = false)
                        }}
                        className='flex items-center p-2 mx-4 mt-2 duration-200 border-2 rounded-lg cursor-pointer w-fit hover:border-sky-500 active:text-base active:scale-95'
                        type="button">
                            <FunnelX />
                            <p>Odebrat filtry</p>
                        </button>
                        <Filter title={"Splněné"} id={"completed"}/>
                        <Filter title={"Nesplněné"} id={"uncompleted"}/>
                    </div>
                </div>
            </div>
            <div className='w-64 mb-4 ml-4 sm:w-1/2'>
                <div>
                    <input type="text" id='title' placeholder='Název zadání' maxLength={50}/>    
                </div>
                <div className='mt-4'>
                    <input type="text" id='desc' 
                    placeholder='Popis' maxLength={150} 
                    className='w-full'/>
                </div>
            </div>
        </form>
    )    
}

export default TaskForm