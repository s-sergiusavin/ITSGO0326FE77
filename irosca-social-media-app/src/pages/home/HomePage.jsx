import useFetch from "../../hooks/useFetch";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import styles from "./HomePage.module.scss";

const HomePage = () => {

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className={styles.mainContainer}>
      <aside>Left Side (folosim componenta LeftSide)</aside>
      <section>
        {posts?.map( post => {
            return <Newsfeed key={post.id} postData={post}/>
        })}
      </section>
      <aside>Right Side</aside>
    </div>
  );
};

export default HomePage;
