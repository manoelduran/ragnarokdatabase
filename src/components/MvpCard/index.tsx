import React from 'react';
import styles from '../MvpCard/styles.module.scss';


export default function MvpCard(props: MovieCardProps) {
  return (
    <div className={styles.mvpCard}>
          <img
            src={props.image}
            alt={props.name}
          />
        <div>
          <div className={styles.mvpInfo}>
            <span>{props.name}</span>
            <span>{props.life}</span>
            <span>{props.spawn}</span>
            <span>{props.time}</span>
          </div>
        </div>
    </div>
  );
}