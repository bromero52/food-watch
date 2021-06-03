import React, { Component, useState } from "react";
import "../styles/Login.css";
import "whatwg-fetch";

export default function Login() {
  // useState hook for form data
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Api endpoint for registering users
  const apiUrl = "http://localhost:8000/users/register";

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // // Spliting up fetch funtion call
  // const data = {
  //   email: email,
  //   password: password,
  // };

  function handleSubmit(event) {
    event.preventDefault();
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        // id: this.state.id,
      }),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      
    </div>
  );
}
