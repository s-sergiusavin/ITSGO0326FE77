import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Pagina căutată nu a fost găsită.</p>
      <Link to="/">Înapoi acasă</Link>
    </div>
  );
};

export default NotFound;
