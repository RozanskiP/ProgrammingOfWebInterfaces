import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUser, UsersContext } from "../state/Contex";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  signInWithRedirect,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/init";

const SignIn = () => {
  const { users } = useContext(UsersContext);
  const { login, loginWithFirebase } = useContext(LoggedUser);
  const navigate = useNavigate();

  const [loginText, setLoginText] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [error, setError] = useState("");

  const handleSetLogin = (e) => setLoginText(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    for (const number in users) {
      if (
        users[number].login === loginText &&
        users[number].password === password
      ) {
        login(users[number].uuid);
        navigate("/", { replace: true });
      } else {
        setError("Incorrect login or password!");
      }
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      loginWithFirebase(response.user.displayName, response.user.email);
    } catch (error) {
      setError("Incorrect login or password!");
      console.log(error);
    }
  };

  const handleLoginWithGitHub = async () => {
    try {
      await signInWithRedirect(auth, githubProvider).then((resp) => {
        loginWithFirebase(resp.user.displayName, resp.user.email);
      });
    } catch (error) {
      setError("Incorrect login or password!");
      console.log(error);
    }
  };

  const handleLoginWithFirebase = async () => {
    signInWithEmailAndPassword(auth, email, password).then(credential => {
      loginWithFirebase(credential.user.displayName, credential.user.email);
      console.log(credential.user);
    })
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <div className="form-group m-3">
              <label>Login</label>
              <input
                type="text"
                className="form-control"
                name="login"
                placeholder="Login"
                onChange={handleSetLogin}
              />
            </div>
            <div className="form-group m-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                onChange={handleSetEmail}
              />
            </div>
            <div className="form-group m-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={handleSetPassword}
              />
              <small className="text-danger">{error}</small>
            </div>
            <button className="btn btn-success m-2" onClick={handleLogin}>
              Sign In with localStorage
            </button>
            <button
              className="btn btn-success m-2"
              onClick={handleLoginWithGitHub}
            >
              Sign In with GitHub
            </button>
            <button
              className="btn btn-success m-2"
              onClick={handleLoginWithGoogle}
            >
              Sign In with Google
            </button>
            <button
              className="btn btn-success m-2"
              onClick={handleLoginWithFirebase}
            >
              Sign In with Firebase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
