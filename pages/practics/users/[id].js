import Layout from "../components/layout/layout";
import { useRouter } from "next/router";

export default function user({ user }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <Layout>
      <h1>user</h1>
      {
        <div key={user.id}>
          <article className="post-content__article">
            <header>
              <h2 className="post-content__title">{user.name}</h2>
            </header>
            <section>
              <p className="post-content__paragraph">Email: {user.email}</p>
              <p className="post-content__paragraph">
                City: {user.address.city}
              </p>
            </section>
          </article>
        </div>
      }
    </Layout>
  );
}

export async function getStaticPaths() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await resp.json();
  const paths = users.map((user) => {
    return {
        params: { id: `${user.id}` },
      }
    
  });
  // const paths=[]
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await resp.json();
  return {
    props: {
      user,
    },
  };
}
