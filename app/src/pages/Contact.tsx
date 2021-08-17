import React, { useEffect, useState } from "react";

import PathStripe from "../components/PathStripe";
import Underline from "../components/Underline";
import { IContact } from "../interfaces";
import Alert from "../components/Alert";
import "./contact.css";

const Contact = () => {
  const [inputValues, setInputValues] = useState<IContact>({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [alert, setAlert] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);

  const { name, email, number, message } = inputValues;

  const handleInputChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !number || !message) {
      setAlert(true);
      setEmptyFields(true);
      return;
    }
    setAlert(true);
    setEmptyFields(false);
    setInputValues({ email: "", message: "", name: "", number: "" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
      setEmptyFields(false);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [alert, emptyFields]);

  return (
    <div>
      {alert && (
        <Alert
          color={emptyFields ? "red" : "lightgreen"}
          message={
            emptyFields
              ? "Please fill up all the fileds"
              : "Your response has been submitted"
          }
        />
      )}
      <PathStripe path="Contact" />
      <div className="upload-container">
        <form action="" className="upload-form">
          <h1 style={{ color: "#323232" }}>Contact Us</h1>
          <div>
            <Underline />
          </div>
          {/* <h1 style={{ color: "#323232", textAlign: "center" }}>Contact Me</h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Underline />
          </div> */}
          <div className="input-container" style={{ marginTop: "20px" }}>
            <label htmlFor="name">Enter Your Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Name here"
              required
              className="input-text"
              autoComplete="off"
            />
            <label htmlFor="email">Enter Your Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email here"
              required
              className="input-text"
              autoComplete="off"
            />
            <label htmlFor="number">Enter Your Contact Number:</label>
            <input
              id="number"
              type="tel"
              name="number"
              value={number}
              onChange={handleInputChange}
              placeholder="Contact Number here"
              required
              className="input-text"
              autoComplete="off"
            />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleInputChange}
              cols={30}
              rows={3}
              className="input-text"
            ></textarea>
          </div>
          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
