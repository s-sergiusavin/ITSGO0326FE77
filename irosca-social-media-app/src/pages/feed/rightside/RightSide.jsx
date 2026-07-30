import { useState } from "react";
import styles from "../styles/RightSidebar.module.scss";

export default function RightSidebar() {
  const [food, setFood] = useState("");

  return (
    <div className={styles.sidebar}>
      <h3>Hrănirea Pisicii 🍲</h3>

      <input
        type="text"
        placeholder="Cu ce hranim pisica?"
        onChange={(e) => setFood(e.target.value)}
      />

      {food && <p>Pisica a mâncat: <strong>{food}</strong></p>}
    </div>
  );
}
