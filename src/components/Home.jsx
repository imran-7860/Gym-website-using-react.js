import React from "react";

import Button from "../layouts/Button";
const Home = () => {
  return (
    <div
      className="h-screen flex flex-row justify-between md:px-32 px-5 bg-cover"
      style={{ backgroundImage: "url('./img/hero.jpg')" }}
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-8xl font-semibold md:text-start md:w-2/3 text-center">
          Your body, your rule.
        </h1>
        <div className="w-full md:w-2/4 mt-5 flex flex-row justify-center">
          <Button title="Checkout Plans" />
        </div>
      </div>
    </div>
  );
};
export default Home;
