import React, { useContext, useState } from "react";
import DisplayContext from "../../DisplayContext";
import ActivityTotal from "./Total/ActivityTotal";
import Activities from "./History/Activities";
import ActivityNew from "./Add/ActivityNew";
import CurrentDate from "./Date/CurrentDate";
import "./Dashboard.css";

const DUMMY__ACTIVITIES = [
  {
    id: "a1",
    type: "Jog",
    time: 20,
    date: new Date(2022, 9, 3),
    weekDay: new Date(2022, 9, 3).getDay(),
  },
  {
    id: "a2",
    type: "Swim",
    time: 45,
    date: new Date(2022, 8, 14),
    weekDay: new Date(2022, 8, 14).getDay(),
  },
  {
    id: "a3",
    type: "Cycle",
    time: 35,
    date: new Date(2022, 7, 23),
    weekDay: new Date(2022, 7, 23).getDay(),
  },
];

const Dashboard = () => {
  const [activities, setActivities] = useState(DUMMY__ACTIVITIES);
  const { displayChart, displayForm, displayTotal } = useContext(DisplayContext);


  // eslint-disable-next-line no-extend-native
  Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
  }

  const addActivityHandler = (activity) => {
    setActivities((prevActivity) => {
      activity.date.addHours(5);
      return [activity, ...prevActivity];
    });
  };

  return (
    <main className="dashboard">
      <CurrentDate />
      <ActivityNew
        displayComponent={displayForm}
        onAddActivity={addActivityHandler}
      />
      <Activities displayComponent={displayChart} items={activities} />
      <ActivityTotal displayComponent={displayTotal} items={activities} />
    </main>
  );
};

export default Dashboard;
