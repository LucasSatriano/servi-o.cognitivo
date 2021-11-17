import { GoogleLogin } from "react-google-login";
import config from "./config";

function App() {
  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId={config.client_id}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
