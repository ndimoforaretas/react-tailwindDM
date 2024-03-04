import { Link, Outlet } from "react-router-dom";

function NavbarComponent() {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/projects", name: "Projects" },
  ];

  return (
    <nav className="">
      <ul className="flex space-x-4 bg-gray-800 text-white p-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </nav>
  );
}

export default NavbarComponent;
