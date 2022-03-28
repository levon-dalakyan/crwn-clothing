import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SectionType } from '../Home/Home';
import * as S from './HomeCollection.styles';

export const HomeCollection: React.FC<{ section: SectionType }> = ({
  section,
}) => {
  const navigate = useNavigate();

  const { title, size, linkUrl, imageUrl } = section;

  return (
    <S.MenuItemWrapper
      align="middle"
      justify="center"
      className={size ? size : ''}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <S.BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <S.Content align="middle" justify="center">
        <Col span={24}>
          <Row gutter={[20, 0]} justify="center">
            <S.Title level={4}>{title.toUpperCase()}</S.Title>
          </Row>
        </Col>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </S.MenuItemWrapper>
  );
};
