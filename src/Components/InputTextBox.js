import React, { useState } from "react";

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" />
        <input type="submit" value="Submit" />
      </form>
      <p>Your new URL is {longUrl}</p>
      <p>Your token is {process.env.REACT_APP_BITLY_TOKEN}</p>
    </>
  );
}
