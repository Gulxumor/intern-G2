import { Dropdown } from "antd";
import { Outlet } from "react-router-dom";
import useDropDownApi from "../../generic/DropDownApi";
import { Wrapper } from "./style";
import UserModal from "./UserModal";
import { useAuthUser } from "react-auth-kit";
import LanguageModal from "./LanguageModal";
import LogOutModal from "./LogOutModal";

const Navbar = () => {
  const authedUser = useAuthUser();
  const { navbarDropDown } = useDropDownApi();
  // const storedUserData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <Wrapper>
        <Wrapper.Left>
          <Wrapper.Title>NIHOL</Wrapper.Title>
        </Wrapper.Left>
        <Wrapper.Right>
          <Dropdown trigger={["click"]} menu={{ items: navbarDropDown() }}>
            <Wrapper.Avatar>
              {authedUser().name[0].toUpperCase()}
            </Wrapper.Avatar>
          </Dropdown>
        </Wrapper.Right>
      </Wrapper>
      <UserModal />
      <LanguageModal />
      <LogOutModal />
      <Outlet />
    </>
  );
};
export default Navbar;
