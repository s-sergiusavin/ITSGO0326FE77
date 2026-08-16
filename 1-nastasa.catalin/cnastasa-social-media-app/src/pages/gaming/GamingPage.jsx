import styles from "./GamingPage.module.scss";
import game1 from "../../assets/gaming/game1.jpg";
import game2 from "../../assets/gaming/game2.jpg";
import game3 from "../../assets/gaming/game3.jpg";
import game4 from "../../assets/gaming/game4.jpg";
import game5 from "../../assets/gaming/game5.jpg";
import game6 from "../../assets/gaming/game6.jpg";

const games = [
  { id: 1, image: game1, title: "Setup RGB", subtitle: "Disponibil în curând" },
  { id: 2, image: game2, title: "Gaming chairs", subtitle: "Disponibil în curând" },
  { id: 3, image: game3, title: "PC setup", subtitle: "Disponibil în curând" },
  { id: 4, image: game4, title: "Monitor & tastatură", subtitle: "Disponibil în curând" },
  { id: 5, image: game5, title: "Gameplay live", subtitle: "Disponibil în curând" },
  { id: 6, image: game6, title: "Headset & monitoare", subtitle: "Disponibil în curând" }
];

const GamingPage = () => {
  return (
    <div className={styles.gamingPage}>
      <h1>Gaming</h1>
      <p>Jocurile tale.</p>

      <div className={styles.placeholderGrid}>
        {games.map((game) => (
          <div key={game.id} className={styles.gameCard}>
            <img src={game.image} alt={game.title} className={styles.gameThumbnail} />
            <div className={styles.gameInfo}>
              <h3>{game.title}</h3>
              <p>{game.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamingPage;
