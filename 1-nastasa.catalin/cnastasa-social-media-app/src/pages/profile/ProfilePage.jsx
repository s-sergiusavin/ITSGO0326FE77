import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFriends } from "../../redux/selectors";
import { toggleFavorite } from "../../redux/slices/friendsSlice";
import { setAvatarPhoto, setCoverPhoto, updateProfileInfo } from "../../redux/slices/profileSlice";
import Lightbox from "../../components/Lightbox";
import styles from "./ProfilePage.module.scss";
import defaultProfile from "../../assets/profil.jpg";
import defaultCover from "../../assets/coperta.jpg";
import fluture1 from "../../assets/fluture1.jpg";
import fluture2 from "../../assets/fluture2.jpg";
import fluture3 from "../../assets/fluture3.jpg";
import fluture4 from "../../assets/fluture4.jpg";
import lasertag from "../../assets/lasertag.jpg";
import titanii from "../../assets/titanii.png";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import LinkIcon from "@mui/icons-material/Link";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MovieIcon from "@mui/icons-material/Movie";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const tabs = ["Despre", "Prieteni", "Fotografii", "Reels"];

const photos = [fluture1, fluture2, fluture3, fluture4, lasertag, titanii];

const AboutPanel = () => {
  const { location, schools, bioLinks } = useSelector((state) => state.profile);

  return (
    <div className={styles.aboutGrid}>
      <div className={styles.aboutSection}>
        <div className={styles.aboutSectionTitle}>Biografie</div>

        <div className={styles.aboutRow}>
          <LinkIcon fontSize="small" className={styles.aboutRowIcon} />
          <div className={styles.aboutRowText}>
            {bioLinks.map((link) => (
              <a key={link} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.aboutDivider} />

      <div className={styles.aboutSection}>
        <div className={styles.aboutSectionTitle}>Detalii fixate</div>

        <div className={styles.aboutRow}>
          <PlaceIcon fontSize="small" className={styles.aboutRowIcon} />
          <div className={styles.aboutMetaLine}>
            <strong>{location}</strong>
          </div>
        </div>

        {schools.map((school) => (
          <div className={styles.aboutRow} key={school}>
            <SchoolIcon fontSize="small" className={styles.aboutRowIcon} />
            <div className={styles.aboutRowText}>
              <strong>{school}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EditProfileDialog = ({ open, onClose }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [draft, setDraft] = useState(null);

  useEffect(() => {
    if (open) {
      setDraft({
        name: profile.name,
        location: profile.location,
        schools: profile.schools.join("\n"),
        bioLinks: profile.bioLinks.join("\n")
      });
    }
  }, [open]);

  if (!draft) return null;

  const handleSave = () => {
    dispatch(updateProfileInfo({
      name: draft.name.trim() || profile.name,
      location: draft.location.trim(),
      schools: draft.schools.split("\n").map((s) => s.trim()).filter(Boolean),
      bioLinks: draft.bioLinks.split("\n").map((s) => s.trim()).filter(Boolean)
    }));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Editează profilul</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
        <TextField
          label="Nume"
          value={draft.name}
          onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Locație"
          value={draft.location}
          onChange={(e) => setDraft({ ...draft, location: e.target.value })}
          fullWidth
        />
        <TextField
          label="Școli (câte una pe linie)"
          value={draft.schools}
          onChange={(e) => setDraft({ ...draft, schools: e.target.value })}
          multiline
          minRows={2}
          fullWidth
        />
        <TextField
          label="Linkuri biografie (câte unul pe linie)"
          value={draft.bioLinks}
          onChange={(e) => setDraft({ ...draft, bioLinks: e.target.value })}
          multiline
          minRows={2}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Anulează</Button>
        <Button variant="contained" onClick={handleSave}>Salvează</Button>
      </DialogActions>
    </Dialog>
  );
};

const FriendsPanel = () => {
  const friends = useSelector(selectFriends);
  const dispatch = useDispatch();

  return (
    <div className={styles.aboutGrid}>
      <div className={styles.aboutSection}>
        <div className={styles.friendsPanelHeader}>
          <div>
            <div className={styles.aboutSectionTitle}>Prieteni</div>
            <p className={styles.friendsCount}>499 prieteni</p>
          </div>
          <a href="#" className={styles.seeAllLink}>Vezi toți prietenii</a>
        </div>

        <div className={styles.friendsGrid}>
          {friends.map((friend) => (
            <div className={styles.friendCard} key={friend.id}>
              <div className={styles.friendPhoto} style={{ background: friend.color }}>
                {friend.initial}
                <button
                  className={styles.favoriteButton}
                  onClick={() => dispatch(toggleFavorite(friend.id))}
                  title={friend.isFavorite ? "Elimină din favorite" : "Adaugă la favorite"}
                >
                  {friend.isFavorite ? <StarIcon fontSize="small" /> : <StarBorderIcon fontSize="small" />}
                </button>
              </div>
              <span className={styles.friendName}>{friend.name}</span>
              <span className={styles.mutualFriends}>{friend.mutualFriends} prieteni comuni</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PhotosPanel = ({ onImageClick }) => {
  const [subTab, setSubTab] = useState("Fotografiile cu tine");
  const subTabs = ["Fotografiile cu tine", "Fotografiile tale", "Albume"];

  return (
    <div className={styles.aboutGrid}>
      <div className={styles.aboutSection}>
        <div className={styles.aboutSectionTitle}>Fotografii</div>
        <div className={styles.subTabsBar}>
          {subTabs.map((tab) => (
            <span
              key={tab}
              className={`${styles.subTab} ${subTab === tab ? styles.active : ""}`}
              onClick={() => setSubTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className={styles.photosGrid}>
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt=""
              className={styles.photoThumb}
              onClick={() => onImageClick(photo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ReelsPanel = () => {
  const [subTab, setSubTab] = useState("Reel-urile tale");
  const subTabs = ["Reel-urile tale", "Reel-uri salvate"];

  return (
    <div className={styles.aboutGrid}>
      <div className={styles.aboutSection}>
        <div className={styles.aboutSectionTitle}>Reels</div>
        <div className={styles.subTabsBar}>
          {subTabs.map((tab) => (
            <span
              key={tab}
              className={`${styles.subTab} ${subTab === tab ? styles.active : ""}`}
              onClick={() => setSubTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <p className={styles.reelsHint}>Nu există încă niciun reel postat.</p>
        <Link to="/reels" className={styles.reelsLink}>
          <MovieIcon fontSize="small" /> Vezi pagina Reels
        </Link>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const routerLocation = useLocation();
  const [activeTab, setActiveTab] = useState(routerLocation.state?.tab || "Despre");
  const [moreAnchor, setMoreAnchor] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const profileInfo = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coverInputRef = useRef(null);
  const avatarInputRef = useRef(null);

  const coverPhoto = profileInfo.coverPhoto || defaultCover;
  const avatarPhoto = profileInfo.avatarPhoto || defaultProfile;

  const readImageFile = (file, onLoaded) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onLoaded(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.page}>
      <div className={styles.coverOuter}>
        <div className={styles.coverWrap}>
          <img
            className={styles.coverImg}
            src={coverPhoto}
            alt="Fotografie de copertă"
            onClick={() => setPreviewImage(coverPhoto)}
          />
          <button className={styles.editCoverBtn} onClick={() => coverInputRef.current?.click()}>
            <CameraAltIcon fontSize="small" /> Editează fotografia de copertă
          </button>
          <input
            ref={coverInputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => readImageFile(e.target.files[0], (result) => dispatch(setCoverPhoto(result)))}
          />
        </div>
      </div>

      <div className={styles.centered}>
        <div className={styles.profileHeader}>
          <div className={styles.profilePicWrap}>
            <img
              className={styles.profilePic}
              src={avatarPhoto}
              alt="Poza de profil"
              onClick={() => setPreviewImage(avatarPhoto)}
            />
            <button
              className={styles.editAvatarBtn}
              title="Editează poza de profil"
              onClick={() => avatarInputRef.current?.click()}
            >
              <CameraAltIcon fontSize="small" />
            </button>
            <input
              ref={avatarInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => readImageFile(e.target.files[0], (result) => dispatch(setAvatarPhoto(result)))}
            />
          </div>

          <div className={styles.profileDetails}>
            <h1 className={styles.profileName}>{profileInfo.name}</h1>
            <p className={styles.friendsCount}>499 prieteni</p>

            <div className={styles.bioLinks}>
              {profileInfo.bioLinks.map((link) => (
                <a key={link} href={link} target="_blank" rel="noopener noreferrer">{link}</a>
              ))}
            </div>

            <div className={styles.metaRow}>
              <span><PlaceIcon fontSize="small" /> {profileInfo.location}</span>
              {profileInfo.schools.map((school) => (
                <span key={school}><SchoolIcon fontSize="small" /> {school}</span>
              ))}
            </div>
          </div>

          <div className={styles.profileActions}>
            <button className={styles.btnBlue}>+ Adaugă în poveste</button>
            <button className={styles.btnGray} onClick={() => setEditOpen(true)}>
              <EditIcon fontSize="small" /> Editează profilul
            </button>
          </div>
        </div>

        <div className={styles.tabsBar}>
          <div className={styles.tab} onClick={() => navigate("/")}>
            Toate
          </div>

          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}

          <div
            className={styles.tab}
            onClick={(e) => setMoreAnchor(e.currentTarget)}
          >
            Mai multe <ExpandMoreIcon fontSize="small" />
          </div>

          <Menu anchorEl={moreAnchor} open={Boolean(moreAnchor)} onClose={() => setMoreAnchor(null)}>
            <MenuItem onClick={() => setMoreAnchor(null)}>Recenzii</MenuItem>
            <MenuItem onClick={() => setMoreAnchor(null)}>Chituri</MenuItem>
          </Menu>
        </div>
      </div>

      <div className={styles.centered}>
        {(activeTab === "Toate" || activeTab === "Despre") && <AboutPanel />}
        {activeTab === "Prieteni" && <FriendsPanel />}
        {activeTab === "Fotografii" && <PhotosPanel onImageClick={setPreviewImage} />}
        {activeTab === "Reels" && <ReelsPanel />}
      </div>

      <Lightbox src={previewImage} alt="" onClose={() => setPreviewImage(null)} />
      <EditProfileDialog open={editOpen} onClose={() => setEditOpen(false)} />
    </div>
  );
};

export default ProfilePage;
