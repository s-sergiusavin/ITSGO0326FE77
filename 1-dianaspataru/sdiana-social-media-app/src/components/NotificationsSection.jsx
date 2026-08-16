import styles from "./NotificationsSection.module.scss";

export default function NotificationsSection() {
  return (
    <div className={styles.emptyTabCard}>
      <h3>Notifications</h3>
      <p>You have no new notifications.</p>
    </div>
  );
}
