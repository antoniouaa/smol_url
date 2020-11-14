import React, { useState } from "react";

export default function InputTextBox(props) {
  const [longUrl, setUrl] = useState("");

  const makeRequest = async (url) => {
    let resp = await fetch("https://httpbin.org/get");
    let data = await resp.json();
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest()
      .then((d) => {
        setUrl(`${d.url}/${e.target.url.value}`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" />
        <input type="submit" value="Submit" />
      </form>
      <p>Your new URL is {longUrl}</p>
    </>
  );
}
