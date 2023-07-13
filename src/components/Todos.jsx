import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todoState);

  const [inputText, setInputText] = useState("");

  function addTodo() {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random(), text: inputText },
    ]);
    setInputText("");
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <main>
      <input type="text" id="todoInput" onChange={handleInputChange} />
      <button onClick={addTodo}>add todo</button>
      <button onClick={clearTodos}>clear todos</button>
      {todos?.map((todo) => {
        return <Todo key={todo.id} text={todo.text} id={todo.id} />;
      })}
    </main>
  );
}
