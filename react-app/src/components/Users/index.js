import React from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout } from 'antd';
import Sidebar from '../Common/sidebar';
import Topbar from '../Common/topbar';

const { Content, Footer } = Layout;

const Users = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout className="site-layout">
        <Topbar />
        <Content className="site-layout-content">
          <div className="site-layout-background" style={{ textAlign: 'center' }}>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Clink</Footer>
      </Layout>
    </Layout>
  );
}

export default Users;
