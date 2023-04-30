import styled from "styled-components";

export const MenuWrapper = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ isDanger }) => isDanger ? "red" : ""};
`
export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 34px;
    line-height: 77px;
    margin: 40px;
`