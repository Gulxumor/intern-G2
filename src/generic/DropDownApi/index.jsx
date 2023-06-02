import React from "react";
import { MenuWrapper } from "../Style";
import { useDispatch } from "react-redux";
import {
  switchlocaleModalVisibility,
  switchProfileModalVisibility,
} from "../../redux/modalSlice";
import {
  SettingOutlined,
  TranslationOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const useDropDownApi = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navbarDropDown = ({ logOutHandler }) => {
    return [
      {
        label: (
          <MenuWrapper onClick={() => dispatch(switchProfileModalVisibility())}>
            <SettingOutlined /> {t("modal.settings")}
          </MenuWrapper>
        ),
        key: "0",
      },
      {
        label: (
          <MenuWrapper onClick={() => dispatch(switchlocaleModalVisibility())}>
            <TranslationOutlined /> {t("modal.change_lang")}
          </MenuWrapper>
        ),
        key: "1",
      },
      {
        label: (
          <MenuWrapper onClick={logOutHandler} isDanger>
            <LoginOutlined /> {t("modal.log_out")}
          </MenuWrapper>
        ),
        key: "2",
      },
    ];
  };
  return { navbarDropDown };
};

export default useDropDownApi;
