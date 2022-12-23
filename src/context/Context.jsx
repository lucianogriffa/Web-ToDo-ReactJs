import React, { useState, useContext } from 'react';
const ToDoContext = React.createContext({});
export const useToDoContext = () => useContext(ToDoContext)
const initialState = {
  task: []
}
const Context = ({ children }) => {
  const [state, setState] = useState(initialState)
  const addToTaskList = (payload) => {
    setState({
      ...state,
      task: [ ...state.task, payload]
    })
  }
  const removeTask = (payload) => {
		setState({
			...state,
			task: state.task.filter(items => items.id !== payload.id),
		});
	}
  // const cleanTask = () => setTask([])
  // const removeTask = (id) => setTask(task.filter(product => product.id !== id))
  // const totalTasks = () => task.reduce((accumalator, currentValue) => accumalator + currentValue.quantity, 0)
  return (
    <ToDoContext.Provider
      value={{
        state,
        addToTaskList,
        removeTask
      }}>
        {children}
      </ToDoContext.Provider>
  )
}
export default Context;