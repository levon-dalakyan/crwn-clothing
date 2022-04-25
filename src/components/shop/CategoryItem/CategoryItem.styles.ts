import styled from 'styled-components';
import { Col, Row } from 'antd';

export const CollectionItemWrapper = styled(Row)`
  height: 350px;
  width: 20vw;
  position: relative;
  margin: 0 auto;
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    width: 40vw;
  }
`;

export const BackgroundImage = styled(Col)`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: all 0.3s ease 0s;

  @media screen and (min-width: 1000px) {
    ${CollectionItemWrapper}:hover & {
      opacity: 0.8;
    }
  }
`;

export const Footer = styled(Row)`
  font-size: 18px;
  width: 100%;
  height: 5%;
`;

export const ButtonWrapper = styled(Row)`
  position: absolute;
  width: 100%;
  bottom: 10px;
  display: none;
  transition: all 0.3s ease 0s;
  opacity: 0.85;

  & button {
    padding: 10px 60px;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;

    & button {
      padding: 9px 30px;
      min-width: unset;
    }
  }

  @media screen and (max-width: 450px) {
    & button {
      padding: 9px 20px;
    }
  }

  ${CollectionItemWrapper}:hover & {
    display: flex;
  }
`;
