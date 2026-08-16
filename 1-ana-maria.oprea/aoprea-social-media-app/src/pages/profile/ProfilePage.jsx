import { useEffect, useState } from "react";
import styles from "./ProfilePage.module.scss";
import profileBackground from "../../assets/background4.png";
import profile from "../../assets/pic2.jpg";

import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import feedService from "../../services/feedService";
import { themes } from "../../data/themes";

const ProfilePage = () => {
  const [profilePosts, setProfilePosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await feedService.get();
        setProfilePosts(response);
      } catch (error) {
        console.error("Error loading profile posts:", error);
      }
    };

    getPosts();
  }, []);

  useEffect(() => {
    const exploreTheme = themes.explore;

    document.documentElement.style.setProperty(
      "--theme-accent",
      exploreTheme.accent,
    );
    document.documentElement.style.setProperty(
      "--theme-page-bg",
      exploreTheme.pageBackground,
    );
    document.documentElement.style.setProperty(
      "--theme-panel-tint",
      exploreTheme.panelTint,
    );
    document.documentElement.style.setProperty(
      "--theme-text-color",
      exploreTheme.textColor || "#1f2937",
    );

    document.body.style.backgroundColor = exploreTheme.pageBackground;
    document.body.style.backgroundImage = exploreTheme.backgroundImage;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.transition = "background 0.3s ease";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div>
      <div className={styles.profile}>
        <div className={styles.profileBackground}>
          <img src={profileBackground} alt="" />
        </div>

        <div className={styles.profileHeader}>
          <div className={styles.profileCard}>
            <div className={styles.profileUser}>
              <aside>
                <img src={profile} alt="" className={styles.profilePic} />
              </aside>
              <section>
                <h1>Ana-Maria Oprea</h1>
                <div>
                  <ul className={styles.following}>
                    <li>10 Posts</li>
                    <li>10 Followers</li>
                    <li>10 Following</li>
                  </ul>
                </div>
              </section>
            </div>

            <div className={styles.about}>
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis, laboriosam.
              </p>

              <div className={styles.interests}>
                <h3>Your interests:</h3>

                <div className={styles.interestsContent}>
                  <ul>
                    <li className={styles.nature}>
                      <EmojiNatureIcon />
                    </li>
                    <li className={styles.food}>
                      <LocalDiningIcon />
                    </li>
                    <li className={styles.gaming}>
                      <SportsEsportsIcon />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <nav>
            <ul className={styles.profileNav}>
              <li className={styles.posts}>Posts</li>
              <li className={styles.pictures}>Pictures</li>
              <li className={styles.videos}>Videos</li>
            </ul>
          </nav>
          <div className={styles.mainContent}>
            <div className={styles.addPost}>
              <div className={styles.postHeader}>
                <div className={styles.profileUserInfo}>
                  <img src={profile} alt="" className={styles.profileImage} />
                  <span>Ana-Maria Oprea</span>
                  <span>08 Apr 2026</span>
                </div>
              </div>

              <div className={styles.profileOptions}>
                <button className={styles.profileOptions}>
                  <MoreHorizIcon />
                </button>
              </div>
              <div className={styles.postContent}>
                <input
                  type="text"
                  name="post_text"
                  className={styles.postText}
                  placeholder="What's on your mind?"
                />
              </div>
              <div className={styles.bottomSection}>
                <div className={styles.addPicture}>
                  <span>
                    <i className="bi bi-file-image-fill"></i> Add picture
                  </span>
                </div>
                <div className={styles.addLocation}>
                  <span>
                    <i className="bi bi-geo-alt"></i> Add location
                  </span>
                </div>
                <div className={styles.addCategory}>
                  <span># Add hashtag</span>
                </div>
                <div className={styles.postButton}>
                  <input type="submit" value="Post" />
                </div>
              </div>
            </div>
            <div className={styles.profilePostsList}>
              {profilePosts.map((post) => (
                <Newsfeed key={post.id} postData={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
