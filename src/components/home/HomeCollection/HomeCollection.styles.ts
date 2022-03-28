import styled from 'styled-components';
import { Row, Typography } from 'antd';

export const Wrapper = styled(Row)<{ size?: string }>`
  min-width: 30%;
  height: ${({ size }) => (size ? '380px' : '240px')};
  flex: 1 1 auto;
  margin: 0px 7.5px 15px;
  overflow: hidden;
  cursor: pointer;
`;

export const BackgroundImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  ${Wrapper}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const Content = styled(Row)`
  position: absolute;
  background-color: white;
  height: 90px;
  border: 1px solid #000;
  opacity: 0.7;
  padding: 0 20px;

  ${Wrapper}:hover & {
    opacity: 0.9;
  }
`;

export const Title = styled(Typography.Title)`
  color: #4a4a4a;
`;

export const Subtitle = styled(Typography.Text)`
  font-size: 18px;
  margin-top: -25px;
`;