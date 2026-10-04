import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const roles = t("roles", {
    returnObjects: true,
  }) as unknown as string[];

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex] || "";

  useEffect(() => {
    if (!roles.length) return;

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentRole.length) {
          setIsDeleting(true);
        }
      } else {
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, currentRole, roles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-lg mb-3">
            {t("home.greeting")}
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t("home.name")}
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            {currentRole.slice(0, charIndex)}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg opacity-80 max-w-xl mb-8">
            {t("home.description")}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/projects")}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {t("home.viewProjects")}
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {t("home.contact")}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}