import { Routes, Route } from 'react-router-dom'
import { Slide } from 'react-toastify';

import HomePage from './pages/homePage'
import TodoList from './pages/todoList'
import ThemeSwitchChekbox from './components/themeSwitchButton'
import TodoProviders from './components/providers/todoProviders'
import { ToastContainer } from 'react-toastify';

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
			<ToastContainer
                position="top-right"
                autoClose={2000}
                newestOnTop={true}
                closeOnClick={true}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                transition={Slide}
                limit={3}
                rtl={false}
            />
		</>
	)
}

export default App