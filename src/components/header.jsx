import { Routes, Route } from 'react-router-dom'

import Navlist from '../components/navigation'
import HomePage from '../pages/index'
import TodoList from '../pages/todoList'

// Fce pro render hlavičky
function Header() {
    return(
        <header>
            <Navlist />
        </header>
    )
}

export default Header