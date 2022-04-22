import styled from 'styled-components';
import { SpinnerContainer } from '../../../common/Spinner/Spinner.styles';

export const Wrapper = styled.div`
  height: 300px;
  width: 400px;

  @media screen and (max-width: 1200px) {
    margin-top: 20px;
    height: 100px;
  }
`;

export const Form = styled.form`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    max-width: 350px;
  }
`;

export const Spinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
