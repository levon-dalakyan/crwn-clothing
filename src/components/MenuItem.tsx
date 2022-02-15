import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const MenuItemWrapper = styled(Row)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  margin: 0px 7.5px 15px;
  overflow: hidden;
  cursor: pointer;

  &.large {
    height: 380px;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  ${MenuItemWrapper}:hover & {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

const Content = styled(Row)`
  position: absolute;
  background-color: white;
  height: 90px;
  border: 1px solid #000;
  opacity: 0.7;

  ${MenuItemWrapper}:hover & {
    opacity: 0.9;
  }
`;

const Title = styled(Text)`
  font-size: 22px;
  color: #4a4a4a;
  letter-spacing: -1.2px;
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  letter-spacing: -1px;
`;

interface MenuItemProps {
  title: string;
  size: string | undefined;
  imageUrl: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, size, imageUrl }) => {
  return (
    <MenuItemWrapper
      align="middle"
      justify="center"
      className={size ? size : ''}
    >
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Content align="middle" justify="center">
        <Col span={24}>
          <Row gutter={[18, 0]} justify="center">
            <Title strong>{title.toUpperCase()}</Title>
          </Row>
        </Col>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemWrapper>
  );
};

export default MenuItem;
