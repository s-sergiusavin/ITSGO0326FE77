import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProfileHeader from "../../components/ProfileHeader";
import ProfileTabs from "../../components/ProfileTabs";
import FriendsSection from "../../components/FriendsSection";
import TimelineSection from "../../components/TimelineSection";
import useFetch from "../../hooks/useFetch";

import styles from "./UserProfile.module.scss";

const UserProfile = () => {
  const { id } = useParams(); // luăm ID-ul userului din URL
  const [activeTab, setActiveTab] = useState("timeline");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const pers = useFetch(`http://localhost:3000/posts/${id}`);

  useEffect(() => {
    // When the fetch hook returns (including an empty result), update state
    if (typeof pers !== "undefined") {
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
          {/* HEADER */}
          <ProfileHeader user={user} editable={false} />

          {/* TABS */}
          <ProfileTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            hideAbout
            hideNotifications
          />

          {/* TAB CONTENT */}
          {activeTab === "timeline" && <TimelineSection />}
          {activeTab === "friends" && <FriendsSection friends={user.friends} />}
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
