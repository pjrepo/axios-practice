import { useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2>first request</h2>;
};

export default FirstRequest;
