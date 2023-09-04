import Link from "next/link";

const links = [
  { href: "/about", text: "about" },
  { href: "/proyectos", text: "proyectos" },
  { href: "/contacto", text: "contacto" },
];

export default function NavPage() {
  return (
    <div className=" h-10">
      <nav>
        <ul className=" flex flex-col align-middle">
          {links.map((e) => {
            return (
              <li className="pr-2" key={e.href}>
                <div>
                  <Link className="text-red" href={e.href}>
                    {e.text}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <div><Link href="/">Menu</Link></div>
    </div>
  );
}