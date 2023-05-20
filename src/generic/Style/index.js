import styled from "styled-components";
import { Tag } from "antd";

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: ${({ floor }) => floor ? "column" : ""};
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
export const MainRoomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:290px;
    align-items: center;
    gap: 20px;
    border-radius: 12px;
    padding: 10px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;
    margin-top: 40px;
    justify-content: center;
`
export const RoomWrapper = styled.div`
    padding-top:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(147, 149, 150);
    border-radius: 12px;
`
export const RoomTitle = styled.div``
export const RoomContainer = styled.div`
    margin: 10px auto;
    width: 120px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px;
    gap: 10px;
`
export const Room = styled(Tag)`
    position: relative;
    margin: 0px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
`
export const BookedTag = styled(Tag)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -15px;
`;