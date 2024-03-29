import React,{Component} from "react";
import axios from "axios";
export default class Putdelete extends Component{
    constructor(){
        super();
        this.state={
        firstName:"",
        lastName:"",
        password:"",
        loginId:"",
        roleId:"",
        };
    }
    
    handleForm=(event)=>{
        event.preventDefault();
        console.log("handle from",this.state)
        axios.put("https://manraj-ors-1.onrender.com/user",this.state)
        .then((result) => {
            console.log("axios:",result);
            // this.setState({data:result });
        }).catch((err) => {
            console.log("error:", err);
        });
    };

    nameFun=(event)=>{
        console.log("first",event.target.value);
        this.setState({name:event.target.value});
    }
    render(){
        return(
            <div>
                <h1>User Form</h1>
                <form>
                    <label htmlFor='firstName'>First Name</label>
                    <br/>
                    <input type="text" placeholder="Enter your name"
                    name="firstName"
                    id="firstName"
                    value={this.state.firstName}
                    onChange={(event)=>this.setState({firstName:event.target.value})}
                        // onChange={this.nameFun}
                        />
                        <br/>
                        <label htmlFor='lastName'>Last Name</label><br/>
                    <input type="text" placeholder="Enter your last name"
                    name="lastName"
                    id="lastName"
                    value={this.state.lastName}
                        onChange={(event)=>this.setState({lastName:event.target.value})}/>
                        <br/>
                        <label htmlFor='password'>Password</label><br/>
                    <input type="password" placeholder="Enter your password"
                    name="password"
                    id="password"
                    value={this.state.password}
                        onChange={(event)=>this.setState({password:event.target.value})}/>
                        <br/>
                        <label htmlFor='loginId'>Login ID</label><br/>
                    <input type="text" placeholder="Enter your loginId"
                    name="loginId"
                    id="loginId"
                    value={this.state.loginId}
                        onChange={(event)=>this.setState({loginId:event.target.value})}/>
                        <br/>
                        <label htmlFor='roleId'>Role ID</label><br/>
                    <input type="text" placeholder="Enter your roleId"
                    name="roleId"
                    id="roleId"
                    value={this.state.roleId}
                        onChange={(event)=>this.setState({roleId:event.target.value})}/>
                        <br/><br/>
                        <button onClick={this.handleForm}>EDIT</button>
                </form>
            </div>
        )
    }
}