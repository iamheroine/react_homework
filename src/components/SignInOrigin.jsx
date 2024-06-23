import { useState } from "react";

function SignInOrigin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmedPassword, setConfirmedPassword] = useState();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmedPassword = (e) => {
    setConfirmedPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if if if 형태가 아닌 아래와 같은 형태로 만들면 return을 사용하지 않아도 됨!
    if (!email) {
      alert("이메일을 입력해주세요.");
    } else if (!password) {
      alert("비밀번호를 입력해주세요.");
    } else if (password.length < 8) {
      alert("비밀번호는 8자 이상으로 입력해주세요.");
    } else if (password !== confirmedPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    } else {
      alert(`회원가입 완료!
이메일: ${email}, 비밀번호: ${password}`);
    }

    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <div>
        <label htmlFor="confirmedPassword">비밀번호 확인:</label>
        <input
          type="password"
          id="confirmedPassword"
          value={confirmedPassword}
          onChange={handleChangeConfirmedPassword}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignInOrigin;
