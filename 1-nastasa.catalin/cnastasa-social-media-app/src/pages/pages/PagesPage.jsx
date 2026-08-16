import styles from "./PagesPage.module.scss";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SchoolIcon from "@mui/icons-material/School";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const pages = [
  { id: 1, name: "FC Rapid București", likes: "128 mii", icon: <SportsSoccerIcon fontSize="large" />, color: "linear-gradient(135deg, #ad1457, #e91e63)" },
  { id: 2, name: "Universitatea Politehnica București", likes: "42 mii", icon: <SchoolIcon fontSize="large" />, color: "linear-gradient(135deg, #1565c0, #42a5f5)" },
  { id: 3, name: "Lasertag București", likes: "6.700", icon: <SportsMmaIcon fontSize="large" />, color: "linear-gradient(135deg, #37474f, #78909c)" },
  { id: 4, name: "Colegiul Național Grigore Moisil Onești", likes: "3.200", icon: <SchoolIcon fontSize="large" />, color: "linear-gradient(135deg, #2e7d32, #66bb6a)" }
];

const PagesPage = () => {
  return (
    <div className={styles.pagesPage}>
      <h1>Pagini</h1>
      <p>Paginile pe care le urmărești.</p>

      <div className={styles.placeholderGrid}>
        {pages.map((page) => (
          <div key={page.id} className={styles.pageCard}>
            <div className={styles.pageThumbnail} style={{ background: page.color }}>
              {page.icon}
            </div>
            <div className={styles.pageInfo}>
              <h3>{page.name}</h3>
              <p><ThumbUpIcon fontSize="inherit" /> {page.likes} aprecieri</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesPage;
