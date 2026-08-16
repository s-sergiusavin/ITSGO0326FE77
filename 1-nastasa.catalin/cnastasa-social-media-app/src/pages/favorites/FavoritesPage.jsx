import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteFriends } from "../../redux/selectors";
import { toggleFavorite } from "../../redux/slices/friendsSlice";
import StarIcon from "@mui/icons-material/Star";
import styles from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavoriteFriends);
  const dispatch = useDispatch();

  return (
    <div className={styles.favoritesPage}>
      <h1>Favorite</h1>

      {favorites.length === 0 && (
        <p className={styles.emptyHint}>Nu ai niciun prieten favorit. Adaugă unul din tab-ul Prieteni al profilului tău.</p>
      )}

      <div className={styles.friendsGrid}>
        {favorites.map((friend) => (
          <div className={styles.friendCard} key={friend.id}>
            <button
              className={styles.favoriteButton}
              onClick={() => dispatch(toggleFavorite(friend.id))}
              title="Elimină din favorite"
            >
              <StarIcon fontSize="small" />
            </button>
            <div className={styles.friendAvatar} style={{ background: friend.color }}>
              {friend.initial}
            </div>
            <span>{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
