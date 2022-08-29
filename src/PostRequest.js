import { useState } from "react";
import axios from "axios";
const url = "https://course-api.com/axios-tutorial-post";

const PostRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, { name: name, email: email });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section>
      <h2>post request</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </section>
  );
};
export default PostRequest;
