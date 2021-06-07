import React from 'react';
import styles from '../MvpCard/styles.module.scss';

export default function MvpCard({
  name,
  life,
  spawn,
  time }: MovieCardProps) {
  return (
    <div className={styles.mvpCard}>
      <img
        src="/logo.svg"
        alt={name}
      />
      <div>
        <div className={styles.mvpInfo}>
          <span>{name}</span>
          <span>{life}</span>
          <span>{spawn}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}