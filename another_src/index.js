import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  var author = "Sam";
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h1>Warning! </h1>
        hello world!
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={author}
          timeAgo="Today at 4:00 PM"
          content="I like you face!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Gary"
          timeAgo="Today at 5:00 PM"
          content="hello world!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
