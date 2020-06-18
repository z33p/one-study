import React from "react";
import Link from "next/link";
import Nav from "@components/Nav";

const Home: React.FC = () => {
  return (
    <div className="">
      <Nav />
      <div className="p-4">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
