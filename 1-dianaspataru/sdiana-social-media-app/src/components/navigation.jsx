// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import styles from './Navigation.module.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from '../redux/selectors';
// import { toggleLogin } from '../redux/slices/authSlice';

// const Navigation = () => {
//     const user = useSelector(selectUser);
//     const isLoggedIn = user.isAuthenticated;
//     const navigate = useNavigate()

//     const dispatch = useDispatch();

//     const toggleAuth = () => {
//         dispatch(toggleLogin());
//         isLoggedIn ? navigate('/auth') : navigate('/');
//     }
//     return <header>
//         <Link to='/'>
//             <div className={styles.logo}>Social Media App</div>
//         </Link>

//         <nav>
//             <ul className={styles.menu}>
//                 {isLoggedIn &&
//                     <>
//                         <li className={styles.menuItem}>
//                             <NavLink to='/my-profile'> My Profile</NavLink>
//                         </li>
//                         <li className={styles.menuItem}>
//                             <NavLink to='/friends'> Friends</NavLink>
//                         </li>
//                     </>}
//                 <li className={styles.menuItem} onClick={toggleAuth}>
//                     <NavLink to='/auth'> {isLoggedIn ? 'Logout' : 'Login'}</NavLink>
//                 </li>
//                 <li>{user.email}</li>
//             </ul>
//         </nav>
//     </header>
// }

// export default Navigation;

import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { toggleLogin } from '../redux/slices/authSlice';
import styles from './navigation.module.scss';
import logoImg from '../assets/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector(selectUser);
  const isLoggedIn = user.isAuthenticated;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleAuth = () => {
    dispatch(toggleLogin());
    isLoggedIn ? navigate('/auth') : navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      {/* 1. Logo & Căutare */}
      <div className={styles.mainSearch}>
        <Link to="/" className={styles.logoLink}>
          <img src={logoImg} alt="Social Logo" className={styles.logoImg} />
        </Link>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search here..."
        />
      </div>

      {/* 2. Meniu Hamburger pentru mobil */}
      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <MenuIcon className={styles.hamburgerIcon} />
      </div>

      {/* 3. Navigația Principală */}
      <nav
        className={`${styles.mainNavigation} ${
          isMenuOpen ? styles.menuOpen : ''
        }`}
      >
        <ul className={styles.navigation}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              <HomeIcon className={styles.navIcon} />
            </NavLink>
          </li>

          {isLoggedIn && (
            <>
              <li>
                <NavLink
                  to="/my-profile"
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  <PersonIcon className={styles.navIcon} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/friends"
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  <ChatBubbleIcon className={styles.navIcon} />
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/videos"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              <VideocamIcon className={styles.navIcon} />
            </NavLink>
          </li>
        </ul>

        {/* Meniul de Acțiuni / Setări / Auth */}
        <ul className={styles.links}>
          <li>
            <NavLink to="/add">
              <AddCircleIcon className={styles.navIcon} />
            </NavLink>
          </li>

          <li>
            <a href="#" className={styles.bellIcon}>
              <NotificationsIcon className={styles.bellSvg} />
              <span>12</span>
            </a>
          </li>

          {/* Login / Logout cu logica ta Redux */}
          <li onClick={toggleAuth} title={isLoggedIn ? 'Logout' : 'Login'}>
            <NavLink to="/auth">
              <SettingsIcon className={styles.navIcon} />
            </NavLink>
          </li>

          {/* Email Utilizator */}
          {isLoggedIn && user.email && (
            <li className={styles.userEmail}>{user.email}</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;