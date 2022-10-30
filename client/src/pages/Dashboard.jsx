import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:7000/api/v1");
      console.log(data.data, "check data in axios");
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
