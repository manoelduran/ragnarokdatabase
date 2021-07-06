import Head from 'next/head';
import React, { useState } from 'react';
import { ContentMvp } from '../../components/ContentMvp';
import { SideBar } from '../../components/SideBar';
import styles from '../mvp/mvp.module.scss';

export default function Mvp() {

  const [selectedElementId, setSelectedElementId] = useState(1);
  function handleClickButton(id: number) {
    setSelectedElementId(id);
  }
  return (
    <>
    <div className={styles.pageContainer}>
      <Head>
        <title>Mvp | MvpTimer</title>
      </Head>
      <SideBar selectedElementId={selectedElementId} handleClickButton={handleClickButton} />
      <ContentMvp selectedElementId={selectedElementId} />
    </div>
    </>
  );
}
