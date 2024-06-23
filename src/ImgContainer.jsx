function ImgContainer({ children }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      {children}
    </div>
  );
}
export default ImgContainer;
