import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
export default function Post() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <h2>Details from post</h2>
      <p>Deailt from post {router.query.post}</p>
    </div>
  );
}
