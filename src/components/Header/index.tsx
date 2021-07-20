import React from 'react';
import Link from 'next/link';
import styles from '../Header/styles.module.scss';
import { SignInButton } from '../Button';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="Logo"></img>
        <nav>
          <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/Mvps">
            <a>Mvps</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}