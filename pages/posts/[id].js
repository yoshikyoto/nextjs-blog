import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// params を受け取るようにする
export async function getStaticProps({ params }) {
  // id に対応するデータを取得
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}
