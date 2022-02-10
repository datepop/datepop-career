import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NAVBAR } from '../config.js';
import NotionPage from '../components/Notion.js';
import { getPageTitle } from 'notion-utils'

export default function Home({ header, notion }) {
  const [recordMap, setRecordMap] = useState();
  const [pageTitle, setPageTitle] = useState();

  useEffect(() => {
    axios.get(`/api/notion-client?pagelink=${notion}`).then(response => {
      if (response.status === 200) {
        const page = response.data
        setRecordMap(page);
        setPageTitle(getPageTitle(page));
      }
    })
  }, [notion])

  return (
    <>
      <Head>
        <title>{header || pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NotionPage navbar={NAVBAR} recordMap={recordMap} />
    </>
  )
}

export function getStaticPaths() {
  const paths = NAVBAR.filter(item => item.link !== '/').map(p => {
    return { params: { page: p.link.slice(1, p.link.length) }};
  })
  return { paths, fallback: 'blocking' };
}

export const getStaticProps = async ({ params }) => {
  if (params && !params.page) {
    return {
      notFound: true,
    };
  }
  const n = NAVBAR.filter(item => item.link === `/${params.page}`)

  var recordMap;
  if (n.length === 0) {
    recordMap = { name: "", link: params.page, notion: params.page, header: "" }
  } else {
    recordMap = n[0];
  }

  return {
    props: recordMap,
    revalidate: 60,
  };
};
