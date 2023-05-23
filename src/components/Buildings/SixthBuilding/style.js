import styled from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
Wrapper.MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 20px;
  margin-bottom: 50px;

  @media (max-width: 650px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 300px;
  }
`;
