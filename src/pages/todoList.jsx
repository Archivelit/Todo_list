import { TasksContext } from '../context/TasksContext'

import { useLayoutEffect, useContext } from 'react'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import TaskForm from '../components/forms/taskForm'
import TaskComponent from "../components/Task"


import '../styles/pages/todoList.css'
import '../styles/main.css'

function TodoList(){
    const { tasks } = useContext(TasksContext);

    console.log(tasks);

    useLayoutEffect(() => {
        document.title = 'To do list';
    }, []);
    
    // "Rozložení" stránky s listem 
    return (
        <>
            <Header />
            <main className='container min-h-fit'>
                <TaskForm />
                <div className="h-fit" id='task_list'>
                {tasks.length < 1 ? 
                <h1 className='text-xl pb-2 flex justify-center'>Zatím nejsou žadné zadání</h1> 
                    : 
                tasks.map((task, index) => (
                        <TaskComponent 
                            key={task.id}
                            task={task} 
                            ind={index}
                        />
                ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default TodoList