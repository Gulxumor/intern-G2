import { Dropdown } from "antd";
import useDropDownApi from "../../generic/DropDownApi";
import { Wrapper } from "./style";

const Navbar = () => {
  const { navbarDropDown } = useDropDownApi();
  return (
    <Wrapper>
      <Wrapper.Left>
        <Wrapper.Title>NIHOL</Wrapper.Title>
      </Wrapper.Left>
      <Wrapper.Right>
        <Dropdown trigger={["click"]} menu={{ items: navbarDropDown() }}>
          <Wrapper.Avatar>A</Wrapper.Avatar>
        </Dropdown>
      </Wrapper.Right>
    </Wrapper>
  );
};
export default Navbar;
