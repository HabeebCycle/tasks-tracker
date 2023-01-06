import React from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <AddTask />
      <Tasks />
    </>
  );
};

export default Home;
