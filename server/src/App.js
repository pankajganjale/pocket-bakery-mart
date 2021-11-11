import logo from "./logo.svg";
//import { GoogleLogin } from "react-google-login";
import firebase from "firebase/app";
import "./App.css";
import Dashboard from "./dashBoard";
import Login from "./login";
import { provider, auth } from "./fireBase";
import PhoneLogin from "./components/signUpPhone";
import { useState, useEffect } from "react";
import Header from "./components/Header";
function App() {
  let [loggedin, setLoggedIn] = useState(false);
  let [name, setName] = useState("");
  let [url, setUrl] = useState("");
  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("result:", result);
        console.log("result1:", "result.bc.bc");
        setName(result.user.displayName);
        setUrl(result.user.photoURL);
        setLoggedIn(result.user);
      })
      .catch((err) => setLoggedIn(false));
    console.log("yep we are here now");
  };

  return (
    <div className="App">
      <Header signIn={signin} loggedin={loggedin} src={url} name={name} />
      {/* <GoogleLogin
        clientId="668156672294-3337jq0e778vhmaop2pttuscgh0ot0gf.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      /> */}

      {loggedin ? (
        <Dashboard user={loggedin} />
      ) : (
        <button onClick={() => signin()}>signin</button>
      )}
      <Login />
      <PhoneLogin />
    </div>
  );
}

export default App;
