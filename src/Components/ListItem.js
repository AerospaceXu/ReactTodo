import React, { Component } from 'react'
import './ListItem.css'
import ListMenu from './ListMenu'

class ListItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menu: false,
		}
	}

	handleNameChange = (e) => {
		this.props.onNameChange(e.target.value, this.props.id)
	}

	handleRemarkChange = (e) => {
		this.props.onRemarkChange(e.target.value, this.props.id)
	}

	clickMenu = () => {
		this.setState({
			menu: !this.state.menu,
		})
	}

	onListDelete = () => {
		this.props.onListDelete(this.props.id)
	}

	render() {
		return (
			<div className='list-item' draggable='true'>
				<div className='list-inputs'>
					<input className='list-name' value={this.props.listName} onChange={this.handleNameChange} />
					<input className='list-remark' value={this.props.remark} onChange={this.handleRemarkChange} />
				</div>
				<div className='list-menu-btn' onClick={this.clickMenu}></div>
				<ListMenu isShow={this.state.menu} onListDelete={this.onListDelete} />
			</div>
		)
	}
}

export default ListItem
