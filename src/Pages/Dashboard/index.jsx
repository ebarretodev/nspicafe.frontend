import React from 'react'
import { Layout } from "antd"
import AppHeader from "./../components/AppHeader"
import AppFooter from "./../components/AppFooter"
import AppDashboard from './components/AppDashboard'
import { useMediaQuery } from './../../helpers/useMediaQuery';


const { Content, Header, Footer } = Layout

function Dashboard() {
    const isBigScreen = useMediaQuery("(min-width: 1400px)")
  return (
      <Layout className="mainLayout">
          {isBigScreen ? (
              <></>
          ): (
              <Header>
                  <AppHeader />
              </Header>
          ) }

          <Content>
              <AppDashboard />
          </Content>
          <Footer>
              <AppFooter />
          </Footer>
      </Layout>
  )
}

export default Dashboard