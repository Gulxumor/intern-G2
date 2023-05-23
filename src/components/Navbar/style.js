import styled from 'styled-components';

export const Wrapper = styled.div`
    position:sticky;
    top:0;
    z-index: 999;
    background: rgb(255, 255, 255);
    width: 100%;
    padding: 0px 10%;
    height: 70px;
    margin: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;
Wrapper.Left = styled.div``
Wrapper.Title = styled.div``
Wrapper.Right = styled.div``
Wrapper.Avatar = styled.div`
    color: #fff;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;
    width: 32px;
    height: 32px;
    background: rgb(245, 106, 0);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`