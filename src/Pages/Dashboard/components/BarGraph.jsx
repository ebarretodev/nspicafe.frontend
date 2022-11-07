import React, { useState, useEffect, useRef } from "react"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { useMediaQuery } from "./../../../helpers/useMediaQuery"

Highcharts.setOptions({
    colors: [
        "#50B432",
        "#ED561B",
        "#DDDF00",
        "#24CBE5",
        "#64E572",
        "#FF9655",
        "#FFF263",
        "#6AF9C4",
    ],
})

Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7,
            },
            stops: [
                [0, color],
                [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
            ],
        }
    }),
})

const labels = ["Creme Brulée", "Cappuccino", "Café"]

function BarGraph(props) {
    const { pedidos } = props
    const chartComponent = useRef(null)
    const isMobileScreen = useMediaQuery("(max-width: 767px)")
    const isBigScreen = useMediaQuery("(min-width: 1400px)")
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: isMobileScreen ? "column" : "bar",
        },
        title: {
            text: "Pedidos por Tipo",
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            pointFormat: "<b>{point.y}</b> pedidos",
        },
        xAxis: {
            categories: labels,
            title: {
                text: null,
            },
        },
        yAxis: {
            min: 0,
            title: null,
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                },
            },
        },
        legend: {
            enabled: false,
        },
        series: [
            {
                data: [
                    {
                        name: "Creme Brulée",
                        y: pedidos.cremeBrulee,
                        color: Highcharts.getOptions().colors[0],
                    },
                    {
                        name: "Cappuccino",
                        y: pedidos.cappuccino,
                        color: Highcharts.getOptions().colors[1],
                    },
                    { name: "Café", y: pedidos.cafe, color: Highcharts.getOptions().colors[2] },
                ],
            },
        ],
    })

    useEffect(() => {
        setChartOptions({
            series: [
            {
                data: [
                    {
                        name: "Creme Brulée",
                        y: pedidos.cremeBrulee,
                        color: Highcharts.getOptions().colors[0],
                    },
                    {
                        name: "Cappuccino",
                        y: pedidos.cappuccino,
                        color: Highcharts.getOptions().colors[1],
                    },
                    { name: "Café", y: pedidos.cafe, color: Highcharts.getOptions().colors[2] },
                ]
            }]
        })
    }, [pedidos])

    return (
        <div style={{ width: isBigScreen ? 1400 : isMobileScreen ? 350 : 800 }}>
            <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={chartOptions} />
        </div>
    )
}

export default BarGraph
