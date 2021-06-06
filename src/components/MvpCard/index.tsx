import React from 'react';
import { Clock, Star } from 'react-feather';
import styles from '../MvpCard/styles.module.scss';

export default function MvpCard({
  name,
  life,
  spawn,
  time }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src="/logo.svg"
        alt={name}
      />

      <div>
        <div className="movie-info">
          <span>{name}</span>
          <span>{life}</span>
          <span>{spawn}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
    </div >
  );
}