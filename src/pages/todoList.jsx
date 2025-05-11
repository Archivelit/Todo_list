import { useLayoutEffect } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import TaskForm from '../components/taskForm.jsx'
import TaskList from '../components/taskList.jsx'

import  '../scripts/Task'

import '../styles/pages/todoList.css'
import '../styles/main.css'

function TodoList(){

    //pomoci hooku useEffect měnime záhlaví stránky. Do něho pošleme anonymní funkci
    useLayoutEffect(() => {
        document.title = 'To do list'
    }, [])

    // "Rozložení" stránky s listem 
    return (
        <div className='main'>
			<Header />
            <main className='container min-h-screen bg-zinc-100 text-white'>
                <TaskForm />
                <TaskList />
            </main>
            <Footer />
		</div>
    )
}

export default TodoList