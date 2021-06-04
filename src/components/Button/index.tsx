import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signOut, useSession } from 'next-auth/client';
import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
export function SignInButton() {
  const [session] = useSession();
  console.log(session);
  return session ? (
    <button type="button"
      className={styles.signInButton}
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}>
      < FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <Link href="/">
      <a className={styles.active}>Login</a>
    </Link>
  );
}