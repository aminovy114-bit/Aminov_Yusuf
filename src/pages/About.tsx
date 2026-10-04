import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import yusuf from "../assets/yusuf.jpg";
import { PenTool, Code2, Sparkles, GraduationCap, User, Calendar, Briefcase, School } from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("about-section");
      if (el && el.getBoundingClientRect().top < window.innerHeight - 120) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const roles = t("about.roles", { returnObjects: true }) as any[];
  const icons = [PenTool, Code2, Sparkles, GraduationCap];

  const infoItems = [
    { icon: User, label: t("about.name"), value: t("about.info.name") },
    { icon: Calendar, label: t("about.birth"), value: t("about.info.birth") },
    { icon: Briefcase, label: t("about.profession"), value: t("about.info.profession") },
    { icon: School, label: t("about.education"), value: t("about.info.education") },
  ];

  return (
    <section
      id="about-section"
      className={`max-w-7xl mx-auto px-6 md:px-16 py-24 transition-all duration-1000 ease-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          {t("about.title")}
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
          <div className="relative group mb-10">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <img
              src={yusuf}
              alt={t("about.info.name")}
              className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-[2rem] object-cover shadow-2xl border border-white/10 grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
            />
            
            <div className="absolute -bottom-5 -right-5 bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl hidden md:block">
              <p className="text-[#facc15] font-bold text-xl">1+</p>
              <p className="text-white text-xs uppercase tracking-tighter">Yillik tajriba</p>
            </div>
          </div>

          <div className="w-full space-y-4 max-w-sm">
            {infoItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 group/item">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                  <item.icon size={18} />
                </div>
                <p className="text-gray-400 text-sm md:text-base">
                  <span className="text-white/60 mr-2">{item.label}:</span>
                  <span className="text-white font-medium">{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 grid gap-5">
          {roles.map((role: any, i: number) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group flex gap-6 p-6 rounded-[1.5rem] bg-white/[0.03] backdrop-blur-sm
                border border-white/5 hover:border-blue-500/50 hover:bg-white/[0.07]
                transition-all duration-500 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-blue-400 group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500 shadow-inner">
                  <Icon size={28} />
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mt-2 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {role.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

