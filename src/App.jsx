import Description from "./Description";
import ImgContainer from "./ImgContainer";
import NavigationBar from "./NavigationBar";
import Title from "./Title";
import SignIn from "./components/SignIn";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <SignIn />
      <TodoList />
      <hr />
      <NavigationBar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title id="home" title="Home" />
        <Description description="Welcome" />
        <Title id="about" title="About" />
        <Description
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus error quaerat assumenda distinctio dolor quibusdam odio
          pariatur cum qui in obcaecati, molestiae mollitia ut sit impedit quasi
          quos numquam expedita!"
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <ImgContainer>
            <img
              src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=2528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={250}
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={250}
            />
            <img
              src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={250}
            />
          </ImgContainer>
        </div>
      </main>
    </>
  );
}

export default App;
