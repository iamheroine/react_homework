import DarkModeBtn from "./DarkModeBtn";

export default function DarkMode({ isDark, setIsDark }) {
  return (
    <DarkModeBtn onClick={() => setIsDark(!isDark)}>
      {isDark ? "밝게" : "어둡게"}
    </DarkModeBtn>
  );
}
