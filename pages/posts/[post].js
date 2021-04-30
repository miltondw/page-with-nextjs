import { useRouter } from "next/router";
import Layaut from "../../components/Layaut";
export default function Post() {
  const router = useRouter();
  return (
    <Layaut>
      <h2>Details from post</h2>
      <p>Deailt from post {router.query.post}</p>
    </Layaut>
  );
}
