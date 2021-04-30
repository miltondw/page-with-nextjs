import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
export default function User() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <h1>I am User details</h1>
      <p>Hi {router.query.user}</p>
    </div>
  );
}
