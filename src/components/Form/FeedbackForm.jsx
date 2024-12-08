import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const FeedbackForm = ({ incEmail, incSubject, incText }) => {
  // State variables for input fields
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Log values from the inputs
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    // You can also add validation or send data to the server here.
  };

  return (
    <Form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      {incEmail === true ? (
        <Row
          style={{ width: "100%", display: "flex", justifyContent: "center", placeItems: "center" }}
          className="mb-3 mt-4"
        >
          <Form.Group
            className="col col-12 col-sm-10 col-md-8 col-lg-6"
            controlId="validationCustom01"
          >
            <Form.Control
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </Form.Group>
        </Row>
      ) : (
        ""
      )}
      {incSubject === true ? (
        <Row
          style={{ width: "100%", display: "flex", justifyContent: "center", placeItems: "center"  }}
          className="mb-3 "
        >
          <Form.Group
            className="col col-12 col-sm-10 col-md-8 col-lg-6"
            controlId="validationCustom02"
          >
            <Form.Control
              required
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} // Update state on change
            />
          </Form.Group>
        </Row>
      ) : (
        ""
      )}
      {incText === true ? (
        <Row
          style={{ width: "100%", display: "flex", justifyContent: "center", placeItems: "center"  }}
        >
          <Form.Group
            className="col col-12 col-sm-10 col-md-8 col-lg-6"
            controlId="validationCustom03"
          >
            <Form.Control
              as="textarea"
              rows={3}
              required
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state on change
            />
          </Form.Group>
        </Row>
      ) : (
        ""
      )}
      <Button type="submit" className="mt-3" style={{background:"#0072CE !important"}}>
        Submit
      </Button>
    </Form>
  );
};

export default FeedbackForm;
