import { useLayoutEffect, useState } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import TaskForm from '../components/taskForm'
import TaskComponent from "../components/Task"

import { Task } from '../classes/Task'
import { StorageWrapper as LocalStorage } from '../classes/LocalStorage'
import { parseToTasks }from '../scripts/parseToTasks'

import '../styles/pages/todoList.css'
import '../styles/main.css'

function TodoList(){
    const key = 'tasks';
    const storage = new LocalStorage();

    const [tasks, setTasks] = useState(() => {
        const savedTasks = storage.get(key)
        return savedTasks ? parseToTasks(JSON.parse(savedTasks)) : [];
    })

    //Měnime záhlaví stránky
    useLayoutEffect(() => {
        document.title = 'To do list'
    }, [])

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
        <div className='main'>
			<Header />
            <main className='container min-h-fit bg-zinc-100 text-white'>
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
		</div>
    )
}

export default TodoList