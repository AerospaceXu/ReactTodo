import React, { useState, useContext } from 'react'
import './ListMenu.css'

import { AppContext } from '../../list'

export default (props) => {
  const [selectValue, setSelectValue] = useState('mid')
  const { dispatch } = useContext(AppContext)

  return (
    <div
      className='list-menu'
      style={props.isShow ? { display: 'block' } : { display: 'none' }}
    >
      <div className='list-menu-arrow'></div>
      <div className='list-menu-other'>
        <div className='list-menu-other-inputs'>
          <div>
            紧急程度
            <select
              value={selectValue}
              onChange={(e) => {
                setSelectValue(e.target.value)
              }}
            >
              <option value='low'>低</option>
              <option value='mid'>! 中</option>
              <option value='high'>!! 高</option>
              <option value='higher'>!!! 极高</option>
            </select>
          </div>
        </div>
        <div
          className='list-delete-btn'
          onClick={() => {
            dispatch({ type: 'deleteItem', id: props.id })
          }}
        >
          删除
        </div>
      </div>
    </div>
  )
}
