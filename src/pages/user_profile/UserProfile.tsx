import React from "react";
import { useAuth } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  const context = useAuth();
  const user = context?.user;
  const signOut = context?.signOut;
  const navigate = useNavigate();
  return (
    // <div className={style.userProfile}>
    <div>
      <h1>User Profile</h1>
      <label>User name: {user}</label>
      <button onClick={() => signOut?.(() => navigate("/", { replace: true }))}>
        Sign out
      </button>
    </div>
  );
};

export default UserProfile;
