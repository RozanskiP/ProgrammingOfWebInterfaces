import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUser, UsersContext } from "../state/Contex";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/init";

const SignUp = () => {
  const { users, setUsers } = useContext(UsersContext);
  const { login } = useContext(LoggedUser);
  const navigate = useNavigate();
  const { loginWithFirebase } = useContext(LoggedUser);

  const [email, setEmail] = useState();
  const [loginText, setLoginText] = useState();
  const [password, setPassword] = useState();

  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetLogin = (e) => setLoginText(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);

  const handleSetUsers = () => {
    if (
      email === undefined ||
      loginText === undefined ||
      password === undefined
    ) {
      return;
    }

    let newUser = {
      uuid: Number(
        Math.max.apply(
          Math,
          users.map((value) => {
            return value.uuid;
          })
        ) + 1
      ),
      email: email,
      login: loginText,
      password: password,
    };

    const updateUsers = [...users, newUser];
    setUsers(updateUsers);

    setEmail("");
    setLoginText("");
    setPassword("");

    navigate("/", { replace: true });
  };

  const handleSignUpWithFirebase = () => {
    createUserWithEmailAndPassword(auth, email, password).then((credential) => {
      loginWithFirebase(loginText, credential.user.email);
      updateProfile(auth.currentUser, {
        displayName: loginText
      }).then(changedUserName => {
        console.log("Name changed");
      })
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
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
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={handleSetPassword}
              />
            </div>
            <button className="btn btn-success m-3" onClick={handleSetUsers}>
              Sign Up
            </button>
            <button
              className="btn btn-success m-3"
              onClick={handleSignUpWithFirebase}
            >
              Sign Up with Firebase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
