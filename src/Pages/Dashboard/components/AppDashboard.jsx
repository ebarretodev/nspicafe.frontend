import React from "react"
import MauaLogo from "../../../images/selo-60-anos-maua.svg"
import MitsubishiLogo from "../../../images/mitsubishi-changes-for-the-better.svg"
import EliabelLogo from "../../../images/ebarreto-logo.png"
import { Typography } from "antd"
import Card from "./Card"
import Card2 from "./Card2"
import BarGraph from "./BarGraph"
import { useMediaQuery } from "./../../../helpers/useMediaQuery"

const { Title, Text } = Typography

const tiposDeCafe = ["Creme Brulée", "Cappuccino", "Café"]
const statusDoRobo = ["Ocioso", "Produzindo"]

function AppDashboard() {
    const isBigScreen = useMediaQuery("(min-width: 1400px)")

    const imgStyles = {
        height: isBigScreen ? "150px" : "80px",
    }

    return (
        <div className="content">
            <div className="container-fluid" style={{ maxWidth: isBigScreen ? 1800 : 1170 }}>
                <div className="logo" style={{ marginBottom: isBigScreen ? "40px" : "10px" }}>
                    <img src={MauaLogo} style={imgStyles} alt="logo Instituto Mauá de Tecnologia" />
                    <img
                        src={MitsubishiLogo}
                        style={imgStyles}
                        alt="logo Mitsubishi Electric do Brasil"
                    />
                    <img src={EliabelLogo} style={imgStyles} alt="logo Eliabel Barreto" />
                </div>
                <div className="dashboard">
                    <div className="informativo">
                        <Card2 title={"Robô"}>
                            <Text style={{ color: "black" }}>
                                <b>Status:</b> Produzindo
                            </Text>{" "}
                            <br />
                            <Text style={{ color: "black" }}>
                                <b>Pedido:</b> 3<br />
                            </Text>
                            <Text style={{ color: "black" }}>
                                <b>Cliente:</b> Eliabel Barreto
                            </Text>
                        </Card2>

                        <Card2 title={"Próximos Pedidos"} scroll width={"100%"} height={'550px'} flex={1}>
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                            <Text style={{ color: "black", marginTop: '10px' }}>
                                <b>Eliabel Barreto</b> (Cappuccino)
                            </Text> <br />
                        </Card2>
                    </div>
                    <div className="indicadores">
                        <div className="cards-indicadores">
                            <Card title={"Qtd Produzido Dia:"}>37</Card>
                            <Card title={"Qtd Pedidos Dia"}>37</Card>
                            <Card title={"Qtd Produzido Dia:"}>37</Card>
                            <Card title={"Qtd Produzido Hora:"}>37</Card>
                            <Card title={"Qtd Pedidos Hora"}>37</Card>
                            <Card title={"Qtd Produzido Hora:"}>37</Card>
                        </div>
                        <div className="grafico-indicadores">
                            <BarGraph />
                        </div>
                    </div>
                </div>
                {/*
              
              Status do Robô
              Pedido Atual 
              Cliente Atual: Nome e Sobrenome

              Proximos Pedidos: 
              Lista */}
            </div>
        </div>
    )
}

export default AppDashboard
