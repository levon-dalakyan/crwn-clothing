import styled from 'styled-components';
import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';

import { CollectionItemType } from '../../pages/ShopPage';
import { CollectionItem } from './CollectionItem';
import { Link } from 'react-router-dom';

const TitleStyled = styled(Title)`
  font-size: 26px;
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
    <>
      <Link to={`/shop/${title.toLowerCase()}`}>
        <TitleStyled level={2}>{title.toUpperCase()}</TitleStyled>
      </Link>
      <Row justify="space-between" align="middle">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Row>
    </>
  );
};
