import { FC } from 'react';
import { Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ICollection } from '../../../store/slices/collections/collectionsSlice';
import * as S from './HomeCollection.styles';

interface HomeCollectionProps {
  collection: ICollection;
}

export const HomeCollection: FC<HomeCollectionProps> = ({
  collection: { title, large, linkUrl, imageUrl },
}) => {
  const navigate = useNavigate();

  return (
    <S.Wrapper
      align="middle"
      justify="center"
      large={large}
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
