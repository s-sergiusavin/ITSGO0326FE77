import styles from "./Newsfeed.module.scss";
import profile from "../../../assets/pic2.jpg";
import post1 from "../../../assets/pic3.jpg";
import post2 from "../../../assets/post2.webp";

// Material UI IMPORTS
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { useEffect, useState } from "react";
import CommentsSection from "./comments/CommentsSection";
import { useNavigate } from "react-router-dom";

const Newsfeed = ({ postData }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(() => {
    const base = Number(postData?.id ?? 1) * 17;
    return (base % 97) + 10;
  });
  const [isShared, setIsShared] = useState(false);
  const [shares, setShares] = useState(() => {
    const base = Number(postData?.id ?? 1) * 29;
    return (base % 89) + 12;
  });
  const [isSaved, setIsSaved] = useState(false);
  const [newComment, setNewComment] = useState("");
  const storageKey = `comments-${postData?.id ?? "default"}`;
  const [comments, setComments] = useState(() => {
    try {
      const savedComments = localStorage.getItem(storageKey);
      return savedComments ? JSON.parse(savedComments) : [];
    } catch (error) {
      console.error("Failed to load comments from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  const postImages = [post1, post2];

  const navigate = useNavigate();

  const triggerLeftSideFeedback = (action) => {
    window.dispatchEvent(
      new CustomEvent("left-side-shake", {
        detail: { action },
      }),
    );
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevState) => prevState + 1);
    } else {
      setLikes((prevState) => prevState - 1);
    }

    setIsLiked((prevState) => !prevState);
    triggerLeftSideFeedback("like");
  };

  const handleShare = () => {
    setShares((prevState) => prevState + 1);
    setIsShared(true);
  };

  const toggleSave = () => {
    setIsSaved((prevState) => !prevState);
    triggerLeftSideFeedback("save");
  };

  const handleAddComment = () => {
    const trimmedComment = newComment.trim();

    if (!trimmedComment) {
      return;
    }

    setComments((prevComments) => [
      ...prevComments,
      {
        id: Date.now(),
        text: trimmedComment,
      },
    ]);
    setNewComment("");
  };

  const handleRemoveComment = (commentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId),
    );
  };

  const goToProfilePage = () => {
    navigate(`/profile/${postData.id}`);
  };

  const goToLandingPage = () => {
    navigate(`/landing-page`);
  };

  return (
    <div className={styles.mainPost}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.profileUserInfo} onClick={goToProfilePage}>
            <a href="">
              <img src={profile} alt="" className={styles.profileImage} />
            </a>
            <span>Ana-Maria Oprea</span>
            <span>08 Apr 2026</span>
          </div>

          <div className={styles.profileOptionsWrapper}>
            <button className={styles.profileOptions}>
              <MoreHorizIcon />
            </button>

            <div className={styles.profileOptionsDropdown}>
              <button>Edit this post</button>
              <button>Remove this post</button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.imgWrapper}>
            <img
              src={postImages[postData.id % 2]}
              alt="post"
              className={styles.imgContent}
            />

            <div className={styles.infoIconWrapper}>
              <div className={styles.infoIcon} onClick={goToLandingPage}>
                <InfoIcon fontSize="large" />
              </div>

              <p className={styles.infoMessage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam eaque placeat culpa commodi minima. Quod quae quisquam
                ex nulla ut nobis fugit nostrum incidunt eveniet sunt sint sed
                ducimus, dolorem in, vel veniam. Facilis quos numquam iure,
                dolorem exercitationem, nesciunt qui laboriosam sunt sint ut
                iste odio, ducimus cum dolores?
                <button className={styles.readMore}>Read more...</button>
              </p>
            </div>
          </div>

          <strong className={styles.postTitle}>
            {postData.title.charAt(0).toUpperCase() + postData.title.slice(1)}
          </strong>

          <p className={styles.postDescription}>
            {postData.description.charAt(0).toUpperCase() +
              postData.description.slice(1)}
          </p>
          <button className={styles.readMore} onClick={goToLandingPage}>
            Read more...
          </button>
        </div>

        <div className={styles.reacts}>
          <div className={styles.likesInfo}>
            <span>{likes}</span> <span>likes</span>
          </div>

          <div className={styles.commentsInfo}>
            <span>{shares}</span> <span>shares</span>
          </div>
        </div>

        <div className={styles.reactActions}>
          <ul className={styles.actions}>
            <li
              className={`${styles.reaction} ${isLiked ? styles.touchedLike : ""}`}
              onClick={handleLike}
            >
              <FavoriteBorderIcon />
              <span>Like</span>
            </li>
            <li className={styles.reaction}>
              <ChatIcon />
              <span>Comment</span>
            </li>
            <li
              className={`${styles.reaction} ${isSaved ? styles.touched : ""}`}
              onClick={toggleSave}
            >
              <TurnedInIcon />
              <span>{isSaved ? "Saved" : "Save"}</span>
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

        <div className={styles.commentSection}>
          <a href="#">
            <img src={profile} alt="" className={styles.profileImage} />
          </a>
          <input
            type="text"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            placeholder="Adauga un comentariu"
            className={styles.newCommentField}
          />
          <div className={styles.wrap}>
            <button
              type="button"
              onClick={handleAddComment}
              className={`${styles.insertCommentButton} ${styles.button}`}
            >
              <SendIcon />
            </button>
          </div>
        </div>

        <CommentsSection
          comments={comments}
          onRemoveComment={handleRemoveComment}
        />
      </div>
    </div>
  );
};

export default Newsfeed;
