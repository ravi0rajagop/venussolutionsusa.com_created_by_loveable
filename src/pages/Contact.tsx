import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GridPattern, FloatingDots, GlowOrb } from "@/components/DecorativeElements";
import contactHeroImg from "@/assets/contact-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const serviceOptions = [
  "AI & Machine Learning",
  "Cloud Transformation",
  "Data Engineering & Analytics",
  "Application Development & Managed Services",
  "General Inquiry",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
    overview: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.organization.trim()) errs.organization = "Organization is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email format";
    if (!formData.service) errs.service = "Please select a service";
    if (!formData.overview.trim()) errs.overview = "Project overview is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpwdkjqe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          organization: formData.organization.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          overview: formData.overview.trim(),
        }),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", organization: "", email: "", phone: "", service: "", overview: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border bg-card text-foreground text-sm outline-none transition-colors focus:ring-2 focus:ring-gold/50 ${
      errors[field] ? "border-destructive" : "border-border"
    }`;

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
        <GridPattern className="inset-0 text-primary-foreground" />
        <FloatingDots count={6} />
        <GlowOrb className="w-96 h-96 bg-gold/5 -top-48 -right-48" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Let's Build <span className="text-gradient-gold">What's Next</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
              Whether modernizing infrastructure, implementing AI, or engineering scalable applications, Venus Solutions LLC delivers enterprise-ready solutions with agility and accountability.
            </motion.p>
            <motion.p variants={fadeUp} custom={2} className="text-base text-gold/80 font-medium mt-4">
              Schedule a strategic consultation today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden shadow-card-hover">
            <img src={contactHeroImg} alt="Venus Solutions office building" className="w-full h-48 md:h-64 object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
              {status === "success" ? (
                <motion.div variants={fadeUp} custom={0} className="bg-card rounded-lg p-12 shadow-card text-center">
                  <CheckCircle2 size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Our team will be in touch shortly to schedule your consultation.</p>
                </motion.div>
              ) : (
                <motion.form variants={fadeUp} custom={0} onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-card space-y-5">
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                      <AlertCircle size={18} />
                      Something went wrong. Try again or email{" "}
                      <a href="mailto:contact@venussolutionsusa.com" className="underline">contact@venussolutionsusa.com</a>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} className={inputClass("name")} maxLength={100} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Organization *</label>
                      <input name="organization" value={formData.organization} onChange={handleChange} className={inputClass("organization")} maxLength={100} />
                      {errors.organization && <p className="text-destructive text-xs mt-1">{errors.organization}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass("email")} maxLength={255} />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className={inputClass("phone")} maxLength={20} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Service of Interest *</label>
                    <select name="service" value={formData.service} onChange={handleChange} className={inputClass("service")}>
                      <option value="">Select a service...</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Project Overview *</label>
                    <textarea name="overview" rows={5} value={formData.overview} onChange={handleChange} className={inputClass("overview")} maxLength={2000} placeholder="Briefly describe your project goals, timeline, and any specific requirements..." />
                    {errors.overview && <p className="text-destructive text-xs mt-1">{errors.overview}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-gold-gradient text-navy-deep font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <Send size={18} />
                    {status === "sending" ? "Sending..." : "Schedule Consultation"}
                  </button>
                </motion.form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <motion.div variants={fadeUp} custom={0}>
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Headquarters</p>
                      <p className="text-muted-foreground text-sm">3110 S 127 Ct, #311, Omaha, NE 68144</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <a href="mailto:contact@venussolutionsusa.com" className="text-gold text-sm hover:underline">contact@venussolutionsusa.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <a href="tel:4024138592" className="text-gold text-sm hover:underline">402-413-8592</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={1}>
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">Our Offices</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📍 Omaha, NE (HQ)</p>
                  <p>📍 Orange County, CA</p>
                  <p>📍 Phoenix, AZ</p>
                  <p>📍 Chennai, India</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={2} className="rounded-lg overflow-hidden shadow-card">
                <iframe
                  title="Venus Solutions LLC Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.5!2d-96.1!3d41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEyJzAwLjAiTiA5NsKwMDYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
