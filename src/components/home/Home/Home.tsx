import { Row } from 'antd';
import { MENU_DATA } from '../home-data';
import { HomeCollection } from '../HomeCollection/HomeCollection';

export interface SectionType {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const SECTIONS: SectionType[] = MENU_DATA;

export const Home = () => {
  return (
    <Row>
      {SECTIONS.map((section) => (
        <HomeCollection key={section.id} section={section} />
      ))}
    </Row>
  );
};
