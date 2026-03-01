import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, Handshake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GridPattern, FloatingDots, GlowOrb } from "@/components/DecorativeElements";
import insightsHeroImg from "@/assets/insights-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const topics = [
  { icon: Brain, title: "AI Governance in Enterprise Environments", desc: "Frameworks for responsible AI deployment including bias mitigation, model explainability, and regulatory compliance across enterprise operations." },
  { icon: Cloud, title: "Cloud Cost Optimization Strategies", desc: "Practical approaches to right-sizing infrastructure, leveraging reserved capacity, and implementing FinOps practices for sustainable cloud economics." },
  { icon: BarChart3, title: "Data Modernization Best Practices", desc: "Strategies for migrating from legacy data systems to modern lakehouse architectures while maintaining data quality and governance." },
  { icon: Code2, title: "Application Scalability Frameworks", desc: "Architecture patterns and engineering practices that enable applications to scale from prototype to enterprise-grade production systems." },
  { icon: Handshake, title: "Supplier Diversity in Technology Partnerships", desc: "How organizations can advance inclusive procurement objectives while accessing enterprise-grade technology services from certified MBE partners." },
];

const Insights = () => {
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
              Insights & <span className="text-gradient-gold">Thought Leadership</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
              Venus Solutions LLC shares practical insights on enterprise technology trends, digital transformation strategy, and scalable architecture design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-background">
        <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden shadow-card-hover">
            <img src={insightsHeroImg} alt="Technology thought leadership and innovation" className="w-full h-64 md:h-80 object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 max-w-4xl mx-auto">
            {topics.map((t, i) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border-l-4 border-gold"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <t.icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{t.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-deep mb-4">
            Want to Discuss a Technology Initiative?
          </h2>
          <p className="text-navy-deep/70 mb-8">Let's explore how Venus Solutions LLC can support your goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
          >
            Schedule a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Insights;
