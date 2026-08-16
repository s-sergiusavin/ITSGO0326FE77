// import { useParams } from "react-router-dom";

// const ProfilePage = () => {
//     const id = useParams().id;
//     return (
//         <div>
//             <h1>Profile Page {id}</h1>
//         </div>
//     );
// }

// export default ProfilePage;

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProfilePage.module.scss';

// Importuri Iconițe Material UI
import VerifiedIcon from '@mui/icons-material/CheckCircle';
import InsightsIcon from '@mui/icons-material/Insights';
import PeopleIcon from '@mui/icons-material/People';
import GridViewIcon from '@mui/icons-material/GridView';
import BookIcon from '@mui/icons-material/Book';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import ChatIcon from '@mui/icons-material/Chat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import MessageIcon from '@mui/icons-material/Chat';

// Import imagini (Ajustează căile dacă diferă în structura ta de foldere)
import profileAvatar from '../../assets/download.jpeg';
import coverBanner from '../../assets/cover-image.avif';
import LeftSide from '../feed/leftside/LeftSide';

const MOCK_FRIENDS = [
  { id: 1, name: 'Andrei Popescu', role: 'UI/UX Designer', mutual: 14, avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Elena Ionescu', role: 'Frontend Developer', mutual: 8, avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Mihai Radu', role: 'Content Creator', mutual: 23, avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 4, name: 'Alexandra Stan', role: 'Digital Marketer', mutual: 5, avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: 5, name: 'Cristian Matei', role: 'Product Manager', mutual: 19, avatar: 'https://i.pravatar.cc/150?img=13' },
  { id: 6, name: 'Diana Gheorghe', role: 'Graphic Designer', mutual: 2, avatar: 'https://i.pravatar.cc/150?img=20' },
];

const ProfilePage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className={styles.profileContainer}>
      <main className={styles.mainContainer}>
        {/* Sidebar Stânga */}
        <LeftSide />

        {/* Conținut Principal Profil */}
        <div className={styles.mainContent}>
          {/* Header Profil */}
          <div className={styles.profileHeaderCard}>
            <div className={styles.profileBanner}>
              <img src={coverBanner} alt="Banner" />
              <label className={styles.editCover}>
                <PhotoCameraIcon />
              </label>
            </div>

            <div className={styles.profileHeaderBody}>
              <div className={styles.profileAvatarWrapper}>
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className={styles.mainAvatar}
                />
                <label className={styles.editAvatar}>
                  <EditIcon />
                </label>
                <span className={styles.statusBadge}>online</span>
              </div>

              <div className={styles.profileMainInfo}>
                <div className={styles.infoTop}>
                  <h2 className={styles.userDisplayName}>
                    Some Name {id && `(#${id})`}{' '}
                    <VerifiedIcon className={styles.verifiedBadge} />
                  </h2>
                  <p className={styles.userLocation}>
                    <LocationOnIcon className={styles.locIcon} /> Romania
                  </p>
                </div>

                <div className={styles.profileStats}>
                  <div className={styles.stat}>
                    <strong>0</strong>
                    <span>Posts</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>2</strong>
                    <span>Comments</span>
                  </div>
                  <div className={styles.stat}>
                    <strong>174K</strong>
                    <span>Views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigarea în Tab-uri (cu BUTOANE în loc de <a>) */}
            <nav className={styles.profileNavTabs}>
              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'timeline' ? styles.active : ''}`}
                onClick={() => setActiveTab('timeline')}
              >
                <CalendarTodayIcon className={styles.tabIcon} /> Timeline
              </button>

              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'about' ? styles.active : ''}`}
                onClick={() => setActiveTab('about')}
              >
                <PersonOutlinedIcon className={styles.tabIcon} /> About
              </button>

              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'friends' ? styles.active : ''}`}
                onClick={() => setActiveTab('friends')}
              >
                <PeopleIcon className={styles.tabIcon} /> Friends ({MOCK_FRIENDS.length})
              </button>

              <button
                type="button"
                className={`${styles.tabBtn} ${activeTab === 'notifications' ? styles.active : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                <NotificationsNoneIcon className={styles.tabIcon} /> Notifications
              </button>
            </nav>
          </div>

          {/* TAB 1: ABOUT */}
          {activeTab === 'about' && (
            <div className={styles.profileGridDetails}>
              <div className={`${styles.detailsCard} ${styles.personalInfo}`}>
                <h3>Personal Information</h3>
                <a href="#" className={styles.editBtnSmall}>
                  <EditIcon fontSize="small" />
                </a>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span>NAME</span>
                    <p>Some Name</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>GENDER</span>
                    <p>Male</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>BIRTHDATE</span>
                    <p>01/01/1998</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>LOCATION</span>
                    <p>Romania</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.detailsCard} ${styles.hobbies}`}>
                <h3>Hobbies And Interest</h3>
                <a href="#" className={styles.editBtnSmall}>
                  <EditIcon fontSize="small" />
                </a>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span>My Hobbies</span>
                    <p>Web design, photo editing, gaming, and design trends.</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>Music</span>
                    <p>Rock, Indie, Synthwave</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>Movies</span>
                    <p>Sci-Fi, Thrillers, Anime</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.detailsCard} ${styles.socialLinks}`}>
                <h3>Social Networks</h3>
                <a href="#" className={styles.editBtnSmall}>
                  <EditIcon fontSize="small" />
                </a>
                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <span>Facebook</span>
                    <p>facebook.com/somename</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>Instagram</span>
                    <p>instagram.com/somename</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>Youtube</span>
                    <p>youtube.com/@somename</p>
                  </div>
                  <div className={styles.infoItem}>
                    <span>LinkedIn</span>
                    <p>linkedin.com/in/somename</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FRIENDS */}
          {activeTab === 'friends' && (
            <div className={styles.friendsSection}>
              <div className={styles.friendsHeader}>
                <h3>Friends List</h3>
                <span>{MOCK_FRIENDS.length} total friends</span>
              </div>
              
              <div className={styles.friendsGrid}>
                {MOCK_FRIENDS.map((friend) => (
                  <div key={friend.id} className={styles.friendCard}>
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className={styles.friendAvatar}
                    />
                    <div className={styles.friendInfo}>
                      <h4>{friend.name}</h4>
                      <p className={styles.friendRole}>{friend.role}</p>
                      <span className={styles.mutualCount}>
                        {friend.mutual} mutual friends
                      </span>
                    </div>

                    <div className={styles.friendActions}>
                      <button type="button" className={styles.msgBtn} title="Send Message">
                        <MessageIcon fontSize="small" />
                      </button>
                      <button type="button" className={styles.removeBtn} title="Remove Friend">
                        <PersonRemoveIcon fontSize="small" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className={styles.emptyTabCard}>
              <h3>Timeline Activity</h3>
              <p>No activity posts to show yet.</p>
            </div>
          )}

          {/* TAB 4: NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <div className={styles.emptyTabCard}>
              <h3>Notifications</h3>
              <p>You have no new notifications.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;