
import styles from "./EditProfileModal.module.scss";

const EditProfileModal = ({ section, onClose }) => {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalCard}>
        <h3>Edit {section ? section.toUpperCase() : "Profile"}</h3>

        <label>Name</label>
        <input type="text" />

        <label>Bio</label>
        <textarea />

        <div className={styles.modalActions}>
          <button className={styles.saveBtn}>Save</button>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
