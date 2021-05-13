import Layout from '../components/layout/layout'
import Link from 'next/link'
export default function Users({users}) {
    return (
        <Layout>
            <h1>Useres</h1>
            {
                users.map(user=>{
                    return(
                        <Link
                        href={`/practics/users/[id]`}
                        as={`/practics/users/${user.id}`}
                        key={user.id}
                      >
                        <a className="post-content__link">
                          <article className="post-content__article">
                            <header>
                              <h2 className="post-content__title">{user.name}</h2>
                            </header>
                            <section>
                              <p className="post-content__paragraph">Email: {user.email}</p>
                              <p className="post-content__paragraph">City: {user.address.city}</p>

                            </section>
                          </article>
                        </a>
                      </Link>
                    )
                })
            }
        </Layout>
    )
}
export async function getStaticProps(){
    const resp= await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await resp.json()
    return{
        props:{
            users
        }
    }
}
