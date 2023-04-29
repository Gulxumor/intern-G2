import styled from "styled-components";

export const MenuWrapper = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ isDanger }) => isDanger ? "red" : ""};
`
