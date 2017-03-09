import React, {Component} from "react"
const ownerType = [
        {k:"0",v: "全部"},
        {k:"1",v: "业主"},
        {k:"5",v: "住户"},
        {k:"6",v: "租户"},
        {k:"2",v: "商户"},
        {k:"8",v: "其他"}
    ]
class Tab2 extends Component {
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
	setActivedTAb = (tab) => {
		alert(tab);
	}
	render() {
		let { pageIndex } = this.state;
		return(
			<div>
				<Button 
					onHandleClickButton = {this.onHandleClickButton}
					ownerType = {ownerType}
					/>
				<button onClick={() => this.setActivedTAb("按钮1")}>按钮1</button>
			</div>
		)
	}
}
const Button = ({onHandleClickButton, ownerType}) => 
	<div>
		{
			ownerType && ownerType.map((item, index) => {
				return (
					<button key={index} onClick={() => onHandleClickButton(item.v)}>{item.v}</button>
				)
			})
		}
	</div>
module.exports = Tab2;