import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NAVBAR } from '../config.js';
import NotionPage from '../components/Notion.js';

const page = NAVBAR.filter(item => item.link === `/`)[0];

export default function Home() {
  const [recordMap, setRecordMap] = useState();

  useEffect(() => {
    axios.get(`/api/notion-client?pagelink=${page.notion}`).then(response => {
      if (response.status === 200) {
        const page = response.data
        setRecordMap(page);
      }
    })
  }, [])

  return (
    <>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NotionPage navbar={NAVBAR} recordMap={recordMap} />
    </>
  )
}
