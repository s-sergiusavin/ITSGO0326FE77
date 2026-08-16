import styles from "./RightSide.module.scss";
import userAvatar1 from "../../../assets/download.jpeg";
import userAvatar2 from "../../../assets/actor2.webp";
import adBannerImg from "../../../assets/ad-here.jpg";

const activitiesData = [
  {
    id: 1,
    userName: "Some Name",
    action: "posted an update",
    timeAgo: "2 years ago",
    avatar: userAvatar1,
  },
  {
    id: 2,
    userName: "Some Name",
    action: "posted an update",
    timeAgo: "3 years ago",
    avatar: userAvatar2,
  },
];


const RightSide = () => {
  return (
    <aside className={styles.rightContent}>
      {/* Card: Active Users */}
      <div className={styles.sideCard}>
        <h3 className={styles.cardTitle}>Active Users</h3>
        <p className={styles.noActivity}>There are no recently active members</p>
      </div>

      {/* Card: Latest Activities */}
      <div className={styles.sideCard}>
        <h3 className={styles.cardTitle}>Latest Activities</h3>
        <ul className={styles.activityList}>
          {activitiesData.map((activity) => (
            <li key={activity.id} className={styles.activityItem}>
              <img src={activity.avatar} alt={activity.userName} />
              <div className={styles.activityInfo}>
                <p>
                  <strong>{activity.userName}</strong> {activity.action}
                </p>
                <span>{activity.timeAgo}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Card: Ad Banner */}
      <div className={styles.adBanner}>
        <img src={adBannerImg} alt="ad here" className={styles.adLogo} />
        <h2>Your Ad in here</h2>
      </div>
    </aside>
  );
};

export default RightSide;
