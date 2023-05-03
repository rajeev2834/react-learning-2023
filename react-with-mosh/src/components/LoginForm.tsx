import React, { FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import googleLogo from "../assets/google-logo.svg";
import "../App.css";

function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row>
        <Col>
          <h3 className="text-center mb-4">Log in to your account</h3>
          <Form onSubmit={handleSubmit}>
            <Button className="w-100 mb-2 mt-2 continue-with-google">
                <img src={googleLogo} alt="Google Logo" className="google-logo" />
                Continue with Google
            </Button>
            <Form.Group controlId="formBasicEmail" className="mb-3 mt-3">
              <Form.Control type="email" placeholder="Email address" required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>


            <Button variant="dark" type="submit" className="w-100 mb-2 mt-2">
              Continue
            </Button>

          </Form>

          <div className="text-center mt-2">
            <a href="#"  className="font-weight-sm text-primary smaller-text">
                Forgot Password?{" "}
            </a>
          </div>

          <div className="text-center mt-3 font-weight-sm">
                Don't have an account?{" "}
            <a href="#"  className="font-weight-sm text-primary">
              Sign Up
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;