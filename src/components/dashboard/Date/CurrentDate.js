import React from "react";
import "./CurrentDate.css";

const CurrentDate = () => {
  const today = new Date();
  const month = today.toLocaleString("en-US", { month: "long" });
  const date = today.toLocaleString("en-US", { day: "2-digit" });
  const year = today.getFullYear();

  return (
    <section className="current__date">
      <div className="container">
        <p className="date__text">Today</p>
        <h2 className="date__listed">
          {month} {date}, {year}
        </h2>
      </div>
    </section>
  );
};

export default CurrentDate;
