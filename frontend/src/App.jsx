import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [response, setResponse] = useState("");
  const [text, setText] = useState("");

  const getResponse = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
      console.log(text)
      const res = await fetch(`https://8000-lewisnjue-spamdetection-3g9q3xtlw5q.ws-eu118.gitpod.io/?text=${encodeURIComponent(text)}`);

      if (!res.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await res.json();
      setResponse(data.messange || "No response received"); // Using 'messange' as returned by API
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching response");
    }
  };

  return (
    <div className="main">
      <div className="output">
        <p className="text-output">{response}</p>
      </div>
      <div className="input-div">
        <form onSubmit={getResponse}>
          <label htmlFor="text" className="text-label">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            className="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit" className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
