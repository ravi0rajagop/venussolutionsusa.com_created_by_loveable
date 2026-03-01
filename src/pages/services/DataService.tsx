import { motion } from "framer-motion";
import { BarChart3, ChevronRight, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { GridPattern, FloatingDots, GlowOrb } from "@/components/DecorativeElements";
import dataHeroImg from "@/assets/data-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const capabilities = [
  "Enterprise data warehouse design",
  "Data lake & lakehouse implementation",
  "ETL / ELT pipeline engineering",
  "Real-time streaming integration",
  "Data modeling & optimization",
  "BI dashboard implementation",
  "Master Data Management (MDM)",
  "Data governance frameworks",
];

const approach = [
  "Scalability",
  "Data quality",
  "Performance optimization",
  "Governance controls",
  "Long-term maintainability",
];

const outcomes = [
  "Single source of truth",
  "Reliable executive reporting",
  "Improved strategic visibility",
  "Reduced data redundancy",
  "Scalable analytics architecture",
];

const DataService = () => (
  <main>
    <section className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
      <GridPattern className="inset-0 text-primary-foreground" />
      <FloatingDots count={8} />
      <GlowOrb className="w-96 h-96 bg-gold/5 -top-48 -right-48" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <Link to="/services" className="inline-flex items-center gap-1 text-gold/70 hover:text-gold text-sm mb-6 transition-colors">
          <ArrowLeft size={14} /> All Services
        </Link>
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                <BarChart3 size={28} className="text-gold" />
              </div>
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Data Engineering & <span className="text-gradient-gold">Enterprise Analytics</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-gold font-medium mb-4">Building Modern Data Ecosystems</motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-primary-foreground/70 leading-relaxed">
              We design and implement enterprise data platforms that unify fragmented systems into high-performance analytics environments.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} custom={2} className="hidden lg:block">
            <img src={dataHeroImg} alt="Data analytics dashboard visualization" className="rounded-lg shadow-card-hover w-full h-80 object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>

    <div className="lg:hidden bg-background">
      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <img src={dataHeroImg} alt="Data analytics dashboard" className="rounded-lg shadow-card-hover w-full h-48 object-cover" />
      </div>
    </div>

    <section className="relative py-20 bg-background overflow-hidden">
      <GlowOrb className="w-72 h-72 bg-gold/5 -bottom-36 -left-36" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">Core Capabilities</h2>
            <div className="space-y-3">
              {capabilities.map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm text-foreground group">
                  <ChevronRight size={14} className="text-gold shrink-0 group-hover:translate-x-1 transition-transform" /> {c}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="bg-card rounded-lg p-8 shadow-card border-t-4 border-gold">
            <h2 className="font-heading font-semibold text-xl text-foreground mb-6">Our Approach</h2>
            <div className="space-y-3">
              {approach.map((a) => (
                <div key={a} className="flex items-center gap-3 text-sm text-foreground group">
                  <CheckCircle2 size={14} className="text-gold shrink-0" /> {a}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading font-semibold text-2xl text-foreground mb-6">Business Outcomes</motion.h2>
          <motion.div variants={fadeUp} custom={1} className="flex flex-wrap gap-3">
            {outcomes.map((o) => (
              <span key={o} className="px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20 text-foreground text-sm font-medium flex items-center gap-2">
                <CheckCircle2 size={14} className="text-gold" /> {o}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    <section className="py-16 bg-gold-gradient">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-deep mb-4">Ready to Modernize Your Data Platform?</h2>
        <p className="text-navy-deep/70 mb-8">Schedule a strategic consultation to discuss your data objectives.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors">
          Schedule a Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </main>
);

export default DataService;
