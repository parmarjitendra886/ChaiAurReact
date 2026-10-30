import { useEffect, useState } from 'react'
import './App.css'

import { TodoProvider, type Todo } from './contexts'
import TodosForm from './components/TodosForm'
import TodosItem from './components/TodosItem'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const savedTodos = localStorage.getItem('todos')
      return savedTodos ? (JSON.parse(savedTodos) as Todo[]) : []
    } catch (error) {
      console.error('Could not load todos from local storage.', error)
      return []
    }
  })

  const addTodo = (todo: Omit<Todo, 'id'>) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id: number, todo: Todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodosForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodosItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
