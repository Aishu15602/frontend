import React from "react";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);

const Dashboard = () => {
  const data = {
    labels: ["AI", "ML", "DL"],
    datasets: [
      {
        label: "Projects",
        data: [12, 19, 3],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <div className="w-1/2">
        <Pie data={data} />
      </div>
      <div className="w-1/2 mt-6">
        <Bar data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
