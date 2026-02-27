import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, Shield, Clock, Users, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: Brain, title: "AI / ML", desc: "Predictive analytics, NLP, and intelligent automation" },
  { icon: Cloud, title: "Cloud Migration", desc: "AWS, Azure & Google Cloud strategy and migration" },
  { icon: BarChart3, title: "Data Analytics", desc: "BI dashboards, real-time analytics & data governance" },
  { icon: Code2, title: "App Development", desc: "Web, mobile & enterprise application development" },
];

const whyUs = [
  { icon: Shield, title: "NMSDC Certified MBE Partner", desc: "Helping clients meet supplier diversity goals with certified minority business partnership" },
  { icon: Clock, title: "19+ Years Experience", desc: "Nearly two decades of delivering enterprise IT solutions across industries" },
  { icon: Users, title: "End-to-End Support", desc: "From strategy to implementation and ongoing maintenance" },
];

const stats = [
  { value: "19+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "50+", label: "Qualified Consultants" },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-70" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-navy-light/30 backdrop-blur mb-8">
              <Award size={16} className="text-gold" />
              <span className="text-sm text-gold font-medium">NMSDC Certified MBE & Woman-Owned Business</span>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
              Transforming Businesses Through{" "}
              <span className="text-gradient-gold">Innovative IT Solutions</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-lg text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
              An NMSDC Certified Minority Business Enterprise and Woman-Owned Business specializing in IT Software Consultancy and Implementation across the USA and India.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gold-gradient text-navy-deep font-semibold hover:opacity-90 transition-opacity"
              >
                Explore Our Services <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-gold/40 text-primary-foreground font-semibold hover:bg-gold/10 transition-colors"
              >
                Get A Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="bg-gold-gradient py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8 text-navy-deep">
          <div className="flex items-center gap-2 font-semibold text-sm">
            <CheckCircle2 size={18} /> NMSDC Certified MBE
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <CheckCircle2 size={18} /> Woman-Owned Business
          </div>
          <div className="flex items-center gap-2 font-semibold text-sm">
            <CheckCircle2 size={18} /> IT Software Consultancy & Implementation
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Core Services
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end IT Software Consultancy & Implementation solutions tailored for enterprise needs
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i}
                className="group bg-card rounded-lg p-6 border-l-4 border-gold shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                  <s.icon size={24} className="text-gold group-hover:text-navy-deep transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Venus Solutions
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} custom={i} className="text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
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

      {/* CTA Banner */}
      <section className="py-20 bg-gold-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-deep mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-navy-deep/70 mb-8 text-lg">Let's Talk.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:contact@venussolutionsusa.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded border-2 border-navy-deep text-navy-deep font-semibold hover:bg-navy-deep/10 transition-colors"
            >
              contact@venussolutionsusa.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
