import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isMenuOpen]);
  return (
    <header className="container mx-auto flex items-center justify-between py-6 px-4 sm:pt-16">
      <img src={logo} alt="W." className="h-auto w-10 sm:w-14" />
      <div className="z-50 sm:hidden">
        <Hamburger
          label="Show Menu"
          toggled={isMenuOpen}
          onToggle={setIsMenuOpen}
          color="hsl(240, 100%, 5%)"
        />
      </div>
      {/* mobile Menu */}
      <nav
        className={`absolute ${isMenuOpen ? "right-0" : "-right-full"} 
        top-0 z-40 flex h-screen w-full max-w-[255px] flex-col justify-center gap-8 bg-white px-4 font-Tenor text-xl font-bold capitalize text-dark-blue transition-all duration-500 sm:hidden`}
      >
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/trending" onClick={closeMenu}>
          trending
        </Link>
        <Link to="/categories" onClick={closeMenu}>
          Categories
        </Link>
      </nav>
      {/* Desktop Nav */}
      <nav className="hidden space-x-8 font-Tenor text-xl font-semibold capitalize text-dark-blue/80 sm:flex">
        <Link to="/" className="hover:text-soft-orange">
          Home
        </Link>
        <Link to="/trending" className="hover:text-soft-orange">
          Trending
        </Link>
        <Link to="/categories" className="hover:text-soft-orange">
          Categories
        </Link>
      </nav>
      {isMenuOpen ? (
        <div className="absolute top-0 left-0 z-10 h-screen w-screen bg-black bg-opacity-50"></div>
      ) : null}
    </header>
  );
};

export default Header;
