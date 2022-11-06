import React from 'react'
import MauaLogo from "../../../images/selo-60-anos-maua.svg"
import MitsubishiLogo from "../../../images/mitsubishi-changes-for-the-better.svg"
import EliabelLogo from "../../../images/ebarreto-logo.png"
import { Button, Form, Input, Radio, notification } from "antd"

const plainText = ["Creme Brulée", "Cappuccino", "Café"]
const options = [
    {
        label: "Creme Brulée",
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
    //TODO inserir a logica de inserir no banco de dados.

    notification["success"]({
        message: "Pedido Feito",
        description: `Olá ${values.name.replace(/\s/g, "")}. Seu pedido de um ${
            plainText[values.option]
        } já foi realizado. Verifique no painel quanto estará pronto.`,
        duration: 5,
    })
  }
  const onFinishFailed = (errorInfo) => {
    notification['error']({
        message: 'Erro no Pedido',
        description: `Olá, seu pedido não foi realizado, verifique se os campos foram devidamente preenchidos, ou converse com nossa equipe.`,
        duration: 5
    })
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
                  <img src={EliabelLogo} alt="logo Eliabel Barreto" />
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

                  <Form.Item className="form-buttons" wrapperCol={{ span: 24 }}>
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