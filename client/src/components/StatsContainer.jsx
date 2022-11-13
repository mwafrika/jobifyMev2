import { useEffect } from "react";
import { useAppContext, initialState } from "../context/AppContext";
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/Wrappers/StatsContainer";
import StatsItem from "./StatsItem";

const StatsContainer = ({ stats }) => {
  console.log(stats.interview, "Check value state");

  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => (
        <StatsItem key={index} {...item} />
      ))}
    </Wrapper>
  );
};

export default StatsContainer;
