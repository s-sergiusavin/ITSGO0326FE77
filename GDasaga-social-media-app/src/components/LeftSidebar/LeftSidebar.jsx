import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import PeopleIcon from '@mui/icons-material/PeopleOutline'
import TrendingIcon from '@mui/icons-material/TrendingUp'
import ImageIcon from '@mui/icons-material/ImageOutlined'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../Avatar/Avatar'
import styles from './LeftSidebar.module.scss'


const menu = [
  { id: 'all', label: 'All', Icon: HomeIcon },
  { id: 'following', label: 'Following', Icon: PeopleIcon },
  { id: 'popular', label: 'Popular', Icon: TrendingIcon },
]

export default function LeftSidebar({
  activeFilter,
  onChangeFilter,
  onlyMedia,
  onToggleMedia,
  followingCount,
}) {
  const { user } = useAuth()

  return (
    <aside className={styles.sidebar}>
      <Link to={`/profil/${user.id}`} className={styles.card}>
        <Avatar
          name={user.name}
          color={user.color}
          src={user.avatar}
          size={46}
        />
        <div className={styles.cardText}>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.handle}>{user.handle}</p>
        </div>
      </Link>

  
      <nav className={styles.menu}>
        {menu.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.menuItem} ${
              activeFilter === item.id ? styles.active : ''
            }`}
            onClick={() => onChangeFilter(item.id)}
          >
            <item.Icon className={styles.menuIcon} />
            <span>{item.label}</span>
            {item.id === 'following' && (
              <span className={styles.count}>{followingCount}</span>
            )}
          </button>
        ))}
      </nav>

      
      <div className={styles.toggleBox}>
        <ImageIcon className={styles.menuIcon} />
        <span className={styles.toggleLabel}>Only with images</span>
        <button
          type="button"
          role="switch"
          aria-checked={onlyMedia}
          aria-label="Show only posts with images"
          className={`${styles.switch} ${onlyMedia ? styles.switchOn : ''}`}
          onClick={onToggleMedia}
        >
          <span className={styles.knob} />
        </button>
      </div>

      <p className={styles.footer}>
        LUMA 2026 &middot; Termeni si Conditii &middot; Confidentialitate
      </p>
    </aside>
  )
}
