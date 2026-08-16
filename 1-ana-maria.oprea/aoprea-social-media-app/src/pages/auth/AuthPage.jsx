import AuthForm from "./AuthForm";
import styles from './AuthPage.module.scss'
import background from '../../assets/image.png'

const AuthPage = () => {
  return (
    <>
      <AuthForm />
      <div className={styles.profileBackground}>
        <img
          src={background}
          alt=""
        />
      </div>
      ;
    </>
  );
};

export default AuthPage;
