import React, { Component } from "react";
import NavbarStyle from "./Navbar.css";
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
constructor(){
  super();
  this.state={
    mode:"white"
  }
}
lighthandle=()=>{
  if(this.state.mode==="black"){
    
  }else if(this.state.mode==="white"){
  
  }
}
  render() {
    return (
      <ul className="dropdown">
        <li className="dropdown-1"><Link to="/">Home</Link></li>

        <li className="dropdown-1">
          <Link to="/user" className="dropbtn">User</Link>
          <div className="dropdown-content">
            <Link to="/Userapi">User list</Link>
            <Link to="/Useradd">Add list</Link>
          </div>
        </li>
        
        <li className="dropdown-1">
          <Link to="/College" className="dropbtn">College</Link>
          <div className="dropdown-content">
            <Link to="/Apisir">User list</Link>
            <Link to="/Apisir">Add list</Link>
          </div>
        </li>
        
        <li className="dropdown-1">
          <Link to="/student" className="dropbtn">Student</Link>
          <div className="dropdown-content">
            <Link to="/Apisir">User list</Link>
            <Link to="/Apisir">Add list</Link>
          </div>
        </li>
        
        <li className="dropdown-1">
          <Link to="/marksheet" className="dropbtn">Marksheet</Link>
          <div className="dropdown-content">
            <Link to="/Apisir">User list</Link>
            <Link to="/Apisir">Add list</Link>
          </div>
        </li>
        
        <li className="dropdown-1">
          <Link to="/role" className="dropbtn">Role</Link>
          <div className="dropdown-content">
            <Link to="/Apisir">User list</Link>
            <Link to="/Apisir">Add list</Link>
          </div>
        </li>
        
                {/* Logout Button */}
        <li className="dropdown-1 logout-btn">
          <Link to="/logout" className="dropbtn">Logout</Link>
        </li>
       <li>
       <button className="theme" onClick={this.lighthandle}>Theme</button>
       </li>
      </ul>
    );
  }
}

export default NavbarComponent;