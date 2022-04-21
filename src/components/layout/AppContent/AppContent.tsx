import { Layout } from 'antd';
import { Navigation } from '../../../components/layout/Navigation/Navigation';
import { AppRoutes } from '../../../components/layout/AppRoutes/AppRoutes';
import * as S from './AppContent.styles';

export const AppContent = () => {
  return (
    <Layout>
      <S.Header>
        <Navigation />
      </S.Header>
      <Layout.Content>
        <AppRoutes />
      </Layout.Content>
    </Layout>
  );
};
