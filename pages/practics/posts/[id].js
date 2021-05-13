import Layout from "../components/layout/layout";
export default function Post({ post }) {
  return (
    <Layout>
      <h1>Post</h1>
      <div className="content-post">
        {
          <article  key={post.id}>
            <header>
              <h2 className="content-post__title">{post.title}</h2>
            </header>
            <section>
              <p className="content-post__paragraph">{post.body}</p>
            </section>
          </article>
        }
      </div>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await resp.json();
  return {
    props: {
      post,
    },
  };
}
