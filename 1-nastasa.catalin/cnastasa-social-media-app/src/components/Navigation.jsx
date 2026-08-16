import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredPosts, selectFriends, selectGroups, selectSearchTerm, selectTheme, selectUser } from "../redux/selectors";
import { logout } from "../redux/slices/authSlice";
import { setSearchTerm } from "../redux/slices/feedSlice";
import { toggleTheme } from "../redux/slices/themeSlice";
import profile from "../assets/profil.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MovieIcon from "@mui/icons-material/Movie";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import HistoryIcon from "@mui/icons-material/History";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";

const notifications = [
  { icon: <HistoryIcon fontSize="small" />, color: "#2196f3", text: "Ai o amintire cu Ionela-Reli Nastasa", time: "2 h" },
  { icon: <ThumbUpIcon fontSize="small" />, color: "#9c27b0", text: "Catalina Luca a apreciat postarea ta", time: "5 h" },
  { icon: <ChatIcon fontSize="small" />, color: "#31a24c", text: "Andrei Popescu a comentat la postarea ta", time: "1 zi" }
];

const conversations = [
  { name: "Ionela-Reli Nastasa", color: "#2196f3", initial: "I", message: "Ne vedem diseară?", time: "2 h", online: true },
  { name: "Catalina Luca", color: "#9c27b0", initial: "C", message: "Super poze!", time: "4 zile", online: false },
  { name: "DM Alexandra", color: "#e91e63", initial: "A", message: "Salut!", time: "12 săpt", online: false },
  { name: "Achim Nastasa", color: "#ff9800", initial: "A", message: "Mersi de urări! 🎉", time: "4 zile", online: true }
];

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.isAuthenticated;
  const searchTerm = useSelector(selectSearchTerm);
  const themeMode = useSelector(selectTheme);
  const filteredPosts = useSelector(selectFilteredPosts);
  const friends = useSelector(selectFriends);
  const groups = useSelector(selectGroups);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);

  const trimmedSearch = searchTerm.trim().toLowerCase();
  const showSearchResults = searchFocused && trimmedSearch.length > 0;
  const matchedPosts = showSearchResults ? filteredPosts.slice(0, 3) : [];
  const matchedFriends = showSearchResults
    ? friends.filter((f) => f.name.toLowerCase().includes(trimmedSearch)).slice(0, 3)
    : [];
  const matchedGroups = showSearchResults
    ? groups.filter((g) => g.name.toLowerCase().includes(trimmedSearch)).slice(0, 3)
    : [];
  const hasSearchResults = matchedPosts.length + matchedFriends.length + matchedGroups.length > 0;

  const goToSearchResult = (path, state) => {
    navigate(path, state ? { state } : undefined);
    setSearchFocused(false);
  };

  const openMenuAt = (menu) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth");
    closeMenu();
  };

  const handleAccountClick = (event) => {
    if (!isLoggedIn) {
      navigate("/auth");
      return;
    }
    openMenuAt("account")(event);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeMenu();
  };

  const iconClass = ({ isActive }) => `${styles.navIcon} ${isActive ? styles.active : ""}`;

  return (
    <header>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>f</Link>

        <div className={styles.searchWrap}>
          <div className={styles.search}>
            <SearchIcon fontSize="small" />
            <input
              type="search"
              placeholder="Caută pe Facebook"
              aria-label="Caută pe Facebook"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>

          {showSearchResults && (
            <div className={styles.searchResults} onMouseDown={(e) => e.preventDefault()}>
              {!hasSearchResults && (
                <p className={styles.searchEmptyHint}>Niciun rezultat pentru "{searchTerm.trim()}".</p>
              )}

              {matchedPosts.length > 0 && (
                <div className={styles.searchSection}>
                  <p className={styles.searchSectionTitle}>Postări</p>
                  {matchedPosts.map((post) => (
                    <div
                      key={post.id}
                      className={styles.searchResultRow}
                      onClick={() => goToSearchResult("/")}
                    >
                      <div className={styles.dropdownAvatar} style={{ background: "#65676b" }}>
                        <DynamicFeedIcon fontSize="small" />
                      </div>
                      <div className={styles.dropdownText}>
                        <span>{post.title || post.author}</span>
                        <small>{post.author}</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {matchedFriends.length > 0 && (
                <div className={styles.searchSection}>
                  <p className={styles.searchSectionTitle}>Prieteni</p>
                  {matchedFriends.map((friend) => (
                    <div
                      key={friend.id}
                      className={styles.searchResultRow}
                      onClick={() => goToSearchResult("/profile/1", { tab: "Prieteni" })}
                    >
                      <div className={styles.dropdownAvatar} style={{ background: friend.color }}>
                        {friend.initial}
                      </div>
                      <div className={styles.dropdownText}>
                        <span>{friend.name}</span>
                        <small>{friend.mutualFriends} prieteni comuni</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {matchedGroups.length > 0 && (
                <div className={styles.searchSection}>
                  <p className={styles.searchSectionTitle}>Grupuri</p>
                  {matchedGroups.map((group) => (
                    <div
                      key={group.id}
                      className={styles.searchResultRow}
                      onClick={() => goToSearchResult("/groups")}
                    >
                      <div className={styles.dropdownAvatar} style={{ background: "#1877f2" }}>
                        <Diversity3Icon fontSize="small" />
                      </div>
                      <div className={styles.dropdownText}>
                        <span>{group.name}</span>
                        <small>Ultima activitate: {group.activity}</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <nav className={styles.center}>
        <NavLink to="/" end className={iconClass} aria-label="Acasă">
          <HomeIcon />
        </NavLink>
        <NavLink to="/reels" className={iconClass} aria-label="Reels">
          <MovieIcon />
        </NavLink>
        <NavLink to="/marketplace" className={iconClass} aria-label="Marketplace">
          <StorefrontIcon />
        </NavLink>
        <NavLink to="/groups" className={iconClass} aria-label="Grupuri">
          <PeopleAltIcon />
        </NavLink>
        <NavLink to="/gaming" className={iconClass} aria-label="Gaming">
          <SportsEsportsIcon />
        </NavLink>
      </nav>

      <div className={styles.right}>
        <button
          className={`${styles.roundIcon} ${styles.hideOnMobile}`}
          onClick={() => dispatch(toggleTheme())}
          aria-label={themeMode === "dark" ? "Comută la tema deschisă" : "Comută la tema întunecată"}
        >
          {themeMode === "dark" ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </button>
        <button
          className={`${styles.roundIcon} ${styles.hideOnMobile}`}
          onClick={openMenuAt("apps")}
          aria-label="Meniu aplicații"
        >
          <AppsIcon fontSize="small" />
        </button>
        {isLoggedIn && (
          <button
            className={`${styles.roundIcon} ${styles.hideOnMobile}`}
            onClick={openMenuAt("chat")}
            aria-label="Conversații"
          >
            <ChatBubbleIcon fontSize="small" />
          </button>
        )}
        {isLoggedIn && (
          <button className={styles.roundIcon} onClick={openMenuAt("notif")} aria-label="Notificări">
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon fontSize="small" />
            </Badge>
          </button>
        )}

        <button className={styles.accountButton} onClick={handleAccountClick} aria-label="Contul meu">
          {isLoggedIn ? (
            <img src={profile} alt="" className={styles.accountAvatar} />
          ) : (
            <AccountCircleIcon sx={{ color: "white" }} />
          )}
        </button>

        {isLoggedIn && (
          <Menu
            anchorEl={anchorEl}
            open={openMenu === "account"}
            onClose={closeMenu}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => handleNavigate("/profile/1")}>
              <AccountCircleIcon fontSize="small" sx={{ mr: 1 }} /> Profilul meu
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} /> Delogare
            </MenuItem>
          </Menu>
        )}

        <Menu
          anchorEl={anchorEl}
          open={isLoggedIn && openMenu === "notif"}
          onClose={closeMenu}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className={styles.dropdownHeader}>Notificări</div>
          {notifications.map((notif, index) => (
            <MenuItem key={index} onClick={closeMenu} className={styles.dropdownRow}>
              <div className={styles.dropdownAvatar} style={{ background: notif.color }}>
                {notif.icon}
              </div>
              <div className={styles.dropdownText}>
                <span>{notif.text}</span>
                <small>{notif.time}</small>
              </div>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={anchorEl}
          open={isLoggedIn && openMenu === "chat"}
          onClose={closeMenu}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className={styles.dropdownHeader}>Conversații</div>
          {conversations.map((conv) => (
            <MenuItem key={conv.name} onClick={closeMenu} className={styles.dropdownRow}>
              <div className={styles.dropdownAvatarWrap}>
                <div className={styles.dropdownAvatar} style={{ background: conv.color }}>
                  {conv.initial}
                </div>
                {conv.online && <div className={styles.onlineDot} />}
              </div>
              <div className={styles.dropdownText}>
                <span>{conv.name}</span>
                <small>{conv.message} · {conv.time}</small>
              </div>
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={anchorEl}
          open={openMenu === "apps"}
          onClose={closeMenu}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className={styles.dropdownHeader}>Meniu</div>
          <MenuItem onClick={() => handleNavigate("/")}>
            <HomeIcon fontSize="small" sx={{ mr: 1 }} /> Acasă
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("/profile/1")}>
            <AccountCircleIcon fontSize="small" sx={{ mr: 1 }} /> Profilul meu
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("/reels")}>
            <MovieIcon fontSize="small" sx={{ mr: 1 }} /> Reels
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("/marketplace")}>
            <StorefrontIcon fontSize="small" sx={{ mr: 1 }} /> Marketplace
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("/groups")}>
            <Diversity3Icon fontSize="small" sx={{ mr: 1 }} /> Grupuri
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("/gaming")}>
            <SportsEsportsIcon fontSize="small" sx={{ mr: 1 }} /> Gaming
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Navigation;
