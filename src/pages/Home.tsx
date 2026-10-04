import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import yusuf from "../assets/yusuf.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Roles are taken from i18n.ts
  const rolesData = t("roles", {
    returnObjects: true,
  });

  const roles: string[] = Array.isArray(rolesData)
    ? rolesData.map(String)
    : [];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  const currentRole = roles[roleIndex] || "";

  // Page entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!currentRole) return;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        if (isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setDisplayText(
            currentRole.slice(0, displayText.length + 1)
          );
        }
      }, isDeleting ? 120 : 220);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles.length]);

  return (
    <section
      className={`min-h-screen max-w-7xl mx-auto px-6 md:px-16 py-24 flex items-center
      transition-all duration-1000 ease-out
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20"
      }`}
    >
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="lg:col-span-7">

          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full
            bg-blue-500/10 border border-blue-500/20
            text-blue-400 text-sm font-semibold
            backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.08)]"
          >
            <Sparkles size={16} />
            <span>{t("hello")}</span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            font-black tracking-tight leading-[0.95] text-white mb-7"
          >
            Yusuf
            <span className="block text-white">
              Aminov
            </span>
          </h1>

          {/* Animated Role */}
          <div className="min-h-[80px] md:min-h-[95px] mb-6">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-extrabold leading-tight
              text-blue-500"
            >
              {displayText}
              <span className="animate-pulse ml-2 text-cyan-400">
                |
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="text-base md:text-lg lg:text-xl
            leading-relaxed max-w-2xl
            text-blue-400 font-medium
            mb-9"
          >
            {t("desc")}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            {/* About Button */}
            <button
              onClick={() => navigate("/about")}
              className="
                group
                flex items-center gap-2
                px-7 py-3.5
                rounded-xl
                bg-gradient-to-r from-blue-600 to-cyan-500
                text-white
                font-bold
                shadow-[0_0_25px_rgba(59,130,246,0.25)]
                border border-blue-400/20
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(59,130,246,0.55)]
              "
            >
              {t("aboutBtn")}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Projects Button */}
            <button
              onClick={() => navigate("/projects")}
              className="
                group
                flex items-center gap-2
                px-7 py-3.5
                rounded-xl
                bg-white/[0.03]
                backdrop-blur-sm
                border border-blue-400/40
                text-white
                font-bold
                transition-all duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:bg-blue-500/10
                hover:border-cyan-400
                hover:text-cyan-300
                hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
              "
            >
              {t("projectsBtn")}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">

          <div className="relative group">

            {/* Main blue/cyan glow */}
            <div
              className="
                absolute -inset-5
                bg-gradient-to-tr
                from-blue-600
                to-cyan-400
                rounded-[2.5rem]
                blur-2xl
                opacity-20
                group-hover:opacity-40
                transition-all duration-700
              "
            />

            {/* Secondary glow */}
            <div
              className="
                absolute -inset-2
                bg-blue-500/20
                rounded-[2.5rem]
                blur-xl
                group-hover:bg-cyan-400/20
                transition-all duration-700
              "
            />

            {/* Image Card */}
            <div
              className="
                relative
                w-72 h-80
                md:w-96 md:h-[450px]
                rounded-[2rem]
                overflow-hidden
                bg-white/[0.03]
                backdrop-blur-sm
                border border-white/10
                shadow-2xl
                transition-all duration-700 ease-out
                group-hover:scale-[1.02]
                group-hover:-translate-y-2
                group-hover:border-cyan-400/40
                group-hover:shadow-[0_0_45px_rgba(34,211,238,0.3)]
              "
            >
              <img
                src={yusuf}
                alt="Yusuf Aminov"
                className="
                  w-full h-full
                  object-cover
                  transition-all duration-700 ease-out
                  grayscale-[20%]
                  group-hover:grayscale-0
                  group-hover:scale-105
                "
              />

              {/* Image overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />

              {/* Bottom label */}
              <div
                className="
                  absolute bottom-5 left-5 right-5
                  p-4
                  rounded-2xl
                  bg-black/40
                  backdrop-blur-xl
                  border border-white/10
                  transition-all duration-500
                  group-hover:border-cyan-400/30
                "
              >
                <p className="text-white font-bold text-lg">
                  Yusuf Aminov
                </p>

                <p className="text-cyan-400 text-sm font-medium">
                  {currentRole}
                </p>
              </div>
            </div>

            {/* Floating accent */}
            <div
              className="
                absolute -top-5 -right-5
                w-14 h-14
                rounded-2xl
                bg-[#1e293b]/90
                backdrop-blur-xl
                border border-white/10
                flex items-center justify-center
                shadow-xl
                transition-all duration-500
                group-hover:rotate-6
                group-hover:scale-110
              "
            >
              <Sparkles
                size={24}
                className="text-cyan-400"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
