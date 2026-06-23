/*
 * L&C CFO® — Página Principal
 * Dirección Financiera Externa Lean & Connected
 * Dark: #0A0A0A · Accent: #C9A84C · Light: #FAF8F4
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { setPageSEO } from "@/lib/utils";
import {
  Zap,
  Globe,
  Target,
  Lightbulb,
  Shield,
  Cpu,
  MessageCircle,
  TrendingUp,
  BookOpen,
  BarChart3,
  Calendar,
  PieChart,
  AlertCircle,
  Wallet,
  Landmark,
  Rocket,
  Users,
  Network,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/hero_bg-hCmBTqbzuN6tTGJpJsBUWU.webp";
const TALLY_LINK = "https://tally.so/r/ZjGg0z";
const WHATSAPP_LINK =
  "https://wa.me/34635580883?text=Hola%2C%20me%20interesa%20la%20Direcci%C3%B3n%20Financiera%20Externa%20de%20L%26C%20CFO%C2%AE%20y%20tengo%20una%20pregunta.";
const WHATSAPP_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";
const DIAGNOSTICO_URL = "/diagnostico-financiero-pyme";
const S2_URL = "/direccion-financiera-mensual";

// ─── ANIMATION VARIANTS ───
const fadeUp = {
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

function AnimatedSection({
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

// ─── NAVBAR ───
function Navbar() {
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
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
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
          <a href="#filosofia" className="hover:text-white transition-colors">
            Filosofía
          </a>
          {/* Servicios dropdown */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
            >
              Servicios
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`} />
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
                    href="#servicios"
                    onClick={() => setMenuOpen(false)}
                    className="text-[#C9A84C] text-xs font-semibold hover:text-[#B8943B] transition-colors flex items-center gap-1"
                  >
                    Ver todos los servicios <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div ref={sectoresRef} className="relative">
            <button
              onClick={() => setSectoresOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
            >
              Sectores
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${sectoresOpen ? "rotate-180" : ""}`} />
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
          <a href="#valores" className="hover:text-white transition-colors">
            Valores
          </a>
          <a href="#respaldo" className="hover:text-white transition-colors">
            Ecosistema
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <img
              src={WHATSAPP_LOGO}
              alt="WhatsApp"
              className="w-5 h-5 object-contain"
            />
          </a>
          <a
            href={S2_URL}
            className="hidden lg:inline-flex border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-semibold px-6 py-2 text-sm transition-colors"
          >
            Dirección Financiera
          </a>
          <a
            href={DIAGNOSTICO_URL}
            className="bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-6 py-2 text-sm transition-colors"
          >
            Diagnóstico Financiero
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO ───
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/97 to-[#0A0A0A]/80" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A84C] font-bold text-base tracking-widest uppercase mb-6 border-l-4 border-[#C9A84C] pl-4">
            L&C CFO® — Dirección Financiera Externa
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            La mayoría de los empresarios llevan años gestionando su empresa sin
            saber si realmente gana dinero.
          </h1>
          <p className="text-lg text-white/70 mb-4">
            No porque no se preocupen por su negocio. Sino porque nadie se lo ha dicho con claridad.
          </p>
          <p
            className="text-xl font-semibold text-[#C9A84C] mb-8"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Eso es lo que hacemos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
            >
              Ver servicios
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── EL DIFERENCIAL ───
function DiferencialSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          className="border-l-4 border-[#C9A84C] pl-8"
        >
          <p
            className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] leading-snug mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            "Los problemas que destruyen una empresa con 5M€ de facturación son
            exactamente los mismos que los de una con 200M€. La diferencia es
            que las grandes tienen un equipo financiero que los detecta. Las
            otras, no."
          </p>
          <p className="text-lg text-gray-600">
            L&C CFO® es ese equipo para tu empresa — sin el coste de una
            estructura interna.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── FILOSOFÍA ───
