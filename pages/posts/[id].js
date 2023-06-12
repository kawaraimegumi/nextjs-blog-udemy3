import { getAllPostIDs, getPostData } from "../../lib/post";
import Layout from "../../components/layout"
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
  <Layout>
    <article>
      <h1 className={utilStyles.headingX1}></h1>
      <div className={utilStyles.lightText}></div>
      <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
    </article>
  </Layout>
  )
}