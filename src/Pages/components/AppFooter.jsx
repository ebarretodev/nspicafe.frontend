import React from 'react'
import { BackTop } from "antd"
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import { Typography } from 'antd'

const { Text } = Typography

function AppFooter() {
  return (
      <div className="container-fluid">
          <div className="copyright">
              <Text style={{ color: "#fff" }}>
                  Copyright &copy; 2022, Instituto Mauá de Teconologia
              </Text>
          </div>
          <div className="copyright">
              <Text style={{ color: "#fff" }}>Powered by Eliabel Barreto</Text>
          </div>
          <BackTop>
              <div className="goTop">
                  <BsFillArrowUpCircleFill />
              </div>
          </BackTop>
      </div>
  )
}

export default AppFooter