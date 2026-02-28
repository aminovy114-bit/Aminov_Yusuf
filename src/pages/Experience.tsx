import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaSass } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFlask, SiAdobe, SiFigma, SiCanva } from "react-icons/si";
import { useTranslation } from "react-i18next";

type Skill = {
  name: string;
  desc: string;
  icon?: IconType;
};

export default function Experience() {
  const { t } = useTranslation();

  // IT Ko‘nikmalar
  const itKnowledge: Skill[] = [
    { name: "HTML", desc: t("skills.html"), icon: FaHtml5 },
    { name: "CSS", desc: t("skills.css"), icon: FaCss3Alt },
    { name: "SCSS", desc: t("skills.scss"), icon: FaSass },
    { name: "JavaScript", desc: t("skills.js"), icon: FaJs },
    { name: "Node.js", desc: t("skills.node"), icon: FaNodeJs },
    { name: "Python", desc: t("skills.python"), icon: FaPython },
    { name: "SQL", desc: t("skills.sql"), icon: FaDatabase },
    { name: "React", desc: t("skills.react"), icon: FaReact },
    { name: "React Router", desc: t("skills.reactRouter"), icon: FaReact },
    { name: "TypeScript", desc: t("skills.ts"), icon: SiTypescript },
    { name: "Tailwind", desc: t("skills.tailwind"), icon: SiTailwindcss },
    { name: "Flask", desc: t("skills.flask"), icon: SiFlask },
  ];

  // Dizayn Ko‘nikmalar
  const designerKnowledge: Skill[] = [
    { name: "Figma", desc: t("skills.figma"), icon: SiFigma },
    { name: "Canva", desc: t("skills.canva"), icon: SiCanva },
    { name: "Adobe Spark", desc: t("skills.adobe"), icon: SiAdobe },
    { name: "UX / UI Design", desc: t("skills.uxui") },
  ];

  const renderSkillCard = (skill: Skill) => {
    const Icon = skill.icon;

    return (
      <motion.div
        key={skill.name}
        className="relative w-full h-44 cursor-pointer"
        initial="rest"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 rounded-xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-4"
          variants={{
            rest: { opacity: 1, scale: 1 },
            hover: { opacity: 0, scale: 0.9 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {Icon && <Icon className="text-4xl mb-2 text-cyan-400" />}
          <h4 className="text-lg font-semibold">{skill.name}</h4>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-xl shadow-xl border border-white/20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center text-center p-6"
          variants={{
            rest: { opacity: 0, scale: 0.9 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-sm md:text-base">{skill.desc}</p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-br from-black via-slate-900 to-black text-white rounded-2xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">{t("skills.title")}</h2>

      <h3 className="text-xl md:text-2xl font-semibold mb-6">{t("skills.itTitle")}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
        {itKnowledge.map(renderSkillCard)}
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-6">{t("skills.designTitle")}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {designerKnowledge.map(renderSkillCard)}
      </div>
    </section>
  );
}
