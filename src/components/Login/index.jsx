import { useRef, useState } from "react";
import { Wrapper } from "./style";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
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
    const { phoneNumber, password } = {
      phoneNumber: `${phoneRef.current.input.value}`,
      password: passwordRef.current.input.value,
    };

    if (!phoneNumber || !password) {
      return notification.error({ message: "Please fill all the fields" });
    }
    setLoading(true);
    axios({
      url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
      method: "POST",
      data: {
        phoneNumber: `+998${phoneNumber}`,
        password,
      },
    })
      .then((res) => {
        const { token, user } = res.data.data;
        localStorage.setItem("token", token);
        console.log(user);
        setLoading(false);
        return notification.success({ message: "Successfully logged in" });
      })
      .catch((res) => {
        const response = res.data;
        response.status === 409 &&
          notification.error({
            message: "User not found",
            description: "Phone number or password is wrong",
          });
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
