import { useState } from "react";
import styles from "./AuthForm.modules.scss";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

    const actionIsNotLoading =()
    
  const submitHandler = () => {};

  return (
    <div className={styles.auth}>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
              </div>
              
              <div className={styles.actions}>
                  {isError && <p>Pleae try again...</p>}
                  {isLoading && <p>Sending request</p>}
                  {!isLoading && }
              </div>
      </form>
    </div>
  );
};

export default AuthForm;
