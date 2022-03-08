import "../css/signup.css";
import { useRef, useState } from "react";

function SignUp() {
  const username = new useRef();
  const first_name = new useRef();
  const last_name = new useRef();
  const [user_name, setUser_name] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const post = () => {
    setUser_name(username.current.value);
  };
  const show = () => {
    console.log(user_name);
    console.log(firstname);
    console.log(lastname);
  };
  return (
    <>
      <form id="form-control" className="align-item-center">
        <label>Username</label>
        <input type="text" placeholder="Username" className="mb-2" />
        <label>First Name</label>
        <input type="text" placeholder="Username" className="mb-2"/>
        <label>Last Name</label>
        <input type="text" placeholder="Username" className="mb-2"/>
        <button className="btn btn-primary mt-1">Register</button>
      </form>
    </>
  );
}

export default SignUp;
