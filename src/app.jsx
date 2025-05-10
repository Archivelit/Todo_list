import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/index'
import TodoList from './pages/todoList'

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </>
  )
}

export default App