import React from "react";
import "./ActivityDate.css";

const ActivityDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="activity-date">
      <div className="activity-date__month">{month}</div>
      <div className="activity-date__day">{day}</div>
      <div className="activity-date__year">{year}</div>
    </div>
  );
};

export default ActivityDate;
