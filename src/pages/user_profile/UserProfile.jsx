import React from 'react';
import { useAuth } from '../../utils/useAuth';
import { useNavigate } from 'react-router-dom';
import style from './UserProfile.module.scss';

const UserProfile = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    return (
        <div className={style.userProfile}>
            <h1>
                User Profile
            </h1>
            <label>
                User name: {user}
            </label>
            <button onClick={() => signOut(() => navigate("/", {replace: true}))}>Sign out</button>
        </div>
    );
}

export default UserProfile;