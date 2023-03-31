import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import React from "react";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      {/* <div> */}
      <p>Home Page</p>
      <Link to="todo?sort=todoFirst">Todo first</Link>
      <Link to="todo?sort=doneFirst">Done first</Link>
      <Link to="todo?sort=alphabetically">Alphabetically</Link>
      <Link to="todo?sort=reverseAlphabetically">Reverse Alphabetically</Link>
    </div>
  );
};
