import Head from 'next/head';
import React, { useState } from 'react';
import { ContentMvp } from '../../components/ContentMvp';
import { SideBar } from '../../components/SideBar';
import styles from '../Mvps/mvp.module.scss';

export default function Mvps() {

  const [selectedElementId, setSelectedElementId] = useState(1);
  function handleClickButton(id: number) {
    setSelectedElementId(id);
  }
  return (
    <>
      <div className={styles.pageContainer}>
        <Head>
          <title>Mvp List | Mvp Database</title>
        </Head>
        <SideBar selectedElementId={selectedElementId} handleClickButton={handleClickButton} />
          <ContentMvp selectedElementId={selectedElementId} />
      </div>
    </>
  );
}
