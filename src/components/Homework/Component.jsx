import { useState } from "react";
import Count from "./Count";
import DarkMode from "./DarkMode";

function Component() {
  // const [count, setCount] = useState(0);
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
      <DarkMode isDark={isDark} setIsDark={setIsDark} />
      {/* <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "밝게" : "어둡게"}
      </button> */}
    </div>
  );
}

export default Component;
