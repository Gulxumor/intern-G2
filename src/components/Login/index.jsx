import { useRef, useState } from "react";
import { Wrapper } from "./style";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import { useNotificationAPI } from "../../generic/NotificationAPI";
import useInput from "../../generic/InputAPI";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import useAxios from "../../hooks/useAxios";

const Login = () => {
  const axios = useAxios();
  const signIn = useSignIn();
  const { phoneFormatter } = useInput();
  const [phoneValue, setPhoneValue] = useState("");
  const statusChecker = useNotificationAPI();
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onKeyDetect = (e) => {
    if (e.key === "Enter" || e.type === "click" || e.keyCode === 13) {
      return onAuth();
    }
  };
  const onAuth = () => {
    if (loading) return;

    const { phoneNumber, password } = {
      phoneNumber: phoneValue.replace(/[^\d]/g, ""),
      password: passwordRef.current.input.value,
    };

    if (!phoneNumber || !password) return statusChecker(400);

    setLoading(true);
    axios({
      url: `/user/sign-in`,
      method: "POST",
      body: {
        phoneNumber: `+998${phoneNumber}`,
        password,
      },
    })
      .then((res) => {
        const { token, user } = res.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(user));
        signIn({
          token: token,
          expiresIn: 3600,
          tokenType: `Bearer`,
          authState: user,
        });
        navigate("/");
        setLoading(false);
        return notification.success({ message: "Successfully logged in" });
      })
      .catch((res) => {
        const status = res.response.status;
        setLoading(false);
        return statusChecker(status);
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
          value={phoneValue}
          // ref={phoneRef}
          onChange={(e) => setPhoneValue(phoneFormatter(e.target.value))}
          addonBefore="+998"
          bordered={false}
          placeholder="Tel raqam"
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
