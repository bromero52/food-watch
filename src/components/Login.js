import React, { Component, useState } from "react";
import "../styles/Login.css";
import "whatwg-fetch";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const data = {
    email: "sam@corcos.io",
  };

  fetch("http://localhost:800/api/purchase", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log("this is res", res);
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>
    
  </div>;
}
