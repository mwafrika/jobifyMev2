import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartContainer = () => {
  const { monthlyApplications: data } = useAppContext();
  const [barChat, setBarChat] = useState(true);

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type="button" onClick={() => setBarChat(!barChat)}>
        {barChat ? "Area Chart" : "Bar Chart"}
      </button>
      {barChat ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartContainer;
