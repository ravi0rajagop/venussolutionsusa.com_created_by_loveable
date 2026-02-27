import { motion } from "framer-motion";
import { Brain, Cloud, BarChart3, Code2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const serviceData = [
  {
    icon: Brain,
    title: "AI / ML",
    desc: "Harness the power of artificial intelligence and machine learning to drive data-informed decisions and automate complex processes.",
    bullets: ["Predictive Analytics", "Natural Language Processing (NLP)", "Computer Vision", "AI Strategy Consulting", "ML Model Deployment & Monitoring"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamlessly transition your infrastructure to the cloud with minimal disruption and maximum performance gains.",
    bullets: ["Cloud Readiness Assessment", "Migration Strategy & Planning", "AWS / Azure / Google Cloud", "Cost Optimization", "Post-Migration Support"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Transform raw data into actionable insights with comprehensive analytics solutions that drive business outcomes.",
    bullets: ["BI Dashboards & Reporting", "Data Warehousing & ETL", "Real-Time Analytics", "Data Governance & Quality", "Advanced Statistical Analysis"],
  },
  {
    icon: Code2,
    title: "Application Development & Maintenance",
    desc: "Build, modernize, and maintain enterprise applications that scale with your business needs.",
    bullets: ["Web & Mobile Applications", "Enterprise System Integration", "API Development & Integration", "QA & Testing", "Ongoing Support & Maintenance"],
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/70 leading-relaxed">
              End-to-end IT Software Consultancy & Implementation solutions that help clients meet their supplier diversity goals while accessing cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {serviceData.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-lg p-8 md:p-10 border-l-4 border-gold shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center">
                      <s.icon size={28} className="text-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground mb-5">{s.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {s.bullets.map((b) => (
                        <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                          <ChevronRight size={14} className="text-gold shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>
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
            Need a Certified MBE Technology Partner?
          </h2>
          <p className="text-navy-deep/70 mb-8">Let's discuss how we can support your supplier diversity and technology goals.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded bg-navy-deep text-primary-foreground font-semibold hover:bg-navy-light transition-colors"
          >
            Get A Quote
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
