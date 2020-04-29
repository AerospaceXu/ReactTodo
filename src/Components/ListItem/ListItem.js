import React, { useState, useContext } from 'react'
import './ListItem.css'

import ListMenu from '../ListMenu/ListMenu'

import { AppContext } from '../../list'

export default (props) => {
  const [menu, setMenu] = useState(false)
  const { dispatch } = useContext(AppContext)

  const handleNameChange = (e, id) => {
    dispatch({
      type: 'changeMissionName',
      value: e.target.value,
      id
    })
  }

  const handleRemarkChange = (e, id) => {
    dispatch({
      type: 'changeMissionRemark',
      value: e.target.value,
      id
    })
  }

  return (
    <div className='list-item' draggable='true'>
      <div className='list-inputs'>
        <input
          className='list-name'
          value={props.listName}
          onChange={(e) => {
            handleNameChange(e, props.id)
          }}
        />
        <input
          className='list-remark'
          value={props.remark}
          onChange={(e) => {
            handleRemarkChange(e, props.id)
          }}
        />
      </div>
      <div
        className='list-menu-btn'
        onClick={() => {
          setMenu(!menu)
        }}
      ></div>
      <ListMenu isShow={menu} id={props.id} />
    </div>
  )
}
