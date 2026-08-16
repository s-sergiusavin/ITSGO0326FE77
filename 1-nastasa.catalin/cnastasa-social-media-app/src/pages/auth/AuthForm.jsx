import { useState } from "react";
import styles from "./AuthForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

const VALID_USERNAME = "catalin";
const VALID_PASSWORD = "parola123";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleAuthState = () => {
    setIsLogin((prevState) => !prevState);
    setError(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Toate câmpurile sunt obligatorii");
      return;
    }

    if (isLogin && username !== VALID_USERNAME) {
      setError("Utilizator inexistent");
      return;
    }

    if (isLogin && password !== VALID_PASSWORD) {
      setError("Parolă incorectă");
      return;
    }

    dispatch(login(username));
    navigate("/");
  };

  return (
    <div className={styles.auth}>
      <h2>{isLogin ? "Autentificare" : "Cont nou"}</h2>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="username">Utilizator</label>
          <input
            type="text"
            id="username"
            placeholder="Introdu numele de utilizator"
            onChange={(e) => setUsername(e.target.value)}
          />
          {isLogin && <p className={styles.hint}>Utilizator demo: catalin</p>}
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Parolă</label>
          <input
            type="password"
            id="password"
            placeholder="Introdu parola"
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLogin && <p className={styles.hint}>Parolă demo: parola123</p>}
        </div>

        <div className={styles.actions}>
          {error && <p className={styles.error}>{error}</p>}
          <button>{isLogin ? "Autentificare" : "Creează cont"}</button>
          <button type="button" className={styles.toggle} onClick={toggleAuthState}>
            {isLogin ? "Creează cont nou" : "Autentificare cu un cont existent"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
