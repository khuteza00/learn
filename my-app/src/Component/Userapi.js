import React, { Component } from 'react';
import './UserapiStyle.css';
import axios from "axios";
import { Link } from 'react-router-dom';
export default class Userapi extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    apicalling = () => {
        axios.get("https://manraj-ors-1.onrender.com/user")
            .then((result) => {
                console.log("axios:", result.data);
                this.setState({ data: result.data });
            })
            .catch((err) => {
                console.log("error:", err);
            });
    };

    componentDidMount() {
        this.apicalling();
    }

    handleDelete = (_id) => {
        const conf = window.confirm("Do you want to delete?");
        if (conf)
        {
            axios.delete(`https://manraj-ors-1.onrender.com/user/${_id}`)
            .then(res => {
                // alert(`Record has been deleted`);
                console.log("error")
                this.apicalling();
            }).catch(err => console.log(err))
        }
    }

    render() {
        console.log("this.state.data:", this.state.data);
        return (
            <div className='User-div'>
                <h1 className='User-h1'>USER LIST</h1>
                <table border={"1"} cellPadding="10px">
                    <thead>
                        <tr className='User-heading'>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>LOGIN ID</th>
                            <th>PASSWORD</th>
                            <th>ROLE ID</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data && this.state.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item._id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.loginId}</td>
                                <td>{item.password}</td>
                                <td>{item.roleId}</td>
                                <td>
                                    <Link to={`/update/${item._id}`}><button className='Edit'>Edit</button></Link>
                                    <button className='Delete' onClick={() => this.handleDelete(item._id)}>Delete</button>
                                </td>
                            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}