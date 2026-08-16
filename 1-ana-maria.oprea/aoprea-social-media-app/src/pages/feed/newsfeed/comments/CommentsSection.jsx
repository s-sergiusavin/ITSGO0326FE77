import styles from "./CommentsSection.module.scss";
import profile from "../../../../assets/pic2.jpg";

const CommentsSection = ({ comments = [], onRemoveComment = () => {} }) => {
  if (comments.length === 0) {
    return <p className={styles.emptyComments}>No comments yet.</p>;
  }

  return (
    <div className={styles.userComments}>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentContent}>
          <div className={styles.profileUserComment}>
            <a href="#">
              <img src={profile} alt="" className={styles.profileImage} />
            </a>
            <span>User name</span>
          </div>
          <div className={styles.userCommentText}>
            <div className={styles.textComment}>{comment.text}</div>
            <div className={styles.emojiReaction}>😎</div>
            <button
              type="button"
              className={styles.removeCommentButton}
              onClick={() => onRemoveComment(comment.id)}
            >
              Remove this comment
            </button>
          </div>
          <div className={styles.commentReaction}>
            <strong className={styles.commentReactionButton}>Like</strong>
            <strong className={styles.commentReactionButton}>Comment</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
