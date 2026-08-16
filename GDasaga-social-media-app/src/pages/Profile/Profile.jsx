import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import PlaceIcon from '@mui/icons-material/PlaceOutlined'
import CalendarIcon from '@mui/icons-material/CalendarMonthOutlined'
import { getUserById } from '../../data/users'
import { posts } from '../../data/posts'
import Avatar from '../../components/Avatar/Avatar'
import Post from '../../components/Post/Post'
import styles from './Profile.module.scss'

export default function Profile() {
  const { id } = useParams() 
  const navigate = useNavigate()

  const person = getUserById(id)

  const [tab, setTab] = useState('posts')
  const [isFollowing, setIsFollowing] = useState(false)


  if (!person) {
    return (
      <div className={styles.notFound}>
        <p>User not found.</p>
        <button type="button" onClick={() => navigate('/')}>
          Back to feed
        </button>
      </div>
    )
  }

  const userPosts = posts.filter((post) => post.userId === person.id)

  return (
    <div className={styles.page}>
      <button
        type="button"
        className={styles.back}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon /> Back
      </button>

      <section className={styles.card}>
        <div className={styles.cover}>
          <img src={person.cover} alt="" className={styles.coverImg} />
        </div>

        <div className={styles.head}>
          <div className={styles.avatarRing}>
            <Avatar
              name={person.name}
              color={person.color}
              src={person.avatar}
              size={96}
            />
          </div>

          <button
            type="button"
            className={`${styles.followBtn} ${
              isFollowing ? styles.following : ''
            }`}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? 'Following' : 'Follow'}
          </button>
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>{person.name}</h1>
          <p className={styles.handle}>{person.handle}</p>
          <p className={styles.bio}>{person.bio}</p>

          <div className={styles.details}>
            <span>
              <PlaceIcon /> {person.location}
            </span>
            <span>
              <CalendarIcon /> Member since {person.joined}
            </span>
          </div>

          <div className={styles.stats}>
            <div>
              <strong>{person.posts}</strong>
              <span>Posts</span>
            </div>
            <div>
              <strong>{person.followers}</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>{person.following}</strong>
              <span>Following</span>
            </div>
          </div>
        </div>

        
        <div className={styles.tabs}>
          <button
            type="button"
            className={tab === 'posts' ? styles.tabActive : ''}
            onClick={() => setTab('posts')}
          >
            Posts
          </button>
          <button
            type="button"
            className={tab === 'about' ? styles.tabActive : ''}
            onClick={() => setTab('about')}
          >
            About
          </button>
        </div>
      </section>

      {tab === 'posts' ? (
        <div className={styles.posts}>
          {userPosts.length > 0 ? (
            userPosts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p className={styles.noPosts}>
              {person.name.split(' ')[0]} hasn't posted anything yet.
            </p>
          )}
        </div>
      ) : (
        <div className={styles.about}>
          <h2>About {person.name.split(' ')[0]}</h2>
          <p>{person.bio}</p>
          <p>
            Location: {person.location}. Account created in {person.joined}.
          </p>
        </div>
      )}
    </div>
  )
}
