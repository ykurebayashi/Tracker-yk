import React from "react";

import "./ActivitySubmit.css";

const ActivitySubmit = () => {
  return (
    <section className="activity__submit">
      <div className="container">
        <button type="submit">Add Activity</button>
        <button type="button">Cancel</button>
      </div>
    </section>
  );
};

export default ActivitySubmit;
