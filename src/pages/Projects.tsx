import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Rasmlar
import Maqolalar from '../assets/maqolalar.png';
import Ramadan from '../assets/ramadanproject.png';
import Rockpaper from '../assets/rockpaperskissor.png';
import Statisda from '../assets/statisda.png';
import Testify from '../assets/testtify.png';
import Laptop from '../assets/laptop.png';
import ProfileImg from '../assets/profile.jpg'; 

const Projects = () => {
  const { t } = useTranslation();

  const projectImgs = [Maqolalar, Ramadan, Rockpaper, Statisda, Testify, Laptop];
  const projectsData = t("projects", { returnObjects: true }) as any[];

 const stats = [
  { label: t("stats.real"), value: 5 },
  { label: t("stats.group"), value: 30 },
  { label: t("stats.mini"), value: 50 },
];

  return (
    <section className="py-16 rounded-3xl bg-[#0f172a] overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20 bg-[#1e293b]/50 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#facc15] to-orange-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src={ProfileImg} 
              alt="Mening rasmim" 
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#1e293b] shadow-2xl transform transition duration-500 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
            {stats.map((stat, idx) => (
              <StatItem key={idx} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#facc15] mb-16 text-center tracking-tight">
          {t("projectsBtn")}
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(projectsData) && projectsData.map((proj, index) => (
            <div
              key={index}
              className="group bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg border border-transparent hover:border-[#facc15]/50 transform transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(250,204,21,0.15)] cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={projectImgs[index]}
                  alt={proj.title}
                  className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#facc15] mb-3 group-hover:text-white transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Raqamlar animatsiyasi uchun alohida komponent
const StatItem = ({ label, value }: { label: string, value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 soniya davomida sanaydi
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col">
      <span className="text-4xl md:text-5xl font-black text-white flex items-center justify-center md:justify-start">
        {count}{value >= 30 ? "+" : ""}
      </span>
      <span className="text-[#facc15] font-medium uppercase tracking-wider text-sm mt-1">
        {label}
      </span>
    </div>
  );
};

export default Projects;