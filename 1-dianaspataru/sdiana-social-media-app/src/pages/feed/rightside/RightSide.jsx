import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"; 

import styles from "./RightSide.module.scss";
import adBannerImg from "../../../assets/ad-here.jpg"; 

const RightSide = () => {
  const navigate = useNavigate();

  const profiles = useFetch("http://localhost:3000/profiles");


  const goToProfile = (userId) => {
    navigate(`/user/${userId}`);
  };

  const activeUsers = profiles?.filter(
    (user) => user.status && user.status.toLowerCase() === "online") || [];

  return (
    <aside className={styles.rightContent}>
      {/* active users*/}
      <div className={styles.sideCard}>
        <h3 className={styles.cardTitle}>Active Users</h3>

      
        {activeUsers.length === 0 ? (
          <p className={styles.noActivity}>There are no recently active members</p>
        ) : (
          <div className={styles.activeUsersGrid}>
            {activeUsers.map((user) => (
              <div
                key={user.id}
                className={styles.activeUserItem}
                onClick={() => goToProfile(user.id)}
                title={user.name} 
                style={{ cursor: "pointer" }}
              >
                <img src={user.avatar} alt={user.name} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/*  Latest Activities */}
      <div className={styles.sideCard}>
        <h3 className={styles.cardTitle}>Latest Activities</h3>
        <ul className={styles.activityList}>
          {!profiles ? (
            <p className={styles.noActivity}>Se încarcă activitățile...</p>
          ) : (
            profiles.map((user) => (
              <li key={user.id} className={styles.activityItem}>
              
                <img
                  src={user.avatar}
                  alt={user.name}
                  onClick={() => goToProfile(user.id)}
                  style={{ cursor: "pointer" }}
                />
                
                <div className={styles.activityInfo}>
                  <p>
                   
                    <strong
                      onClick={() => goToProfile(user.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {user.name}
                    </strong>{" "}
                    posted an update
                  </p>
                  <span>2 hours ago</span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Ad Banner */}
      <div className={styles.adBanner}>
        <img src={adBannerImg} alt="ad here" className={styles.adLogo} />
        <h2>Your Ad in here</h2>
      </div>
    </aside>
  );
};

export default RightSide;