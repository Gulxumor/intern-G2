import { useRef, useState } from "react";
import { Wrapper } from "./style";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef();
  const passwordRef = useRef();

  const onKeyDetect = (e) => {
    if (e.key === "Enter" || e.type === "click" || e.keyCode === 13) {
      return onAuth();
    }
  };

  const onAuth = () => {
    const userValue = {
      phone: phoneRef.current.input.value,
      password: passwordRef.current.input.value,
    };
    axios({
      usr: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: "POST",
      data: {
        ...userValue,
      },
    }).then((res) => console.log(res.data.data));
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
          onKeyDown={onKeyDetect}
        />
        <Wrapper.Button onClick={onKeyDetect}>
          {loading ? <LoadingOutlined /> : "Login"}
        </Wrapper.Button>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
