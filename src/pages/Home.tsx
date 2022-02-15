import styled from 'styled-components';
import { Row, Col } from 'antd';
import MenuItem from '../components/MenuItem';

export interface SectionType {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
}

const SECTIONS: SectionType[] = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
  },
  {
    title: 'women',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
  },
  {
    title: 'men',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
  },
];

const HomePage = styled.div`
  padding: 20px 80px;
`;

const Menu = styled(Row)``;

const Home = () => {
  return (
    <HomePage>
      <Menu wrap justify="space-between">
        {SECTIONS.map((section) => (
          <MenuItem
            key={section.id}
            title={section.title}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </Menu>
    </HomePage>
  );
};

export default Home;
