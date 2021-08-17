import React, { useEffect, useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";

import PathStripe from "../components/PathStripe";
import Underline from "../components/Underline";
import Alert from "../components/Alert";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [alert, setAlert] = useState(false);
  const [emptyData, setEmptyData] = useState(true);

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !content) {
      setAlert(true);
      setEmptyData(true);
      return;
    }
    await axios.post("http://localhost:8000/api/blog/create", {
      title,
      description,
      content,
    });
    setAlert(true);
    setEmptyData(false);
    setTimeout(() => {
      history.push("/blogs");
    }, 4000);
    setTitle("");
    setDescription("");
    setContent("");
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 2500);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <React.Fragment>
      {alert && (
        <Alert
          color={emptyData ? "red" : "lightgreen"}
          message={
            emptyData ? "Please provide all data" : "Post created successfully"
          }
        />
      )}
      <PathStripe path="Create" />
      <Container>
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit}
          className="upload-form"
        >
          <div style={{ marginBottom: "40px" }}>
            <h1 style={{ color: "#323232" }}>Create a blog</h1>
            <Underline />
          </div>
          <input
            type="text"
            placeholder="Title"
            className="input-text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="input-text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            value={content}
            placeholder="Content"
            className="input-text"
            cols={47}
            rows={3}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button type="submit" className="btn-submit">
            Create
          </button>
        </form>
      </Container>
    </React.Fragment>
  );
};

const Container = Styled.div`
  /* max-width: 80%; */
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 80px 0;
`;

export default CreateBlog;
