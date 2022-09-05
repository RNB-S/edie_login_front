import styled from "styled-components";
import React from "react";
//import axios from "axios";

function Login() {
  const [inputId, setInputId] = React.useState("");
  const [inputPw, setInputPw] = React.useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  async function postData() {
    try {
      const response = await fetch("http://localhost:8989/login", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
          id: inputId,
          password: inputPw,
        }),
      });

      return response;
    } catch (e) {
      console.log(e);
    }
  }

  // login 버튼 클릭 이벤트
  const loginSubmit = async () => {
    console.log("시작");
    console.log(inputId);
    if (inputId === "") {
      alert("아이디를 입력해주세요");
    } else if (inputPw === "") {
      alert("비밀번호를 입력해주세요");
    }

    const data = await postData();

    console.log(data);
  };

  return (
    <Back>
      <Body>
        <h2>Login</h2>
        <Box>
          <label htmlFor="input_id">ID : </label>
          <IuputBox
            type="text"
            name="id"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디를 입력해주세요"
          />
        </Box>
        <Box>
          <label htmlFor="input_id">PW : </label>
          <IuputBox
            type="text"
            name="pw"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력해주세요"
          />
        </Box>
        <Box>
          <button type="button" onClick={loginSubmit}>
            Login
          </button>
        </Box>
      </Body>
    </Back>
  );
}

/*
 * 배경
 */
const Back = styled.div`
  height: 100vh;
  background: #e8e8e8;
  opacity: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  resize: none;
  width: 432px;
  height: 278px;
  border: #2d5273;
  background-color: #2d5273;
  color: #ffffff;
  border-radius: 5px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: left;

  * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IuputBox = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Box = styled.div``;

export default Login;
