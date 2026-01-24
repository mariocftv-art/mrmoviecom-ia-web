'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

type Props = {
  data: { day: string; total: number }[]
}

export default function ChartEvolution({ data }: Props) {
  if (!data || data.length === 0) {
    return <p>Sem dados para exibir</p>
  }

  const labels = data.map(item => item.day)
  const values = data.map(item => item.total)

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Conversas por dia',
        data: values,
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  }

  return (
    <div style={{ maxWidth: 900 }}>
      <Line data={chartData} />
    </div>
  )
}
