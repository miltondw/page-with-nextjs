import { useRouter } from "next/router";
import Layaut from "../../components/Layaut";
export default function User() {
  const router = useRouter();
  return (
    <Layaut>
      <h1>I am User details</h1>
      <p>Hi {router.query.user}</p>
    </Layaut>
  );
}
