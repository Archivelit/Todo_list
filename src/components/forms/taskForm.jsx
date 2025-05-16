import { TasksContext } from '../../context/TasksContext'
import { FiltersContext } from '../../context/FiltersContext'

import { useState, useEffect, useRef, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { NotebookPen, Funnel, FunnelX } from 'lucide-react'

import Filter from '../filter'

function TaskForm() {
    const { addTask } = useContext(TasksContext)
    const { filters, clearFilters } = useContext(FiltersContext)

    const titleInput = useRef(null);
    const descriptionInput = useRef(null);
    const filtersContainer = useRef(null)
    
    const[filtersDisplay, setFiltersDisplay] = useState('none')

    function changeDisplay(){
        setFiltersDisplay(filtersDisplay === "none" ? "block" : "none")
    }

    useEffect(() => {
        filtersContainer.current.style.display = filtersDisplay
    }, [filtersDisplay])

    return(
        <form className='items-center md:text-lg sm:text-md text-[14px] inline lg:flex' id='task_form'>
            <div className='flex mb-8 min-h-fit md:max-h-20'>
                <button id='add_task' onClick={e => {
                        e.preventDefault();
                        addTask(titleInput.current.value, descriptionInput.current.value)
                    }}
                className='flex items-center sm:p-4 px-2 py-4 sm:mx-4 mx-2 mt-4 duration-200 border-2 rounded-lg cursor-pointer h-fit w-fit hover:border-sky-500 active:scale-95'
                type="button">
                    <NotebookPen />
                    <p className='ml-2'>Přidat zadání</p>
                </button>
                <div className='relative min-h-fit'>
                    <button id='filter' onClick={changeDisplay}
                    className='flex items-center sm:p-4 px-2 py-4 sm:mx-4 mx-2 mt-4 duration-200 border-2 rounded-lg cursor-pointer h-fit w-fit hover:border-sky-500 active:scale-95'
                    type="button">
                        <Funnel />
                        <p className='ml-2'>Filtry</p>
                    </button>
                    <div ref={filtersContainer} className='bg-[var(--text)] p-2 min-h-fit mt-2 rounded-lg text-[var(--primary)]'>
                        <button id='clear_filters' onClick={clearFilters}
                        className='flex items-center text-sm px-2 py-2 duration-200 border-2 rounded-lg cursor-pointer w-fit hover:border-sky-500 active:scale-95'
                        type="button">
                            <FunnelX />
                            <p>Vypnout filtry</p>
                        </button>
                        {
                            filters.map((filter, ind) => 
                                <Filter key={uuidv4()} title={filter.title} id={filter.id} ind={ind}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='w-64 mb-4 ml-4 sm:w-1/2 mt-4'>
                <div>
                    <input type="text" ref={titleInput} placeholder='Název zadání' maxLength={50}/>    
                </div>
                <div className='mt-4'>
                    <input type="text" ref={descriptionInput} 
                    placeholder='Popis' maxLength={150} 
                    className='w-full'/>
                </div>
            </div>
        </form>
    )    
}

export default TaskForm