import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { TotalRevenueByMonthType } from "../../../__generated__/graphql";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  totalRevenueByMonth: TotalRevenueByMonthType[];
};
const RevenueGraph: React.FC<Props> = (props): any => {
  const { totalRevenueByMonth } = props;
  const labels = totalRevenueByMonth?.map(
    (item: { month: string; year: string }) => `${item.month} ${item.year}`
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue of all Orders",
        data: totalRevenueByMonth?.map(
          (item: { revenue: number }) => item.revenue
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
  };
  return <Bar options={options} data={data} />;
};

export default RevenueGraph;
