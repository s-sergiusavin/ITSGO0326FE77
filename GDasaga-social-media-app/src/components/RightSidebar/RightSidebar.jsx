import { Link } from 'react-router-dom'
import { topics } from '../../data/posts'
import { users } from '../../data/users'
import { useAuth } from '../../context/AuthContext'
import Avatar from '../Avatar/Avatar'
import styles from './RightSidebar.module.scss'

export default function RightSidebar({
  activeTopic,
  onSelectTopic,
  following,
  onToggleFollow,
}) {
  const { user } = useAuth()


  const suggestions = users.filter((u) => u.id !== user.id)

  return (
    <aside className={styles.sidebar}>
      <section className={styles.box}>
        <h3 className={styles.title}>Suggestions</h3>

        <div className={styles.tags}>
          {topics.map((topic) => (
            <button
              key={topic.tag}
              type="button"
              className={`${styles.tag} ${activeTopic === topic.tag ? styles.tagActive : ''
                }`}
              onClick={() => onSelectTopic(topic.tag)}
            >
              #{topic.tag}
              <span className={styles.tagCount}>{topic.posts}</span>
            </button>
          ))}
        </div>

        {activeTopic && (
          <button
            type="button"
            className={styles.clear}
            onClick={() => onSelectTopic(activeTopic)}
          >
            Clear filter #{activeTopic}
          </button>
        )}
      </section>


      <section className={styles.box}>
        <h3 className={styles.title}>Suggestions </h3>

        <ul className={styles.people}>
          {suggestions.map((person) => {
            const isFollowed = following.includes(person.id)

            return (
              <li key={person.id} className={styles.person}>
                <Link to={`/profil/${person.id}`} className={styles.personInfo}>
                  <Avatar
                    name={person.name}
                    color={person.color}
                    src={person.avatar}
                    size={38}
                  />
                  <div className={styles.personText}>
                    <p className={styles.personName}>{person.name}</p>
                    <p className={styles.personHandle}>{person.handle}</p>
                  </div>
                </Link>

                <button
                  type="button"
                  className={`${styles.followBtn} ${isFollowed ? styles.followed : ''
                    }`}
                  onClick={() => onToggleFollow(person.id)}
                >
                  {isFollowed ? 'Following' : 'Follow'}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </aside>
  )
}
