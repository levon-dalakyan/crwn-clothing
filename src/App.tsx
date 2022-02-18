import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { HeaderComponent } from './components/layout/HeaderComponent';

const { Header, Content } = Layout;

const LayoutWrapper = styled(Layout)`
  background-color: transparent;
`;

const HeaderWrapper = styled(Header)`
  background-color: transparent;
  padding: 0 20px;
  line-height: 35px;
  font-size: 18px;
`;

function App() {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <HeaderComponent />
      </HeaderWrapper>
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
        </Routes>
      </Content>
    </LayoutWrapper>
  );
}

export default App;
