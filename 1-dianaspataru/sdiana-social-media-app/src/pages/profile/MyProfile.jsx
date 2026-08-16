import { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileTabs from "../../components/ProfileTabs";
import AboutSection from "../../components/AboutSection";
import FriendsSection from "../../components/FriendsSection";
import TimelineSection from "../../components/TimelineSection";
import NotificationsSection from "../../components/NotificationsSection";
import EditProfileModal from "../../components/EditProfileModal";
import LeftSide from "../feed/leftside/LeftSide";
import styles from "./MyProfile.module.scss";


const MOCK_FRIENDS = [
  { id: 1, name: 'Andrei Popescu', role: 'UI/UX Designer', mutual: 14, avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Elena Ionescu', role: 'Frontend Developer', mutual: 8, avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Mihai Radu', role: 'Content Creator', mutual: 23, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 4, name: 'Alexandra Stan', role: 'Digital Marketer', mutual: 5, avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, name: 'Cristian Matei', role: 'Product Manager', mutual: 19, avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: 6, name: 'Diana Gheorghe', role: 'Graphic Designer', mutual: 2, avatar: 'https://i.pravatar.cc/150?img=20' },
];

const MyProfile = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [showEdit, setShowEdit] = useState(false);

  const user = {
    name: "Stan Maria",
    location: "Bucharest, Romania",
    posts: 0,
    comments: 2,
    views: 174000,
    gender: "Female",
    birthdate: "01/01/1998",
    hobbies: "Web design, gaming, design trends",
    music: "Rock, Indie, Synthwave",
    movies: "Sci-Fi, Thrillers, Anime",
    facebook: "facebook.com/",
    instagram: "instagram.com/",
    youtube: "youtube.com/",
    linkedin: "linkedin.com/in/e",
    avatar: "https://i.pravatar.cc/150?img=3",
    cover: "https://images.unsplash.com/photo-1503264116251-35a269479413"
  };

  return (

    <div className={styles.profileContainer}>
      <LeftSide user={user}/>
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <div  className={styles.headerWithTabsWrapper}>
            <ProfileHeader
              user={user}
              onEditAvatar={() => setShowEdit(true)}
              onEditCover={() => setShowEdit(true)}
            />

            <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} /> 
          </div>
          {activeTab === "about" && <AboutSection user={user} />}
          {activeTab === "friends" && <FriendsSection friends={MOCK_FRIENDS} />}
          {activeTab === "timeline" && <TimelineSection />}
          {activeTab === "notifications" && <NotificationsSection />}

          {showEdit && <EditProfileModal onClose={() => setShowEdit(false)} />}
        </div>
      </main>
    </div>
  );

    
};

export default MyProfile;
