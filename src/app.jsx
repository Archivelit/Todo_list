import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/index'
import TodoList from './pages/todoList'

function App() {
	return (
    	<>
    		<Routes>
				<Route path="*" element={<HomePage />} /> {/*když adresa je "default", tak zobrazí HomePage*/}
        		<Route path="/todo" element={<TodoList />} /> {/*když adresa je adresa/todo, tak zobrazí TodoList*/}
    		</Routes>
		</>
	)
}

export default App