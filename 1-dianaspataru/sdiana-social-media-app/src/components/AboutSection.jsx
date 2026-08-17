import styles from "./AboutSection.module.scss";
import EditIcon from "@mui/icons-material/Edit";

const AboutSection = ({ user, onOpenEditModal, isEditable = false }) => {
  return (
    <div className={styles.profileGridDetails}>
      
      {/* personal */}
      <div className={styles.detailsCard}>
        <div className={styles.cardHeader}>
          <h3>Personal Information</h3>
          {isEditable && (
            <button 
              className={styles.editBtnSmall} 
              onClick={() => onOpenEditModal('personal')}
              aria-label="Edit"
            >
              <EditIcon style={{ fontSize: '18px' }} />
            </button>
          )}
        </div>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span>Name</span>
            <p>{user.name}</p>
          </div>
          <div className={styles.infoItem}>
            <span>Gender</span>
            <p>{user.gender}</p>
          </div>
          <div className={styles.infoItem}>
            <span>Birthdate</span>
            <p>{user.birthdate}</p>
          </div>
          <div className={styles.infoItem}>
            <span>Location</span>
            <p>{user.location}</p>
          </div>
        </div>
      </div>

      {/* hobbies */}
      <div className={`${styles.detailsCard} ${styles.hobbies}`}>
        <div className={styles.cardHeader}>
          <h3>Hobbies & Interests</h3>
          {isEditable && (
            <button 
              className={styles.editBtnSmall} 
              onClick={() => onOpenEditModal('hobbies')}
              aria-label="Edit"
            >
              <EditIcon style={{ fontSize: '18px' }} />
            </button>
          )}
        </div>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span>My Hobbies</span>
            <p>{user.hobbies}</p>
          </div>
          <div className={styles.infoItem}>
            <span>Music</span>
            <p>{user.music}</p>
          </div>
          <div className={styles.infoItem}>
            <span>Movies</span>
            <p>{user.movies}</p>
          </div>
        </div>
      </div>

      {/* social */}
      <div className={styles.detailsCard}>
        <div className={styles.cardHeader}>
          <h3>Social Networks</h3>
          {isEditable && (
            <button 
              className={styles.editBtnSmall} 
              onClick={() => onOpenEditModal('social')}
              aria-label="Editează Rețele Sociale"
            >
              <EditIcon style={{ fontSize: '18px' }} />
            </button>
          )}
        </div>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <span>Facebook</span>
            <p>{user.facebook}{user.name}</p>
          </div>
          <div className={styles.infoItem}>
            <span>Instagram</span>
            <p>{user.instagram}{user.name}</p>
          </div>
          <div className={styles.infoItem}>
            <span>YouTube</span>
            <p>{user.youtube}{user.name}</p>
          </div>
          <div className={styles.infoItem}>
            <span>LinkedIn</span>
            <p>{user.linkedin}{user.name}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutSection;