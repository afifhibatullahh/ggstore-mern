import cx from "classnames";
import Link from "next/link";

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, href = "/" } = props;
  const classTitle = cx({
    "nav-link": true,
    active: active,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
const data = [
  {
    username: "amyrobson",
    text: "adsfsafsadfaasdfasfsfsafd",
    like: ["user 1", "user 2", "user 3", "user 4"],
    created_at: "23-01-2022:23:30:03",
  },
];
