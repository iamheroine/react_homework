import Button from "./Button";

function TodoOrigin({ todo, handleToggleTodo, handleDeleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <Button onClick={() => handleToggleTodo(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </Button>
      {/* <button onClick={() => handleToggleTodo(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </button> */}
      <Button onClick={() => handleDeleteTodo(todo.id)}>삭제</Button>
      {/* <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button> */}
    </li>
  );
}

export default TodoOrigin;
