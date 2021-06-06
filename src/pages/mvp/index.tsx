import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import MvpCard from '../../components/MvpCard';
import { api } from '../../services/api';
import styles from '../Mvp/mvp.module.scss';

interface IContentProps {
  selectedElementId: number;
}
export default function Mvp({ selectedElementId }: IContentProps) {
  const [mvps, setMvps] = useState<MvpProps[]>([]);
  const [selectedElement, setSelectedElement] = useState<ElementResponseProps>({} as ElementResponseProps);
  
  useEffect(() => {
    api.get<MvpProps[]>(`mvps/?element_id=${selectedElementId}`).then(response => {
      setMvps(response.data);
    });

  api.get<ElementResponseProps>(`element/${selectedElementId}`).then(response => {
    setSelectedElement(response.data);
  })
}, [selectedElementId]);


  return (
    <>
      <Head>
        <title>Mvp | MvpTimer</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            Categoria:
          <span>{selectedElement.title}</span>
          </h2>
        </header>
        <main className={styles.mvpListContainer}>
          <div className={styles.mvpList}>
            {mvps.map(mvp => (
              <MvpCard key={mvp.element_id}
                name={mvp.name}
                life={mvp.life}
                spawn={mvp.spawn}
                time={mvp.time}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

