import { Row } from 'antd';
import { useParams } from 'react-router-dom';
import Title from 'antd/lib/typography/Title';
import styled from 'styled-components';

import { CollectionItem } from '../components/shop/CollectionItem';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

export const CollectionPage: React.FC<{ collections: any }> = ({
  collections,
}) => {
  const params: any = useParams();

  const collection = collections[params.collectionId];

  return (
    <Wrapper>
      <Title level={2}>{collection.title.toUpperCase()}</Title>
      <Items gutter={[0, 60]}>
        {collection.items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </Wrapper>
  );
};
