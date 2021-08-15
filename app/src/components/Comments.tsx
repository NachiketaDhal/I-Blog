import React, { useState } from "react";
import Styled from "styled-components";

import Underline from "./Underline";
import { IComment } from "../interfaces";
import Button from "./Button";

const Comments = ({ pComments }: { pComments: IComment[] | undefined }) => {
  const [nickname, setNickname] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const [comments, setComments] = useState<IComment[]>(
    pComments || [{ name: "User1", comment: "Good Post!" }]
  );

  // console.log(pComments);
  // console.log(comments);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname || !reply) {
      return;
    }
    const newComments: Array<IComment> = [...comments];
    newComments.push({ name: nickname, comment: reply });
    setComments(newComments);
    setNickname("");
    setReply("");
  };

  return (
    <Container>
      <div>
        <h2>Comments</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Underline />
        </div>
      </div>
      <div className="comments-container">
        <div className="form-container">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Nickname</label>
              <input
                type="text"
                id="name"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <label htmlFor="comment">Reply</label> <br />
              <textarea
                id="comment"
                cols={50}
                rows={3}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              ></textarea>{" "}
              <br /> <br />
              <Button text="Comment" />
            </form>
          </div>
        </div>
        <div className="user-comments">
          {comments?.map((comment: IComment, i) => {
            return (
              <div key={i}>
                <h6>{comment.name}</h6>
                <p style={{ fontSize: "12px" }}>{comment.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

const Container = Styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
.comments-container {
  display: flex;
}
.form-container {
  flex: 0.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 30px;
}
.user-comments {
  flex: 0.5;
  padding-left: 30px;
  border-left: 1px solid #c1221c;
  padding-top: 30px;
}

div {
  h2 {
    text-align: center;
  }
}

.form {
  input, textarea {
    padding: 8px;
    width: 400px;
    border: 1px solid rgb(229, 231, 235);
  }
}
`;

export default Comments;
