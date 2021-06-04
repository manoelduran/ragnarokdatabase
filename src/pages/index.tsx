import styles from '../pages/login.module.scss';
import { signIn } from 'next-auth/client';
export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <img src="/logo.svg" alt="Logo" />
      <button type="button"
        className={styles.signInButton}
        onClick={() => signIn('facebook', { callbackUrl: 'http://localhost:3000/home' })}>
        Sign in with Facebook
    </button>
    <button type="button"
        className={styles.signInButton}
        onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/home' })}>
        Sign in with Google
    </button>
    </div>
  )
}
