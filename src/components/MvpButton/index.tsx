import styles from '../MvpButton/styles.module.scss';
import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { Icon } from '../Icon/Incon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'fantasma 4' | 'fantasma 3' | 'maldito 4' | 'maldito 1' | 'sombrio 4' | 'sombrio 3' | 'sombrio 2' | 'sagrado 4' | 'sagrado 2' | 'sagrado 1' | 'neutro 4' | 'neutro 3' | 'agua 4' | 'agua 3' | 'agua 2' | 'terra 4' | 'terra 3' | 'terra 2' | 'vento 4' | 'vento 3' | 'fogo 4' | 'fogo 3' | 'fogo 2' | 'fogo 1' | 'veneno 4';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest  }: ButtonProps) {
  return (
    <div  className={styles.mvpButton}>
    <button type="button"  {...(selected && { className: 'selected' })} {...rest} >
    <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'} />
      {title}
    </button>
    </div>
  );
}