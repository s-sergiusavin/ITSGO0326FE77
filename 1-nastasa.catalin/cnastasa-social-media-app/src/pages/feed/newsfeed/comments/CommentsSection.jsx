import { useState } from "react";
import styles from "./CommentsSection.module.scss";
import profile from "../../../../assets/profil.jpg";

const avatarColors = ["#2196f3", "#9c27b0", "#e91e63", "#31a24c", "#f3425f", "#ff9800", "#00bcd4"];

const getAvatarColor = (name) => {
  const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatarColors[hash % avatarColors.length];
};

const CommentsSection = ({ comment, onRemove }) => {
  const [hovered, setHovered] = useState(false);
  const isOwnComment = comment.author === "Catalin Nastasa";

  return (
    <div className={styles.userComments}>
      <div className={styles.commentContent}>
        <div className={styles.profileUserComment}>
          {isOwnComment ? (
            <img src={profile} alt="" className={styles.profileImage} />
          ) : (
            <div className={styles.avatarPlaceholder} style={{ background: getAvatarColor(comment.author) }}>
              {comment.author.charAt(0)}
            </div>
          )}
          <span>{comment.author}</span>
        </div>
        <div
          className={styles.userCommentText}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div>{comment.text}</div>
          <div className={styles.emojiReaction}>😍</div>
          {hovered && (
            <span className={styles.removeButton} onClick={onRemove}>
              Șterge comentariul
            </span>
          )}
        </div>
        <div className={styles.commentReaction}>
          <strong className={styles.commentReactionButton}>Apreciază</strong>
          <strong className={styles.commentReactionButton}>Comentează</strong>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
