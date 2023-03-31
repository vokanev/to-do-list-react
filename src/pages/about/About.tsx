import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <Link to="/" replace={true}>
        Go home
      </Link>
      <p>About Page</p>
    </div>
  );
};
