import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GridPattern, FloatingDots, GlowOrb } from "@/components/DecorativeElements";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    to: "/services/ai-ml",
    icon: Brain,
    title: "AI & Machine Learning Consulting",
    subtitle: "Enterprise AI Strategy, Engineering & Deployment",
    desc: "Production-ready AI systems engineered for measurable business outcomes — from predictive analytics to intelligent automation.",
  },
  {
    to: "/services/cloud",
    icon: Cloud,
    title: "Cloud Consulting & Modernization",
    subtitle: "Secure, Scalable Digital Infrastructure",
    desc: "Modernize legacy environments and transition to resilient cloud ecosystems designed for performance, security, and cost optimization.",
  },
  {
    to: "/services/data",
    icon: BarChart3,
    title: "Data Engineering & Enterprise Analytics",
    subtitle: "Building Modern Data Ecosystems",
    desc: "Enterprise data platforms that unify fragmented systems into high-performance analytics environments.",
  },
  {
    to: "/services/app-dev",
    icon: Code2,
    title: "Application Development & Managed Services",
    subtitle: "Custom Software Built for Longevity",
    desc: "Secure, scalable, and high-performance applications tailored to enterprise needs with ongoing support.",
  },
];

const Services = () => (
  <main>
    <section className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
      <GridPattern className="inset-0 text-primary-foreground" />
      <FloatingDots />
      <GlowOrb className="w-96 h-96 bg-gold/5 -top-48 -right-48" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
            Enterprise-grade technology consulting and implementation solutions, from strategy through execution and ongoing support.
          </motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.to} variants={fadeUp} custom={i}>
              <Link
                to={s.to}
                className="group block bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-gold hover:-translate-y-1 h-full"
              >
                <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                  <s.icon size={28} className="text-gold group-hover:text-navy-deep transition-colors" />
                </div>
                <h2 className="font-heading font-bold text-xl text-foreground mb-1">{s.title}</h2>
                <p className="text-gold text-sm font-medium mb-3">{s.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-gold-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-deep mb-4">Need a Certified MBE Technology Partner?</h2>
        <p className="text-navy-deep/70 mb-8">Schedule a strategic consultation to discuss your technology objectives.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
          Schedule a Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </main>
);

export default Services;
