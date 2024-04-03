import React, { useState } from "react";
import "./Login.css";

function Login({ handleLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(username, password);
  };

  return (
    <>
      <h1 className="log-text text-center">Kullanıcı Girişi</h1>
      <form className="text-center">
        <div className="mb-3">
          <label htmlFor="username" className="name-text form-label">
            Kullanıcı Adı
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="name-text form-label">
            Şifre
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="name-text btn btn-primary">
          Giriş
        </button>
      </form>
    </>
  );
}

export default Login;
