import { useRef } from "react";
import { Wrapper } from "./style";

const Login = () => {
  const phoneRef = useRef();
  const passwordRef = useRef();
  const onAuth = () => {
    console.log({
      phone: phoneRef.current.input.value,
      password: passwordRef.current.input.value,
    });
  };
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Title>Yana bir bor salom!</Wrapper.Title>
        <Wrapper.Desc>
          Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
        </Wrapper.Desc>
        <Wrapper.PhoneNumber
          addonBefore="+998"
          bordered={false}
          placeholder="Tel raqam"
          type="number"
          ref={phoneRef}
          name="phoneNumber"
        />
        <Wrapper.Password
          ref={passwordRef}
          name="password"
          placeholder="Parol"
        />
        <Wrapper.Button onClick={onAuth}>Login</Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
