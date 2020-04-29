import './home.css'
import React, { useContext } from 'react'

import Board from '../Components/Board/Board'

import { AppContext } from '../list'

export default function () {
  const { list } = useContext(AppContext)

  const notStartList = list.filter((item) => item.state === 'notStart')
  const doingList = list.filter((item) => item.state === 'doing')
  const doneList = list.filter((item) => item.state === 'done')

  return (
    <div className='container'>
      <Board type='notStart' childList={notStartList} />
      <Board type='doing' childList={doingList} />
      <Board type='done' childList={doneList} />
    </div>
  )
}
