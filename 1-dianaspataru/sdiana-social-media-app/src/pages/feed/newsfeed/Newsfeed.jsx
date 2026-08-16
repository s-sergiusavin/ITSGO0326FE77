import styles from "./Newsfeed.module.scss";
import profile from "../../../assets/profile.webp";
import post1 from "../../../assets/post.avif";
import post2 from "../../../assets/post2.webp";

// Material UI IMPORTS
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import CommentsSection from "./comments/CommentsSection";
import { useNavigate } from "react-router-dom";

// Configurare reacții disponibile
const REACTIONS = [
  { label: "Like", emoji: "👍", color: "#2196f3" },
  { label: "Love", emoji: "❤️", color: "#e91e63" },
  { label: "Haha", emoji: "😆", color: "#fbc02d" },
  { label: "Wow", emoji: "😮", color: "#fbc02d" },
  { label: "Sad", emoji: "😢", color: "#fbc02d" },
  { label: "Angry", emoji: "😡", color: "#e65100" }
];

const Newsfeed = ({ postData, user, currentUser }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [otherReactsCount, setOtherReactsCount] = useState(() => Math.floor(Math.random() * 20) + 1);
  const [showPicker, setShowPicker] = useState(false);
  
  const [isShared, setIsShared] = useState(false);
  const [shares, setShares] = useState(Math.floor(Math.random() * 100));

  const postImages = [post1, post2];
  const navigate = useNavigate();

  
  const handleLikeClick = () => {
    if (selectedReaction) {
      setSelectedReaction(null); 
    } else {
      setSelectedReaction(REACTIONS[0]); 
    }
  };

  
  const handleSelectReaction = (reaction) => {
    setSelectedReaction(reaction);
    setShowPicker(false);
  };

  const handleShare = () => {
    setShares((prevState) => prevState + 1);
    setIsShared(true);
  };

  const goToProfilePage = () => {
    navigate(`/user/${postData.id}`);
  };

  const goToNotFound = () => {
    navigate("/not-found");
  };

 
  const activeEmojis = selectedReaction 
    ? Array.from(new Set([selectedReaction.emoji, "❤️"])) 
    : [ "❤️"];

  return (
    <div className={styles.mainPost}>
      <div className={styles.post}>
        {/* Post Header */}
        <div className={styles.postHeader}>
          <div className={styles.profileUserInfo} onClick={goToProfilePage}>
            <a href="#">
              <img 
                src={user?.avatar || profile} 
                alt={user?.name || "Profile"} 
                className={styles.profileImage} 
              />
            </a>
            <span>{user?.name || "User Name"}</span>
            <span>08 Apr 2026</span>
          </div>

          <div className={styles.profileOptionsWrapper}>
            <button className={styles.profileOptions}>
              <MoreHorizIcon />
            </button>

            <div className={styles.profileOptionsDropdown}>
              <button>Unfollow</button>
              <button>Report User</button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            {postData.video ? (
              <video controls className={styles.imgContent}>
                <source src={postData.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={postData.image || postImages[postData.id % 2]}
                alt="post"
                className={styles.imgContent}
              />
            )}
          </div>

          <strong className={styles.postTitle}>
            {postData.title.charAt(0).toUpperCase() + postData.title.slice(1)}
          </strong>

          <p className={styles.postDescription}>
            {postData.description.charAt(0).toUpperCase() + postData.description.slice(1)}
          </p>
          <span className={styles.readMore} onClick={goToNotFound}>
            Read more...
          </span>
        </div>

        {/* Dynamic Reacts Bar (Stil imagine trimisă de tine) */}
        <div className={styles.reacts}>
          <div className={styles.likesInfo}>
            <div className={styles.emojiStack}>
              {activeEmojis.map((emoji, idx) => (
                <span key={idx} className={styles.emojiBadge}>{emoji}</span>
              ))}
            </div>
            
            <span className={styles.reactedText}>
              Reacted by{" "}
              <strong>
                {selectedReaction ? (currentUser?.name || "You") :  "Some Name"}
              </strong>{" "}
              and {otherReactsCount} others
            </span>
          </div>

          <div className={styles.commentsInfo}>
            <span>{shares}</span> <span>shares</span>
            <ChatIcon />
          </div>
        </div>

        {/* Reaction Actions cu Pop-up selector */}
        <div className={styles.reactActions}>
          <ul className={styles.actions}>
            <li
              className={styles.reactionWrapper}
              onMouseEnter={() => setShowPicker(true)}
              onMouseLeave={() => setShowPicker(false)}
            >
              {/* Pop-up-ul cu reacții la Hover */}
              {showPicker && (
                <div className={styles.reactionsPicker}>
                  {REACTIONS.map((reaction) => (
                    <button
                      key={reaction.label}
                      className={styles.reactionBtn}
                      onClick={() => handleSelectReaction(reaction)}
                    >
                      <span className={styles.emojiIcon}>{reaction.emoji}</span>
                      <span className={styles.tooltip}>{reaction.label}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* buton like*/}
              <button
                className={`${styles.reaction} ${selectedReaction ? styles.touched : ""}`}
                onClick={handleLikeClick}
                style={{ color: selectedReaction ? selectedReaction.color : "inherit" }}
              >
                {selectedReaction ? (
                  <span className={styles.activeEmoji}>{selectedReaction.emoji}</span>
                ) : (
                  <ThumbUpIcon />
                )}
                <span>{selectedReaction ? selectedReaction.label : "Like"}</span>
              </button>
            </li>

            <li className={styles.reaction}>
              <ChatIcon />
              <span>Comment</span>
            </li>

            <li
              className={`${styles.reaction} ${isShared ? styles.touched : ""}`}
              onClick={handleShare}
            >
              <ReplyIcon />
              <span>Share</span>
            </li>
          </ul>
        </div>

        <hr />

        {/*comment section */}
        <div className={styles.commentSection}>
          <a href="#">
            <img 
              src={currentUser?.avatar || profile} 
              alt={currentUser?.name || "My Profile"} 
              className={styles.profileImage} 
            />
          </a>
          <input
            type="text"
            placeholder="Write a comment..."
            className={styles.newCommentField}
          />
          <div className={styles.wrap}>
            <button className={`${styles.insertCommentButton} ${styles.button}`}>
              <SendIcon />
            </button>
          </div>
        </div>

        <CommentsSection />
      </div>
    </div>
  );
};

export default Newsfeed;
