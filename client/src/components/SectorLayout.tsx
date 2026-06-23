/*
 * Componentes compartidos para páginas sectoriales de L&C CFO®
 * SectorNavbar + SectorFooter + helpers de animación
 * Usados por HosteleriaHome, ConstruccionHome y futuros sectores
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

// ─── SHARED CONSTANTS ───
export const WHATSAPP_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
export const DIAGNOSTICO_URL = "/diagnostico-financiero-pyme";
export const S2_URL = "/direccion-financiera-mensual";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";

// ─── ANIMATION ───
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── SERVICIOS (dropdown) ───
const servicios = [
  { name: "Diagnóstico de Claridad Financiera®", link: DIAGNOSTICO_URL, ia: true },
  { name: "Dirección Financiera Mensual®", link: S2_URL, ia: true },
  { name: "Presupuesto Estratégico Anual®", link: null, ia: false },
  { name: "Gestión de Personal®", link: null, ia: false },
  { name: "Análisis de Decisiones Críticas®", link: null, ia: true },
  { name: "Optimización de Rentabilidad y Caja®", link: null, ia: false },
  { name: "Estrategia de Deuda y Capital®", link: null, ia: false },
  { name: "Validación de Nuevos Negocios®", link: null, ia: false },
];

// ─── SECTORES ───
export type SectorId = "hosteleria" | "construccion" | "servicios-profesionales";

const SECTORES: Array<{ id: SectorId | null; label: string; href: string | null }> = [
  { id: "hosteleria", label: "Hostelería", href: "/direccion-financiera-hosteleria" },
  { id: "construccion", label: "Construcción", href: "/direccion-financiera-construccion" },
  { id: "servicios-profesionales", label: "Servicios profesionales", href: "/direccion-financiera-servicios-profesionales" },
];

// ─── NAVBAR ───
interface SectorNavbarProps {
  waLink: string;
}

export function SectorNavbar({ waLink }: SectorNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectoresOpen, setSectoresOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const sectoresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
      if (sectoresRef.current && !sectoresRef.current.contains(e.target as Node)) {
        setSectoresOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/">
          <img
            src="/logo-lc-negro.png"
            alt="L&C CFO®"
            className="h-14 w-auto object-contain mix-blend-screen"
          />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="/" className="hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#problema" className="hover:text-white transition-colors">
            El problema
          </a>
          <a href="#como" className="hover:text-white transition-colors">
            Cómo te ayudamos
          </a>
          <div ref={sectoresRef} className="relative">
            <button
              onClick={() => setSectoresOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
            >
              Sectores
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  sectoresOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {sectoresOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#0A0A0A] border border-white/10 shadow-2xl py-2">
                <a
                  href="/direccion-financiera-hosteleria"
                  onClick={() => setSectoresOpen(false)}
                  className="flex items-center px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Hostelería
                </a>
                <a
                  href="/direccion-financiera-construccion"
                  onClick={() => setSectoresOpen(false)}
                  className="flex items-center px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Construcción
                </a>
                <a
                  href="/direccion-financiera-servicios-profesionales"
                  onClick={() => setSectoresOpen(false)}
                  className="flex items-center px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Servicios profesionales
                </a>
              </div>
            )}
          </div>
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
            >
              Servicios
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  menuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {menuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-[#0A0A0A] border border-white/10 shadow-2xl py-2">
                {servicios.map((s, i) => (
                  <a
                    key={i}
                    href={s.link ?? "/#servicios"}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <span>{s.name}</span>
                    {s.ia && (
                      <span className="text-[0.5rem] font-bold tracking-[0.1em] uppercase text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded-[3px] px-1.5 py-px ml-2 flex-shrink-0">
                        ✦ IA
                      </span>
                    )}
                  </a>
                ))}
                <div className="border-t border-white/10 mt-2 pt-2 px-4 pb-1">
                  <a
                    href="/#servicios"
                    onClick={() => setMenuOpen(false)}
                    className="text-[#C9A84C] text-xs font-semibold hover:text-[#B8943B] transition-colors flex items-center gap-1"
                  >
                    Ver todos los servicios <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-6 py-2 text-sm transition-colors"
          >
            Hablar con nosotros
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── FOOTER ───
interface SectorFooterProps {
  waLink: string;
  currentSector: SectorId;
}

export function SectorFooter({ waLink, currentSector }: SectorFooterProps) {
  return (
    <footer className="bg-[#0A0A0A] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <img
              src="/logo-lc-negro.png"
              alt="L&C CFO®"
              className="h-20 w-auto object-contain mb-3 mix-blend-screen"
            />
            <p className="text-sm">Dirección Financiera Externa Lean & Connected</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={DIAGNOSTICO_URL} className="hover:text-white transition-colors">
                  Diagnóstico de Claridad Financiera®
                </a>
              </li>
              <li>
                <a href={S2_URL} className="hover:text-white transition-colors">
                  Dirección Financiera Mensual®
                </a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-white transition-colors">
                  Todos los servicios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Sectores</h4>
            <ul className="space-y-2 text-sm">
              {SECTORES.map((s, i) =>
                s.href ? (
                  <li key={i}>
                    <a
                      href={s.href}
                      className={`hover:text-white transition-colors ${
                        s.id === currentSector ? "text-white font-semibold" : ""
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                ) : (
                  <li key={i} className="text-white/30">
                    {s.label}
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:legal@lycconsulting.com"
                  className="hover:text-white transition-colors"
                >
                  legal@lycconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} L&amp;C Digital &amp; Consulting, S.L. — NIF
            B22652069 — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
