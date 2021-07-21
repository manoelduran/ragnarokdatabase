import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';


export default function Mvp({ mvp }) {
  console.log(mvp);
  return (
    <div>
      <Head>
        <title>{mvp.Name} | Mvp Database</title>
      </Head>
      <img src={mvp.Gif}></img>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3333/mvps/')
  const mvps = await res.json()

  return {
    paths: mvps.map((mvp) => ({
      params: { Name: mvp.Name }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3333/mvps?Name=${params.Name}`)
  const mvps = await res.json()
  const mvp = mvps[0];

  return { props: { mvp } }
}

