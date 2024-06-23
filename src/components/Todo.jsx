import Button from "./Button";

function Todo({ todo, handleDeleteTodo, handleToggleTodo }) {
  return (
    <li
      key={todo.id}
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      {todo.text}
      <Button onClick={() => handleToggleTodo(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </Button>
      <Button onClick={() => handleDeleteTodo(todo.id)}>삭제</Button>
    </li>
  );
}

export default Todo;
