import styles from "./FriendsSection.module.scss";
import MessageIcon from "@mui/icons-material/Message";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const FriendsSection = ({ friends }) => {

 return (
    <div className={styles.friendsSection}>
      <div className={styles.friendsHeader}>
        <h3>Friends List</h3>
        <span>{friends.length} total friends</span>
      </div>

      <div className={styles.friendsGrid}>
        {friends.map((friend) => (
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
              <button className={styles.msgBtn}>
                <MessageIcon fontSize="small" />
              </button>
              <button className={styles.removeBtn}>
                <PersonRemoveIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default  FriendsSection;
