import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredPosts, selectSearchTerm } from "../../redux/selectors";
import { addPost } from "../../redux/slices/feedSlice";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import LeftSide from "../feed/leftside/LeftSide";
import RightSide from "../feed/rightside/RightSide";
import profile from "../../assets/profil.jpg";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const posts = useSelector(selectFilteredPosts);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();
  const [postDraft, setPostDraft] = useState("");

  const submitPost = () => {
    if (!postDraft.trim()) return;

    dispatch(addPost({ author: "Catalin Nastasa", title: postDraft.trim() }));
    setPostDraft("");
  };

  return (
    <div className={styles.mainContainer}>
      <aside className={styles.leftSide}>
        <LeftSide />
      </aside>
      <section>
        <div className={styles.composer}>
          <img src={profile} alt="" className={styles.composerAvatar} />
          <input
            type="text"
            placeholder="Ce mai faci, Catalin?"
            className={styles.composerField}
            value={postDraft}
            onChange={(e) => setPostDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submitPost();
            }}
          />
          <button className={styles.composerButton} onClick={submitPost}>
            Postează
          </button>
        </div>

        {posts.length === 0 && searchTerm.trim() && (
          <p className={styles.noResults}>Nicio postare găsită.</p>
        )}

        {posts.map((post) => (
          <Newsfeed key={post.id} postData={post} />
        ))}
      </section>
      <aside className={styles.rightSide}>
        <RightSide />
      </aside>
    </div>
  );
};

export default HomePage;
