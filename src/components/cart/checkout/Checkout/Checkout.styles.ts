import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 55%;
  margin: 50px auto 0;

  @media screen and (max-width: 1100px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 92%;
  }
`;
