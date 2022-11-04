import React from 'react'
import { Layout } from 'antd'
import AppHeader from './../components/AppHeader';
import AppFooter from './../components/AppFooter';
import AppFazerPedido from './components/AppFazerPedido';

const { Content, Header, Footer} = Layout

function Home() {
  return (
      <Layout className="mainLayout">
          <Header>
              <AppHeader />
          </Header>
          <Content>
              <AppFazerPedido />
          </Content>
          <Footer>
              <AppFooter />
          </Footer>
      </Layout>
  )
}

export default Home