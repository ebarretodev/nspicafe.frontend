import React from 'react'
import MauaLogo from "../../../images/selo-60-anos-maua.svg"
import MitsubishiLogo from "../../../images/mitsubishi-changes-for-the-better.svg"
import EliabelLogo from "../../../images/ebarreto-logo.png"
import { Button, Checkbox, Form, Input, Radio } from "antd"


const plainOptions = ["Creme Brulê", "Cappuccino", "Café"]
const options = [
    {
        label: "Creme Brulê",
        value: 0,
    },
    {
        label: "Cappuccino",
        value: 1,
    },
    {
        label: "Café",
        value: 2,
    },
]

function AppFazerPedido() {
  const formRef = React.createRef();

  const onFinish = (values) => {
      console.log("Success:", values)
  }
  const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo)
  }

  const onReset = () => {
    formRef.current.resetFields();
  };
  return (
      <div className="fazer-pedidos">
          <div className="container-fluid">
              <div className="logo">
                  <img src={MauaLogo} alt="logo Instituto Mauá de Tecnologia" />
                  <img src={MitsubishiLogo} alt="logo Mitsubishi Electric do Brasil" />
                  {/* <img src={EliabelLogo} alt="logo Eliabel Barreto" /> */}
              </div>
              <Form
                  ref={formRef}
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 8 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
              >
                  <Form.Item
                      label="Nome"
                      name="name"
                      rules={[{ required: true, message: "Por favor insira seu nome!" }]}
                  >
                      <Input />
                  </Form.Item>

                  <Form.Item
                      label="Sobrenome"
                      name="sobrenome"
                      rules={[{ required: true, message: "Por favor insira seu sobrenome!" }]}
                  >
                      <Input />
                  </Form.Item>

                  <Form.Item
                      style={{ alignSelf: "center" }}
                      label="Opções de Café"
                      name="option"
                      rules={[{ required: true, message: "Por favor selecione um sabor!" }]}
                  >
                      <Radio.Group options={options} optionType="button" />
                  </Form.Item>

                  <Form.Item className="form-buttons">
                      <Button className="bt-form" type="primary" htmlType="submit">
                          Fazer Pedido
                      </Button>
                      <Button className="bt-form" type="primary" onClick={onReset}>
                          Reset
                      </Button>
                  </Form.Item>
              </Form>
          </div>
      </div>
  )
}

export default AppFazerPedido