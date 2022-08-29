import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section>
      <button onClick={fetchDadJoke}>random joke</button>
      <p>{joke}</p>
    </section>
  );
};
export default Headers;
