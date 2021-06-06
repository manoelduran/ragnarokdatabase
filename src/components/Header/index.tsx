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
          <Link href="/mvp">
            <a>Mvp</a>
          </Link>
          <Link href="/timer">
            <a>Timer</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}