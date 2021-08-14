import React, { useState } from "react";
import axios from "axios";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import PathStripe from "../components/PathStripe";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/blog/create", {
      title,
      description,
      content,
    });
    alert("Post created successfully");
    history.push("/blogs");
  };

  return (
    <React.Fragment>
      <PathStripe path="Create" />
      <Container>
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit}
          className="upload-form"
        >
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
          <button
            type="submit"
            className="btn-submit"
            style={{ float: "none" }}
          >
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
