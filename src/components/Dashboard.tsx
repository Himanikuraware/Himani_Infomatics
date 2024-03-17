import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import classes from "./Dashboard.module.css";
import ChartComponent from "./ChartComponent";

const chartTypes = [
  { value: "doughnut", label: "Doughnut Chart" },
  { value: "pie", label: "Pie Chart" },
  { value: "polarArea", label: "Polar Area Chart" },
  { value: "radar", label: "Radar Chart" },
];

const Dashboard: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedChartType, setSelectedChartType] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const handleGenerateChart = () => {
    if (!title || !description || !selectedChartType) {
      setIsInvalidInput(true);
      alert("All fields are required");
    } else {
      setIsInvalidInput(false);
      setIsButtonClicked(true);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [isButtonClicked]);

  return (
    <Card>
      <div className={classes.container}>
        <div
          className={`${classes["dashboard-container"]} ${
            isInvalidInput ? classes.invalid : ""
          }`}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className={`${classes.input} ${
              isInvalidInput && !title ? classes.invalidInput : ""
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            style={{ resize: "none" }}
            id="description"
            className={`${classes.textarea} ${
              isInvalidInput && !description ? classes.invalidInput : ""
            }`}
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="chartType">Chart Type</label>
          <select
            id="chartType"
            className={`${classes.select} ${
              isInvalidInput && !selectedChartType ? classes.invalidInput : ""
            }`}
            value={selectedChartType}
            onChange={(e) => setSelectedChartType(e.target.value)}
          >
            {!selectedChartType && (
              <option value="" disabled hidden>
                Select Chart Type
              </option>
            )}
            {chartTypes.map((chartType) => (
              <option key={chartType.value} value={chartType.value}>
                {chartType.label}
              </option>
            ))}
          </select>
          <button className={classes.button} onClick={handleGenerateChart}>
            Generate Chart
          </button>
        </div>
      </div>
      {isButtonClicked && (
        <div className={classes.container}>
          <ChartComponent
            title={title}
            description={description}
            chartType={selectedChartType}
          />
        </div>
      )}
    </Card>
  );
};

export default Dashboard;
