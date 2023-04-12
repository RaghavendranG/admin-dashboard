import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

const DashBoardCharts = () => {
  return (
    <>
      {/*Pie Chart*/}
      <div class="col-lg-8">
        <div class="card shadow mb-4">
          {/*Card Header - Dropdown*/}
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
          </div>
          {/*Card Body*/}
          <div class="card-body">
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Chart.js Line Chart",
                  },
                },
              }}
              data={{
                labels: [
                  "January",
                  "March",
                  "May",
                  "July",
                  "September",
                  "November",
                ],
                datasets: [
                  {
                    label: "Earnings",
                    data: [65, 59, 80, 81, 56, 55],
                    fill: true,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
{/* ---------------------------------------------------------------- */}
      {/* Area Chart*/}
      <div class="col-lg-4">
        <div class="card shadow mb-4">
          {/*Card Header - Dropdown*/}
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
          </div>
          {/*Card Body*/}
          <div class="card-body">
            <Doughnut
              data={{
                labels: ["black", "blue", "green"],
                datasets: [
                  {
                    label: "Revenues",
                    data: [30, 15, 55],
                    backgroundColor: ["black", "blue", "green"],
                    borderWidth: 1,
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------------------- */}
    </>
  );
};

export default DashBoardCharts;