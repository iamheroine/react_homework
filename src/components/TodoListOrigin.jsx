import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoListOrigin() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: uuidv4(),
      text: "잠자기",
      completed: true,
    },
    {
      id: uuidv4(),
      text: "일찍 일어나기",
      completed: false,
    },
  ]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!value) {
      return alert("내용을 입력해주세요.");
    }

    const newTodo = {
      id: uuidv4(),
      text: value,
      completed: false,
    };

    setTodoList([...todoList, newTodo]);
    setValue("");
    console.log(todoList);
  };

  const deleteTodo = (selectedId) => {
    // todoList 배열에서 선택된 항목을 제외한 새로운 배열을 생성
    const filteredTodoList = todoList.filter((todo) => {
      // 현재 반복 중인 항목의 id와 선택된 항목의 id를 비교
      console.log(selectedId, todo.id);
      // 선택된 항목의 id와 일치하지 않는 항목들만 남김
      return selectedId !== todo.id;
    });
    // 필터링된 배열로 todoList 상태를 업데이트
    setTodoList(filteredTodoList);
  };

  const updateTodo = (selectedId) => {
    // todoList 배열의 각 항목을 순회하며 새로운 배열을 생성
    const updatedTodo = todoList.map((todo) => {
      // 현재 항목의 id가 선택된 id와 일치하는지 확인
      if (selectedId === todo.id) {
        // 선택된 항목의 id가 일치하면 완료 상태를 토글
        return {
          id: todo.id,
          text: todo.text,
          // ...todo,
          completed: !todo.completed,
        };
      } else {
        // 선택된 항목의 id가 일치하지 않으면 원래 항목을 반환
        return todo;
      }
    });
    // 업데이트된 배열로 todoList 상태를 업데이트
    setTodoList(updatedTodo);
  };

  return (
    <div>
      <h1>할 일 목록</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할 일을 추가하세요"
          value={value}
          onChange={handleValueChange}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
              <button onClick={() => updateTodo(todo.id)}>
                {todo.completed ? "취소" : "완료"}
              </button>
              <button
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
        {/* {[
          <li style={{ textDecoration: "line-through" }}>
            잠자기
            <button>취소</button>
            <button>삭제</button>
          </li>,
          <li>
            일찍 일어나기
            <button>완료</button>
            <button>삭제</button>
          </li>,
        ]} */}
      </ul>
    </div>
  );
}

export default TodoListOrigin;
