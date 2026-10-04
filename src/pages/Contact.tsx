import { useState } from "react";
import {
  Send,
  User,
  MessageSquare,
  CheckCircle,
  MapPin,
  Mail,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const { t } = useTranslation();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value.trim();

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    try {
      setLoading(true);

      await emailjs.send(
        "service_nansmdu",
        "template_sifx5i4",
        { name, message },
        "Vq5E85ulvQfechhyT"
      );

      setSent(true);
      form.reset();

      setTimeout(() => setSent(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Email yuborilmadi ❌");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      value: "aminovy114@gmail.com",
    },
    {
      icon: <MapPin size={18} />,
      value: "Samarqand, O'zbekiston",
    },
  ];

  const socialLinks = [
    {
      label: <FaGithub />,
      href: "https://github.com/aminovy114-bit",
    },
    {
      label: <FaLinkedin />,
      href: "https://www.linkedin.com/in/yusuf-aminov-977b00404/?isSelfProfile=true",
    },
    {
      label: <FaInstagram />,
      href: "https://www.instagram.com/am1nov_yusuf/",
    },
  ];

  return (
    <section className="relative w-full py-28 px-8 md:px-16 bg-gradient-to-br from-blue-950 via-black to-blue-900 rounded-3xl">
      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("contact.title")}
          </h2>

          <p className="mt-4 text-gray-300">
            {t("contact.desc")}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14">

          {sent ? (
            <div className="flex flex-col items-center py-16">
              <CheckCircle
                size={64}
                className="text-green-400 mb-6"
              />

              <h3 className="text-2xl font-semibold text-white">
                {t("contact.successTitle")}
              </h3>

              <p className="text-gray-400 mt-2">
                {t("contact.successDesc")}
              </p>
            </div>
          ) : (
            <div className="space-y-12">

              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Name */}
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />

                  <input
                    name="name"
                    required
                    placeholder={t("contact.name")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-5 text-gray-400"
                    size={18}
                  />

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t("contact.message")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white"
                  />
                </div>

                {/* Send button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-600 transition disabled:opacity-60"
                >
                  {loading
                    ? t("contact.sending")
                    : t("contact.send")}

                  <Send size={18} />
                </button>
              </form>

              {/* Email va Manzil */}
              <div className="flex justify-between items-center mt-8 text-white w-full">
                {contactInfo.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3"
                  >
                    {item.icon}

                    <span className="hover:text-blue-400 transition-colors">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Ijtimoiy linklar */}
              <div className="flex flex-wrap gap-4 mt-6 justify-center">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-2.5
                      rounded-xl
                      bg-white/5
                      border border-white/10
                      text-white
                      font-semibold
                      hover:text-blue-400
                      hover:border-blue-400/50
                      hover:bg-blue-500/10
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    {social.label}
                  </a>
                ))}
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
