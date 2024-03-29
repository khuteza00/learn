import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavbarComponent from './Component1/Navbar';
import Home from './Component1/Home';
import User from './Component1/User';
import Userapi from './Component/Userapi';
import Useradd from './Component/Useradd.js';
import Edit from './Component1/Edit.js'
function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/Userapi" element={<Userapi />} />
        <Route path="/Useradd" element={<Useradd />} />
        <Route path="/update/:id"element={<Edit />} />
        </Routes>
                     
    </BrowserRouter>
  );
}
export default App;
// ReactDOM.render(<App />, document.getElementById('root'));