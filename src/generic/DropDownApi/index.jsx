import React from "react";
import { MenuWrapper } from "../Style";
import {
  SettingOutlined,
  TranslationOutlined,
  LoginOutlined,
} from "@ant-design/icons";

const useDropDownApi = () => {
  const navbarDropDown = () => {
    return [
      {
        label: (
          <MenuWrapper>
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
