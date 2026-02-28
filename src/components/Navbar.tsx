import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import venusLogo from "@/assets/Venus_Logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  {
    label: "Services",
    to: "/services",
    children: [
      { to: "/services/ai-ml", label: "AI & Machine Learning" },
      { to: "/services/cloud", label: "Cloud Consulting" },
      { to: "/services/data", label: "Data Engineering" },
      { to: "/services/app-dev", label: "Application Development" },
    ],
  },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={venusLogo} alt="Venus Solutions Logo" className="h-9 w-auto" />
          <span className="font-heading text-lg font-bold text-primary-foreground tracking-wide">
            Venus Solutions
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    location.pathname.startsWith("/services") ? "text-gold" : "text-primary-foreground/70 hover:text-gold"
                  }`}
                >
                  {link.label} <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-navy-deep/95 backdrop-blur-md border border-gold/20 rounded-lg shadow-lg py-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            location.pathname === child.to ? "text-gold bg-navy-light/30" : "text-primary-foreground/70 hover:text-gold hover:bg-navy-light/20"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.to ? "text-gold" : "text-primary-foreground/70 hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link to="/contact" className="px-5 py-2 rounded bg-gold-gradient text-navy-deep text-sm font-semibold hover:opacity-90 transition-opacity">
            Get A Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy-deep border-t border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <Link to={link.to} onClick={() => setMobileOpen(false)} className={`px-4 py-3 rounded text-sm font-medium transition-colors block ${location.pathname === "/services" ? "text-gold bg-navy-light/30" : "text-primary-foreground/70 hover:text-gold"}`}>
                      {link.label}
                    </Link>
                    <div className="ml-4 border-l border-gold/20 pl-2">
                      {link.children.map((child) => (
                        <Link key={child.to} to={child.to} onClick={() => setMobileOpen(false)} className={`px-4 py-2 rounded text-xs font-medium transition-colors block ${location.pathname === child.to ? "text-gold" : "text-primary-foreground/50 hover:text-gold"}`}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className={`px-4 py-3 rounded text-sm font-medium transition-colors ${location.pathname === link.to ? "text-gold bg-navy-light/30" : "text-primary-foreground/70 hover:text-gold"}`}>
                    {link.label}
                  </Link>
                )
              )}
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="mt-2 px-4 py-3 rounded bg-gold-gradient text-navy-deep text-sm font-semibold text-center">
                Get A Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
