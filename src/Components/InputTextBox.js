import React, { useState } from "react";

import "./InputTextBox.css";

export default function InputTextBox(props) {
  const [longUrl, setUrl] = useState("");

  const makeRequest = (url) => {
    let headers = new Headers();
    const payload = JSON.stringify({
      domain: "bit.ly",
      long_url: url,
    });
    headers.append(
      "Authorization",
      `Bearer ${process.env.REACT_APP_BITLY_TOKEN}`
    );
    headers.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: payload,
      redirect: "follow",
    };
    fetch("https://api-ssl.bitly.com/v4/shorten", requestOptions)
      .then((response) => response.json())
      .then((result) => setUrl(result.link))
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest(e.target.url.value);
  };

  const subHeading = (url) => {
    if (url) {
      return <p>Your new URL is {url}</p>;
    } else {
      return <p>Enter a URL to smol_ify</p>;
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit} className="container form">
          <input type="text" name="url" id="textbox" />
          <input type="submit" value="smol_ify" id="submit-button" />
        </form>
      </div>
      {subHeading(longUrl)}
    </>
  );
}
