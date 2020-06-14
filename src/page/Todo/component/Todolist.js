import React from "react";
//

export default function TodoList(props) {
  // console.log("props", props);

  return <div className={`Todolist-container`}>{props.title}</div>;
}
