import { getAllPostIDs } from "../../lib/post";


export async function getStaticPath() {
  const paths = getAllPostIDs();

  return {
    paths,
    fallback: false,
  };
}
