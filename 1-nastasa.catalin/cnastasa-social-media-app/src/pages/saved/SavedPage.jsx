import { useSelector } from "react-redux";
import { selectSavedPosts } from "../../redux/selectors";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import styles from "./SavedPage.module.scss";

const SavedPage = () => {
  const savedPosts = useSelector(selectSavedPosts);

  return (
    <div className={styles.savedPage}>
      <h1>Elemente salvate</h1>

      {savedPosts.length === 0 && (
        <p className={styles.emptyHint}>Nu ai nicio postare salvată. Apasă pe "..." la o postare și alege "Salvează postarea".</p>
      )}

      {savedPosts.map((post) => (
        <Newsfeed key={post.id} postData={post} />
      ))}
    </div>
  );
};

export default SavedPage;
