function NavigationBar() {
  return (
    <header
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <a href="#">Home</a>
      <a href="#about">About</a>
    </header>
  );
}

export default NavigationBar;
