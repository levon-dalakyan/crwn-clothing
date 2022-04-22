import styled from 'styled-components';
import { Form, Row } from 'antd';

export const Wrapper = styled(Row)`
  width: 80%;
  margin: 50px auto 0 auto;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;

export const CommonFormWrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 1200px) and (min-width: 1000px) {
    width: 44%;
  }

  @media screen and (max-width: 1000px) {
    width: 60%;
    text-align: center;
    margin: 0 auto 60px auto;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 85%;
    margin: 0 auto 40px auto;
  }

  @media screen and (max-width: 400px) {
    width: 93%;
  }
`;

export const CommonFormSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 35px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
  }
`;

export const CommonStyledFormItem = styled(Form.Item)`
  margin-bottom: 30px;
`;
