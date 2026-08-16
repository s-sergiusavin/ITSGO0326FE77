import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Newsfeed from "../feed/newsfeed/Newsfeed";
import styles from "./HomePage.module.scss";
import feedService from "../../services/feedService";
import LeftSide from "../feed/leftside/LeftSide";
import RightSide from "../feed/rightside/RightSide";


const MOCK_CURRENT_USER = {
  name: "Stan Maria",
  location: "Bucharest, Romania",
  posts: 0,
  comments: 2,
  views: 174000,
  gender: "Female",
  birthdate: "01/01/1998",
  hobbies: "Web design, gaming, design trends",
  music: "Rock, Indie, Synthwave",
  movies: "Sci-Fi, Thrillers, Anime",
  facebook: "facebook.com/",
  instagram: "instagram.com/",
  youtube: "youtube.com/",
  linkedin: "linkedin.com/in/e",
  avatar: "https://i.pravatar.cc/150?img=3",
  cover: "https://images.unsplash.com/photo-1503264116251-35a269479413"
};

const HomePage = ({ user }) => {
 
  const currentUser = user || MOCK_CURRENT_USER;

  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  const profiles = useFetch("http://localhost:3000/profiles");

  const [postList, setPostList] = useState([]);

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
        {/* currentuser | info from myprofile */}
        <LeftSide user={currentUser} />
      </aside>

      <section>
        {postList?.map((post) => {
          const userForPost = profiles?.find(
            (profile) => String(profile.id) === String(post.id)
          );

          return (
            <Newsfeed
              key={post.id}
              postData={post}
              user={userForPost}          
              currentUser={currentUser}   
            />
          );
        })}
      </section>

      <aside className={styles.rightSide}>
        <RightSide />
      </aside>
    </div>
  );
};

export default HomePage;