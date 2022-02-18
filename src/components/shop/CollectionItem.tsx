import styled from 'styled-components';
import { Col, Row } from 'antd';

const CollectionItemWrapper = styled(Row)`
  height: 350px;
  width: 22%;
`;

const BackgroundImage = styled(Col)`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const Footer = styled(Row)`
  font-size: 18px;
  width: 100%;
  height: 5%;
`;
interface CollectionItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem: React.FC<CollectionItemProps> = ({
  name,
  price,
  imageUrl,
}) => {
  return (
    <CollectionItemWrapper>
      <BackgroundImage
        style={{ backgroundImage: `url(${imageUrl})` }}
        span={24}
      />
      <Footer justify="space-between">
        <Col>{name}</Col>
        <Col>${price}</Col>
      </Footer>
    </CollectionItemWrapper>
  );
};
