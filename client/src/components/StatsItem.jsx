import React from "react";
import Wrapper from "../assets/wrappers/StatItem";

const StatsItem = ({ title, bcg, icon, count, color }) => {
  return (
    <Wrapper bcg={bcg} color={color}>
      <header>
        <span className="count">{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};

export default StatsItem;
