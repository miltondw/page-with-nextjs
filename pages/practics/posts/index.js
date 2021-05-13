import Layout from "../components/layout/layout";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Posts({posts}) {
  //Cliente side Rendering
  //   const [posts, setPost] = useState([]);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const newPost = await resp.json();
  //       setPost(newPost);
  //       console.log(posts);
  //     };
  //     fetchPosts();
  //   }, []);
  return (
    <Layout>
      <h1>Posts</h1>

      <div className="post-content">
        {posts.map((post) => {
          return (
            <Link
              href={`/practics/posts/[id]`}
              as={`/practics/posts/${post.id}`}
              key={post.id}
            >
              <a className="post-content__link">
                <article className="post-content__article">
                  <header>
                    <h2 className="post-content__title">{post.title}</h2>
                  </header>
                  <section>
                    <p className="post-content__paragraph">{post.body}</p>
                  </section>
                </article>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

//Server side rendering
export async function getServerSideProps() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resp.json();
  return {
    props: {
      posts,
    },
  };
}
