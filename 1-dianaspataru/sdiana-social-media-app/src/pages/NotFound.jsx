import { useNavigate } from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <ConstructionIcon className={styles.icon} />
        </div>

        <h1 className={styles.title}>Page Under Construction</h1>
        
        <p className={styles.description}>
          We're working hard to bring this feature to life. Check back soon or head back to your newsfeed!
        </p>

        <div className={styles.actions}>
          <button 
            className={styles.homeButton} 
            onClick={() => navigate("/")}
          >
            <HomeIcon />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
