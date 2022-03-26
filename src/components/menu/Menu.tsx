import { Row } from 'antd';

import { MENU_DATA } from './menu-data';

import { MenuItem } from './MenuItem';

export interface SectionType {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const SECTIONS: SectionType[] = MENU_DATA;

export const Menu = () => {
  return (
    <Row>
      {SECTIONS.map((section) => (
        <MenuItem key={section.id} section={section} />
      ))}
    </Row>
  );
};
