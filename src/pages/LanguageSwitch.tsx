import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitch() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "uz", label: "UZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg
                   border border-white/20 text-white/80 hover:text-white
                   hover:border-white/40 transition"
      >
        🌐 {i18n.language?.toUpperCase() || "UZ"}
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-20 rounded-lg overflow-hidden
        backdrop-blur-xl border border-white/10
        transition-all duration-200 origin-top
        ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
      >
        {languages.map((lng) => (
          <button
            key={lng.code}
            onClick={() => {
              i18n.changeLanguage(lng.code);
              setOpen(false);
            }}
            className={`w-full px-3 py-2 text-sm text-left
              ${i18n.language === lng.code
                ? "bg-blue-400/20 text-blue-400"
                : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
          >
            {lng.label}
          </button>
        ))}
      </div>
    </div>
  );
}
