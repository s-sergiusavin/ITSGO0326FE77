import styles from "./NotificationsSection.module.scss";

const NotificationsSection = () => {

  return (
    <div className={styles.emptyTabCard}>
      <h3>Notifications</h3>
      <p>You have no new notifications.</p>
    </div>
  );
}

export default  NotificationsSection;
