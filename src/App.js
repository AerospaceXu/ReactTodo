import React from 'react'
import './App.css'
import Board from './Components/Board'

const data = [
	{
		id: 0,
		listName: '数学作业',
		listRemark: '',
		state: 'notStart',
	},
	{
		id: 1,
		listName: 'p5.js',
		listRemark: '是用ml5一起配合',
		state: 'doing',
	},
]

const id = 2

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			data: data,
			id: id,
		}
	}
	onNameChange = (val, id) => {
		const temp = this.state.data.map((item) => {
			if (item.id === id) {
				item.listName = val
			}
			return item
		})
		console.log(temp)
		this.setState({
			data: temp,
		})
	}

	onRemarkChange = (val, id) => {
		const temp = this.state.data.map((item) => {
			if (item.id === id) {
				item.listRemark = val
			}
			return item
		})
		this.setState({
			data: temp,
		})
	}

	onListDelete = (id) => {
		const temp = this.state.data.filter((item) => {
			return item.id !== id
		})
		this.setState({
			data: temp,
		})
	}

	onListCreate = (type) => {
		const temp = {
			id: this.state.id + 1,
			listName: '',
			listRemark: '',
			state: type,
		}
		const tempArr = this.state.data
		tempArr.push(temp)
		this.setState({
			data: tempArr,
			id: this.state.id + 1,
		})
	}

	render() {
		const notStartList = this.state.data.filter((item) => item.state === 'notStart')
		const doingList = this.state.data.filter((item) => item.state === 'doing')
		const doneList = this.state.data.filter((item) => item.state === 'done')

		return (
			<div className='container'>
				<Board
					type='notStart'
					onNameChange={this.onNameChange}
					onRemarkChange={this.onRemarkChange}
					childList={notStartList}
					onListDelete={this.onListDelete}
					onListCreate={this.onListCreate}
				/>
				<Board
					type='doing'
					onNameChange={this.onNameChange}
					onRemarkChange={this.onRemarkChange}
					childList={doingList}
					onListDelete={this.onListDelete}
					onListCreate={this.onListCreate}
				/>
				<Board
					type='done'
					onNameChange={this.onNameChange}
					onRemarkChange={this.onRemarkChange}
					childList={doneList}
					onListDelete={this.onListDelete}
					onListCreate={this.onListCreate}
				/>
			</div>
		)
	}
}

export default App
