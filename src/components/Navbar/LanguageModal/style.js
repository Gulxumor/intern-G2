import { Input, Modal } from 'antd';
import styled from 'styled-components';

export const Avatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    background: rgb(245, 106, 0);
    margin: 0 auto;
    font-size: 25px;
`;
export const DisabledInputs = styled(Input)`
    color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.04);
    border-color: #d9d9d9;
    box-shadow: none;
    opacity: 1;
    margin-bottom: 25px;
    `
export const Text = styled.div`
    display: ${({ df }) => df ? "flex" : ""};
    align-items: center;
    justify-content: center; 
    color: ${({ df }) => df ? "rgba(0, 0, 0, 0.45);" : ""};
    `
export const ModalWrapper = styled(Modal)`
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    `