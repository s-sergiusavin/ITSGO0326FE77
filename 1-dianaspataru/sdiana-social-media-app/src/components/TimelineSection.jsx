import Newsfeed from "../pages/feed/newsfeed/Newsfeed";
import styles from "./TimelineSection.module.scss";

const TimelineSection = ({ postData, user }) => {


  // check For valid id
  if (!postData || !postData.id) {
    return (
      <div className={styles.emptyTabCard}>
        <h3>Timeline Activity</h3>
        <p>No activity posts to show yet.</p>
      </div>
    );
  }


  const postsArray = [postData];

  return (
    <div className={styles.timelineContainer}>
      <Newsfeed posts={postsArray} postData={postData} user={user} />
    </div>
  );
}

export default TimelineSection;