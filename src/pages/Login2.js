import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../lib/styleUtil";
import { Link } from "react-router-dom";
import InputWithLabel from "../Components/Input";
import AuthButton from "../Components/Button";

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${oc.gray[8]};
  margin-bottom: 1rem;
`;

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
  width: 500px;
  ${shadow(2)}
`;

// 로고
const LogoWrapper = styled.div`
  background: ${oc.teal[7]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Link)`
  color: white;
  font-family: "Rajdhani";
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

// 두개가 함께 있을땐 상단 (그 사이) 에 여백을 준다
const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
function Login2() {
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
    <Positioner>
      <ShadowedBox>
        <LogoWrapper>
          <Logo to="/">LOGIN</Logo>
        </LogoWrapper>
        <Contents>
          <Wrapper>
            <Title>로그인</Title>
            <InputWithLabel
              label="ID"
              name="ID"
              placeholder="아이디를 입력해주세요"
              onChange={handleInputId}
            ></InputWithLabel>
            <InputWithLabel
              label="PASSWORD"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handleInputPw}
            ></InputWithLabel>
            <AuthButton onClick={loginSubmit}>LOGIN</AuthButton>
          </Wrapper>
        </Contents>
      </ShadowedBox>
    </Positioner>
  );
}

export default Login2;