function FilosofiaSection() {
  return (
    <section id="filosofia" className="bg-[#0A0A0A] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestra forma de trabajar
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Dirección Financiera Externa{" "}
            <span className="text-[#C9A84C]">Lean & Connected</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Combinamos eficiencia estructural con sistemas integrados apoyados
            en tecnología e inteligencia artificial para dirigir el negocio con
            control total y enfoque en valor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* LEAN */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#0A0A0A]" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Lean
                </h3>
                <p className="text-[#C9A84C] text-sm">
                  Eficiencia estructural en la gestión
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-5">
              Operamos la función financiera con la mínima fricción para
              maximizar el valor:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Eliminamos costes innecesarios",
                "Definimos estructuras financieras sólidas y eficientes",
                "Simplificamos y estandarizamos procesos",
                "Optimizamos el uso del capital",
                "Aceleramos la toma de decisiones con datos",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 pt-5">
              <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">
                Cómo lo ejecutamos
              </p>
              <ul className="space-y-1 text-sm text-white/60">
                <li>· Análisis y eliminación de costes innecesarios</li>
                <li>· Simplificación y estandarización de procesos</li>
                <li>· Modelos financieros para apoyar decisiones</li>
                <li>· Control y seguimiento continuo de costes y rentabilidad</li>
              </ul>
              <p className="text-[#C9A84C] text-sm font-semibold mt-4">
                Resultado: una función financiera eficiente, disciplinada y
                orientada a resultados.
              </p>
            </div>
          </motion.div>

          {/* CONNECTED */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <Network className="w-5 h-5 text-[#0A0A0A]" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Connected
                </h3>
                <p className="text-[#C9A84C] text-sm">
                  Dirección con control total
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-5">
              Dirigimos la empresa sobre un sistema financiero integrado y
              sincronizado:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Datos financieros en tiempo real",
                "Información de gestión consolidada y accesible",
                "Visión única y clara del negocio",
                "Automatización de flujos financieros",
                "Información accesible para decidir",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 pt-5">
              <p className="text-xs text-[#C9A84C] font-semibold uppercase tracking-widest mb-3">
                Cómo lo ejecutamos
              </p>
              <ul className="space-y-1 text-sm text-white/60">
                <li>· Automatización de los procesos ya eficientados</li>
                <li>· Centralización de la información financiera dispersa</li>
                <li>· Dashboards financieros centralizados</li>
                <li>· IA para identificar desviaciones, riesgos y oportunidades</li>
              </ul>
              <p className="text-[#C9A84C] text-sm font-semibold mt-4">
                Resultado: visibilidad total, control continuo y capacidad de
                anticipación.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="text-center border-t border-white/10 pt-12"
        >
          <p className="text-xl text-white/80 italic max-w-3xl mx-auto">
            "No solo diseñamos el sistema financiero — lo dirigimos, lo operamos
            y lo mejoramos continuamente."
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── SERVICIOS ───
const servicios = [
  {
    icon: BarChart3,
    name: "Diagnóstico de Claridad Financiera®",
    desc: "La radiografía financiera de tu empresa en 48h. Más de 40 indicadores financieros e informe completo.",
    link: DIAGNOSTICO_URL,
    ia: true,
  },
  {
    icon: Calendar,
    name: "Dirección Financiera Mensual®",
    desc: "Todo el área financiera de tu empresa, operada mes a mes: tesorería, cobros, pagos, proyecciones, financiación, inventarios, control de gestión y reporting. Con sesión estratégica mensual con tu Director Financiero.",
    link: "/direccion-financiera-mensual",
    ia: true,
  },
  {
    icon: PieChart,
    name: "Presupuesto Estratégico Anual®",
    desc: "Plan financiero anual con objetivos por unidad de negocio mes a mes, seguimiento real vs. presupuesto y previsión a 12 meses. Sabrás a dónde vas a llegar antes de que finalice el año.",
    link: null,
    ia: false,
  },
  {
    icon: Users,
    name: "Gestión de Personal®",
    desc: "Estructura de puestos, costes laborales y planificación estratégica de plantilla.",
    link: null,
    ia: false,
  },
  {
    icon: AlertCircle,
    name: "Análisis de Decisiones Críticas®",
    desc: "Evaluación multiescenario para decisiones de alto impacto.",
    link: null,
    ia: true,
  },
  {
    icon: Wallet,
    name: "Optimización de Rentabilidad y Caja®",
    desc: "Mejora márgenes y flujos de caja con reingeniería financiera.",
    link: null,
    ia: false,
  },
  {
    icon: Landmark,
    name: "Estrategia de Deuda y Capital®",
    desc: "Financiación, estructuración de deuda y acceso a capital.",
    link: null,
    ia: false,
  },
  {
    icon: Rocket,
    name: "Validación de Nuevos Negocios®",
    desc: "Viabilidad real antes de invertir en algo nuevo.",
    link: null,
    ia: false,
  },
];

function ServiciosSection() {
  return (
    <section id="servicios" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Servicios
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lo que hacemos
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative bg-white border border-gray-200 p-6 flex flex-col group hover:border-[#C9A84C] transition-colors"
            >
              {s.ia && (
                <span className="absolute top-3 right-3 text-[0.5rem] font-bold tracking-[0.1em] uppercase text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded-[3px] px-1.5 py-px">
                  ✦ IA
                </span>
              )}
              <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors flex-shrink-0">
                <s.icon className="w-5 h-5 text-[#C9A84C] group-hover:text-[#0A0A0A] transition-colors" />
              </div>
              <h3
                className="font-bold text-[#0A0A0A] text-sm mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {s.name}
              </h3>
              <p className="text-gray-600 text-sm flex-1">{s.desc}</p>
              {s.link && (
                <a
                  href={s.link}
                  className="mt-4 text-[#C9A84C] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Ver más <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="text-center mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white font-semibold px-10 py-4 text-lg transition-colors"
          >
            <img
              src={WHATSAPP_LOGO}
              alt="WhatsApp"
              className="w-5 h-5 object-contain"
            />
            Solicitar información
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── VALORES ───
const valores = [
  {
    icon: Lightbulb,
    name: "Claridad",
    desc: "Convertimos la información financiera en algo comprensible y accionable.",
  },
  {
    icon: BookOpen,
    name: "Rigor técnico",
    desc: "Base construida en PwC y más de 20 años en entornos multinacionales, regulados y exigentes. Metodología probada en operaciones en más de 20 países.",
  },
  {
    icon: Target,
    name: "Orientación a resultados",
    desc: "No diseñamos sistemas para que queden bonitos. Los operamos para que generen valor real en el negocio.",
  },
  {
    icon: Zap,
    name: "Eficiencia",
    desc: "Sin burocracia, sin informes que nadie lee. Solo lo que sirve para decidir y actuar.",
  },
  {
    icon: Cpu,
    name: "Tecnología al servicio del negocio",
    desc: "IA y automatización para que el empresario tenga información en tiempo real y pueda anticiparse, no solo reaccionar.",
  },
  {
    icon: Shield,
    name: "Confidencialidad",
    desc: "El empresario comparte lo más sensible de su negocio. Discreción absoluta como condición no negociable.",
  },
  {
    icon: MessageCircle,
    name: "Comunicación",
    desc: "Hablamos el lenguaje del empresario — claro, directo y sin tecnicismos — porque la claridad empieza por cómo se explican los números.",
  },
  {
    icon: TrendingUp,
    name: "Aprendizaje y mejora continua",
    desc: "Nos exigimos estar siempre a la vanguardia — en metodología, tecnología y conocimiento del mercado. Lo que hacemos hoy debe ser mejor que lo que hicimos ayer, tanto para el equipo como para los clientes que confían en nosotros.",
  },
];

function ValoresSection() {
  return (
    <section id="valores" className="bg-[#0A0A0A] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Valores
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Cómo trabajamos
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-white/10 p-6 hover:border-[#C9A84C]/40 transition-colors"
            >
              <div className="w-10 h-10 bg-[#C9A84C] flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-[#0A0A0A]" />
              </div>
              <h3
                className="font-bold text-white text-sm mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {v.name}
              </h3>
              <p className="text-white/60 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── RESPALDO INTEGRAL ───
function RespaldoIntegralSection() {
  return (
    <section id="respaldo" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="flex-shrink-0 w-20 h-20 bg-[#FAF8F4] border-2 border-[#C9A84C] flex items-center justify-center">
            <Globe className="w-10 h-10 text-[#C9A84C]" />
          </div>
          <div className="flex-1">
            <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
              Ecosistema completo
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Respaldo integral para tu empresa
            </h2>
            <p className="text-gray-600 mb-6">
              La Dirección Financiera Externa de L&C CFO® trabaja integrada con
              otros despachos — para que además del área financiera, tengas
              cubiertos los servicios legales, fiscales y contables en un solo
              ecosistema.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-[#25D366] font-semibold px-8 py-3 transition-colors"
            >
              <img
                src={WHATSAPP_LOGO}
                alt="WhatsApp"
                className="w-5 h-5 object-contain"
              />
              Contáctanos por WhatsApp
            </a>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── CTA FINAL ───
function CTASection() {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-6">
            El primer paso
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Antes de cualquier decisión importante, necesitas saber dónde estás.
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            El Diagnóstico de Claridad Financiera® te da en 48 horas la
            radiografía completa de tu empresa — más de 40 indicadores
            financieros, informe detallado y sesión estratégica de 45 minutos.
          </p>
          <a
            href={DIAGNOSTICO_URL}
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
          >
            Ver el Diagnóstico de Claridad Financiera®
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/60 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
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
                <a
                  href={DIAGNOSTICO_URL}
                  className="hover:text-white transition-colors"
                >
                  Diagnóstico de Claridad Financiera®
                </a>
              </li>
              <li>
                <a
                  href="/direccion-financiera-mensual"
                  className="hover:text-white transition-colors"
                >
                  Dirección Financiera Mensual®
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Todos los servicios
                </a>
              </li>
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
                  href={WHATSAPP_LINK}
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
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/aviso-legal"
                  className="hover:text-white transition-colors"
                >
                  Aviso Legal
                </a>
              </li>
              <li>
                <a
                  href="/privacidad"
                  className="hover:text-white transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href="/condiciones"
                  className="hover:text-white transition-colors"
                >
                  Condiciones Generales
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} L&amp;C Digital &amp; Consulting, S.L.
            — NIF B22652069 — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ───
export default function MainHome() {
  useEffect(() => {
    setPageSEO({
      title: "L&C CFO® — Dirección Financiera Externa",
      description:
        "Dirección financiera externa para PYMEs. Analizamos tu caja, tus cobros y tus márgenes cada mes para que decidas con datos, sin un director financiero interno.",
      canonical: "https://lccfo.es/",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DiferencialSection />
      <FilosofiaSection />
      <ServiciosSection />
      <ValoresSection />
      <RespaldoIntegralSection />
      <CTASection />
      <Footer />
    </div>
  );
}
