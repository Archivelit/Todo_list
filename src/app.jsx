import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/index'
import TodoList from './pages/todoList'
import ThemeSwitchChekbox from './components/themeSwitchButton'
import TodoProviders from './components/providers/todoProviders'

function App() {
	return (
    	<>
		
		<ThemeSwitchChekbox />
    		<Routes>
				<Route path="*" element={<HomePage />} /> {/*když adresa je "default", tak zobrazí HomePage*/}
        		<Route path="/todo" element={
					<TodoProviders>
						<TodoList />
					</TodoProviders>
				} />
    		</Routes>
		</>
	)
}

export default App