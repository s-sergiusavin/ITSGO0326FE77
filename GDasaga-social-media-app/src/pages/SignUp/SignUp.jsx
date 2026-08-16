import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import MoonLogo from '../../components/MoonLogo/MoonLogo'
import styles from './SignUp.module.scss'

export default function SignUp() {
    const { register } = useAuth()
    const navigate = useNavigate()


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [terms, setTerms] = useState(false)
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()


        if (name.trim().length < 3) {
            setError('The name must be at least 3 characters long.')
            return
        }

        if (!email.includes('@')) {
            setError('Introduce a valid email address.')
            return
        }

        if (password.length < 4) {
            setError('The password must be at least 4 characters long.')
            return
        }

        if (password !== confirm) {
            setError('The passwords do not match.')
            return
        }

        if (!terms) {
            setError('You must accept the terms to create an account.')
            return
        }


        setError('')
        register(name.trim(), email)
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
                        Make an account and join the community of space enthusiasts.
                    </p>
                </div>
            </section>


            <section className={styles.formSide}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.mobileLogo}>
                        <MoonLogo size={54} />
                        <span>LUMA</span>
                    </div>

                    <h2 className={styles.title}>Create Account</h2>
                    <p className={styles.subtitle}>
                        It lasts less than an eclipse.
                    </p>

                    <label className={styles.label} htmlFor="name">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className={styles.input}
                        placeholder="Ana Cosmin"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className={styles.label} htmlFor="email">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={styles.input}
                        placeholder="ana@luma.ro"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />


                    <div className={styles.row}>
                        <div className={styles.col}>
                            <label className={styles.label} htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                className={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className={styles.col}>
                            <label className={styles.label} htmlFor="confirm">
                                Confirm Password
                            </label>
                            <input
                                id="confirm"
                                type="password"
                                autoComplete="new-password"
                                className={styles.input}
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                            />
                        </div>
                    </div>

                    <label className={styles.terms}>
                        <input
                            type="checkbox"
                            checked={terms}
                            onChange={(e) => setTerms(e.target.checked)}
                        />
                        <span>
                            I agree to the terms and the privacy policy.
                        </span>
                    </label>

                    {error && <p className={styles.error}>{error}</p>}

                    <button type="submit" className={styles.submit}>
                        Create Account
                    </button>

                    <p className={styles.hint}>
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </form>
            </section>
        </div>
    )
}