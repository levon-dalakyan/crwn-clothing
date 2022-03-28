import Layout, { Content } from 'antd/lib/layout/layout';
import { Navigation } from '../../../components/layout/Navigation/Navigation';
import { AppRoutes } from '../../../components/layout/AppRoutes/AppRoutes';
import * as S from './AppContent.styles';

export const AppContent = () => {
  return (
    <Layout>
      <S.Header>
        <Navigation />
      </S.Header>
      <Content>
        <AppRoutes />
      </Content>
    </Layout>
  );
};
