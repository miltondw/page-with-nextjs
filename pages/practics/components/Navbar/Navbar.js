import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [items] = useState([
    {
      name: "Home",
      link: "/practics",
    },
    {
      name: "Users",
      link: "/practics/users",
    },
    {
      name: "Posts",
      link: "/practics/posts",
    },
  ]);
  return (
    <nav className="nav">
      <ul className="ul">
        {items.map((item) => {
          return (
            <li className="li" key={item.link}>
              <Link href={item.link}>
                <a className="a">{item.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
