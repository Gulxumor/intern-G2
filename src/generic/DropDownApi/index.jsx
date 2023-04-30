import React from "react";
import { MenuWrapper } from "../Style";
import { useDispatch } from "react-redux";
import { switchProfileModalVisibility } from "../../redux/modalSlice";
import {
  SettingOutlined,
  TranslationOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const useDropDownApi = () => {
  const dispatch = useDispatch();
  const navbarDropDown = () => {
    return [
      {
        label: (
          <MenuWrapper onClick={() => dispatch(switchProfileModalVisibility())}>
            <SettingOutlined /> Setting
          </MenuWrapper>
        ),
        key: "0",
      },
      {
        label: (
          <MenuWrapper>
            <TranslationOutlined /> Change language
          </MenuWrapper>
        ),
        key: "1",
      },
      {
        label: (
          <MenuWrapper isDanger>
            <LoginOutlined /> Log Out
          </MenuWrapper>
        ),
        key: "3",
      },
    ];
  };
  return { navbarDropDown };
};

export default useDropDownApi;
