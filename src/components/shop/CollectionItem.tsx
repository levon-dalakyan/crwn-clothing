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

const Name = styled.div`
  width: 90%;
`;

const Price = styled.div`
  width: 10%;
  text-align: right;
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
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </CollectionItemWrapper>
  );
};
