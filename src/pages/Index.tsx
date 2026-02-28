import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, Shield, Users, Award, ArrowRight, CheckCircle2, Landmark, Target, Handshake, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { GridPattern, FloatingDots, GlowOrb, CircuitPattern } from "@/components/DecorativeElements";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Brain, title: "AI & Machine Learning", desc: "Production-ready AI systems engineered for measurable business outcomes.", to: "/services/ai-ml" },
  { icon: Cloud, title: "Cloud Transformation", desc: "Secure cloud architecture, migration, and modernization at enterprise scale.", to: "/services/cloud" },
  { icon: BarChart3, title: "Data Engineering & Analytics", desc: "High-performance data platforms that power strategic decisions.", to: "/services/data" },
  { icon: Code2, title: "Application Development & Managed Services", desc: "Custom software solutions designed for scalability and long-term maintainability.", to: "/services/app-dev" },
];

const whyUs = [
  { icon: Award, title: "Certified Minority Business Enterprise (MBE)" },
  { icon: Users, title: "Minority-Led | Woman-Owned" },
  { icon: Landmark, title: "Architect-Led Engagements" },
  { icon: Shield, title: "Structured Governance & Risk Controls" },
  { icon: Handshake, title: "Scalable Delivery Through Strategic Alliances" },
  { icon: Target, title: "Business-Outcome Focused Execution" },
];

const testimonials = [
  { quote: "Venus Solutions demonstrated strong architectural leadership and execution discipline. Their structured approach gave us confidence throughout our transformation initiative.", author: "Director of Technology", org: "Private Healthcare Network" },
  { quote: "The team delivered enterprise-level strategy with startup agility. Their governance framework minimized risk while accelerating delivery.", author: "VP Engineering", org: "SaaS Organization" },
  { quote: "They approached our data modernization initiative with clarity, depth, and measurable impact.", author: "Chief Data Officer", org: "Financial Services Firm" },
];

const stats = [
  { value: "19+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "50+", label: "Qualified Consultants" },
];

const Index = () => (
  <main>
    {/* Hero — no CTA buttons */}
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-hero-gradient opacity-70" />
      <GridPattern className="inset-0 text-primary-foreground" />
      <FloatingDots count={10} />
      <GlowOrb className="w-[500px] h-[500px] bg-gold/5 -top-64 -right-64" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-navy-light/30 backdrop-blur mb-8">
            <Award size={16} className="text-gold" />
            <span className="text-sm text-gold font-medium">NMSDC Certified MBE & Woman-Owned Business</span>
          </motion.div>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            Enterprise-Grade Technology Solutions.{" "}
            <span className="text-gradient-gold">Built for Scale. Delivered with Precision.</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/70 max-w-2xl mb-4 leading-relaxed">
            Venus Solutions LLC is a certified Minority Business Enterprise (MBE) delivering AI/ML, Cloud, Data Analytics, and Application Development services to mid-market and enterprise organizations.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-base text-gold/80 font-medium">
            Architect-led. Outcome-driven. Enterprise-ready.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Certification Banner */}
    <section className="bg-gold-gradient py-4">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 text-navy-deep">
        <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle2 size={18} /> NMSDC Certified MBE</div>
        <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle2 size={18} /> Minority-Led & Woman-Owned</div>
        <div className="flex items-center gap-2 font-semibold text-sm"><CheckCircle2 size={18} /> IT Software Consultancy & Implementation</div>
      </div>
    </section>

    {/* Who We Are */}
    <section className="relative py-20 bg-background overflow-hidden">
      <CircuitPattern className="top-0 right-0 opacity-30" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Who We Are</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-6">
            Venus Solutions LLC is a technology consulting and implementation firm focused on designing and delivering secure, scalable, and performance-driven digital solutions.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed mb-6">
            We operate with startup agility while applying enterprise governance, structured delivery frameworks, and scalable strategic partnerships to support complex technology initiatives.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
            Certified by the National Minority Supplier Development Council (NMSDC), we help organizations achieve both digital transformation and supplier diversity objectives.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Services Snapshot */}
    <section className="relative py-20 bg-muted/50 overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-gold/5 -bottom-36 -left-36" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Core Services</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} custom={i}>
              <Link to={s.to} className="group block bg-card rounded-lg p-6 border-l-4 border-gold shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <s.icon size={24} className="text-gold group-hover:text-navy-deep transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Why Venus Solutions */}
    <section className="relative py-20 bg-background overflow-hidden">
      <CircuitPattern className="bottom-0 left-0 opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Venus Solutions LLC</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {whyUs.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i} className="flex items-center gap-3 p-5 bg-card rounded-lg shadow-card border-l-4 border-gold hover:shadow-card-hover transition-all duration-300">
              <item.icon size={22} className="text-gold shrink-0" />
              <span className="font-medium text-foreground text-sm">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA — moved below Why Us */}
    <section className="py-16 bg-hero-gradient relative overflow-hidden">
      <GridPattern className="inset-0 text-primary-foreground" />
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Let's Build <span className="text-gradient-gold">What's Next</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 mb-8 text-lg">
            Schedule a strategic consultation to discuss your technology objectives.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gold-gradient text-navy-deep font-semibold hover:opacity-90 transition-opacity">
              Schedule a Consultation <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-gold/40 text-primary-foreground font-semibold hover:bg-gold/10 transition-colors">
              Explore Our Services
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} custom={i} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">{s.value}</div>
              <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="relative py-20 bg-muted/50 overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-gold/5 -top-36 -right-36" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Client Testimonials</motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp} custom={i} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold relative hover:shadow-card-hover transition-all duration-300">
              <Quote size={32} className="text-gold/20 absolute top-4 right-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-20 bg-gold-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-deep mb-4">Ready to Transform Your Business?</h2>
        <p className="text-navy-deep/70 mb-8 text-lg">Schedule a strategic consultation today.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
            Contact Us <ArrowRight size={18} />
          </Link>
          <a href="mailto:contact@venussolutionsusa.com" className="inline-flex items-center gap-2 px-8 py-4 rounded border-2 border-navy-deep text-navy-deep font-semibold hover:bg-navy-deep/10 transition-colors">
            contact@venussolutionsusa.com
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Index;
