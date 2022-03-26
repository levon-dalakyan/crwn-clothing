import styled from 'styled-components';
import { Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SectionType } from './Menu';

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
  padding: 0 20px;

  ${MenuItemWrapper}:hover & {
    opacity: 0.9;
  }
`;

const Title = styled(Typography.Title)`
  color: #4a4a4a;
`;

const Subtitle = styled(Typography.Text)`
  font-size: 18px;
  margin-top: -25px;
`;

export const MenuItem: React.FC<{ section: SectionType }> = ({ section }) => {
  const navigate = useNavigate();

  const { title, size, linkUrl, imageUrl } = section;

  return (
    <MenuItemWrapper
      align="middle"
      justify="center"
      className={size ? size : ''}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <Content align="middle" justify="center">
        <Col span={24}>
          <Row gutter={[20, 0]} justify="center">
            <Title level={4}>{title.toUpperCase()}</Title>
          </Row>
        </Col>
        <Subtitle>SHOP NOW</Subtitle>
      </Content>
    </MenuItemWrapper>
  );
};
