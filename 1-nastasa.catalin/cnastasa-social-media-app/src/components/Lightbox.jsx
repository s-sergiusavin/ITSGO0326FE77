import CloseIcon from "@mui/icons-material/Close";
import styles from "./Lightbox.module.scss";

const Lightbox = ({ src, alt, type = "image", onClose }) => {
  if (!src) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Închide">
        <CloseIcon />
      </button>
      {type === "video" ? (
        <video
          src={src}
          className={styles.video}
          controls
          autoPlay
          loop
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img src={src} alt={alt} className={styles.image} onClick={(e) => e.stopPropagation()} />
      )}
    </div>
  );
};

export default Lightbox;
