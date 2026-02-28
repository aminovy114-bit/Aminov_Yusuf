import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.jpg";
import LanguageSwitch from "./LanguageSwitch";
export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm tracking-wide transition-all
     ${isActive
      ? "text-blue-400"
      : "text-white/80 hover:text-blue-400"
    }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
     after:bg-blue-400 after:transition-all hover:after:w-full`;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl
      rounded-2xl backdrop-blur-xl transition-all duration-300`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-semibold text-lg tracking-wide">
            Yusuf<span className="text-blue-400">.dev</span>
          </span>
        </NavLink>


        <nav className="hidden md:flex items-center gap-10">
          <NavLink to="/about" className={linkClass}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/experience" className={linkClass}>
            {t("nav.experience")}
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            {t("nav.projects")}
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            {t("nav.contact")}
          </NavLink>
        </nav>
                <LanguageSwitch />




        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      

      {open && (
        <div className="md:hidden px-6 pb-6">
          
          <nav className="flex flex-col gap-6 text-center">
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/experience" className={linkClass} onClick={() => setOpen(false)}>
              {t("nav.experience")}
            </NavLink>
            <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
              {t("nav.projects")}
            </NavLink>
            <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
              {t("nav.contact")}
            </NavLink>

          </nav>
          
        </div>
      )}
    </header>
  );
}
