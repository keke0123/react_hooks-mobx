import React, { useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import useStore from "../../store";
//
import TodoList from "./component/Todolist";
//
import { todoApi } from "../../api";
//
import "./style.scss";

export default function Todo() {
  const { todo } = useStore();
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  const createTodo = async () => {
    console.log("create todo");
    // console.log("input", input);
    await todoApi.createTodoApi(input);
    await getTodo();
  };
  const getTodo = async () => {
    await todo.getTodo();
  };

  return useObserver(() => {
    return (
      <div className={`Todo-container`}>
        <button onClick={getTodo}>test</button>
        <div className={"head"}>
          <h2>Todo List</h2>
        </div>
        <div className={"body"}>
          <div className={`input-box`}>
            <div className={`input`}>
              <input
                // onChange={onChangeInput}
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder={`필요한 내용을 입력하세요`}
              />
            </div>
            <button onClick={createTodo}>+</button>
          </div>
          <div className={`hr`} />
          <div className={"list-box"}>
            {todo.todoList.map((item) => {
              return <TodoList key={item.id} title={item.title} />;
            })}
          </div>
        </div>
      </div>
    );
  });
}
