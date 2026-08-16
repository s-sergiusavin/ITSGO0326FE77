import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import styles from "./HomePage.module.scss";
import feedService from "../../services/feedService";
import LeftSide from "../feed/leftside/LeftSide";
import RightSide from "../feed/rightside/RightSide";

const HomePage = () => {
  // folositi logica aceasta daca vreti sa folositi datele de pe requestul vechi
  // dar va trebui sa schimbati proprietatea description din Newsfeed
  // {postData.body.charAt(0).toUpperCase() + postData.body.slice(1)}
  // in loc de {postData.description.charAt(0).toUpperCase() + postData.description.slice(1)}
  // si de folosit posts in loc de postList mai jos in template
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [postList, setPostList] = useState([]);
  const [isRightSideCollapsed, setIsRightSideCollapsed] = useState(false);

  useEffect(() => {
    async function getPosts() {
      const response = await feedService.get();
      setPostList(response);
      return response;
    }

    getPosts().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className={styles.mainContainer}>
      <aside className={styles.leftSide}>
        <LeftSide />
      </aside>
      <section>
        {postList?.map((post) => {
          return <Newsfeed key={post.id} postData={post} />;
        })}
      </section>
      <aside
        className={`${styles.rightSide} ${
          isRightSideCollapsed ? styles.rightSideCollapsed : ""
        }`}
      >
        <RightSide
          collapsed={isRightSideCollapsed}
          onToggleCollapse={() => setIsRightSideCollapsed((prev) => !prev)}
        />
      </aside>
    </div>
  );
};

export default HomePage;
