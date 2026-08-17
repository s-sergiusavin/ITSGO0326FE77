import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import AboutSection from "../../components/AboutSection";
import ProfileTabs from "../../components/ProfileTabs";
import FriendsSection from "../../components/FriendsSection";
import TimelineSection from "../../components/TimelineSection";
import useFetch from "../../hooks/useFetch";

import styles from "./UserProfile.module.scss";

const MOCK_FRIENDS = [
  { id: 1, name: 'Andrei Popescu', role: 'UI/UX Designer', mutual: 14, avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Elena Ionescu', role: 'Frontend Developer', mutual: 8, avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Mihai Radu', role: 'Content Creator', mutual: 23, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 4, name: 'Alexandra Stan', role: 'Digital Marketer', mutual: 5, avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, name: 'Cristian Matei', role: 'Product Manager', mutual: 19, avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: 6, name: 'Diana Gheorghe', role: 'Graphic Designer', mutual: 2, avatar: 'https://i.pravatar.cc/150?img=20' },
];

const UserProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("timeline");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const pers = useFetch(`http://localhost:3000/profiles/${id}`);
  const post = useFetch(`http://localhost:3000/posts/${id}`);

  useEffect(() => {
    // only set user when pers is non-null (initial state is null)
    if (pers !== null) {
      setUser(pers);
      setLoading(false);
    }
  }, [pers]);

  if (loading) {
    return (
      <div className={styles.profileContainer}>
        <main className={styles.mainContainer}>
          <div className={styles.mainContent}>
            <div className={styles.emptyTabCard}>
              <h3>Loading user #{id}...</h3>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.profileContainer}>
        <main className={styles.mainContainer}>
          <div className={styles.mainContent}>
            <div className={styles.emptyTabCard}>
              <h3>User #{id} not found</h3>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      <main className={styles.mainContainer}>
        <div className={styles.mainContent}>
          <div  className={styles.headerWithTabsWrapper}>
              <ProfileHeader user={pers} editable={false} />

              <ProfileTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                hideNotifications
              />
        </div>
          {activeTab === "about" && <AboutSection user={pers} isEditable={false}/>}
          {activeTab === "timeline" && <TimelineSection postData={post} user={user} />}
          {activeTab === "friends" && <FriendsSection friends={MOCK_FRIENDS} />}
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
