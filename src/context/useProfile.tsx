import { createContext, useContext, useState } from "react";
import { GoogleLoginResponse } from "react-google-login";

interface ProfileContextProps {
  profile: GoogleLoginResponse["profileObj"] | null;
  handleProfile: (profile: GoogleLoginResponse["profileObj"]) => void;
  handleClearProfile: () => void;
}

const ProfileContext = createContext({} as ProfileContextProps);

export default function ProfileProvider(props: any) {
  const { children } = props;

  const [profile, setProfile] = useState<
    GoogleLoginResponse["profileObj"] | null
  >(null);

  const handleProfile = (profile: GoogleLoginResponse["profileObj"]) => {
    setProfile(profile);
  };

  const handleClearProfile = () => {
    setProfile(null);
  };

  return (
    <ProfileContext.Provider
      value={{ profile, handleProfile, handleClearProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }

  return context;
}
