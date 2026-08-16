import styles from "./MemoriesPage.module.scss";
import profile from "../../assets/profil.jpg";
import fluture1 from "../../assets/fluture1.jpg";
import lasertag from "../../assets/lasertag.jpg";
import titanii from "../../assets/titanii.png";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateIcon from "@mui/icons-material/Create";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const settingsItems = [
  { label: "Notificări", subtitle: "Toate amintirile", icon: <NotificationsIcon fontSize="small" /> },
  { label: "Ascunde persoane", subtitle: "0 Persoane ascunse", icon: <PersonOffIcon fontSize="small" /> },
  { label: "Ascunde date", subtitle: "0 Date ascunse", icon: <EventBusyIcon fontSize="small" /> },
];

const memories = [
  { id: 1, image: fluture1, years: 1, date: "16 august 2025", text: "a postat o fotografie nouă." },
  { id: 2, image: lasertag, years: 2, date: "16 august 2024", text: "și-a actualizat fotografia de profil." },
  { id: 3, image: titanii, years: 3, date: "16 august 2023", text: "a distribuit o amintire." },
];

const MemoriesPage = () => {
  return (
    <div className={styles.memoriesPage}>
      <aside className={styles.sidebar}>
        <h1>Amintiri</h1>

        <div className={`${styles.menuItem} ${styles.active}`}>
          <div className={styles.menuIcon}>
            <HomeIcon fontSize="small" />
          </div>
          <span>Pagina principală Amintiri</span>
        </div>

        <hr className={styles.divider} />

        <p className={styles.sectionTitle}>Setări</p>

        {settingsItems.map((item) => (
          <div className={styles.settingItem} key={item.label}>
            <div className={styles.menuIcon}>{item.icon}</div>
            <div>
              <div className={styles.settingLabel}>{item.label}</div>
              <div className={styles.settingSubtitle}>{item.subtitle}</div>
            </div>
          </div>
        ))}
      </aside>

      <section className={styles.content}>
        <div className={styles.banner}>
          <div className={styles.bannerArt}>
            <span className={styles.bannerIconBox}><CreateIcon fontSize="small" /></span>
            <span className={styles.bannerIconBox}><LocalCafeIcon fontSize="small" /></span>
            <span className={styles.bannerIconBox}><PhotoCameraIcon fontSize="small" /></span>
            <span className={styles.bannerIconBox}><FavoriteIcon fontSize="small" /></span>
          </div>
          <p className={styles.bannerText}>
            Sperăm că-ți face plăcere să revezi amintirile tale de pe Facebook, de la cele mai recente la cele mai vechi.
          </p>
        </div>

        {memories.map((memory) => (
          <div className={styles.dayGroup} key={memory.id}>
            <div className={styles.dayHeader}>
              <span className={styles.dayLabel}>În această zi</span>
              <h2>Acum {memory.years} {memory.years === 1 ? "an" : "ani"}</h2>
            </div>

            <div className={styles.memoryCard}>
              <div className={styles.cardHeader}>
                <img src={profile} alt="" className={styles.cardAvatar} />
                <div className={styles.cardHeaderText}>
                  <span><strong>Catalin Nastasa</strong> {memory.text}</span>
                  <span className={styles.cardMeta}>
                    {memory.date} <PublicIcon fontSize="inherit" />
                  </span>
                </div>
                <button className={styles.cardOptions} aria-label="Mai multe opțiuni">
                  <MoreHorizIcon fontSize="small" />
                </button>
              </div>

              <img src={memory.image} alt={memory.text} className={styles.memoryImage} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MemoriesPage;
