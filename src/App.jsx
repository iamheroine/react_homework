import DarkMode from "./components/DarkMode";
import SignIn from "./components/SignIn";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <SignIn />
      <TodoList />
      <DarkMode />
    </>
  );
}

export default App;
