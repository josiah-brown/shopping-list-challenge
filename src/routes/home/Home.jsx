import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const items = useSelector((state) => state.items);

  return (
    <div>
      <h1>Home</h1>
      {items.map((item, index) => (
        <p key={item + index}>{item}</p>
      ))}
      <Link to={"/add"}>Add Items</Link>
    </div>
  );
};

export default Home;
