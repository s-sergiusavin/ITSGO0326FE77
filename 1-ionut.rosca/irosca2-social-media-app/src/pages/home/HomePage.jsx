import useFetch from "../../hooks/useFetch";
import LeftSide from "../feed/leftside/LeftSide";
import RightSide from "../feed/rightside/RightSide";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className={styles.mainContainer}>
      <aside className={styles.leftPanel}>
        <LeftSide />
      </aside>

      <section>
        {posts?.map((post) => {
          return <Newsfeed key={post.id} postData={post} />;
        })}
      </section>

      <aside className={styles.rightPanel}>
        <RightSide />
      </aside>
    </div>
  );
};

export default HomePage;