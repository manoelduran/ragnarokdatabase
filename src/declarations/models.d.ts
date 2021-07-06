declare module '*.svg'

interface ElementResponseProps {
  id: number;
  name: 'fantasma 4' | 'fantasma 3' | 'maldito 4' | 'maldito 1' | 'sombrio 4' | 'sombrio 3' | 'sombrio 2' | 'sagrado 4' | 'sagrado 2' | 'sagrado 1' | 'neutro 4' | 'neutro 3' | 'agua 4' | 'agua 3' | 'agua 2' | 'terra 4' | 'terra 3' | 'terra 2' | 'vento 4' | 'vento 3' | 'fogo 4' | 'fogo 3' | 'fogo 2' | 'fogo 1' | 'veneno 4';
  title: string;
}

interface MvpProps {
  Element_id: number;
  Name: string;
  Level: string;
  Breed: string;
  Life: string;
  Spawn: string;
  Time: string;
  Weakness: string;
  Size: string;
  Image: string;
}

interface MovieCardProps {
  name: string;
  life: string;
  spawn: string;
  time: string;
  image: string;
}

interface ISideBarProps {
  selectedElementId: number;
  handleClickButton(id: number): void;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'fantasma 4' | 'fantasma 3' | 'maldito 4' | 'maldito 1' | 'sombrio 4' | 'sombrio 3' | 'sombrio 2' | 'sagrado 4' | 'sagrado 2' | 'sagrado 1' | 'neutro 4' | 'neutro 3' | 'agua 4' | 'agua 3' | 'agua 2' | 'terra 4' | 'terra 3' | 'terra 2' | 'vento 4' | 'vento 3' | 'fogo 4' | 'fogo 3' | 'fogo 2' | 'fogo 1' | 'veneno 4';
  selected: boolean;
}