import styles from "./MyProfile.module.scss";
import catImage from "../../assets/cat.webp";

const MyProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <img src={catImage} alt="Cat caregiver" className={styles.profileImage} />
        
        <div className={styles.profileInfo}>
          <h1>Ionut Rosca</h1>
          <p className={styles.role}>Ingrijitor pisici</p>
          
          <section className={styles.section}>
            <h2>Despre mine</h2>
            <p>
              Bună! Sunt Ionut, un pasionat de pisici cu peste 5 ani de experiență 
              în îngrijirea și educarea acestor minunate creaturi. Iubesc să petrec 
              timp cu pisicile și să le ofer cea mai bună îngrijire posibilă.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Servicii</h2>
            <ul className={styles.servicesList}>
              <li>Hranire si hidratare zilnica</li>
              <li>Curatare litiera</li>
              <li>Timp de joaca si divertisment</li>
              <li>Pieptanare si ingrijire gherute</li>
              <li>Coordonare medicala catre personal specializat</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Experienta</h2>
            <p>
              Am îngrijit peste 50 de pisicute, de la pisici domestice 
              până la rase speciale. Sunt certificat în prim ajutor pentru animale 
              și mă țin la curent cu cele mai noi practici de îngrijire a pisicilor.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>
            <p>Email: <a href="mailto:ionut.rosca@casapentrupisici.ro" className={styles.emailLink}>ionut.rosca@casapentrupisici.ro</a></p>
            <p>Phone: +40 766 244 636</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;