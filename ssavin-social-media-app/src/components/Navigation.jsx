import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";
import { toggleLogin } from "../redux/slices/authSlice";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = user.isAuthenticated;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleAuth = () => {
    dispatch(toggleLogin());
    isLoggedIn ? navigate("/auth") : navigate("/");
    handleClose();
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>Social Media App</div>
      </Link>

      <nav>
        <ul className={styles.menu}>
          {isLoggedIn && (
            <>
              <li className={styles.menuItem}>
                <NavLink to="/my-profile">My Profile</NavLink>
              </li>
              <li className={styles.menuItem}>
                <NavLink to="/friends">Friends</NavLink>
              </li>
              <li className={styles.menuItem}>
                <NavLink to="/reels">Reels</NavLink>
              </li>
            </>
          )}

          <li className={styles.menuItem} onClick={toggleAuth}>
            <NavLink to="/auth">{isLoggedIn ? "Logout" : "Login"}</NavLink>
          </li>
          <li className={styles.userEmail}>{user.email}</li>
        </ul>

        <IconButton
          className={styles.burgerButton}
          aria-label="open menu"
          onClick={handleOpen}
          size="large"
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {isLoggedIn && (
            <>
              <MenuItem onClick={() => handleNavigate("/my-profile")}>
                My Profile
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/friends")}>
                Friends
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/reels")}>
                Reels
              </MenuItem>
            </>
          )}
          <MenuItem onClick={toggleAuth}>
            {isLoggedIn ? "Logout" : "Login"}
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Navigation;
