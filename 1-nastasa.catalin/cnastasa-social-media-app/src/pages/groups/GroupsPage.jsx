import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../../redux/slices/groupsSlice";
import styles from "./GroupsPage.module.scss";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ExploreIcon from "@mui/icons-material/Explore";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AddIcon from "@mui/icons-material/Add";

const menuItems = ["Fluxul tău", "Descoperă", "Grupurile tale"];

const GroupsPage = () => {
  const [activeMenu, setActiveMenu] = useState("Fluxul tău");
  const [isCreating, setIsCreating] = useState(false);
  const [groupNameDraft, setGroupNameDraft] = useState("");
  const myGroups = useSelector((state) => state.groups.list);
  const dispatch = useDispatch();

  const submitGroup = () => {
    if (!groupNameDraft.trim()) return;

    dispatch(addGroup({ name: groupNameDraft.trim() }));
    setGroupNameDraft("");
    setIsCreating(false);
    setActiveMenu("Grupurile tale");
  };

  return (
    <div className={styles.groupsPage}>
      <aside className={styles.sidebar}>
        <h1>Grupuri</h1>

        {menuItems.map((item) => (
          <div
            key={item}
            className={`${styles.menuItem} ${activeMenu === item ? styles.active : ""}`}
            onClick={() => setActiveMenu(item)}
          >
            {item === "Fluxul tău" && <DynamicFeedIcon fontSize="small" />}
            {item === "Descoperă" && <ExploreIcon fontSize="small" />}
            {item === "Grupurile tale" && <Diversity3Icon fontSize="small" />}
            <span>{item}</span>
          </div>
        ))}

        <button
          className={styles.createButton}
          onClick={() => setIsCreating((prev) => !prev)}
        >
          <AddIcon fontSize="small" /> Creează un grup nou
        </button>

        {isCreating && (
          <div className={styles.createForm}>
            <input
              type="text"
              placeholder="Numele grupului"
              className={styles.createInput}
              value={groupNameDraft}
              autoFocus
              onChange={(e) => setGroupNameDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") submitGroup();
              }}
            />
            <button className={styles.createSubmit} onClick={submitGroup}>
              Creează
            </button>
          </div>
        )}

        <hr className={styles.divider} />

        <p className={styles.sectionTitle}>Grupuri în care te-ai înscris</p>

        {myGroups.map((group) => (
          <div className={styles.groupItem} key={group.id}>
            <div className={styles.groupAvatar}>
              <Diversity3Icon fontSize="small" />
            </div>
            <div>
              <div className={styles.groupName}>{group.name}</div>
              <div className={styles.groupActivity}>Ultima activitate: {group.activity}</div>
            </div>
          </div>
        ))}
      </aside>

      <section className={styles.content}>
        <p className={styles.emptyHint}>Nicio activitate recentă de afișat.</p>
      </section>
    </div>
  );
};

export default GroupsPage;
