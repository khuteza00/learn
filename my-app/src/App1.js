import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Api from './Component/Api';
// import Apisir from './Component/Apisir';
// import Getpost from './Component/Getpost';
import Userapi from './Component/Userapi';
import Useradd from './Component/Useradd';
// import Putdelete from './Component/Putdelete';
// import Navbar from './Component/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          {/* <li><Link to="/">API</Link></li> */}
          <li><Link to="/Userapi">Userapi</Link></li>
          <li><Link to="/Useradd">Useradd</Link></li>
          {/* <li><Link to="/putdelete">Putdelete(put/delete)</Link></li> */}
          {/* <li><Link to="/Navbar">Navbar(Navbar)</Link></li> */}

        </ul>
        <Routes>
          {/* <Route path="/" element={<Api />} /> */}
          <Route path="/Userapi" element={<Userapi />} />
          <Route path="/Useradd" element={<Useradd />} />
          {/* <Route path="/Putdelete" element={<Putdelete />} /> */}
          {/* <Route path="/Navbar" element={<Navbar />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
// ReactDOM.render(<App />, document.getElementById('root'));