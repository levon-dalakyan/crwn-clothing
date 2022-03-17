import styled from 'styled-components';
import { Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';

import { CollectionItemType } from '../../pages/ShopPage';
import { CollectionItem } from './CollectionItem';

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const TitleStyled = styled(Title)`
  font-size: 26px;
`;

const Items = styled(Row)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

interface CollectionPreviewProps {
  title: string;
  routeName: string;
  items: CollectionItemType[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  routeName,
  items,
}) => {
  return (
    <Wrapper>
      <Link to={`/shop/${routeName}`}>
        <TitleStyled level={2}>{title.toUpperCase()}</TitleStyled>
      </Link>
      <Items>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Items>
    </Wrapper>
  );
};
