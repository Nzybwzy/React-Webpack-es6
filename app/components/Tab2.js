import React, {Component} from "react"
class Tab2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageIndex: 0,
			pageSize: 10,
			totalSize: 0
		}

	}
	onHandleClickButton (tabName) {
		alert(tabName)
	}
	setActivedTAb () {console.log(1)}
	render() {
		let { pageIndex } = this.state;
		return(
			<div>
				<Button onHandleClickButton = {this.onHandleClickButton} />
				<button onClick={() => this.setActivedTAb()}>按钮1</button>
			</div>
		)
	}
}
const Button = ({onHandleClickButton}) => 
	<div>
		<button onClick={() => onHandleClickButton("sas")}>按钮</button>
	</div>
module.exports = Tab2;