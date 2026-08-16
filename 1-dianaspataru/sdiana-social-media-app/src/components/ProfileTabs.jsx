import "./ProfileTabs.module.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function ProfileTabs({
  activeTab,
  setActiveTab,
  hideAbout = false,
  hideNotifications = false
}) {
  return (
    <nav className="profileNavTabs">
      <button
        className={`tabBtn ${activeTab === "timeline" ? "active" : ""}`}
        onClick={() => setActiveTab("timeline")}
      >
        <CalendarTodayIcon className="tabIcon" /> Timeline
      </button>

      {!hideAbout && (
        <button
          className={`tabBtn ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          <PersonOutlinedIcon className="tabIcon" /> About
        </button>
      )}

      <button
        className={`tabBtn ${activeTab === "friends" ? "active" : ""}`}
        onClick={() => setActiveTab("friends")}
      >
        <PeopleIcon className="tabIcon" /> Friends
      </button>

      {!hideNotifications && (
        <button
          className={`tabBtn ${activeTab === "notifications" ? "active" : ""}`}
          onClick={() => setActiveTab("notifications")}
        >
          <NotificationsNoneIcon className="tabIcon" /> Notifications
        </button>
      )}
    </nav>
  );
}