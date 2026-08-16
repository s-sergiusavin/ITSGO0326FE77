import { useRef, useState } from "react";
import styles from "./Newsfeed.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import profile from "../../../assets/profil.jpg";
import CommentsSection from "./comments/CommentsSection";
import Lightbox from "../../../components/Lightbox";
import { addComment, removeComment, setReaction, toggleSave, toggleShare } from "../../../redux/slices/feedSlice";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import PublicIcon from "@mui/icons-material/Public";

const reactionOptions = [
  { type: "like", label: "Apreciază", icon: <ThumbUpIcon fontSize="small" />, color: "#1877f2" },
  { type: "love", label: "Ador", icon: <FavoriteIcon fontSize="small" />, color: "#f33e58" },
  { type: "haha", label: "Haha", icon: <EmojiEmotionsIcon fontSize="small" />, color: "#f7b125" },
];

const imageModules = import.meta.glob("../../../assets/*.{jpg,png}", { eager: true, import: "default" });

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path.match(/([^/]+)\.\w+$/)[1], mod])
);

const getImage = (name) => images[name];

const Newsfeed = ({ postData }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [reactionPickerOpen, setReactionPickerOpen] = useState(false);
  const [commentDraft, setCommentDraft] = useState("");
  const [previewImage, setPreviewImage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const commentInputRef = useRef(null);

  const activeReaction = reactionOptions.find((option) => option.type === postData.reaction);

  const handleReaction = (type) => {
    dispatch(setReaction({ postId: postData.id, type }));
    setReactionPickerOpen(false);
  };

  const handleMainReactionClick = () => {
    handleReaction(postData.reaction ? postData.reaction : "like");
  };

  const handleShare = () => {
    dispatch(toggleShare(postData.id));
  };

  const goToProfilePage = () => {
    navigate(`/profile/${postData.id}`);
  };

  const focusCommentInput = () => {
    commentInputRef.current?.focus();
  };

  const submitComment = () => {
    if (!commentDraft.trim()) return;

    dispatch(addComment({ postId: postData.id, author: "Catalin Nastasa", text: commentDraft.trim() }));
    setCommentDraft("");
  };

  const handleRemoveComment = (commentId) => {
    dispatch(removeComment({ postId: postData.id, commentId }));
  };

  const isGrid = postData.images.length > 1;

  return (
    <div className={styles.mainPost}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.profileUserInfo} onClick={goToProfilePage}>
            <img src={profile} alt="" className={styles.profileImage} />
            <div className={styles.postHeaderText}>
              <span className={styles.postAuthorLine}>
                <strong>{postData.author}</strong>
                {postData.taggedFriend && (
                  <>
                    {" "}este împreună cu <strong>{postData.taggedFriend}</strong>
                  </>
                )}
                {!postData.taggedFriend && ` ${postData.title}`}
              </span>
              <span className={styles.postMetaLine}>
                {postData.meta} <PublicIcon fontSize="inherit" />
              </span>
            </div>
          </div>

          <div className={styles.profileOptionsWrapper}>
            <button
              className={styles.profileOptions}
              onClick={() => setOptionsOpen((prevState) => !prevState)}
              onBlur={() => setOptionsOpen(false)}
              aria-label="Mai multe opțiuni"
            >
              <MoreHorizIcon />
            </button>

            {optionsOpen && (
              <div className={styles.profileOptionsDropdown}>
                <button onClick={() => dispatch(toggleSave(postData.id))}>
                  {postData.isSaved ? "Elimină din salvate" : "Salvează postarea"}
                </button>
                <button>Editează postarea</button>
                <button>Șterge postarea</button>
              </div>
            )}
          </div>
        </div>

        {postData.taggedFriend && (
          <strong className={styles.postTitle}>{postData.title}</strong>
        )}

        {postData.images.length > 0 && (
          <div className={isGrid ? styles.photoGrid : styles.imgWrapper}>
            {postData.images.map((image) => (
              <img
                key={image}
                src={getImage(image)}
                alt={postData.title}
                className={styles.imgContent}
                onClick={() => setPreviewImage(getImage(image))}
              />
            ))}
          </div>
        )}

        <div className={styles.reacts}>
          <div className={styles.likesInfo} style={activeReaction ? { color: activeReaction.color } : undefined}>
            {activeReaction ? activeReaction.icon : <ThumbUpIcon fontSize="small" />}
            <span>{postData.likes}</span> <span>aprecieri</span>
          </div>

          <div className={styles.commentsInfo}>
            <span>{postData.commentsCount} comentarii</span>
          </div>

          <div className={styles.commentsInfo}>
            <span>{postData.shares}</span> <span>distribuiri</span>
          </div>
        </div>

        <div className={styles.reactActions}>
          <ul className={styles.actions}>
            <li
              className={styles.reactionWrapper}
              onMouseEnter={() => setReactionPickerOpen(true)}
              onMouseLeave={() => setReactionPickerOpen(false)}
            >
              {reactionPickerOpen && (
                <div className={styles.reactionPicker}>
                  <div className={styles.reactionPickerInner}>
                    {reactionOptions.map((option) => (
                      <button
                        key={option.type}
                        className={styles.reactionOption}
                        style={{ color: option.color }}
                        onClick={() => handleReaction(option.type)}
                        title={option.label}
                      >
                        {option.icon}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={styles.reaction}
                style={activeReaction ? { color: activeReaction.color } : undefined}
                onClick={handleMainReactionClick}
              >
                {activeReaction ? activeReaction.icon : <ThumbUpIcon fontSize="small" />}
                <span>{activeReaction ? activeReaction.label : "Apreciază"}</span>
              </div>
            </li>
            <li className={styles.reaction} onClick={focusCommentInput}>
              <ChatIcon fontSize="small" />
              <span>Comentează</span>
            </li>
            <li
              className={`${styles.reaction} ${postData.isShared ? styles.touched : ""}`}
              onClick={handleShare}
            >
              <ShareIcon fontSize="small" />
              <span>Distribuie</span>
            </li>
          </ul>
        </div>

        <hr />

        <div className={styles.commentSection}>
          <img src={profile} alt="" className={styles.profileImage} />
          <input
            type="text"
            placeholder="Adaugă un comentariu"
            className={styles.newCommentField}
            ref={commentInputRef}
            value={commentDraft}
            onChange={(e) => setCommentDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitComment();
            }}
          />
          <div className={styles.wrap}>
            <button className={styles.insertCommentButton} onClick={submitComment} aria-label="Trimite comentariul">
              <SendIcon fontSize="small" />
            </button>
          </div>
        </div>

        {postData.comments.map((comment) => (
          <CommentsSection
            key={comment.id}
            comment={comment}
            onRemove={() => handleRemoveComment(comment.id)}
          />
        ))}
      </div>

      <Lightbox src={previewImage} alt={postData.title} onClose={() => setPreviewImage(null)} />
    </div>
  );
};

export default Newsfeed;
