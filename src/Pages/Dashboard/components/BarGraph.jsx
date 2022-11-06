import React, { useState, useEffect, useRef } from "react"
import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"
import { useMediaQuery } from './../../../helpers/useMediaQuery';


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


function BarGraph() {
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
                    { name: "Creme Brulée", y: 30, color: Highcharts.getOptions().colors[0] },
                    { name: "Cappuccino", y: 20, color: Highcharts.getOptions().colors[1] },
                    { name: "Café", y: 10, color: Highcharts.getOptions().colors[2] },
                ],
            },
        ],
    })

    useEffect(()=>{
        chartComponent.current.chart.setSize(null)
    }, [])

    return (
        <div style={{ width: isBigScreen ? 1400 : (isMobileScreen ? 350 : 800) }}>
            <HighchartsReact ref={chartComponent} highcharts={Highcharts} options={chartOptions} />
        </div>
    )
}

export default BarGraph
