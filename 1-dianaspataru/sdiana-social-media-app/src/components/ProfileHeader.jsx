import styles from"./ProfileHeader.module.scss";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ProfileHeader({ user, onEditAvatar, onEditCover, editable = true }) {
  return (
    <div className={styles.profileHeaderCard}>
      <div className={styles.profileBanner}>
        <img src={user.cover} alt="Banner" />

        {editable && (
          <label className={styles.editCover} onClick={onEditCover}>
            <PhotoCameraIcon />
          </label>
        )}
      </div>

      <div className={styles.profileHeaderBody}>
        <div className={styles.profileAvatarWrapper}>
          <img src={user.avatar} alt="Profile" className={styles.mainAvatar} />

          {editable && (
            <label className={styles.editAvatar} onClick={onEditAvatar}>
              <EditIcon />
            </label>
          )}

          <span className={styles.statusBadge}>online</span>
        </div>

        <div className={styles.profileMainInfo}>
          <div>
            <h2 className={styles.userDisplayName}>
              {user.name}
              <VerifiedIcon className={styles.verifiedBadge} />
            </h2>

            <p className={styles.userLocation}>
              <LocationOnIcon className={styles.locIcon} /> {user.location}
            </p>
          </div>

          <div className={styles.profileStats}>
            <div className={styles.stat}>
              <strong>{user.posts}</strong>
              <span>Posts</span>
            </div>
            <div className={styles.stat}>
              <strong>{user.comments}</strong>
              <span>Comments</span>
            </div>
            <div className={styles.stat}>
              <strong>{user.views}</strong>
              <span>Views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}