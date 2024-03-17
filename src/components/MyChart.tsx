import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface MyChartProps {
  data: number[];
  labels: string[];
  chartType: string;
}

const MyChart: React.FC<MyChartProps> = ({ chartType, data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let myChart: Chart | null = null;

  useEffect(() => {
    if (chartRef.current && data.length > 0 && labels.length > 0) {
      if (myChart) {
        myChart.destroy();
      }
      myChart = new Chart(chartRef.current, {
        type: chartType ?? "pie",
        data: {
          datasets: [
            {
              label: "My Chart",
              data: data,
              backgroundColor: [
                "rgba(117, 255, 255, 1)",
                "rgba(117, 214, 255, 1)",
                "rgba(255, 142, 93, 1)",
                "rgba(255, 196, 106, 1)",
                "rgba(255, 123, 242, 1)",
                "rgba(170, 117, 255, 1)",
              ],
              borderColor: [
                "rgba(117, 255, 255, 1)",
                "rgba(117, 214, 255, 1)",
                "rgba(255, 142, 93, 1)",
                "rgba(255, 196, 106, 1)",
                "rgba(255, 123, 242, 1)",
                "rgba(170, 117, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
          labels: labels,
        },
        options: {
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                boxWidth: 10,
                color: "white"
              }
            },
          },
        },
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default MyChart;
