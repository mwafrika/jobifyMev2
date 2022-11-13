import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Wrapper from "../assets/Wrappers/ChartsContainer";

const ChartContainer = () => {
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <BarChart data={data} />
      <AreaChart data={data} />
    </Wrapper>
  );
};

export default ChartContainer;
