import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const login = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:8080/login/login",
        formData
      );

      if (resp.status == 200) {
        console.log(resp.data);
        localStorage.setItem("token", resp.data);
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      Username:{" "}
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <br></br>
      Password:{" "}
      <input type="text" name="password" onChange={(e) => handleChange(e)} />
      <br></br>
      <button onClick={login}>Login</button>
    </div>
  );
}
