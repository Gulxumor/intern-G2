import { Dropdown, Modal } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import useDropDownApi from "../../generic/DropDownApi";
import { Wrapper } from "./style";
import UserModal from "./UserModal";
import { useAuthUser, useSignOut } from "react-auth-kit";
import LanguageModal from "./LanguageModal";

const { confirm } = Modal;

const Navbar = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const authedUser = useAuthUser();
  const { navbarDropDown } = useDropDownApi();

  const logOutHandler = () => {
    return confirm({
      title: "Are u sure",
      content: "this cant be undone after confirming",
      okText: "Log Out",
      okButtonProps: { danger: true },
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
            menu={{ items: navbarDropDown(logOutHandler) }}
          >
            <Wrapper.Avatar>
              {authedUser().name[0].toUpperCase()}
            </Wrapper.Avatar>
          </Dropdown>
        </Wrapper.Right>
      </Wrapper>
      <UserModal />
      <LanguageModal />
      <Outlet />
    </>
  );
};
export default Navbar;
