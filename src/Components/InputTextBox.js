import React, { useState } from "react";
// import axios from "axios";

import "./InputTextBox.css";

export default function InputTextBox(props) {
  const [url, setUrl] = useState("");

  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("New submission" + e.target.value);
        }}>
        <div>
          <label htmlFor="input-text-box">URL to shorten</label>
          <input
            name="input-text-box"
            type="text"
            placeholder="URL"
            onInput={(e) => setUrl(e.target.value)}></input>
        </div>
      </form>
      <p>Hello world, the URL is {url}</p>
    </>
  );
}
