import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();

    if (!inputValue) return alert("할 일을 입력해주세요.");

    const newTodo = {
      id: uuidv4(),
      text: inputValue,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id !== id;
        // todo.id와 지금 클릭한 todo.id(onclick에 적용한 함수의 인자로 들어가 있음)가 같지 않은 것만 나오게
      })
    );
  };

  const handleToggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        // todo.id와 지금 클릭한 todo.id(onclick에 적용한 함수의 인자로 들어가 있음)가 true면 해당 객체의 completed가 반대인 값 반환
      })
    );
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={handleSubmitTodo}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={inputValue}
          onChange={handleAddTodo}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "취소" : "완료"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
        {/* <li style={{ textDecoration: "line-through" }}>
          잠자기
          <button>취소</button>
          <button>삭제</button>
        </li>
        <li>
          일찍 일어나기
          <button>완료</button>
          <button>삭제</button>
        </li> */}
      </ul>
    </div>
  );
}

export default TodoList;
