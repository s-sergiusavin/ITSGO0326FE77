import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import "../styles/auth.css";

export default function Auth() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(username, password);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="login-window win-panel">
        <div className="win-titlebar">
          <span className="win-title">📼 social.exe — login</span>
          <span className="win-controls">
            <span>_</span>
            <span>□</span>
            <span>×</span>
          </span>
        </div>

        <section className="form-container">
          <h1>LOGIN</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your user name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-field">
              <input
                type="checkbox"
                id="rememberUser"
                checked={rememberUser}
                onChange={(e) => setRememberUser(e.target.checked)}
              />
              <label htmlFor="rememberUser">Click here to remember me</label>
            </div>

            {error && <p className="error-message">⚠ {error}</p>}

            <input type="submit" value="Log in" className="login-button" />
            <a href="#" className="forgot-password-btn">
              Forgot password?
            </a>
          </form>

          <hr />
          <button className="register-btn" type="button">
            Create an account
          </button>
          <p className="demo-hint">
            Demo account: <strong>demo</strong> / <strong>demo123</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
