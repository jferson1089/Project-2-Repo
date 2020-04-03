import React, { useState } from "react";
import Feedback from "./Feedback";

function About() {
  const [input, setInput] = useState("");

  const handleChange = e => {
    const userInput = e.target.value;
    setInput(userInput);
  };

  const handleSubmit = response => {
    setInput(response);
  };

  return (
    <div>
      <h2>THANKS FOR STOPPING BY</h2>
      <p>
        React Friends is the newest app built in React that gives you results of
        random users to scroll through and make new friends
      </p>
      <br />
      <>
        <h3>Send Us Some Feedback!</h3>
        <br />
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScy2ZVCvu8xUu1pqK8k6HQZhZvydFeoIKlsBl33MxNka1u0HQ/formResponse"
          target="_blank"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Name here"
            name="entry.456610687"
          ></input>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Comments..."
            className="textbox"
            name="entry.1318962745"
          ></input>
          <button>Submit!</button>
        </form>
        <br />
        <br />
      </>

      <Feedback input={input} />
    </div>
  );
}

export default About;
