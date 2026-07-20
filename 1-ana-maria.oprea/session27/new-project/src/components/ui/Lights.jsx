import styles from "./Lights.module.scss";

function Lights({ lightsOn }) {
  return (
    <div
      className={`${styles.lights} ${lightsOn ? "styles.yellow" : ""}`}
    ></div>
  );
}

export default Lights;
