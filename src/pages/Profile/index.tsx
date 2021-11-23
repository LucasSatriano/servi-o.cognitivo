import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router";
import config from "../../config";
import { useProfile } from "../../context/useProfile";

import styles from "./styles.module.scss";

const Profile: React.FC = () => {
  const { profile, handleClearProfile } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    if (!profile?.email) {
      navigate("/", { replace: true });
    }
  }, [profile, navigate]);

  if (!profile) {
    return null;
  }

  function handleLogout() {
    handleClearProfile();
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>{profile.name}</h1>
        <p>{profile.email}</p>

        <img
          src={profile.imageUrl}
          alt={profile.name}
          referrerPolicy="no-referrer"
        />

        <GoogleLogout
          clientId={config.client_id}
          buttonText="Logout Student Helper"
          onLogoutSuccess={handleLogout}
        ></GoogleLogout>
      </div>
    </div>
  );
};

export default Profile;
