import React from "react";
import UserCard from "./UserCard";
import Revenue from "./Revenue";
import Visitors from "./Visitors";

const MUserCard = React.memo(UserCard);
const MRevenue = React.memo(Revenue);

MUserCard.displayName = "MUserCard";
MRevenue.displayName = "MRevenue";

const IsolatedDashboard = ({ user, stats }) => {
  return (
    <div className="m-10">
      <h3>Isolated Dashboard</h3>
      <MUserCard user={user} />
      <MRevenue stats={stats} />
      <Visitors />
    </div>
  );
};

export default IsolatedDashboard;
