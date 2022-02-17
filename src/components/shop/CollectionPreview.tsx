import styled from 'styled-components';
import { Row } from 'antd';

import { CollectionItemType } from '../../pages/ShopPage';
import { CollectionItem } from './CollectionItem';

const CollectionPreviewWrapper = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h2`
  font-size: 28px;
`;

interface CollectionPreviewProps {
  title: string;
  items: CollectionItemType[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => {
  return (
    <CollectionPreviewWrapper>
      <Title>{title}</Title>
      <Row justify="space-between" align="middle">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </Row>
    </CollectionPreviewWrapper>
  );
};
