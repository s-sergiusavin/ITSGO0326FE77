import styles from "./LeftSide.module.scss";
import profile from "../../../assets/profile.webp";
import { useState } from "react";
import ShowChartIcon from "@mui/icons-material/ShowChart";       // pentru Activity
import PeopleIcon from "@mui/icons-material/People";             // pentru Members
import AppsIcon from "@mui/icons-material/Apps";                 // pentru Groups
import SchoolIcon from "@mui/icons-material/School";             // pentru Courses
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";     // pentru Săgeată jos
import FolderIcon from "@mui/icons-material/Folder";             // pentru All Courses
import ArticleIcon from "@mui/icons-material/Article";           // pentru Course Single
import ChatIcon from "@mui/icons-material/Chat";                 // pentru Message
import TrendingUpIcon from "@mui/icons-material/TrendingUp";     // pentru All Forums
import ForumIcon from "@mui/icons-material/Forum";               // pentru Forum Single
import VerifiedIcon from "@mui/icons-material/Verified";

const LeftSide = () => {
    // Stare pentru elementul activ din meniu
  const [activeTab, setActiveTab] = useState("Activity");
  
  // Stare pentru deschiderea/închiderea submeniului "Courses"
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
  };

  const toggleCourses = (e) => {
    e.preventDefault();
    setIsCoursesOpen((prev) => !prev);
  };

    return (
    <aside className={styles.leftContent}>
      {/* Profile Sidebar */}
      <div className={styles.userProfileSidebar}>
        <img src={profile} alt="Profile" className={styles.sidebarAvatar} />
        <div className={styles.userInfo}>
          <span className={styles.userName}>
            Some Name <VerifiedIcon className={styles.verifiedBadge} />
          </span>
          <span className={styles.userHandle}>@somename</span>
        </div>
      </div>

      <hr />

      {/* Menu Section GENERAL */}
      <div className={styles.menuSection}>
        <p className={styles.menuTitle}>MENU</p>
        <ul className={styles.sidebarMenu}>
          <li className={activeTab === "Activity" ? styles.active : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "Activity")}>
              <ShowChartIcon /> <span>Activity</span>
            </a>
          </li>

          <li className={activeTab === "Members" ? styles.active : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "Members")}>
              <PeopleIcon /> <span>Members</span>
            </a>
          </li>

          <li className={activeTab === "Groups" ? styles.active : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "Groups")}>
              <AppsIcon /> <span>Groups</span>
            </a>
          </li>

          {/* Submeniu Courses */}
          <li
            className={`${styles.hasSubmenu} ${
              isCoursesOpen ? styles.open : ""
            }`}
          >
            <a href="#" onClick={toggleCourses}>
              <SchoolIcon />
              <span className={styles.menuText}>Courses</span>
              <ExpandMoreIcon className={styles.arrowIcon} />
            </a>

            <ul className={styles.submenu}>
              <li className={activeTab === "All Courses" ? styles.active : ""}>
                <a href="#" onClick={(e) => handleTabClick(e, "All Courses")}>
                  <FolderIcon /> <span>All Courses</span>
                </a>
              </li>
              <li className={activeTab === "Course Single" ? styles.active : ""}>
                <a href="#" onClick={(e) => handleTabClick(e, "Course Single")}>
                  <ArticleIcon /> <span>Course Single</span>
                </a>
              </li>
            </ul>
          </li>

          <li className={activeTab === "Message" ? styles.active : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "Message")}>
              <ChatIcon /> <span>Message</span>
            </a>
          </li>
        </ul>
      </div>

      <hr />

      {/* Menu Section FORUM */}
      <div className={styles.menuSection}>
        <p className={styles.menuTitle}>FORUM</p>
        <ul className={styles.sidebarMenu}>
          <li className={activeTab === "All Forums" ? styles.active : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "All Forums")}>
              <TrendingUpIcon /> <span>All Forums</span>
            </a>
          </li>

          <li className={activeTab === "Forum Single" ? styles.active : ""}>
            <a href="#" onClick={(e) => handleTabClick(e, "Forum Single")}>
              <ForumIcon /> <span>Forum Single</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default LeftSide;