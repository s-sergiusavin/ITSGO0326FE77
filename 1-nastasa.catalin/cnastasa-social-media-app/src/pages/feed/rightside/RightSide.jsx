import styles from "./RightSide.module.scss";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";

const contacts = [
  { name: "Meta AI", color: "linear-gradient(135deg, #8b5cf6, #a855f7)", icon: true, verified: true, online: true },
  { name: "DM Alexandra", color: "#e91e63", initial: "A", online: false },
  { name: "Catalina Luca", color: "#9c27b0", initial: "C", online: false },
  { name: "Ionela-Reli Nastasa", color: "#2196f3", initial: "I", online: true },
];

const RightSide = () => {
  return (
    <div className={styles.rightSide}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionTitle}>Contacte</p>
        <div className={styles.headerActions}>
          <div className={styles.actionBtn}>
            <SearchIcon fontSize="small" />
          </div>
          <div className={styles.actionBtn}>
            <MoreHorizIcon fontSize="small" />
          </div>
        </div>
      </div>

      {contacts.map((contact) => (
        <div className={styles.contactItem} key={contact.name}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatarPlaceholder} style={{ background: contact.color }}>
              {contact.icon ? <SmartToyIcon fontSize="small" /> : contact.initial}
            </div>
            {contact.online && <div className={styles.onlineDot} />}
          </div>
          <span className={styles.contactName}>
            {contact.name} {contact.verified && <VerifiedIcon className={styles.verifiedIcon} />}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
