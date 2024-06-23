import { useState } from "react";

function SignIn() {
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  //   const [confirmedPassword, setConfirmedPassword] = useState();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });

  //   const handleChangeEmail = (e) => {
  //     setEmail(e.target.value);
  //   };
  //   const handleChangePassword = (e) => {
  //     setPassword(e.target.value);
  //   };
  //   const handleChangeConfirmedPassword = (e) => {
  //     setConfirmedPassword(e.target.value);
  //   };
  const handleChangeUserData = (e) => {
    const { id, value } = e.target;
    console.log(id, value);

    setUserData((data) => ({
      // data는 현재 상태 객체. 즉, userData
      ...data,
      // '[id]: value'는 'id="이 값": 현재 value 값으로 나오는 상태(현재 입력된 상태)'
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmedPassword } = userData;

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
      alert(`회원가입 완료!\n이메일: ${email}, 비밀번호: ${password}`);
    }

    // setEmail("");
    // setPassword("");
    // setConfirmedPassword("");
    setUserData({
      email: "",
      password: "",
      confirmedPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={handleChangeUserData}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={userData.password}
          onChange={handleChangeUserData}
        />
      </div>
      <div>
        <label htmlFor="confirmedPassword">비밀번호 확인:</label>
        <input
          type="password"
          id="confirmedPassword"
          value={userData.confirmedPassword}
          onChange={handleChangeUserData}
        />
      </div>
      <button type="submit">회원가입</button>
    </form>
  );
}

export default SignIn;
