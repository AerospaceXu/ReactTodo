import React from 'react'
import './Board.css'

import ListItem from './ListItem'

const boardNameValue = {
  notStart: '未开始',
  doing: '进行中',
  done: '已完成'
}

const colorValue = {
  notStart: '#00adb5',
  doing: '#ff5722',
  done: '#00969b'
}

const createNewItem = () => {}

export default (props) => {
  const boardType = props.type
  const boardName = boardNameValue[boardType]
  const panelColor = colorValue[boardType]
  const ListList = props.childList

  let List
  if (ListList !== undefined) {
    List = ListList.map((item) => {
      return (
        <ListItem
          key={item.id}
          id={item.id}
          listName={item.listName}
          remark={item.listRemark}
        />
      )
    })
  }

  return (
    <div
      className='board-panel'
      style={{ backgroundColor: panelColor }}
      onDoubleClick={createNewItem}
    >
      <h1 className='board-name'>{boardName}</h1>
      <hr />
      <div className='list-box'>{List}</div>
    </div>
  )
}
