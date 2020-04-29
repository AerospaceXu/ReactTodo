import React, { useReducer } from 'react'

const defaultState = [
  {
    id: 0,
    listName: '数学作业',
    listRemark: '',
    state: 'notStart'
  },
  {
    id: 1,
    listName: 'p5.js',
    listRemark: '周五前完成',
    state: 'doing'
  }
]

export const AppContext = React.createContext({})

const reducer = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  let tempState = []
  switch (action.type) {
    case 'changeMissionName':
      tempState = newState.map((item) => {
        if (item.id === action.id) {
          item.listName = action.value
        }
        return item
      })
      break
    case 'changeMissionRemark':
      tempState = newState.map((item) => {
        if (item.id === action.id) {
          item.listRemark = action.value
        }
        return item
      })
      break
    case 'deleteItem':
      tempState = newState.filter((item) => {
        return item.id !== action.id
      })
      break
    case 'newItem':
      const newItem = {
        id: newState[newState.length - 1].id + 1,
        listName: '',
        listRemark: '',
        state: 'notStart'
      }
      newState.push(newItem)
      tempState = newState
      break
    default:
      break
  }
  return tempState
}

export const List = (props) => {
  const [list, dispatch] = useReducer(reducer, defaultState)

  return (
    <AppContext.Provider value={{ list, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
