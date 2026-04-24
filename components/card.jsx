import { useEffect, useState } from "react";

export function Card() {
  function handleClick() {
    console.log("clicked");
  }
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Public IP:", data.ip);
        setIp(data.ip);
      })
      .catch((error) => console.error("Error fetching IP:", error));
  }, []);

  return (
    <>
      <div onClick={handleClick}>
        <p>This is a Card component</p>
        <p>Public IP: {ip}</p>
      </div>
    </>
  );
}
