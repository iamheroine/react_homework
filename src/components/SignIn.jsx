import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassworkChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassworkConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      return alert("이메일을 입력해주세요.");
    }
    if (!password) {
      return alert("비밀번호를 입력해주세요.");
    }
    if (password.length < 8) {
      return alert("비밀번호는 8자 이상으로 입력해주세요.");
    }
    if (password !== passwordConfirm) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
    // if가 아닌 else if 쓰면 return 사용할 필요 없음!

    alert(`이메일은 ${email}이고, 비밀번호는 ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassworkChange}
        />
      </div>
      <div>
        <label htmlFor="passwordConfirm">비밀번호 확인:</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={handlePassworkConfirmChange}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignIn;
