import styles from './Newsfeed.module.scss'

const Newsfeed = () => {
    return (
        <div className={styles.mainPost}>
            <div  className={styles.post}>
          <div  className={styles.postHeader}>
            <div className={styles.profileUserInfo}>
              <a href=""
                ><img src="../assets/profile.webp" alt=""  className={styles.profileImage}
              /></a>
              <span>Sergiu Savin</span>
              <span>08 Apr 2026</span>
            </div>

            <div  className={styles.profileOptionsWrapper}>
              <button className={styles.profileOptions}>
                <i class="bi bi-three-dots"></i>
              </button>

              <div  className={styles.profileOptionsDropdown}>
                <button>Edit this post</button>
                <button>Remove this post</button>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.imgWrapper}>
              <img src="../assets/post2.webp" alt="post" className={styles.imgContent}/>

              <div  className={styles.infoIconWrapper}>
                <i class="bi bi-info-circle-fill info-icon" tabindex="0"></i>
                <p  className={styles.infoMessage}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam eaque placeat culpa commodi minima. Quod quae
                  quisquam ex nulla ut nobis fugit nostrum incidunt eveniet sunt
                  sint sed ducimus, dolorem in, vel veniam. Facilis quos numquam
                  iure, dolorem exercitationem, nesciunt qui laboriosam sunt
                  sint ut iste odio, ducimus cum dolores?
                  <a href="landing-page.html">Read more...</a>
                </p>
              </div>
            </div>

            <strong  className={styles.postTitle}>Titlul postarii</strong>

            <p  className={styles.postDescription}>
              Aceasta este prima mea postare facuta pe reteaua de socializare
              creata de mine in timpul cursului de Front End Development
            </p>
            <a href="landing-page.html">Read more...</a>
          </div>

          <div  className={styles.reacts}>
            <div  className={styles.likesInfo}>
              <i class="bi bi-hand-thumbs-up-fill reacts-icons"></i>
              <span >25</span> <span> likes</span>
            </div>

            <div class="comments-info" className={styles.commentsInfo}>
              <span ></span> <span>shares</span>
              <i class="bi bi-chat-left-text-fill reacts-icons"></i>
            </div>
          </div>

          <div  className={styles.reactActions}>
            <ul  className={styles.actions}>
              <li  className={styles.reaction} >
                <i class="bi bi-hand-thumbs-up-fill"></i>
                <span>Like</span>
              </li>
              <li  className={styles.reaction} >
                <i class="bi bi-chat-left-text-fill"></i>
                <span>Comment</span>
              </li>
              <li className={styles.reaction}  >
                <i class="bi bi-share-fill"></i>
                <span>Share</span>
              </li>
            </ul>
          </div>

          <hr />

          <div  className={styles.commentSection} >
            <a href="#">
              <img src="../assets/profile.webp" alt=""  className={styles.profileImage} 
            /></a>
            <input
              type="text"
              placeholder="Adauga un comentariu"
              className={styles.newCommentFiled} 
            
            />
            <div  className={styles.wrap} >
              <button
                className={`${styles.insertCommentButton} ${styles.button}`} 
               
              >
                <i class="bi bi-send-fill"></i>
              </button>
            </div>
          </div>

          <div  className={styles.userComments}>
            <div  className={styles.commentContent}>
              <div  className={styles.profileUserComment}>
                <a href="#"
                  ><img
                    src="../assets/profile.webp"
                    alt=""
                    className={styles.profileImage}
                /></a>
                <span>User name</span>
              </div>
              <div  className={styles.userCommentText}>
                <div >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti fugiat, iure consequuntur ex dolores eius culpa eaque
                  voluptatibus soluta eum.
                </div>
                <div  className={styles.emojiReaction}>😎</div>
                <span >Remove this comment</span>
              </div>
              <div  className={styles.commentReaction}>
                <strong  className={styles.commentReactionButton}>Like</strong>
                <strong  className={styles.commentReactionButton}>Comment</strong>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Newsfeed;