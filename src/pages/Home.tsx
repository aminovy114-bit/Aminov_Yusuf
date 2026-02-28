import { useState, useEffect } from "react";
import suit from '../assets/suit.jpg'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const roles = t("roles", { returnObjects: true }); // roles array

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (pause) return;
    const speed = deleting ? 80 : 150;
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (!deleting) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentRole.length) {
          setPause(true);
          setTimeout(() => {
            setDeleting(true);
            setPause(false);
          }, 1500);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, pause, roles]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] flex items-center justify-center px-8 md:px-16
      bg-gradient-to-br from-blue-950 via-black to-blue-900 overflow-hidden rounded-3xl"
    >
      {/* Background circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* Left text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {t("hello")} <br />
            <span className="text-blue-400">
              {text}
              <span className="inline-block w-1 h-7 bg-blue-400 animate-blink ml-1"></span>
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-xl">{t("desc")}</p>

          <div className="flex justify-center md:justify-start gap-4">
            <NavLink
              to="/about"
              className="px-6 py-3 bg-blue-500 text-black font-semibold rounded-xl
              hover:bg-blue-600 hover:scale-105 transition"
            >
              {t("aboutBtn")}
            </NavLink>

            <NavLink
              to="/projects"
              className="px-6 py-3 border border-white/30 text-white rounded-xl
              hover:bg-white/10 hover:scale-105 transition"
            >
              {t("projectsBtn")}
            </NavLink>
          </div>
        </div>

        {/* Right image flip */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className={`flip-card ${flipped ? "flipped" : ""}`}
            onClick={() => setFlipped(!flipped)}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <img
                  src={suit}
                  alt={t("flipName")}
                  className="w-90 md:w-96 rounded-2xl drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)] cursor-pointer"
                />
              </div>

              <div className="flip-back rounded-2xl">
                <h3 className="text-xl font-bold mb-2">{t("flipName")}</h3>
                <p>{t("flipBirthday")}</p>
                <p>{t("flipAge")}</p>
                <p>{t("flipDev")}</p>
                <p>{t("flipDesigner")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }

        .flip-card {
          width: 288px;
          height: 384px;
          perspective: 1200px;
        }

        .flip-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s ease;
          transform-style: preserve-3d;
        }

        .flip-card.flipped .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
        }

        .flip-front img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .flip-back {
          background: linear-gradient(135deg, #020617, #000);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotateY(180deg);
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </section>
  );
}
