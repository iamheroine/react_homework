import { useState } from "react";
import Todo from "./Todo";
import Button from "./Button";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="할 일을 추가하세요"
        />
        <Button type="submit">추가</Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
          // <li
          //   key={todo.id}
          //   style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          // >
          //   {todo.text}
          //   <button onClick={() => handleToggleTodo(todo.id)}>
          //     {todo.completed ? "취소" : "완료"}
          //   </button>
          //   <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          // </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
