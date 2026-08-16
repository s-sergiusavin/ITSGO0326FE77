import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import MoonLogo from '../../components/MoonLogo/MoonLogo'
import styles from './Login.module.scss'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!email.includes('@')) {
      setError('Enter a valid email address.')
      return
    }

    if (password.length < 4) {
      setError('Password must be at least 4 characters long.')
      return
    }

    setError('')
    login(email)
    navigate('/')
  }

  return (
    <div className={styles.page}>
      <section className={styles.cosmos}>
        <div className={styles.stars} />

        <div className={styles.cosmosContent}>
          <MoonLogo size={130} />
          <h1 className={styles.logoText}>LUMA</h1>
          <p className={styles.tagline}>
            Open your mind. Explore the cosmos. Connect with others.
          </p>
        </div>
      </section>


      <section className={styles.formSide}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.mobileLogo}>
            <MoonLogo size={54} />
            <span>LUMA</span>
          </div>

          <h2 className={styles.title}>Log In</h2>
          <p className={styles.subtitle}>

          </p>

          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={styles.input}
            placeholder="ana@luma.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className={styles.label} htmlFor="password">
            Parola
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submit}>
            Log In
          </button>

          <p className={styles.hint}>
            Don't have an account? <Link to="/inregistrare">Create one</Link>
          </p>
        </form>
      </section>
    </div>
  )
}
