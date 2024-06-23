import { useState } from "react";
import Count from "./Homework/Count";

function ComponentOrigin() {
  // 여기서 필요 없으므로 Count 컴포넌트로 이동
  //   const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: isDark ? "gray" : "white",
      }}
    >
      <Count />
      {/* <button onClick={() => setCount(count + 1)}>{count}</button> */}
      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "밝게" : "어둡게"}
      </button>
    </div>
  );
}

export default ComponentOrigin;
