import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CollectionType } from '../../../store/slices/collectionsSlice';
import * as S from './HomeCollection.styles';

export const HomeCollection: React.FC<{ collection: CollectionType }> = ({
  collection: { title, size, linkUrl, imageUrl },
}) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper
      align="middle"
      justify="center"
      size={size}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <S.BackgroundImage imageUrl={imageUrl} />
      <S.Content align="middle" justify="center">
        <Col span={24}>
          <Row gutter={[20, 0]} justify="center">
            <S.Title level={4}>{title.toUpperCase()}</S.Title>
          </Row>
        </Col>
        <S.Subtitle>SHOP NOW</S.Subtitle>
      </S.Content>
    </S.Wrapper>
  );
};
