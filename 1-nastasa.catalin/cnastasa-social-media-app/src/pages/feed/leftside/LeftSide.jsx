import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LeftSide.module.scss";
import profile from "../../../assets/profil.jpg";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import MovieIcon from "@mui/icons-material/Movie";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StarIcon from "@mui/icons-material/Star";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventIcon from "@mui/icons-material/Event";
import FlagIcon from "@mui/icons-material/Flag";

const LeftSide = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className={styles.leftSide}>
      <Link to="/profile/1" className={styles.navItem}>
        <img src={profile} alt="Profil" className={styles.navAvatar} />
        <span>Catalin Nastasa</span>
      </Link>

      <Link to="/meta-ai" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.purple}`}>
          <SmartToyIcon fontSize="small" />
        </div>
        <span>Meta AI</span>
      </Link>

      <Link to="/profile/1" state={{ tab: "Prieteni" }} className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.blue}`}>
          <GroupIcon fontSize="small" />
        </div>
        <span>Prieteni</span>
      </Link>

      <Link to="/memories" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.blue}`}>
          <HistoryIcon fontSize="small" />
        </div>
        <span>Amintiri</span>
      </Link>

      <Link to="/saved" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.purple}`}>
          <BookmarkIcon fontSize="small" />
        </div>
        <span>Salvate</span>
      </Link>

      <Link to="/groups" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.blue}`}>
          <Diversity3Icon fontSize="small" />
        </div>
        <span>Grupuri</span>
      </Link>

      <Link to="/reels" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.red}`}>
          <MovieIcon fontSize="small" />
        </div>
        <span>Reels</span>
      </Link>

      <Link to="/marketplace" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.blue}`}>
          <StorefrontIcon fontSize="small" />
        </div>
        <span>Marketplace</span>
      </Link>

      <button className={styles.navItem} onClick={() => setMoreOpen((prev) => !prev)}>
        <div className={`${styles.iconCircle} ${styles.gray}`}>
          {moreOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
        </div>
        <span>{moreOpen ? "Vezi mai puțin" : "Vezi mai mult"}</span>
      </button>

      {moreOpen && (
        <>
          <Link to="/events" className={styles.navItem}>
            <div className={`${styles.iconCircle} ${styles.gray}`}>
              <EventIcon fontSize="small" />
            </div>
            <span>Evenimente</span>
          </Link>

          <Link to="/pages" className={styles.navItem}>
            <div className={`${styles.iconCircle} ${styles.gray}`}>
              <FlagIcon fontSize="small" />
            </div>
            <span>Pagini</span>
          </Link>
        </>
      )}

      <hr className={styles.divider} />

      <p className={styles.sectionTitle}>Scurtăturile tale</p>

      <Link to="/favorites" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.gray}`}>
          <StarIcon fontSize="small" />
        </div>
        <span>Favorite</span>
      </Link>

      <Link to="/gaming" className={styles.navItem}>
        <div className={`${styles.iconCircle} ${styles.gray}`}>
          <VideocamIcon fontSize="small" />
        </div>
        <span>Gaming</span>
      </Link>
    </div>
  );
};

export default LeftSide;
