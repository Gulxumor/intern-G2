import { useTranslation } from "react-i18next";
import { MenuWrapper } from "../Style";
import { useDispatch } from "react-redux";
import {
  switchlocaleModalVisibility,
  switchProfileModalVisibility,
} from "../../redux/modalSlice";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  TranslationOutlined,
  LoginOutlined,
  FileSearchOutlined,
  // ContactsOutlined
} from "@ant-design/icons";

const useDropDownAPI = () => {
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

  const bookedDropdown = ({ inDetail, onDelete, onEdit }) => {
    return [
      {
        label: (
          <MenuWrapper onClick={() => dispatch(inDetail)}>
            <FileSearchOutlined /> {t("modal.detailed")}
          </MenuWrapper>
        ),
        key: "0",
      },
      {
        label: (
          <MenuWrapper onClick={() => dispatch(onEdit)}>
            <EditOutlined /> {t("empty_places.information.edit")}
          </MenuWrapper>
        ),
        key: "1",
      },
      {
        label: (
          <MenuWrapper isDanger onClick={onDelete}>
            <DeleteOutlined /> {t("empty_places.information.delete")}
          </MenuWrapper>
        ),
        key: "2",
      },
    ];
  };

  return { navbarDropDown, bookedDropdown };
};

export default useDropDownAPI;
