import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useNavigate } from "react-router";

import config from "../../config";
import { useProfile } from "../../context/useProfile";

import styles from "./styles.module.scss";

function Home() {
  const navigate = useNavigate();
  const { handleProfile } = useProfile();

  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
    if ("profileObj" in response) {
      const { profileObj } = response;

      handleProfile(profileObj);
      navigate("/profile");
    }
  };

  return (
    <div className={styles.container}>
      <GoogleLogin
        clientId={config.client_id}
        buttonText="Student Helper Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn
      />
    </div>
  );
}

export default Home;
