import Head from 'next/head'
import Link from 'next/link'
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={utilStyles.headingMd}>
          <p>
            Read {' '}
            <Link href="/posts/first-post">
              <a>this page</a>
            </Link>
          </p>
        </section>
      </main>
    </Layout>
  )
}
