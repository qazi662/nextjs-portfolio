import { useRouter } from "next/router";

import Layout from "../components/Layout";

const Post = () => {
  const router = useRouter();

  return (
    <Layout title={router.query.title} >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsa dignissimos, harum asperiores rem odio.</p>
    </Layout>
  );
};
export default Post;
