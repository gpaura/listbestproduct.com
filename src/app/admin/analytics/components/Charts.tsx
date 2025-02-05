"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export function PriceChart({
  data,
}: {
  data: { date: string; price: number }[];
}) {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Price History",
        data: data.map((d) => d.price),
        borderColor: "#3b82f6",
      },
    ],
  };

  return <Line data={chartData} />;
}
