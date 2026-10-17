import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { cn } from "cn";

function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "flex items-center justify-center",
        "border-b border-border",
        "backdrop-blur-xl",
      )}
    >
      <div
        className="
          flex w-full max-w-7xl
          items-center justify-between
          px-4 sm:px-6 lg:px-8
        "
      >
        <Link to="/" className="shrink-0">
          <img src={Logo} alt="Logo" className="h-22 w-auto object-contain" />
        </Link>

        <NavBar />
      </div>
    </header>
  );
}

export default Header;
