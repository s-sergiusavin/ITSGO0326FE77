import styles from "./ProfileTabs.module.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const ProfileTabs = ({
  activeTab,
  setActiveTab,
  hideAbout = false,
  hideNotifications = false,
}) => {


  return (
    <nav className={styles.profileNavTabs}>
      <button
        className={`${styles.tabBtn} ${activeTab === "timeline" ? styles.active : ""}`}
        onClick={() => setActiveTab("timeline")}
      >
        <CalendarTodayIcon className={styles.tabIcon} /> Timeline
      </button>

      {!hideAbout && (
        <button
          className={`${styles.tabBtn} ${activeTab === "about" ? styles.active : ""}`}
          onClick={() => setActiveTab("about")}
        >
          <PersonOutlinedIcon className={styles.tabIcon} /> About
        </button>
      )}

      <button
        className={`${styles.tabBtn} ${activeTab === "friends" ? styles.active : ""}`}
        onClick={() => setActiveTab("friends")}
      >
        <PeopleIcon className={styles.tabIcon} /> Friends
      </button>

      {!hideNotifications && (
        <button
          className={`${styles.tabBtn} ${activeTab === "notifications" ? styles.active : ""}`}
          onClick={() => setActiveTab("notifications")}
        >
          <NotificationsNoneIcon className={styles.tabIcon} /> Notifications
        </button>
      )}
    </nav>
  );
}

export default ProfileTabs;
