import React, { Component } from 'react'
import './ListMenu.css'

class ListMenu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: 'mid',
		}
	}

	handleEmergency = (e) => {
		this.setState({
			value: e.target.value,
		})
	}

	handleDelete = () => {
		this.props.onListDelete()
	}

	render() {
		return (
			<div className='list-menu' style={this.props.isShow ? { display: 'block' } : { display: 'none' }}>
				<div className='list-menu-arrow'></div>
				<div className='list-menu-other'>
					<div className='list-menu-other-inputs'>
						<div>
							紧急程度
							<select value={this.state.value} onChange={this.handleEmergency}>
								<option value='low'>低</option>
								<option value='mid'>! 中</option>
								<option value='high'>!! 高</option>
								<option value='higher'>!!! 极高</option>
							</select>
						</div>
					</div>
					<div className='list-delete-btn' onClick={this.handleDelete}>
						删除
					</div>
				</div>
			</div>
		)
	}
}

export default ListMenu
