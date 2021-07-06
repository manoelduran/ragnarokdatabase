import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import styles from '../ContentMvp/styles.module.scss';
import MvpCard from '../MvpCard';

interface IContentProps {
  selectedElementId: number;
}
export function ContentMvp({ selectedElementId }: IContentProps) {
  const [mvps, setMvps] = useState<MvpProps[]>([]);
  const [selectedElement, setSelectedElement] = useState<ElementResponseProps>({} as ElementResponseProps);
  useEffect(() => {
    api.get<MvpProps[]>(`mvps/?Element_id=${selectedElementId}`).then(response => {
      console.log(response.data);
      setMvps(response.data);
    });

    api.get<ElementResponseProps>(`elements/${selectedElementId}`).then(response => {
      setSelectedElement(response.data);
    })
  }, [selectedElementId]);

  return (

    <div className={styles.container}>
      <header className={styles.header}>
        <h2>
          Categoria:
          <span>{selectedElement.title}</span>
        </h2>
      </header>
      <main className={styles.mvpListContainer}>
        <div className={styles.mvpList}>
          {mvps.map((mvp) => (
            <MvpCard
              key={`${mvp.Element_id}-${mvp.Name}`}
              name={mvp.Name}
              life={mvp.Life}
              spawn={mvp.Spawn}
              time={mvp.Time}
              image={mvp.Image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}