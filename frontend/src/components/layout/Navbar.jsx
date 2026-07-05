import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
    { name: "AI Chat", path: "/chatbot" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="text-3xl font-extrabold text-pink-500"
        >
          PatternAI
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-pink-500"
                    : "text-gray-600 hover:text-pink-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/upload"
            className="rounded-xl bg-pink-500 px-5 py-3 font-semibold text-white transition hover:bg-pink-600"
          >
            Start Designing
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-pink-500 md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-pink-100 bg-white md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="font-medium text-gray-700"
              >
                {item.name}
              </NavLink>
            ))}

            <Link
              to="/upload"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-pink-500 px-4 py-3 text-center font-semibold text-white"
            >
              Start Designing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;