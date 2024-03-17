import React from "react";
import MyChart from "./MyChart";
import classes from "./ChartComponent.module.css";

interface ChartProps {
  title: string;
  description: string;
  chartType: string;
}

const ChartComponent: React.FC<ChartProps> = ({
  title,
  description,
  chartType,
}) => {
  const data = [32.19, 26.04, 26.4, 12.03, 26.4, 12.03];
  const labels = [
    "Flexi Cap Fund",
    "ELSS",
    "Small Cap Fund",
    "Index Fund",
    "Sectoral Fund",
    "Large & Mid Cap Fund",
  ];

  return (
    <div className={classes.chartContainer}>
      <h1 className={classes.chartTitle}>{title}</h1>
      <h2 className={classes.chartDescription}>{description}</h2>
      <MyChart chartType={chartType} data={data} labels={labels} />
    </div>
  );
};

export default ChartComponent;
