import { Dropdown, Modal } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import useDropDownApi from "../../generic/DropDownAPI";
import { Wrapper } from "./style";
import UserModal from "./UserModal";
import { useAuthUser, useSignOut } from "react-auth-kit";
import LocaleModal from "./LocaleModal";
import { useTranslation } from "react-i18next";

const { confirm } = Modal;

const Navbar = () => {
  const signOut = useSignOut();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authedUser = useAuthUser();
  const { navbarDropDown } = useDropDownApi();

  const logOutHandler = () => {
    return confirm({
      title: t("modal.log_out_modal.warning"),
      content: t("modal.log_out_modal.are_u_sure"),
      okText: t("modal.log_out"),
      okButtonProps: { danger: true },
      cancelText: t("empty_places.information.cancel"),
      onOk: () => {
        signOut();
        navigate("/login");
      },
    });
  };

  return (
    <>
      <Wrapper>
        <Wrapper.Left>
          <Wrapper.Title>NIHOL</Wrapper.Title>
        </Wrapper.Left>
        <Wrapper.Right>
          <Dropdown
            trigger={["click"]}
            menu={{ items: navbarDropDown({ logOutHandler }) }}
          >
            <Wrapper.Avatar>
              {authedUser()?.name[0].toUpperCase()}
            </Wrapper.Avatar>
          </Dropdown>
        </Wrapper.Right>
      </Wrapper>
      <UserModal />
      <LocaleModal />
      <Outlet />
    </>
  );
};
export default Navbar;
