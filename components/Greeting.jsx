"use client";
import { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <h1 className="text-3xl font-bold mb-4">
      {greeting}, Devansh 👋<br />
      <span className="text-xl font-medium">See what you have to do!</span>
    </h1>
  );
};

export default Greeting;
