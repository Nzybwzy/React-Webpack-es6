import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tab from "./components/Tab";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";

const ownerList = [
        {k:"0",v: "全部全部全部全部"},
        {k:"1",v: "业主业主业主业主"},
        {k:"5",v: "住户住户住户住户"},
        {k:"6",v: "租户租户租户租户"},
        {k:"2",v: "商户商户商户商户"},
        {k:"8",v: "其他其他其他其他"}
    ]
export default class AppComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            routers: "HomePage",
            detail: ""
        }
    }
    // 跳转列表页
    onHandleGoList() {
        this.setState({
            routers: "ListPage"
        })
    }
    // 跳转详情页
    onHandleClickGoDetail(detail) {
        this.setState({
            routers: "DetailPage",
            detail: detail
        })
    }
    // 返回首页
    onHandleClickGoBackToHome() {
        this.setState({
            routers: "HomePage"
        })
    }
    // 详情返回列表页
    onHandleClickGoBackToList() {
        this.setState({
            routers: "ListPage"
        })
    }
    render() {
        let { routers, detail } = this.state
        // console.log(routers)
        return (
            <div>
            {
                routers == "HomePage" ? 
                    <div>
                        <Tab />
                        <Tab1 />
                        <Tab2 />
                        <button style={{width: "200px", height: "200px", fontSize: "30px"}} onClick={() => {this.onHandleGoList()}}>列表页(点我)</button>
                    </div> : 
                routers == "ListPage" ? 
                    <div>
                        <button onClick={() => {this.onHandleClickGoBackToHome()}}>返回</button>
                        <h1>列表页</h1>
                        <ul>
                            {
                                ownerList.map((item, index) => {
                                    return (
                                        <li style={{cursor: "pointer"}} onClick={() => this.onHandleClickGoDetail(item.v)} key={index}>{item.v}(点我)</li>
                                    )
                                })
                            }
                        </ul>
                    </div> : 
                routers == "DetailPage" ? 
                    <div>
                        <button onClick={() => {this.onHandleClickGoBackToList()}}>返回</button>
                        <h1>详情</h1>
                        <div>{detail}</div>
                    </div>
                    : null
            }
            </div>
        );
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('content'));