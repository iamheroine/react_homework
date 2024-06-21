function TodoList() {
  return (
    <div>
      <h1>할 일 목록</h1>
      <form>
        <input type="text" placeholder="할 일을 추가하세요" />
        <button type="submit">추가</button>
      </form>
      <ul>
        <li style={{ textDecoration: "line-through" }}>
          잠자기
          <button>취소</button>
          <button>삭제</button>
        </li>
        <li>
          일찍 일어나기
          <button>완료</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
