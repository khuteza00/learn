import React, { Component } from 'react';
import axios from "axios"
export default class Api extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(res => res.json())
        //     .then(result => this.setState({ data: result }))
            axios.get("https://jsonplaceholder.typicode.com/todos").then((result)=>{  
                console.log("axios:",result)
                this.setState({data:result.data})
            }).catch((err)=>{
                console.log("error:,err")
            })
    }

    render() {
        console.log("this.state.data");
        return (
            <div>
                <h1>Api calling</h1>
                {this.state.data && this.state.data.map((item, index) => {
                    return (
                        <table border={"1"} cellPadding="20px" key={index}>
                            {index === 0 && (
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>API LIST</th>
                                    </tr>
                                </thead>
                            )}
                            <tbody>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })}
            </div>
        )
    }
}