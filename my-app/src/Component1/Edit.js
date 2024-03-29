import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  //   const params = useParams();
  const navigate = useNavigate();
  //   const classid = window.location.href.split("/")[4]
  const _id = window.location.pathname.split("/")[2];
  //   console.log("params :", classid);

  //   let _id = params.id;
  //   console.log("params :", params.id);

  const [data, setData] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    password: "",
    loginId: "",
    roleId: "",
  });

  useEffect(() => {
    console.log("ID:", data);
    axios
      .get(`https://manraj-ors-1.onrender.com/user/${_id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [_id]);

  const handleEdit =async (event) => {
    event.preventDefault();
    // console.log("Data by form :", data);
    // console.log("handle from", data);

   let result = await axios.put(`https://manraj-ors-1.onrender.com/user/${_id}`, data)

    //   .then((result) => {
    //     console.log("axios result :", result);
        setData(result.data);
        console.log("acknowledged ", result.data.acknowledged);
    //     if (result.data.acknowledged) {
    //       navigate("/Userapi");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("error:", err);
    //   });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Updating ${name} with value:`, value);
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div>
        <h1>User Form</h1>
        <form>
          {/* <label htmlFor='id'> ID</label><br/> */}
          <input
            type="text"
            placeholder="Enter your Id"
            name="id"
            id="id"
            value={data._id}
            hidden
            onChange={handleChange}
          />
          <br />
          <label htmlFor="firstName">First Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            name="firstName"
            id="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lastName">Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            id="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="loginId">Login ID</label>
          <br />
          <input
            type="text"
            placeholder="Enter your loginId"
            name="loginId"
            id="loginId"
            value={data.loginId}
            onChange={handleChange}
          />
          <br />
          {/* <label htmlFor='roleId'>Role ID</label><br/>
                    <input 
                        type="text" 
                        placeholder="Enter your roleId"
                        name="roleId"
                        id="roleId"
                        value={data.roleId}
                        onChange={handleChange}
                    /> */}
          <br />
          <br />
          <button onClick={handleEdit}>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
