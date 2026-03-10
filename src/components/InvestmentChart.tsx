import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function InvestmentChart({ data }: any) {

    const chartData = {
        labels: data.map((d: any) => d.month),
        datasets: [
            {
                label: "Investment growth",
                data: data.map((d: any) => d.value),
                borderColor: "#3b82f6"
            }
        ]
    }

    return <Line data={chartData} />
}