import { useLayoutEffect, useState } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import TaskForm from '../components/taskForm'
import TaskComponent from "../components/Task"

import { Task } from '../scripts/Task'

import '../styles/pages/todoList.css'
import '../styles/main.css'



function TodoList(){
    const [tasks, setTasks] = useState(new Array)
    
    //pomoci hooku useEffect měnime záhlaví stránky. Do něho pošleme anonymní funkci
    useLayoutEffect(() => {
        document.title = 'To do list'
    }, [])

    function addButtonHandler(e){
        e.preventDefault();
        let newTask = new Task(document.getElementById('title').value.trim(), document.getElementById('desc').value.trim())
        setTasks([...tasks, newTask]);
    }
    
    function removeButtonHandler(ind){
        const updatedTasks = [...tasks];
        updatedTasks.splice(ind, 1);
        setTasks(updatedTasks)
    }
    
    // "Rozložení" stránky s listem 
    return (
        <div className='main'>
			<Header />
            <main className='container min-h-screen bg-zinc-100 text-white'>
                <TaskForm addButtonHandler={addButtonHandler}/>
                <div className="h-fit bg-amber-600" id='task_list'>
                {tasks.map((task, index) => (
                        <TaskComponent 
                            key={task.id}
                            task={task} 
                            ind={index} 
                            removeButtonHandler={removeButtonHandler}
                        />
                ))}
                </div>
            </main>
            <Footer />
		</div>
    )
}

export default TodoList