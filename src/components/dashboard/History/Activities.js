import React, { useContext, useState } from "react";
import ActivityChart from "../Chart/ActivityChart";
import DisplayContext from "../../../DisplayContext";
import ActivityItem from "./ActivityItem";
import "./Activities.css";

const Activities = ({ items }) => {
  const { displayChart } = useContext(DisplayContext);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [activityWeekly, setActivityWeekly] = useState({
    labels: weekDays,
    datasets: [
      {
        label: "Minutes",
        data: items.map((item) => item.time),
      },
    ],
  });

  return (
    <>
      {displayChart ? (
        <section className="activities">
          <ActivityChart chartItems={activityWeekly} />
          {items.map((activity) => (
            <ActivityItem
              key={activity.id}
              type={activity.type}
              time={activity.time}
              date={activity.date}
              weekDay={activity.weekDay}
            />
          ))}
        </section>
      ) : null}
    </>
  );
};

export default Activities;
