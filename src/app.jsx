import { Routes, Route } from 'react-router-dom'

import { TasksContext } from './context/TasksContext';

import HomePage from './pages/index'
import TodoList from './pages/todoList'
import ThemeSwitchChekbox from './components/themeSwitchButton'

import { useTasks } from './hooks/useTasks';

function App() {
	const taskStore = useTasks();

	return (
    	<>
		
		<ThemeSwitchChekbox />
    		<Routes>
				<Route path="*" element={<HomePage />} /> {/*když adresa je "default", tak zobrazí HomePage*/}
        		<Route path="/todo" element={
					<TasksContext.Provider value={taskStore}>
						<TodoList />
					</TasksContext.Provider>
				} />
    		</Routes>
		</>
	)
}

export default App