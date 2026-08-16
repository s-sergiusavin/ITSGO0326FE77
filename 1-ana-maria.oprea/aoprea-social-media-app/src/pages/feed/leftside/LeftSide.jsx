import styles from "./LeftSide.module.scss";

import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HistoryIcon from "@mui/icons-material/History";
import ExploreIcon from "@mui/icons-material/Explore";
import GradeIcon from '@mui/icons-material/Grade';

import { useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

const LeftSide = () => {
  const { theme, setTheme } = useTheme();
  const [shakeState, setShakeState] = useState({ likes: false, saves: false });

  useEffect(() => {
    const handleLeftSideShake = (event) => {
      const { action } = event.detail || {};

      if (action === "like") {
        setShakeState((prev) => ({ ...prev, likes: true }));
        setTimeout(() => {
          setShakeState((prev) => ({ ...prev, likes: false }));
        }, 450);
      }

      if (action === "save") {
        setShakeState((prev) => ({ ...prev, saves: true }));
        setTimeout(() => {
          setShakeState((prev) => ({ ...prev, saves: false }));
        }, 450);
      }
    };

    window.addEventListener("left-side-shake", handleLeftSideShake);

    return () => {
      window.removeEventListener("left-side-shake", handleLeftSideShake);
    };
  }, []);

  return (
    <div className={styles.sideButtons}>
      
      <div className={styles.interests}>
        <div
          className={`${styles.explore} ${theme === "explore" ? styles.activeExplore : ""}`}
          onClick={() => setTheme("explore")}
        >
          <ExploreIcon />
          <span>Explore</span>
        </div>
        <div className="interests">
          <div className={styles.interests}>
            <div className={styles.interestsItem}>
              <input type="checkbox" id="item1" />
              <label htmlFor="item1" className={styles.interestsHeader}>
                <GradeIcon/>
                <span>Your interests</span>
                <span className={styles.icon}>+</span>
              </label>
              <div className={styles.interestsContent}>
                <ul>
                  <li
                    className={`${styles.nature} ${theme === "nature" ? styles.active : ""}`}
                    onClick={() => setTheme("nature")}
                  >
                    <EmojiNatureIcon />
                    <span>Nature</span>
                  </li>
                  <li
                    className={`${styles.food} ${theme === "food" ? styles.active : ""}`}
                    onClick={() => setTheme("food")}
                  >
                    <LocalDiningIcon />
                    <span>Food</span>
                  </li>
                  <li
                    className={`${styles.gaming} ${theme === "gaming" ? styles.active : ""}`}
                    onClick={() => setTheme("gaming")}
                  >
                    <SportsEsportsIcon />
                    <span>Gaming</span>
                  </li>
                  <li className={styles.addMore}>
                    <AddCircleIcon />
                    <span>Add more interests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sugestions}>
        <div className={styles.popular}>
          <TrendingUpIcon />
          <span>Trending</span>
        </div>
        <div className={styles.news}>
          <NewspaperIcon />
          <span>News</span>
        </div>
        <div className={styles.events}>
          <EventAvailableIcon />
          <span>Events</span>
        </div>
      </div>

      <div className={styles.history}>
        <div
          className={`${styles.likes} ${shakeState.likes ? styles.shake : ""}`}
        >
          <FavoriteBorderIcon />
          <span>Liked posts</span>
        </div>
        <div
          className={`${styles.saves} ${shakeState.saves ? styles.shake : ""}`}
        >
          <BookmarksIcon />
          <span>Saved posts</span>
        </div>
        <div className={styles.watched}>
          <HistoryIcon />
          <span>Watch history</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
