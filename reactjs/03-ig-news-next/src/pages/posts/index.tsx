import Head from 'next/head';
import styles from './styles.module.scss'
import { getPrismicClient } from './../../services/prismic';
import { GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | IGNews</title>

      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>23 de Junho de 2022</time>
            <strong>Creating a Monorepo with</strong>
            <p>Texto grandãoo asdiuajsdiuashdiusadh asiduahsidu asdiuashndiasndas</p>
          </a>

          <a href="#">
            <time>23 de Junho de 2022</time>
            <strong>Creating a Monorepo with</strong>
            <p>Texto grandãoo asdiuajsdiuashdiusadh asiduahsidu asdiuashndiasndas</p>
          </a>

          <a href="#">
            <time>23 de Junho de 2022</time>
            <strong>Creating a Monorepo with</strong>
            <p>Texto grandãoo asdiuajsdiuashdiusadh asiduahsidu asdiuashndiasndas</p>
          </a>
        </div>
      </main>
    </>

  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.getByType(
    'Post'
    , {
      fetch: ['Post.Title', 'Post.Content'],
      pageSize: 100,
    })

  console.log('response: ', JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}