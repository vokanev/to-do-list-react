import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const context = useAuth();

  const [username, setUserName] = useState("");

  const fromPage = location.state?.from?.pathname || "/";

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    context?.signIn(username, () => navigate(fromPage, { replace: true }));
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="username"
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
