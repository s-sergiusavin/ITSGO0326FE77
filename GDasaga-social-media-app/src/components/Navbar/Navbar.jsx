import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth } from '../../context/AuthContext'
import MoonLogo from '../MoonLogo/MoonLogo'
import Avatar from '../Avatar/Avatar'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [notifications, setNotifications] = useState(3)

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <MoonLogo size={32} />
          <span className={styles.brandName}>LUMA</span>
        </Link>

        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setNotifications(0)}
            title="Notifications"
          >
            <NotificationsNoneIcon />
            {notifications > 0 && (
              <span className={styles.badge}>{notifications}</span>
            )}
          </button>

          <Link to={`/profil/${user.id}`} className={styles.me}>
            <Avatar
              name={user.name}
              color={user.color}
              src={user.avatar}
              size={34}
            />
            <span className={styles.meName}>{user.name.split(' ')[0]}</span>
          </Link>

          <button
            type="button"
            className={styles.iconButton}
            onClick={handleLogout}
            title="Logout"
          >
            <LogoutIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
