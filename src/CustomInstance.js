import { useEffect } from "react";
import authFetch from "./Axios/Custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response1 = await authFetch("/react-store-products");
      const response2 = await axios(randomUserUrl);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2>custom instance</h2>;
};
export default CustomInstance;
