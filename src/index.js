import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Vaishal"
          TimeAgo="Today at 4:45pm"
          Text="woww"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
          author="Romia"
          TimeAgo="Today at 5:45pm"
          Text="sighhhhh!!!!!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="low123"
          TimeAgo="Today at 9:45pm"
          Text="WHaattt"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          TimeAgo="Today at 14:45pm"
          Text="lol"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
