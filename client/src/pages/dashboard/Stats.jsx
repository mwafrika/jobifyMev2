import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, ChartContainer, Loading } from "../../components";

const Stats = () => {
  const { monthlyApplications, showStats, isLoading, stats } = useAppContext();

  useEffect(() => {
    showStats();
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyApplications.length > 0 && <ChartContainer />}
    </>
  );
};

export default Stats;
