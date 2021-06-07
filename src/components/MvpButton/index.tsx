import styles from '../MvpButton/styles.module.scss';
import React from 'react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'Fantasma 4' | 'Fantasma 3' | 'Maldito 4' | 'Maldito 1' | 'Sombrio 4' | 'Sombrio 3' | 'Sombrio 2' | 'Sagrado 4' | 'Sagrado 2' | 'Sagrado 1' | 'Neutro 4' | 'Neutro 3' | 'Água 4' | 'Água 3' | 'Água 2' | 'Terra 4' | 'Terra 3' | 'Terra 2' | 'Vento 4' | 'Vento 3' | 'Fogo 4' | 'Fogo 3' | 'Fogo 2' | 'Fogo 1' | 'Veneno 4';
  selected: boolean;
}

export function Button({ title, selected, ...rest }: ButtonProps) {
  return (
    <div  className={styles.mvpButton}>
    <button type="button" {...(selected && { className: 'selected' })} {...rest}>
    color={selected ? '#FAE800' : '#FBFBFB'}
      {title}
    </button>
    </div>
  );
}