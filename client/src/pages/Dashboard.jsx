import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const data = await fetch("http://localhost:7000/api/v1");
      const result = await data.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
