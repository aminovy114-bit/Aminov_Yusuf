import { useState } from "react";
import { Send, Phone, User, MessageSquare, CheckCircle, MapPin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

export default function Contact() {
  const { t } = useTranslation();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 9) {
      setPhoneError(t("contact.phoneError"));
      return;
    }
    setPhoneError("");

    try {
      setLoading(true);

      await emailjs.send(
        "service_nansmdu",
        "template_sifx5i4",
        { name, phone, message },
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

  // Sizning kontakt ma'lumotlaringiz va ijtimoiy linklar
  const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "sizning.email@gmail.com", href: "mailto:sizning.email@gmail.com" },
    { icon: <Phone size={18} />, label: "Telefon", value: "+998 99 123 45 67", href: "tel:+998991234567" },
    { icon: <MapPin size={18} />, label: "Manzil", value: "Toshkent, O'zbekiston" },
  ];

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/username", icon: "🐱" },
    { label: "LinkedIn", href: "https://linkedin.com/in/username", icon: "🔗" },
    { label: "Telegram", href: "https://t.me/username", icon: "✈️" },
  ];

  return (
    <section className="relative w-full py-28 px-8 md:px-16 bg-gradient-to-br from-blue-950 via-black to-blue-900 rounded-3xl">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t("contact.title")}</h2>
          <p className="mt-4 text-gray-300">{t("contact.desc")}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-14">
          {sent ? (
            <div className="flex flex-col items-center py-16">
              <CheckCircle size={64} className="text-green-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white">{t("contact.successTitle")}</h3>
              <p className="text-gray-400 mt-2">{t("contact.successDesc")}</p>
            </div>
          ) : (
            <div className="space-y-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      name="name"
                      required
                      placeholder={t("contact.name")}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      name="phone"
                      required
                      placeholder={t("contact.phone")}
                      className={`w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border text-white ${
                        phoneError ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {phoneError && <p className="mt-2 text-sm text-red-400">{phoneError}</p>}
                  </div>
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-gray-400" size={18} />
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder={t("contact.message")}
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/40 border border-white/10 text-white"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-blue-500 text-black font-semibold hover:bg-blue-600 transition disabled:opacity-60"
                >
                  {loading ? t("contact.sending") : t("contact.send")}
                  <Send size={18} />
                </button>
              </form>

              {/* Kontakt ma'lumotlari */}
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-white">
                {contactInfo.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {item.icon}
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <span>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Ijtimoiy linklar */}
              <div className="flex gap-6 mt-6 justify-center text-2xl">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    title={social.label}
                  >
                    {social.icon}
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