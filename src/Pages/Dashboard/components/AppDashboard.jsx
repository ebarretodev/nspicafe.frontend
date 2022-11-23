import React, { useState, useEffect } from "react"
import MauaLogo from "../../../images/selo-60-anos-maua.svg"
import MitsubishiLogo from "../../../images/mitsubishi-changes-for-the-better.svg"
import EliabelLogo from "../../../images/ebarreto-logo.png"
import { Typography } from "antd"
import Card from "./Card"
import Card2 from "./Card2"
import BarGraph from "./BarGraph"
import { useMediaQuery } from "./../../../helpers/useMediaQuery"
import { db } from "./../../../helpers/firebase"
import firebase from "firebase"

const { Text } = Typography

const tiposDeCafe = ["Creme Brulée", "Cappuccino", "Café"]
const statusDoRobo = ["Ocioso", "Produzindo"]

function AppDashboard() {
    const isBigScreen = useMediaQuery("(min-width: 1400px)")
    const [pedidosDia, setPedidosDia] = useState({
        cafe: 0,
        cremeBrulee: 0,
        cappuccino: 0,
        totalDia: 0,
        produzidosDia: 0,
    })

    const [pedidosHora, setPedidosHora] = useState({
        totalHora: 0,
        produzidosHora: 0,
    })

    const [tempoMedio, setTempoMedio] = useState({
        hora: 0,
        dia: 0,
    })

    const [pedidosDesc, setPedidosDesc] = useState([{
        nome: 'Eliabel',
        sobrenome: 'Barreto',
        tipoCafe: 0
    }])

    const imgStyles = {
        height: isBigScreen ? "150px" : "80px",
    }

    useEffect(() => {
        const tempDate = new Date()
        const visitDate = new Date(
            tempDate.getUTCFullYear(),
            tempDate.getUTCMonth(),
            tempDate.getUTCDate()
        )
        db.collection("pedidos")
            .where("dataPedido", ">=", firebase.firestore.Timestamp.fromDate(visitDate))
            .onSnapshot((querySnapshot) => {
                let tempPedidosDia = {
                    cafe: 0,
                    cremeBrulee: 0,
                    cappuccino: 0,
                    totalDia: 0,
                    produzidosDia: 0,
                }
                let tempPedidosHora = {
                    totalHora: 0,
                    produzidosHora: 0,
                }
                let mediaDia = []
                let mediaHora = []
                querySnapshot.docs.map((l) => {
                    if (l.data().tipoCafe === 0) {
                        tempPedidosDia.cremeBrulee++
                    }
                    if (l.data().tipoCafe === 1) {
                        tempPedidosDia.cappuccino++
                    }
                    if (l.data().tipoCafe === 2) {
                        tempPedidosDia.cafe++
                    }
                    tempPedidosDia.totalDia++
                    if (l.data().dataEntregue) {
                        tempPedidosDia.produzidosDia++
                        mediaDia.push(l.data().dataEntregue - l.data().dataPedido)
                    }
                    const tempDateNow = new Date()
                    const oneHour = 1000 * 60 * 60
                    const lastHour = new Date(tempDateNow.getTime() - oneHour)

                    if (l.data().dataPedido >=  firebase.firestore.Timestamp.fromDate(lastHour)) {
                        tempPedidosHora.totalHora++
                        if (l.data().dataEntregue) {
                            tempPedidosHora.produzidosHora++
                            mediaHora.push(l.data().dataEntregue - l.data().dataPedido)
                            
                        }
                    }
                    return true
                })
                setPedidosDia(tempPedidosDia)
                setPedidosHora(tempPedidosHora)
                let mediaDiaSoma = 0
                let mediaHoraSoma = 0 
                mediaDia.map(l=>mediaDiaSoma+=l)
                mediaHora.map(l=>mediaHoraSoma+=l)
                let tempMediaDia = mediaDiaSoma / mediaDia.length
                let tempMediaHora = mediaHoraSoma / mediaHora.length
                if ( isNaN(tempMediaDia)) {
                    tempMediaDia = 0
                }
                if (isNaN(tempMediaHora)) {
                    tempMediaHora = 0
                }
                setTempoMedio({
                    dia: tempMediaDia.toFixed(0),
                    hora: tempMediaHora.toFixed(0),
                })
            })
    }, [])

    useEffect(()=>{
        const tempDate = new Date()
        const visitDate = new Date(
            tempDate.getUTCFullYear(),
            tempDate.getUTCMonth(),
            tempDate.getUTCDate()
        )
        db.collection("pedidos")
            .where("dataPedido", ">=", firebase.firestore.Timestamp.fromDate(visitDate))
            .where("dataEntregue", "==", false )
            .orderBy("dataPedido" )
            .onSnapshot((querySnapshot) => {
                console.log(querySnapshot) 
            })
    },[])

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

                        <Card2
                            title={"Próximos Pedidos"}
                            scroll
                            width={"100%"}
                            height={"550px"}
                            flex={1}
                        >
                             <Text style={{ color: "black", marginTop: "10px" }}>
                                    <b>Eliabel Barreto</b> (Cappuccino)
                                </Text>
                                <br />
                            
                        </Card2>
                    </div>
                    <div className="indicadores">
                        <div className="cards-indicadores">
                            <Card title={"Qtd Produzido Dia:"}>{pedidosDia.produzidosDia}</Card>
                            <Card title={"Qtd Pedidos Dia"}>{pedidosDia.totalDia}</Card>
                            <Card title={"Tempo Médio Dia:"}>{tempoMedio.dia}</Card>
                            <Card title={"Qtd Produzido Hora:"}>{pedidosHora.produzidosHora}</Card>
                            <Card title={"Qtd Pedidos Hora"}>{pedidosHora.totalHora}</Card>
                            <Card title={"Tempo Médio Hora:"}>{tempoMedio.hora}</Card>
                        </div>
                        <div className="grafico-indicadores">
                            <BarGraph pedidos={pedidosDia} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDashboard
