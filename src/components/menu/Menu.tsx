import { Row } from 'antd';

import { MENU_DATA } from './menu-data';
import { MenuItem } from './MenuItem';

export interface SectionType {
  title: string;
  imageUrl: string;
  id: number;
  size?: string;
}

const SECTIONS: SectionType[] = MENU_DATA;

export const Menu = () => {
  return (
    <Row>
      {SECTIONS.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
        />
      ))}
    </Row>
  );
};
