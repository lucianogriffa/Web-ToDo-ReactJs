import React, { useState, useContext, useEffect } from 'react';
const ToDoContext = React.createContext({});
export const useToDoContext = () => useContext(ToDoContext)
const Context = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Watch the next Marvel Movie',
      completed: false,
    },
    {
      id: 2,
      title: 'Record the next Video',
      completed: false,
    },
    {
      id: 3,
      title: 'Wash the dishes',
      completed: false,
    },
  ])
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState(tasks);
  // Add task
  const addToTaskList = (title) => {
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }
    const todoList = [...tasks]
    todoList.push(newTodo);
    setTasks(todoList);
  }
  // Mark the task complete
  const completedTasks = (id) => {
    const updatedList = tasks.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTasks(updatedList);
  }
  // Delete completed tasks
  const cleanTasksCompleted = () => {
    const updatedList = tasks.filter(todo => !todo.completed);
    setTasks(updatedList);
  }
  // Delete task
  const removeTask = (id) => {
    const updatedList = tasks.filter(todo => todo.id !== id);
    setTasks(updatedList);
  }
  // Show All Tasks
  const showAllTasks = () => {
    setActiveFilter('all')
  }
  // Show Active Tasks
  const showActiveTasks = () => {
    setActiveFilter('active')
  }
  // Show All Tasks
  const showCompletedTasks = () => {
    setActiveFilter('completed')
  }
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTodos(tasks);
    } else if (activeFilter === 'active') {
      const activeTodos = tasks.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === 'completed') {
      const completedTodos = tasks.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  },[activeFilter, tasks]);
  return (
    <ToDoContext.Provider
      value={{
        tasks,
        addToTaskList,
        completedTasks,
        removeTask,
        cleanTasksCompleted,
        showAllTasks,
        showActiveTasks,
        showCompletedTasks,
        activeFilter,
        filteredTodos
      }}>
        {children}
      </ToDoContext.Provider>
  )
}
export default Context;