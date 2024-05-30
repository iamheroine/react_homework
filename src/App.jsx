// 1. count 앱 숫자 증가시키키
// 2. count 앱 숫자 감소시키키
// 3. 다크모드 버튼
// 4. 다크모드 배경, 글자색
// 5.
// 6. count 앱 reset 0으로 초기화

// 공통. useState import 하기
import { useState } from "react";

function App() {
  // 1,2,6-1. useState 선언하기
  const [count, setCount] = useState(0);
  // 1-2. state 상태 변경함수 만들기 : 숫자 증가
  const addCount = () => setCount(count + 1);
  // 2-2. state 상태 변경함수 만들기 : 숫자 감소
  const minusCount = () => setCount(count - 1);
  // 6-2. state 상태 변경함수 만들기 : reset
  const countReset = () => setCount(0);

  // 3-1. useState 선언하기
  const [isDark, setIsDark] = useState(false);
  // 3-2. state 상태 변경함수 만들기 : 다크모드 or 라이트모드
  const changeMode = () => setIsDark(!isDark);

  // 5-1. useState 선언하기
  const [inputValue, setInputValue] = useState("");
  // 5-2. state 상태 변경함수 만들기 : 입력값 가져오기
  const handleInputSubmit = (e) => {
    setInputValue(e.target.value); // 5-2-2. 이벤트가 발생한 타겟의 value를 현재 상태값으로 바꿔주기
  };
  // 5-2-3. state 상태 변경함수 만들기 : 입력값 제출
  const handleSubmit = () => {
    alert(`${inputValue} 작성이 완료 되었습니다!`); // 5-2-4. 입력값 제출 시 얼럿창
    setInputValue(""); // 5-2-5. 입력값 제출 실행이 끝나는대로 현재 상태값 초기화로 비워주기
  };

  return (
    <>
      <div className="count-container">
        <div className="count-btns">
          {/* 2-4. 변경함수 적용하기 : 숫자 감소 */}
          <button onClick={minusCount} className="minus-btn count-btn">
            -
          </button>
          {/* 1,2,6-3. 화면에 보여지는 부분에 return 할 state 넣어주기 : count */}
          Count: {count}
          {/* 1-4. 변경함수 적용하기 : 숫자 증가 */}
          <button onClick={addCount} className="plus-btn count-btn">
            +
          </button>
        </div>

        {/* 6-4. 변경함수 적용하기 : reset */}
        <button onClick={countReset} className="reset-btn count-btn">
          reset
        </button>
      </div>

      <br />

      <div
        // 4. 화면에 보여지는 부분에 return 할 state 넣어주기 : isDark의 현재 상태값에 따른 조건값
        style={{
          backgroundColor: isDark ? "black" : "white",
          color: isDark ? "white" : "black",
        }}
      >
        {/* 3-3. 화면에 보여지는 부분에 return 할 state 넣어주기 : isDark의 현재 상태값에 따른 조건값 */}
        {isDark ? "다크모드" : "라이트모드"}
        {/* 3-4. 변경함수 적용하기 : 다크모드 or 라이트모드 */}
        <button onClick={changeMode}>change</button>
      </div>

      <div>
        {/* 5-3. 화면에 보여지는 부분에 return 할 state 넣어주기 : 입력값 */}
        <input
          type="text"
          value={inputValue}
          placeholder="입력하세요"
          // 5-2-1. state 상태 변경함수 만들기 : 이벤트 발생 시 실행시킬 함수 지정
          onChange={handleInputSubmit}
        />
        {/* 5-4. 변경함수 적용하기 : 입력값 제출 */}
        <button onClick={handleSubmit}>제출</button>
      </div>
    </>
  );
}

export default App;
