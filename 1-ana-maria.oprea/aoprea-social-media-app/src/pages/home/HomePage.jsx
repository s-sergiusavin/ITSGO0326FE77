import useFetch from "../../hooks/useFetch";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import styles from "./HomePage.modules.scss";

const HomePage = () => {
  const posts = useFetch();
  return (
    <div className={styles.mainContainer}>
      <aside></aside>
      <section>
        {posts.map((post) => {
          return <Newsfeed></Newsfeed>;
        })}
      </section>
      <aside></aside>
    </div>
  );
};
