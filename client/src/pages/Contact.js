import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [formState, setFormState] = useState({ email: "", message: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("Submitted Successfully!");
    setFormState({
      email: "",
      message: "",
    });
  };

  return (
    <div className="m-5">
      <Form className="form">
        <Form.Group as={Col} controlId="emailForm" className="col-3">
          <Form.Label> Enter your Email!</Form.Label>
          <Form.Control
            value={formState.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="emailForm">
          <Form.Label> Send me a quick message!</Form.Label>
          <Form.Control
            value={formState.message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="Message"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleFormSubmit} className="m-2">
          Submit Message!
        </Button>
      </Form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
