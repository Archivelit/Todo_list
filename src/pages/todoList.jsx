import { useLayoutEffect, useState, useRef } from 'react'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import TaskForm from '../components/forms/taskForm'
import TaskComponent from "../components/Task"

import { Task } from '../models/Task'
import { StorageWrapper as LocalStorage } from '../models/LocalStorage'
import { parseToTasks }from '../utils/parseToTasks'
import { Filter } from '../models/Filter'

import '../styles/pages/todoList.css'
import '../styles/main.css'
import { useEffect } from 'react'

function TodoList(){
    const titleInput = useRef(null);
    const descriptionInput = useRef(null);

    const key = 'tasks';
    const storage = new LocalStorage();

    const [tasks, setTasks] = useState(() => {
        const savedTasks = storage.get(key)
        return savedTasks ? parseToTasks(savedTasks) : [];
    })

    //Měnime záhlaví stránky
    useLayoutEffect(() => {
        document.title = 'To do list'
    }, [])

    useEffect(() => storage.set(key, tasks), [tasks])

    function addButtonHandler(e){
        e.preventDefault();
        let newTask = new Task(titleInput.current.value.trim(), descriptionInput.current.value.trim())
        setTasks([...tasks, newTask])
    }
    
    function removeButtonHandler(ind){
        const updatedTasks = [...tasks];
        updatedTasks.splice(ind, 1);
        setTasks(updatedTasks)
    }
    
    function toggleTask(ind){
        const updatedTasks = [...tasks];
        updatedTasks[ind].toggle();
        setTasks(updatedTasks)
    }
    
    // "Rozložení" stránky s listem 
    return (
        <>
            <Header />
            <main className='container min-h-fit'>
                <TaskForm addButtonHandler={addButtonHandler} title={titleInput} description={descriptionInput}/>
                <div className="h-fit" id='task_list'>
                {tasks.map((task, index) => (
                        <TaskComponent 
                            key={task.id}
                            task={task} 
                            ind={index} 
                            removeButtonHandler={removeButtonHandler}
                            toggleTask={toggleTask}
                        />
                ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default TodoList