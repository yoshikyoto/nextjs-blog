import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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
  const postData = getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}