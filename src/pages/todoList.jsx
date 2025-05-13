import { useLayoutEffect, useState } from 'react'

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
    const key = 'tasks';
    const storage = new LocalStorage();

    const [filters, setFilters] = useState(() => 
        [new Filter("completed", task => task.isComplete === true),
        new Filter("uncompleted", task => task.isComplete === false)
    ])

    const [tasks, setTasks] = useState(() => {
        const savedTasks = storage.get(key)
        return savedTasks ? parseToTasks(JSON.parse(savedTasks)) : [];
    })

    //Měnime záhlaví stránky
    useLayoutEffect(() => {
        document.title = 'To do list'
    }, [])

    useEffect(() => {}, [filters])

    function updateStoredTasks(tasks){
        setTasks(tasks);
        storage.set(key, JSON.stringify(tasks));
    }

    function addButtonHandler(e){
        e.preventDefault();
        let newTask = new Task(document.getElementById('title').value.trim(), document.getElementById('desc').value.trim())
        const updatedTasks = [...tasks, newTask]
        updateStoredTasks(updatedTasks)
    }
    
    function removeButtonHandler(ind){
        const updatedTasks = [...tasks];
        updatedTasks.splice(ind, 1);
        updateStoredTasks(updatedTasks)
    }
    
    function toggleTask(ind){
        const updatedTasks = [...tasks];
        updatedTasks[ind].toggle();
        updateStoredTasks(updatedTasks);
    }
    
    // "Rozložení" stránky s listem 
    return (
        <>
            <Header />
            <main className='container min-h-fit'>
                <TaskForm addButtonHandler={addButtonHandler}/>
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