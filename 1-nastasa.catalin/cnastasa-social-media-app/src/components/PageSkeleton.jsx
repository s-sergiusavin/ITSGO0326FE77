import styles from "./PageSkeleton.module.scss";

const PageSkeleton = () => (
  <div className={styles.pageSkeleton}>
    <div className={styles.skeletonCover} />
    <div className={styles.skeletonRow}>
      <div className={styles.skeletonAvatar} />
      <div className={styles.skeletonLines}>
        <div className={`${styles.skeletonBar} ${styles.wide}`} />
        <div className={`${styles.skeletonBar} ${styles.narrow}`} />
      </div>
    </div>
    <div className={styles.skeletonBlock} />
    <div className={styles.skeletonBlock} />
  </div>
);

export default PageSkeleton;
