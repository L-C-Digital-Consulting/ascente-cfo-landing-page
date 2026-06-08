/*
 * DESIGN SYSTEM: "Financial Clarity Blueprint"
 * Brand: Ascente CFO® — Diagnóstico de Claridad Financiera®
 * Primary: #1C00A8 (dark corporate blue)
 * Accent: #2800ff (vibrant blue)
 * Typography: DM Sans (titles), Inter (body)
 * Style: Swiss Design meets Bloomberg dashboard
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  Monitor,
  Video,
  FileBarChart,
  Upload,
  Clock,
  Users,
  Shield,
  TrendingUp,
  BarChart3,
  Wallet,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

// CDN URLs
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/hero_bg-hCmBTqbzuN6tTGJpJsBUWU.webp";
const ANALYSIS_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/analysis_visual-j2t5e5SjLANxscfmmRgggu.webp";
const PROCESS_VISUAL = "/proceso-visual.png";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/cta_bg-dTM6XQZtDsLVuXizNMU6cV.webp";
const VINTAGE_ACCOUNTING = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/vintage-accounting_579c0da4.jpg";
const MODERN_CFO_PRESENTATION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/cfo-hispanic-white-40s_5440af83.jpg";
const CFO_DASHBOARD_PRESENTATION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/cfo-dashboard-presentation_c33aa15a.png";

const TALLY_LINK = "https://tally.so/r/ZjGg0z";
const WHATSAPP_LINK = "https://wa.me/34635580883?text=Hola%2C%20me%20interesa%20el%20Diagn%C3%B3stico%20de%20Claridad%20Financiera%C2%AE%20y%20tengo%20una%20pregunta.";
const WHATSAPP_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
const LINKEDIN_URL = "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";
const PRIVACY_POLICY_URL = "/privacidad";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

// ─── NAVIGATION ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#"><img src="/logo-lc-negro.png" alt="L&C CFO®" className="h-14 w-auto object-contain mix-blend-screen" /></a>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#problema" className="hover:text-white transition-colors">El Problema</a>
          <a href="#diagnostico" className="hover:text-white transition-colors">El Diagnóstico</a>
          <a href="#entregables" className="hover:text-white transition-colors">Entregables</a>
          <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
          <a href="#miguel" className="hover:text-white transition-colors">Quién lo hace</a>
          <a href="#planes" className="hover:text-white transition-colors">Planes</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
          <a
            href={TALLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-6 py-2 text-sm transition-colors"
          >
            Solicitar Diagnóstico
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-[#0A0A0A]/95" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Diagnóstico de<br />
            <span className="text-[#C9A84C]">Claridad Financiera</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Análisis financiero profesional para tu negocio. Descubre la situación real de tu empresa mediante un diagnóstico detallado y una sesión estratégica con un Director Financiero — en solo 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-8 py-4 text-lg transition-colors"
            >
              Solicitar Diagnóstico
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#problema"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
            >
              Descubrir más
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── STATS ───
function StatsSection() {
  return (
    <section id="problema" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Datos Alarmantes 2025</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Las pymes españolas están en riesgo
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              stat: "42%",
              text: "de pymes españolas cerró sin beneficios",
              source: "Forbes.es",
              link: "https://forbes.es/economia/901368/el-42-de-las-pymes-no-lograron-beneficios-en-2025-o-cerraron-el-ejercicio-en-equilibrio/",
            },
            {
              stat: "46%",
              text: "sufrió problemas graves de liquidez",
              source: "Pymesyautonomos.com",
              link: "https://www.pymesyautonomos.com/actualidad/asfixio-pyme-46-indica-haber-sufrido-problemas-debido-a-demora-pagos-valor-maximo-2019",
            },
            {
              stat: "Récord",
              text: "histórico de concursos de acreedores",
              source: "Eldiariodemadrid.es",
              link: "https://www.eldiariodemadrid.es/articulo/empresas/record-historico-quiebras-40000-empresas-concursos-2025/20251218081646116711.html",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center p-8 border-t-4 border-[#C9A84C] bg-[#FAF8F4]"
            >
              <span className="block text-5xl lg:text-6xl font-bold text-[#C9A84C] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.stat}
              </span>
              <p className="text-lg text-gray-700 mb-4">{item.text}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#C9A84C] hover:underline"
              >
                Fuente: {item.source}
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Sí estás en etapa de crecimiento o estás pasando por problemas financieros y operativos, <span className="font-bold text-[#C9A84C]">es igual de importante realizar el Diagnóstico de Claridad Financiera</span>. Si no quieres terminar así.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── ROOT PROBLEM ───
function RootProblemSection() {
  return (
    <section className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">El Origen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            La Raíz del Problema
          </h2>
        </motion.div>
        <motion.div variants={fadeUp} className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              La raíz del problema es que casi ninguna empresa mide sus ratios financieros, y no tienen claridad real del estado en que se encuentra su negocio. Están vendiendo más, pero con márgenes asfixiados, falta de liquidez y morosidad creciente, no obtienen beneficios y se dispara el número de concursos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En este contexto, el Diagnóstico de Claridad Financiera se convierte en la herramienta clave para detectar a tiempo si tu empresa está en esa zona de "crecer sin ganar dinero", identificar dónde se le va el margen y la caja, y trazar una hoja de ruta concreta para evitar acabar en pérdidas o en concurso.
            </p>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <img
              src={VINTAGE_ACCOUNTING}
              alt="Contabilidad Antigua - Papel, Lápiz, Calculadora"
              className="w-full object-contain"
            />
          </motion.div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── WHAT IS DIAGNOSIS ───
function WhatIsDiagnosisSection() {
  return (
    <section id="diagnostico" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Concepto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ¿Qué es el Diagnóstico de Claridad Financiera?
          </h2>
          <p className="text-lg text-gray-600">La herramienta que te da visibilidad total de tu negocio</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              El Diagnóstico de Claridad Financiera es un análisis financiero profesional y detallado que te proporciona visibilidad completa sobre la salud real de tu empresa. No es un simple reporte de números — es una radiografía financiera que te muestra exactamente dónde estás, hacia dónde vas, y qué debes hacer.
            </p>
            <div className="space-y-4">
              {[
                { icon: FileBarChart, text: "43 Ratios Financieros Analizados — Evaluamos cada aspecto de tu negocio" },
                { icon: BarChart3, text: "8 KPIs Críticos — Los indicadores que realmente importan" },
                { icon: Monitor, text: "Análisis Sectorial Comparativo — Cómo estás vs. tus competidores" },
                { icon: Users, text: "Sesión Estratégica con Director Financiero Senior — 45 minutos de trabajo directo" },
                { icon: Clock, text: "Entrega en 48 Horas — Rapidez sin sacrificar profundidad" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                  <item.icon className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-lg text-gray-700 italic">
                "El Diagnóstico de Claridad Financiera no es un gasto — es una inversión en visibilidad. Porque no puedes gestionar lo que no mides, y no puedes crecer de forma sostenible sin claridad financiera."
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <img src={ANALYSIS_VISUAL} alt="Diagnóstico" className="w-full object-contain" />
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── WHY IS IMPORTANT ───
function WhyIsImportantSection() {
  return (
    <section className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Importancia</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ¿Por Qué es Tan Importante?
          </h2>
          <p className="text-lg text-gray-600">Evita convertirte en una estadística</p>
        </motion.div>
        <div className="space-y-12">
          <motion.div variants={fadeUp} className="bg-white p-8">
            <h3 className="text-xl font-bold text-[#C9A84C] mb-4">¿Qué te Falta Sin Claridad Financiera?</h3>
            <div className="space-y-3">
              {[
                "No sabes si realmente ganas dinero o solo 'parece' que ganas",
                "No ves dónde se va tu margen y tu caja",
                "No detectas a tiempo si estás en la zona de 'crecer sin ganar dinero'",
                "No sabes si tu crecimiento es sostenible o te está consumiendo liquidez",
                "No tienes una hoja de ruta concreta para evitar pérdidas",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-8">
            <h3 className="text-xl font-bold mb-4">Por Qué es Crítico Ahora</h3>
            <p className="mb-6">El Diagnóstico de Claridad Financiera se convierte en la herramienta clave para:</p>
            <div className="space-y-3">
              {[
                "Detectar a tiempo si tu empresa está en esa zona de riesgo",
                "Identificar exactamente dónde se te va el margen y la caja",
                "Trazar una hoja de ruta concreta para evitar acabar en pérdidas o concurso",
                "Tomar decisiones basadas en datos reales, no en intuición",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-lg italic">
              "La diferencia entre una empresa que prospera y una que quiebra no es la suerte — es la claridad financiera."
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── KEY QUESTIONS ───
function KeyQuestionsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Autoevaluación</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Las Preguntas que Toda Empresa Debe Hacerse
          </h2>
          <p className="text-lg text-gray-600">Si no puedes responder estas preguntas, tu negocio está en riesgo</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-t-4 border-[#C9A84C]">
            <h3 className="text-lg font-bold text-[#C9A84C] mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Riesgo Financiero
            </h3>
            <div className="space-y-4">
              {[
                "¿Sabes si tu empresa es sólida patrimonialmente?",
                "¿Conoces tu nivel real de endeudamiento?",
                "¿Sabes si tu empresa es solvente?",
                "¿Tienes claridad sobre tu grado de liquidez?",
              ].map((q, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-2 items-start">
                  <HelpCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 2 */}
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-t-4 border-[#C9A84C]">
            <h3 className="text-lg font-bold text-[#C9A84C] mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Flujo de Caja
            </h3>
            <div className="space-y-4">
              {[
                "¿Generas suficiente caja para pagar nóminas e impuestos?",
                "¿Sabes si tu crecimiento es financieramente sostenible?",
                "¿Tu crecimiento consume más caja de la que genera?",
                "¿Sabes cuál es tu ciclo financiero real?",
                "¿Generas caja suficiente para cumplir con tu deuda?",
              ].map((q, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-2 items-start">
                  <HelpCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 3 */}
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-t-4 border-[#C9A84C]">
            <h3 className="text-lg font-bold text-[#C9A84C] mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Rentabilidad
            </h3>
            <div className="space-y-4">
              {[
                "¿Sabes qué parte de tu P&L genera o destruye valor?",
                "¿Conoces la ganancia unitaria de tus productos/servicios?",
                "¿Tu modelo operativo es viable?",
                "¿Sabes cuál es tu rentabilidad real sobre la inversión?",
                "¿Endeudarte mejora o reduce la rentabilidad del accionista?",
              ].map((q, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-2 items-start">
                  <HelpCircle className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="mt-12 text-center bg-[#0A0A0A] text-white p-8">
          <p className="text-lg">
            Si respondiste "no" a más de 3 preguntas, tu empresa está operando a ciegas. Y eso es exactamente lo que el Diagnóstico de Claridad Financiera resuelve.
          </p>
          <p className="text-xl font-bold mt-4">
            Todas estas preguntas y más las contestamos con el diagnóstico.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── 6 PROBLEMS ───
const sixProblems = [
  {
    num: "01",
    title: "El Síndrome de 'Crecer Vendiendo Aire'",
    desc: "Aumentas ventas 20%, pero la caja disminuye. Tu crecimiento consume más dinero del que genera. El diagnóstico detecta tu Ciclo de Conversión de Caja real.",
    icon: TrendingUp,
  },
  {
    num: "02",
    title: "Márgenes Asfixiados que Nadie Ve",
    desc: "Vendes más pero ganas menos. Tus costes variables crecen más rápido que tus ingresos. Un 2% de diferencia en margen puede significar pérdida vs. ganancia.",
    icon: BarChart3,
  },
  {
    num: "03",
    title: "Deuda que Parece Controlada Hasta que Explota",
    desc: "Tu ratio de endeudamiento parece normal, pero no tienes capacidad real de pago si algo falla. El banco cierra el grifo cuando descubre que no puedes pagar.",
    icon: AlertTriangle,
  },
  {
    num: "04",
    title: "Rentabilidad Fantasma del Accionista",
    desc: "Crees que tu negocio es rentable, pero después de impuestos y deuda, la rentabilidad real es negativa. Podrías estar mejor invirtiendo en un fondo indexado.",
    icon: Wallet,
  },
  {
    num: "05",
    title: "Estructura de Costos que Multiplica Pérdidas",
    desc: "Cuando las ventas bajan 10%, tus pérdidas caen 30%. Tus costes fijos son demasiado altos. Una recesión puede llevarte a la quiebra más rápido de lo que crees.",
    icon: Shield,
  },
  {
    num: "06",
    title: "Decisiones sin Visibilidad Financiera",
    desc: "Las decisiones más costosas no son las malas — son las que se toman sin información. Contratar, invertir o pedir financiación sin datos financieros claros no es falta de capacidad: es falta de sistema. El 68% de los cierres de pymes ocurren en empresas que 'iban bien' según su dueño.",
    icon: HelpCircle,
  },
];

function ProblemsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Diagnóstico</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Los Problemas Financieros que Destruyen Pymes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">El diagnóstico detecta y cuantifica cada uno con los datos reales de su empresa</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sixProblems.map((p) => (
            <motion.div key={p.num} variants={fadeUp} className="bg-[#FAF8F4] p-8 border-l-4 border-[#C9A84C] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#C9A84C] flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <span className="text-3xl font-bold text-[#C9A84C]/30" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#C9A84C] mb-3">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-12 text-center bg-[#0A0A0A] text-white p-8">
          <p className="text-lg">
            Estos 6 problemas tienen algo en común: <span className="font-bold">no los ves hasta que es demasiado tarde</span>. El Diagnóstico de Claridad Financiera los detecta ahora, con tus datos reales, y te da el mapa exacto para evitarlos.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── WHAT DIAGNOSIS DOES ───
function WhatDiagnosisDoes() {
  return (
    <section className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Impacto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que este diagnóstico hace por tu negocio
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="space-y-6">
            {[
              { icon: Monitor, title: "Visibilidad Total", desc: "Ves exactamente dónde estás financieramente" },
              { icon: TrendingUp, title: "Detección de Riesgos", desc: "Identifica problemas antes de que exploten" },
              { icon: FileText, title: "Hoja de Ruta Concreta", desc: "Plan de acción específico para tu empresa" },
              { icon: Users, title: "Asesoramiento Experto", desc: "Sesión directa con Director Financiero Senior" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-4">
                <item.icon className="w-8 h-8 text-[#C9A84C] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#C9A84C] mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <img src={CFO_DASHBOARD_PRESENTATION} alt="CFO Presentando Diagnóstico de Claridad Financiera con Dashboard" className="w-full object-contain" />
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── BENEFITS ───
function BenefitsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Comparativa</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Habilita vs Lo que Evita
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-t-4 border-[#C9A84C]">
            <h3 className="text-xl font-bold text-[#C9A84C] mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              Lo que Habilita
            </h3>
            <div className="space-y-4">
              {[
                "Tomar decisiones basadas en datos reales",
                "Detectar oportunidades de mejora inmediatas",
                "Negociar mejor con tu banco",
                "Planificar crecimiento sostenible",
                "Optimizar márgenes y rentabilidad",
                "Reducir riesgo financiero",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-[#C9A84C] mb-6 flex items-center gap-2">
              <XCircle className="w-6 h-6 text-red-500" />
              Lo que Evita
            </h3>
            <div className="space-y-4">
              {[
                "Sorpresas financieras inesperadas",
                "Decisiones basadas en intuición",
                "Crecer sin ganar dinero",
                "Falta de liquidez cuando más la necesitas",
                "Que el banco cierre el grifo",
                "Terminar en concurso de acreedores",
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── ANALYSIS ───
const analysisBlocks = [
  {
    num: "01",
    title: "Solidez Patrimonial",
    desc: "Mide si tu empresa está bien capitalizada o depende en exceso de deuda. Analiza el nivel de endeudamiento y si el inmovilizado está financiado con recursos a largo plazo — la condición de equilibrio patrimonial.",
  },
  {
    num: "02",
    title: "Solvencia",
    desc: "Mide si el total de activos supera al total de pasivos. Tu empresa es solvente cuando lo que tiene vale más que lo que debe, en el largo plazo. No mide si tienes caja ahora — mide si podrías hacer frente a todas tus deudas con lo que posees.",
  },
  {
    num: "03",
    title: "Liquidez",
    desc: "Mide si tu empresa tiene capacidad de pagar sus compromisos a corto plazo. Tres niveles: liquidez general, prueba ácida y disponibilidad inmediata. Un negocio puede ser rentable y quedarse sin liquidez.",
  },
  {
    num: "04",
    title: "Ciclo de Caja",
    desc: "Mide cuántos días tarda el dinero en volver a tu empresa tras invertirlo en operaciones. Combina cobro de clientes + rotación de existencias − pago a proveedores. El ciclo negativo (proveedores financian más) es la posición favorable.",
  },
  {
    num: "05",
    title: "Rentabilidad",
    desc: "Mide cuánto gana tu empresa en relación a lo que factura y a lo que tiene invertido. Cuatro márgenes (Margen Bruto → Margen Operativo Bruto → Resultado de Explotación → Margen Neto), cada uno señalando un problema distinto si cae. Incluye rentabilidad de activos y del accionista.",
  },
  {
    num: "06",
    title: "Estructura de Costes",
    desc: "Mide el peso y la composición de tus costes, y la sensibilidad del negocio ante una caída de ventas. El Grado de Apalancamiento Operativo cuantifica ese riesgo: si es 3 veces, una caída del 10% en ventas destruye el 30% del beneficio operativo.",
  },
];

function AnalysisSection() {
  return (
    <section id="analisis" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Metodología</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Los 6 Bloques del Análisis
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisBlocks.map((block) => (
            <motion.div key={block.num} variants={fadeUp} className="bg-white p-8 border-l-4 border-[#C9A84C]">
              <span className="text-4xl font-bold text-[#C9A84C]/30 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {block.num}
              </span>
              <h3 className="text-lg font-bold text-[#C9A84C] mb-3">{block.title}</h3>
              <p className="text-sm text-gray-700">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── DELIVERABLES ───
function DeliverablesSection() {
  return (
    <section id="entregables" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Entregables</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Recibe con el Diagnóstico
          </h2>
          <p className="text-lg text-gray-600">Dos entregables completos en 48 horas.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-l-4 border-[#C9A84C]">
            <h3 className="text-lg font-bold text-[#C9A84C] mb-4 flex items-start gap-2">
              <FileText className="w-5 h-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
              Informe en formato HTML con PDF descargable
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Punto de Partida: Lo que hace este diagnóstico por tu negocio, explicación de cada una de las 6 áreas de análisis financiero y contexto sectorial.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Diagnóstico: el estado real del negocio con resumen ejecutivo, riesgos críticos identificados, comparativa con indicadores medios del sectorial, estado de las 6 áreas de análisis y hallazgos del diagnóstico: fortalezas y áreas de mejora.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Plan de Acción: acciones identificadas en el diagnóstico, tus próximos pasos a 30, 60 y 90 días.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Dashboard: los indicadores principales de tu negocio en números, presentación gráfica comparativa de tu Balance, Cuenta de Resultados y flujo de efectivo, también tus márgenes y ratios financieros.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Estados Financieros: el Balance de Situación y Cuenta de Resultados comparativos con análisis de variaciones principales y estado de flujo de efectivo de tu empresa.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Indicadores Financieros: el detalle técnico completo con 43 indicadores financieros de tu negocio con referencia y estado.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Glosario de términos: definiciones de los principales términos contables y financieros.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#FAF8F4] p-8 border-l-4 border-[#C9A84C]">
            <h3 className="text-lg font-bold text-[#C9A84C] mb-4 flex items-start gap-2">
              <Video className="w-5 h-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
              Sesión estratégica con un Director Financiero Senior
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Revisión personalizada de 45 minutos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Contexto estratégico y resolución de dudas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C9A84C] font-bold mt-0.5">•</span>
                <span>Priorización de acciones inmediatas.</span>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="text-center">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#095195] text-white font-semibold px-8 py-3 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.754h3.554v1.391c.435-.671 1.213-1.627 2.948-1.627 2.154 0 3.767 1.41 3.767 4.44v5.55zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.755 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.635V9.558h3.283v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
            Conoce a nuestro Director Financiero
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── PROCESS ───
const steps = [
  {
    num: "01",
    title: "Formulario y archivos",
    desc: "Adjunte el Balance, PyG, Plantilla de Costes Fijos y Variables y el Detalle de Deuda para completar el análisis.",
    icon: Upload,
  },
  {
    num: "02",
    title: "Informe en 48 horas",
    desc: "Reciba por email su informe interactivo, el PDF de diagnóstico y el PDF financiero junto con su cita para la videollamada.",
    icon: Clock,
  },
  {
    num: "03",
    title: "Sesión con un Director Financiero Senior",
    desc: "45 minutos de trabajo estratégico: revisión del informe, resolución de dudas y priorización de acciones inmediatas.",
    icon: Users,
  },
];

function ProcessSection() {
  return (
    <section id="proceso" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Proceso</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Cómo Funciona
          </h2>
          <p className="text-lg text-gray-600">3 pasos sencillos para obtener claridad financiera</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="text-center sm:text-left">
                <div className="w-16 h-16 bg-[#C9A84C] flex items-center justify-center mx-auto sm:mx-0 mb-4">
                  <s.icon className="w-7 h-7 text-[#0A0A0A]" />
                </div>
                <span className="text-4xl font-bold text-[#C9A84C]/30 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.num}
                </span>
                <h3 className="text-lg font-bold text-[#C9A84C] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <img
              src={PROCESS_VISUAL}
              alt="Proceso de diagnóstico"
              className="w-full object-contain"
            />
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── PRICING ───
function PricingSection() {
  return (
    <section id="planes" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Inversión</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Planes y Propuesta de Valor
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Diagnóstico Único */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-xl font-bold text-[#C9A84C] mb-2">Diagnóstico Único</h3>
            <p className="text-sm text-gray-600 mb-6">Perfecto para una evaluación puntual</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#C9A84C]">447€</span>
              <span className="text-gray-600 ml-2">+ IVA</span>
              <p className="text-xs text-gray-500 mt-1">por diagnóstico</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Informe interactivo + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Videollamada de 45 min con un Director Financiero Senior
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Entrega en 48 horas
              </li>
            </ul>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold py-3 text-center transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>

          {/* Plan Semestral */}
          <motion.div variants={fadeUp} className="bg-white border-2 border-[#C9A84C] p-8 flex flex-col relative">
            <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#0A0A0A] px-3 py-1 text-xs font-bold">
              RECOMENDADO
            </div>
            <h3 className="text-xl font-bold text-[#C9A84C] mb-2">Plan Semestral</h3>
            <p className="text-sm text-gray-600 mb-6">Monitoreo continuo de tu salud financiera</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#C9A84C]">347€</span>
              <span className="text-gray-600 ml-2">+ IVA</span>
              <p className="text-xs text-gray-500 mt-1">por diagnóstico · 2 diagnósticos/año</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Informes interactivos + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                2 videollamadas de 45 min con un Director Financiero Senior
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Seguimiento semestral
              </li>
            </ul>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold py-3 text-center transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>

          {/* Plan Trimestral */}
          <motion.div variants={fadeUp} className="bg-[#0A0A0A] text-white p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Plan Trimestral</h3>
            <p className="text-sm text-white/80 mb-6">Máximo control y optimización financiera</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#C9A84C]">267€</span>
              <span className="text-white/80 ml-2">+ IVA</span>
              <p className="text-xs text-white/60 mt-1">por diagnóstico · 4 diagnósticos/año</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Informes interactivos + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                4 videollamadas de 45 min con un Director Financiero Senior
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                Máximo ahorro por diagnóstico
              </li>
            </ul>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold py-3 text-center transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="mt-12 bg-[#FBF5E6] border-l-4 border-[#C9A84C] p-8">
          <p className="text-gray-800">
            Una auditoría financiera básica para pyme cuesta entre <strong>3.000 € y 6.000 €</strong>. Un CFO externo mensual, entre <strong>2.000 € y 4.000 € al mes</strong>. <br className="hidden sm:block" />
            El Diagnóstico cubre 43 ratios, análisis sectorial y sesión con Director Financiero Senior en <strong>48 horas — desde 447 €</strong>. La puerta correcta antes de cualquier compromiso mayor.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── ABOUT MIGUEL ───
function AboutMiguelSection() {
  return (
    <section id="miguel" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Tu Interlocutor</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Quién Hace Tu Diagnóstico
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#C9A84C] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Miguel Ángel López Sainz
              </h3>
              <p className="text-[#C9A84C] font-semibold">Director Financiero Senior · L&amp;C CFO®</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Shield, text: "Ex PwC (Big 4) — 5 años como Auditor Senior. Bases contables, fiscales, control interno, análisis financiero y de riesgos." },
                { icon: Monitor, text: "3 años como Controller Financiero en Estados Unidos. Gestión operativa, reporting, control presupuestario e implementación de ERP." },
                { icon: TrendingUp, text: "16 años como Director Financiero en Latinoamérica y España. Negociación bancaria, reestructuración de deuda, planificación financiera, presupuestos, control de gestión, flujo de caja, mejora de rentabilidad y reducción de costes." },
                { icon: BarChart3, text: "Eficiencia de procesos administrativos y operativos mediante inteligencia artificial y la experiencia real de haber resuelto problemas financieros en más de 20 países — la combinación de ambos es lo que marca la diferencia." },
                { icon: FileBarChart, text: "Máster en Finanzas — ESADE España." },
                { icon: Users, text: "En colaboración con otros despachos — soporte fiscal, legal y contable integrado." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-3 items-start">
                  <item.icon className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-gray-600 italic text-sm border-l-4 border-[#C9A84C] pl-4">
              "Lo que hago hoy: convertir los números de tu empresa en decisiones claras. Basado en Madrid, asesorando pymes españolas."
            </p>
            <div className="bg-[#FAF8F4] p-6 border-l-4 border-[#C9A84C] space-y-3">
              <p className="text-sm font-semibold text-[#C9A84C] uppercase tracking-widest mb-4">Lo que hago</p>
              {[
                { text: "Diagnóstico de Claridad Financiera", desc: "Diagnóstico financiero completo para detectar riesgos, ineficiencias y oportunidades." },
                { text: "Planeación Financiera Mensual", desc: "CFO estratégico sin contratar estructura interna." },
                { text: "Presupuesto Estratégico Anual", desc: "Convierte la estrategia en números accionables." },
                { text: "Análisis de Decisiones Críticas", desc: "Evaluación multiescenario para decisiones de alto impacto." },
                { text: "Optimización de Rentabilidad y Caja", desc: "Mejora de rentabilidad, flujos de caja y eficiencia operativa." },
                { text: "Estrategia de Deuda y Capital", desc: "Financiación, estructuración de deuda y acceso a capital privado." },
                { text: "Validación de Nuevos Negocios", desc: "Viabilidad de nuevos negocios o líneas: mercado, modelo e inversión." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><span className="font-semibold text-[#C9A84C]">{item.text}</span> — {item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#095195] text-white font-semibold px-6 py-3 text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.754h3.554v1.391c.435-.671 1.213-1.627 2.948-1.627 2.154 0 3.767 1.41 3.767 4.44v5.55zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.635V9.558h3.283v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
                Perfil LinkedIn
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#25D366] border border-[#25D366] font-semibold px-6 py-3 text-sm transition-colors"
              >
                <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-4 h-4 object-contain" />
                Preguntar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── FAQ ───
const faqItems = [
  {
    q: "¿Qué documentos necesito para el diagnóstico?",
    a: "Balance de Situación + Cuenta de PyG de los 2 últimos ejercicios cerrados (desglose mínimo 3 dígitos PGC), más una plantilla de costes y deuda que te facilitamos. Si usas Sage, A3, Holded, ContaSOL u otro ERP, puedes exportarlos directamente desde ahí — o pedirle a tu gestoría que te los envíe.",
  },
  {
    q: "¿En cuánto tiempo recibo el informe?",
    a: "2 días hábiles desde que te confirmamos por email que la documentación está completa y correcta. Ese email es el punto de partida oficial. Recibirás el informe junto con el enlace para reservar la videollamada en el horario que mejor te venga.",
  },
  {
    q: "¿Qué pasa en la sesión de 45 minutos?",
    a: "Es una videollamada con Miguel Ángel donde revisamos juntos el informe: los hallazgos más relevantes, el plan de acción priorizado a 30/60/90 días, y tus preguntas. No es una presentación — es una sesión de trabajo estratégico sobre los datos reales de tu empresa.",
  },
  {
    q: "¿Mis datos son confidenciales?",
    a: "Sí. Estamos sujetos a RGPD y al deber de confidencialidad durante la vigencia del contrato y 5 años posteriores. Los datos no se comparten con terceros ni se usan para otros fines.",
  },
  {
    q: "¿Cuál es la diferencia entre esto y lo que hace mi gestoría?",
    a: "Tu gestoría registra y declara. El Diagnóstico de Claridad Financiera interpreta: cuantifica los riesgos, detecta dónde se va el margen, compara con benchmarks sectoriales y propone acciones concretas. Es análisis financiero estratégico, no contabilidad fiscal.",
  },
  {
    q: "¿El diagnóstico es solo para empresas con problemas?",
    a: "No. El 60% de empresas que hacen el diagnóstico están en crecimiento — y descubren que su crecimiento consume más caja de la que genera, o que su margen real es la mitad de lo que creían. La claridad financiera es igual de valiosa cuando las cosas van bien: te permite crecer de forma sostenible.",
  },
  {
    q: "¿Sirve si mi contabilidad no está del todo ordenada?",
    a: "El análisis requiere Balance de Situación y Cuenta de PyG de los 2 últimos ejercicios cerrados, con desglose mínimo de 3 dígitos PGC. Sin ese nivel de detalle, el diagnóstico no puede realizarse. Si tienes dudas sobre si tu documentación cumple los requisitos, consúltanos antes de contratar — te lo confirmamos en el momento.",
  },
  {
    q: "¿Cuál es la diferencia entre los tres planes?",
    a: "El Diagnóstico Único (447 €) es un análisis puntual. El Plan Semestral (347 €/diagnóstico) incluye dos diagnósticos al año — uno por semestre. El Plan Trimestral (267 €/diagnóstico) incluye cuatro — uno por trimestre. Los tres incluyen exactamente lo mismo: informe completo HTML + PDF y sesión estratégica de 45 min.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">Preguntas Frecuentes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C9A84C] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Suelen Preguntar
          </h2>
        </motion.div>
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white border border-gray-200">
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-start gap-4 font-semibold text-[#C9A84C] hover:bg-[#FAF8F4] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C9A84C] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿Tienes otra pregunta?</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#25D366] border border-[#25D366] font-semibold px-8 py-3 transition-colors"
          >
            <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
            Preguntar por WhatsApp
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── CTA ───
function CTASection() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage: `url(${CTA_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/97 to-[#0A0A0A]/92" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ¿Listo para obtener claridad financiera?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Descubre exactamente dónde estás financieramente y obtén un plan de acción concreto en solo 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
            >
              Solicitar Diagnóstico Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/34635580883?text=Hola%2C%20he%20visto%20el%20Diagn%C3%B3stico%20de%20Claridad%20Financiera%20y%20me%20gustar%C3%ADa%20ver%20una%20demo%20antes%20de%20contratar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
              Solicitar Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo-lc-negro.png" alt="L&C CFO®" className="h-20 w-auto object-contain mb-3 mix-blend-screen" />
            <p className="text-sm">Diagnóstico de Claridad Financiera para Pymes</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#diagnostico" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="mailto:legal@lycconsulting.com" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href={PRIVACY_POLICY_URL} className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="/condiciones" className="hover:text-white transition-colors">Condiciones Generales</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} L&amp;C Digital &amp; Consulting, S.L. — NIF B22652069 — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ───
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* BLOQUE 1 — EL PROBLEMA */}
      <StatsSection />
      <RootProblemSection />
      <ProblemsSection />
      {/* BLOQUE 2 — EL DIAGNÓSTICO */}
      <WhatIsDiagnosisSection />
      <WhyIsImportantSection />
      <KeyQuestionsSection />
      <WhatDiagnosisDoes />
      {/* BLOQUE 3 — QUÉ INCLUYE */}
      <BenefitsSection />
      <AnalysisSection />
      <DeliverablesSection />
      {/* BLOQUE 4 — CÓMO FUNCIONA */}
      <ProcessSection />
      {/* BLOQUE 5 — QUIÉN LO HACE */}
      <AboutMiguelSection />
      {/* BLOQUE 6 — PLANES */}
      <PricingSection />
      {/* BLOQUE 7 — CIERRE */}
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
