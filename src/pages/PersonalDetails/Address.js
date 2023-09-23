import axios, { AxiosHeaders } from "axios";
import React, { useState } from "react";

export default function Address() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const token = localStorage.getItem("token");
  const submitForm = async () => {
    const resp = await axios.post(
      "http://localhost:8080/login/useraddress",

      formData,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (resp.status == 200) {
      alert("data added");
    }
  };
  return (
    <div>
      Address Line 1{" "}
      <input
        type="text"
        name="address_line1"
        onChange={(e) => handleChange(e)}
      />
      Address Line 2{" "}
      <input
        type="text"
        name="address_line2"
        onChange={(e) => handleChange(e)}
      />
      City <input type="text" name="city" onChange={(e) => handleChange(e)} />
      Pin Code{" "}
      <input type="number" name="pincode" onChange={(e) => handleChange(e)} />
      Mobile{" "}
      <input type="number" name="mobile" onChange={(e) => handleChange(e)} />
      <br></br>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
