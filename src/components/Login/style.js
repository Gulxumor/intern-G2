import styled, { css } from 'styled-components';
import { Input } from 'antd';
export const common = css`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;
    height: 50px;
    background: rgb(250, 251, 254);
    outline: none;
    border: 1px solid rgb(240, 238, 247);
    border-radius: 12px;
    padding-left: 15px;
    color: rgb(89, 90, 98);
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;
Wrapper.Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    width:fit-content;
    margin:0 auto;
`
Wrapper.Title = styled.div`
    margin-top: 20px;
    font-size: 30px;
    color: rgb(57, 56, 77);
    text-align: center;
`
Wrapper.Desc = styled.div`
    margin-top: 10px;
    color: rgb(178, 176, 184);
    text-align: center;
    width: 80%;
`
Wrapper.PhoneNumber = styled(Input)`
   .ant-input, .ant-input-group-addon{
    border:none;
    background-color:transparent;
   }
    ${common}
`
Wrapper.Password = styled(Input.Password)`
   .ant-input{
    border:none;
    background-color:transparent;
   }
   ${common}
`
Wrapper.Button = styled.div`
    ${common}
    color:white;
    background: rgb(48, 104, 204);
`