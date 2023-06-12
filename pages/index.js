import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import {getPostsData} from "../lib/post"
import Link from "next/link";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();//id, title, data, sumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          私はNextjsエンジニアです/好きなフレームワークはNext.jsです
        </p>
        {/* <Link href="/posts/first-post">最初の投稿はこちら</Link>  あとで外す*/}
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
        {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img
                src={`${thumbnail}`}
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href={`/posts/${id}`} legacyBehavior>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
        ))}
        </div>
      </section>
    </Layout>
  );
}