import styles from "./Newsfeed.module.scss";
import profile from "../../../assets/profile.webp";
import post1 from "../../../assets/post.avif";
import post2 from "../../../assets/post2.webp";

// Material UI IMPORTS
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoIcon from "@mui/icons-material/Info";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';
import SendIcon from '@mui/icons-material/Send';

const Newsfeed = ({ postData }) => {
  const postImages = [post1, post2];

  return (
    <div className={styles.mainPost}>
      <div className={styles.post}>
        <div className={styles.postHeader}>
          <div className={styles.profileUserInfo}>
            <a href="">
              <img src={profile} alt="" className={styles.profileImage} />
            </a>
            <span>Sergiu Savin</span>
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
              <InfoIcon />
              <p className={styles.infoMessage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam eaque placeat culpa commodi minima. Quod quae quisquam
                ex nulla ut nobis fugit nostrum incidunt eveniet sunt sint sed
                ducimus, dolorem in, vel veniam. Facilis quos numquam iure,
                dolorem exercitationem, nesciunt qui laboriosam sunt sint ut
                iste odio, ducimus cum dolores?
                <a href="landing-page.html">Read more...</a>
              </p>
            </div>
          </div>

          <strong className={styles.postTitle}>Titlul postarii</strong>

          <p className={styles.postDescription}>
            Aceasta este prima mea postare facuta pe reteaua de socializare
            creata de mine in timpul cursului de Front End Development
          </p>
          <a href="landing-page.html">Read more...</a>
        </div>

        <div className={styles.reacts}>
          <div className={styles.likesInfo}>
            <ThumbUpIcon/>
            <span>25</span> <span> likes</span>
          </div>

          <div className={styles.commentsInfo}>
            <span>12</span> <span>shares</span>
            <ChatIcon/>
          </div>
        </div>

        <div className={styles.reactActions}>
          <ul className={styles.actions}>
            <li className={styles.reaction}>
              <ThumbUpIcon/>
              <span>Like</span>
            </li>
            <li className={styles.reaction}>
              <ChatIcon/>
              <span>Comment</span>
            </li>
            <li className={styles.reaction}>
              <ReplyIcon/>
              <span>Share</span>
            </li>
          </ul>
        </div>

        <hr />

        <div className={styles.commentSection}>
          <a href="#">
            <img
              src={profile}
              alt=""
              className={styles.profileImage}
            />
          </a>
          <input
            type="text"
            placeholder="Adauga un comentariu"
            className={styles.newCommentField}
          />
          <div className={styles.wrap}>
            <button className={`${styles.insertCommentButton} ${styles.button}`}>
              <SendIcon/>
            </button>
          </div>
        </div>

        <div className={styles.userComments}>
          <div className={styles.commentContent}>
            <div className={styles.profileUserComment}>
              <a href="#">
                <img
                  src={profile}
                  alt=""
                  className={styles.profileImage}
                />
              </a>
              <span>User name</span>
            </div>
            <div className={styles.userCommentText}>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti fugiat, iure consequuntur ex dolores eius culpa eaque
                voluptatibus soluta eum.
              </div>
              <div className={styles.emojiReaction}>😎</div>
              <span>Remove this comment</span>
            </div>
            <div className={styles.commentReaction}>
              <strong className={styles.commentReactionButton}>Like</strong>
              <strong className={styles.commentReactionButton}>Comment</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
