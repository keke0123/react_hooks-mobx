import React from "react";
import { useObserver } from "mobx-react";
import useStore from "../../store";
//
import TodoList from "./component/Todolist";
//
import "./style.scss";

export default function Todo() {
  const { todo } = useStore();
  return useObserver(() => {
    return (
      <div className={`Todo-container`}>
        <div className={"head"}>
          <h2>Todo List</h2>
        </div>
        <div className={"body"}>
          <div className={`input-box`}>
            <div className={`input`}>
              <input placeholder={`필요한 내용을 입력하세요`} />
            </div>
            <button>+</button>
          </div>
          <div className={`hr`} />
          <div className={"list-box"}>
            {todo.todoList.map((item) => {
              // return <div key={item.id}>{item.title}</div>;
              return <TodoList key={item.id} title={item.title} />;
            })}
          </div>
        </div>
      </div>
    );
  });
}
