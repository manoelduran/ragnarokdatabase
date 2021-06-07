interface ElementResponseProps {
  id: number;
  name: 'Fantasma 4' | 'Fantasma 3' | 'Maldito 4' | 'Maldito 1' | 'Sombrio 4' | 'Sombrio 3' | 'Sombrio 2' | 'Sagrado 4' | 'Sagrado 2' | 'Sagrado 1' | 'Neutro 4' | 'Neutro 3' | 'Água 4' | 'Água 3' | 'Água 2' | 'Terra 4' | 'Terra 3' | 'Terra 2' | 'Vento 4' | 'Vento 3' | 'Fogo 4' | 'Fogo 3' | 'Fogo 2' | 'Fogo 1' | 'Veneno 4';
  title: string;
}

interface MvpProps {
  element_id: number;
  name: string;
  level: number;
  breed: string;
  life: number;
  spawn: string;
  time: string;
  weakness: string;
  size: string;
}

interface MovieCardProps {
  name: string;
  life: number;
  spawn: string;
  time: string;
}


interface ISideBarProps {
  selectedElementId: number;
  handleClickButton(id: number): void;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'Fantasma 4' | 'Fantasma 3' | 'Maldito 4' | 'Maldito 1' | 'Sombrio 4' | 'Sombrio 3' | 'Sombrio 2' | 'Sagrado 4' | 'Sagrado 2' | 'Sagrado 1' | 'Neutro 4' | 'Neutro 3' | 'Água 4' | 'Água 3' | 'Água 2' | 'Terra 4' | 'Terra 3' | 'Terra 2' | 'Vento 4' | 'Vento 3' | 'Fogo 4' | 'Fogo 3' | 'Fogo 2' | 'Fogo 1' | 'Veneno 4';
  selected: boolean;
}