import "../css/signup.css";
import {useNavigate} from 'react-router-dom';
import { useRef, useState } from "react";
import axios from "axios";

function SignUp() {
  const username = new useRef();
  const first_name = new useRef();
  const last_name = new useRef();
  let navigate = new useNavigate();
  // const [user_name, setUser_name] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  function done(e){
    e.preventDefault();
  }
  const register = () => {
    axios
      .post("http://localhost:3001/register",{
        user: username.current.value,
        first: first_name.current.value,
        last: last_name.current.value,
      })
      .then((res) => {
        alert(res.data)
        navigate("/");
      });
  };

  // const show = () => {
  //   console.log(user_name);
  //   console.log(firstname);
  //   console.log(lastname);
  // };
  return (
    <>
      <form id="form" className="align-item-center" onSubmit={(event) => {done(event)}}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          className="mb-2"
          ref={username}
        />
        <label>First Name</label>
        <input
          type="text"
          placeholder="Username"
          className="mb-2"
          ref={first_name}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Username"
          className="mb-2"
          ref={last_name}
        />
        <button className="btn btn-primary mt-1" onClick={register}>Register</button>
      </form>
    </>
  );
}

export default SignUp;
