import Head from 'next/head';
import styles from './styles.module.scss'
import { getPrismicClient } from './../../services/prismic';
import { GetStaticProps } from 'next';
import * as Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom';
import Link from 'next/link';

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | IGNews</title>

      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts?.map(post => (
            <Link href={`/posts/${post.slug}`}>
              <a key={post.slug} >
                <time>{post.updatedAt}</time>
                <strong>{post.title}</strong>
                <p>{post.excerpt}</p>
              </a>
            </Link>

          ))}

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

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      // title: RichText.asText(post.data.Title),
      title: post.data.Title,
      excerpt: post.data.Content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    }
  }
}