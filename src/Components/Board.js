import React, { Component } from 'react'
import './Board.css'
import ListItem from './ListItem'

const boardNameValue = {
	notStart: '未开始',
	doing: '进行中',
	done: '已完成',
}

const colorValue = {
	notStart: '#00adb5',
	doing: '#ff5722',
	done: '#00969b',
}

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	onNameChange = (val, id) => {
		this.props.onNameChange(val, id)
	}

	onRemarkChange = (val, id) => {
		this.props.onRemarkChange(val, id)
	}

	onListDelete = (id) => {
		this.props.onListDelete(id)
	}

	handleNew = () => {
		this.props.onListCreate(this.props.type)
	}

	render() {
		const boardType = this.props.type.toString()
		const boardName = boardNameValue[boardType]
		const panelColor = colorValue[boardType]
		const ListList = this.props.childList

		let List
		if (ListList !== undefined) {
			List = ListList.map((item) => {
				return (
					<ListItem
						key={item.id}
						id={item.id}
						listName={item.listName}
						remark={item.listRemark}
						onNameChange={this.onNameChange}
						onRemarkChange={this.onRemarkChange}
						onListDelete={this.onListDelete}
					/>
				)
			})
		}

		return (
			<div
				className='board-panel'
				style={{ backgroundColor: panelColor }}
				onDoubleClick={this.handleNew}
			>
				<h1 className='board-name'>{boardName}</h1>
				<hr />
				<div className='list-box'>{List}</div>
			</div>
		)
	}
}

export default Board
