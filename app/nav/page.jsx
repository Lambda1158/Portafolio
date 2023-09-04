import Link from "next/link";

const links = [
  { href: "/about", text: "about" },
  { href: "/proyectos", text: "proyectos" },
  { href: "/contacto", text: "contacto" },
];

export default function NavPage() {
  return (
    <div className="margin-auto">
      <nav>
        <ul className="">
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
    </div>
  );
}
