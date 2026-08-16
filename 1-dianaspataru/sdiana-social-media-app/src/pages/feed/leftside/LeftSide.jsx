

import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import styles from "./LeftSide.module.scss";
import profile from "../../../assets/profile.webp";


import ShowChartIcon from "@mui/icons-material/ShowChart";      
import PeopleIcon from "@mui/icons-material/People";           
import AppsIcon from "@mui/icons-material/Apps";                
import SchoolIcon from "@mui/icons-material/School";            
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";    
import FolderIcon from "@mui/icons-material/Folder";             
import ArticleIcon from "@mui/icons-material/Article";           
import ChatIcon from "@mui/icons-material/Chat";               
import TrendingUpIcon from "@mui/icons-material/TrendingUp";    
import ForumIcon from "@mui/icons-material/Forum";               
import VerifiedIcon from "@mui/icons-material/Verified";

const LeftSide = ({user}) => {
  const navigate = useNavigate(); 


  const [activeTab, setActiveTab] = useState("Activity");
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

 
  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);

    if (tabName === "Activity") {
      navigate("/"); 
    } else {
      navigate("/not-found"); 
    }
  };

  const toggleCourses = (e) => {
    e.preventDefault();
    setIsCoursesOpen((prev) => !prev);
  };

  const userHandle = user?.name
    ? `@${user.name.toLowerCase().replace(/\s+/g, "")}`
    : "@user";

  return (
    <aside className={styles.leftContent}>
      <div 
        className={styles.userProfileSidebar} 
        onClick={() => navigate("/my-profile")} 
        style={{ cursor: "pointer" }}
      >
        <img 
          src={user?.avatar} 
          alt={user?.name || "Profile"} 
          className={styles.sidebarAvatar} 
        />
        <div className={styles.userInfo}>
          <span className={styles.userName}>
            {user?.name || "User Name"} <VerifiedIcon className={styles.verifiedBadge} />
          </span>
          <span className={styles.userHandle}>{userHandle}</span>
        </div>
      </div>

      <hr />

      {/* menu */}
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

          {/* sub menu */}
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

      {/* forum */}
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
};

export default LeftSide;