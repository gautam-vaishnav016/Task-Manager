import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import FilterButtons from './components/FilterButtons'
import TaskList from './components/TaskList'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))

    if (savedTasks) {
      setTasks(savedTasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (task.trim() === '') return

    const newTask = {
      id: Date.now(),
      title: task,
      completed: false,
    }

    setTasks([newTask, ...tasks])
    setTask('')
  }

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        }
      }

      return item
    })

    setTasks(updatedTasks)
  }

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id)
    setTasks(filteredTasks)
  }

  const clearCompleted = () => {
    const pendingTasks = tasks.filter((item) => !item.completed)
    setTasks(pendingTasks)
  }

  const filteredTasks = tasks.filter((item) => {
    if (filter === 'completed') return item.completed
    if (filter === 'pending') return !item.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6">
        <h1 className="text-4xl font-bold text-center mb-6">
          Task Manager
        </h1>

        <TaskForm
          task={task}
          setTask={setTask}
          addTask={addTask}
        />

        <FilterButtons
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

        <div className="mt-6 text-center text-gray-500">
          Total Tasks: {tasks.length}
        </div>
      </div>
    </div>
  )
}

export default App