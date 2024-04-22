import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateForm = () => {
    let isValid = true;
    if (username !== "ayush") {
      setUsernameError("Invalid user");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password !== "ayush@123") {
      setPasswordError("Invalid password");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      onLogin(true);
    }
  };

  return (
    <div className="py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-8">
            <div>
              <img
                src="/images/login-img.svg"
                className="w-100 image-bg"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 m-auto">
            <img src="/images/logo.svg" className="w-50 mb-4" alt="" />
            <div className="notched-corner">
              <h1 className="text-white fw-normal mb-3">Login</h1>
              <form
                className="text-white input-color hexagon"
                onSubmit={handleSubmit}
              >
                <div className="mb-2">
                  <img src="/images/user.svg" className="w-10" alt="" />
                  <input
                    type="text"
                    id="username"
                    value={username}
                    className={`mb-2 ps-5 ${
                      usernameError ? "error-input" : ""
                    }`}
                    placeholder="User Name"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {usernameError && (
                    <div className="error-message">{usernameError}</div>
                  )}
                </div>
                <div>
                  <img src="/images/key.svg" className="w-10" alt="" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    className={`ps-5 mb-2 ${
                      passwordError ? "error-input" : ""
                    }`}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <div className="error-message">{passwordError}</div>
                  )}
                </div>

                <div className="d-flex justify-content-between mt-3 align-items-center">
                  <a className="text-white fw-normal " href="/">
                    Forgot Password
                  </a>
                  <button
                    type="submit"
                    className="button-color border-0 px-3 py-2"
                  >
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
