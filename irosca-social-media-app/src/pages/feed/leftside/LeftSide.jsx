import { useState } from "react";
import styles from "../styles/LeftSidebar.module.scss";

export default function LeftSidebar() {
  const [toyClicks, setToyClicks] = useState(0);

  return (
    <div className={styles.sidebar}>
      <h3>Zona de Joacă 🐾</h3>

      <p>Jucării preferate:</p>
      <ul>
        <li>Șoricel</li>
        <li>Băț cu pene</li>
        <li>Minge</li>
      </ul>

      <button onClick={() => setToyClicks(toyClicks + 1)}>
        Pisica s-a jucat de {toyClicks} ori
      </button>
    </div>
  );
}
