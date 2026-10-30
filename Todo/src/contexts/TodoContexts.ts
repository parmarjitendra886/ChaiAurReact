import { createContext, useContext } from 'react'

export type Todo = {
  id: number
  todo: string
  completed: boolean
}

type TodoContextValue = {
  todos: Todo[]
  addTodo: (todo: Omit<Todo, 'id'>) => void
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
  toggleComplete: (id: number) => void
}

const TodoContext = createContext<TodoContextValue | null>(null)

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider')
  }
  return context
}

export const TodoProvider = TodoContext.Provider
