import styles from "./landingPage.module.scss";
import post1 from "../../../assets/pic3.jpg";

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>The best</span> summer party
        </h1>

        <p className={styles.headerDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          reiciendis aliquam similique maiores sapiente fuga ratione sint aut
          voluptas assumenda accusamus, dolorum repellendus deserunt sequi
          corrupti consequatur quos impedit temporibus totam corporis.
        </p>

        <div className={styles.formContainer}>
          <form>
            <label htmlFor="name">Enter your name</label>
            <input
              type="text"
              id="name"
              className={styles.name}
              placeholder="your name"
            />
            <p className={styles.example}>Example: Ana-Maria Oprea</p>

            <button type="button" className={styles.callToActionButton}>
              Book now
            </button>
          </form>
        </div>
      </div>

      <div className={styles.callToAction}>
        <div className={styles.callToActionMessage}>
          <h2>Enjoy the Party!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            necessitatibus, dolorem ipsa natus repudiandae sapiente dolore
            corporis enim nobis ullam voluptate.
          </p>

          <img src={post1} alt="Party" className={styles.partyImage} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
