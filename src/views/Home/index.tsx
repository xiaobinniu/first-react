import { useState } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import HomeMenu from '@/components/HomeMenu'

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" style={{ textAlign: 'center', fontSize: '40px' }}>LOGO</div>
        {/* 菜单 */}
        <HomeMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, paddingLeft: '20px', background: '#fff', display: 'flex', alignItems: "center", height: '50px' }}>
          <Breadcrumb style={{ margin: 0 }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: 0 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;