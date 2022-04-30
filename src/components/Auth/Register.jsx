import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";

const Register = () => {
  const [userState, setUserState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const newUserState = { ...userState };
    newUserState[name] = value;
    setUserState(newUserState);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userState);
  };

  return (
    <Form className="form mx-auto mt-5 px-2 py-5 p-sm-5" onSubmit={handleLogin}>
      <h1 className="text-center text-primary mb-3">Register</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handleBlur}
          name="name"
          type="text"
          placeholder="Enter Your Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onBlur={handleBlur}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button
        className="form-btn fw-bold px-4 py-2 text-uppercase"
        variant="primary"
        type="submit"
      >
        Login
      </Button>
    </Form>
  );
};

export default Register;
