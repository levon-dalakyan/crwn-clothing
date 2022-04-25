import styled from 'styled-components';
import { Row } from 'antd';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 450px) {s
    margin-bottom: 10px;
  }
`;

export const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
