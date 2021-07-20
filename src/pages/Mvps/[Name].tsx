import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

interface MvpProps {
  mvp: {
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
    Gif: string;
  }
}
export default function Mvp({ mvp }: MvpProps) {
  const [selectedMvp, setSelectedMvp] = useState<MvpProps>()
  useEffect(() => {
    api.get<MvpProps>(`mvps/?Name=${selectedMvp}`).then(response => {
      console.log(response.data);
      setSelectedMvp(response.data);
    });
  }, [])
  
  return (
   <h1>hello worl</h1>
  );
}

