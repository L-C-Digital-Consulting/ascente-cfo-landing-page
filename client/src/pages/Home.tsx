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
const PROCESS_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/process_visual-D5SBNVriRFz7PheorVEk5j.webp";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/cta_bg-dTM6XQZtDsLVuXizNMU6cV.webp";

const TALLY_LINK = "https://tally.so/r/xXyWaJ";
const WHATSAPP_LINK = "https://wa.me/34635580883?text=Hola%2C%20estoy%20viendo%20la%20demo%20de%20Ascente%20CFO%C2%AE%20y%20tengo%20una%20consulta.";
const WHATSAPP_LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
const LINKEDIN_URL = "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";

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
        scrolled ? "bg-[#0d0060]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <img src={LOGO_WHITE} alt="Ascente CFO" className="h-8 object-contain" />
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#problema" className="hover:text-white transition-colors">El Problema</a>
          <a href="#entregables" className="hover:text-white transition-colors">Entregables</a>
          <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
          <a href="#analisis" className="hover:text-white transition-colors">Análisis</a>
          <a href="#precios" className="hover:text-white transition-colors">Planes</a>
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
            className="bg-[#2800ff] hover:bg-[#2000d6] text-white font-semibold px-6 py-2 text-sm transition-colors"
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0060]/80 via-[#1C00A8]/70 to-[#0d0060]/90" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={LOGO_WHITE} alt="Ascente CFO" className="h-12 mx-auto mb-8 object-contain" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Diagnóstico de<br />
            <span className="text-[#7B8CFF]">Claridad Financiera</span>®
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Análisis financiero profesional para tu negocio. Descubre la situación real de tu empresa mediante un diagnóstico detallado y una sesión estratégica con un Director Financiero — en solo 48 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2800ff] hover:bg-[#2000d6] text-white font-semibold px-8 py-4 text-lg transition-colors"
            >
              Solicitar Diagnóstico
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#estadisticas"
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
    <section id="estadisticas" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Datos Alarmantes 2025</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
              className="text-center p-8 border-t-4 border-[#2800ff] bg-[#f8f7ff]"
            >
              <span className="block text-5xl lg:text-6xl font-bold text-[#1C00A8] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {item.stat}
              </span>
              <p className="text-lg text-gray-700 mb-4">{item.text}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#2800ff] hover:underline"
              >
                Fuente: {item.source}
                <ExternalLink className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Sí estás en etapa de crecimiento o estás pasando por problemas financieros y operativos, <span className="font-bold text-[#1C00A8]">es igual de importante realizar el Diagnóstico de Claridad Financiera</span>. Si no quieres terminar así.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── ROOT PROBLEM ───
function RootProblemSection() {
  return (
    <section id="problema" className="bg-[#f8f7ff] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">El Origen</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            La Raíz del Problema
          </h2>
        </motion.div>
        <motion.div variants={fadeUp} className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              La raíz del problema es que casi ninguna Pyme mide sus ratios financieros, y no tienen claridad real del estado en que se encuentra su negocio. Están vendiendo más, pero con márgenes asfixiados, falta de liquidez y morosidad creciente, no obtienen beneficios y se dispara el número de concursos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En este contexto, el Diagnóstico de Claridad Financiera se convierte en la herramienta clave para detectar a tiempo si tu empresa está en esa zona de "crecer sin ganar dinero", identificar dónde se le va el margen y la caja, y trazar una hoja de ruta concreta para evitar acabar en pérdidas o en concurso.
            </p>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <img
              src={ANALYSIS_VISUAL}
              alt="Dashboard financiero"
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
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Concepto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
                  <item.icon className="w-6 h-6 text-[#2800ff] flex-shrink-0 mt-1" />
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
    <section className="bg-[#f8f7ff] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Importancia</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            ¿Por Qué es Tan Importante?
          </h2>
          <p className="text-lg text-gray-600">Evita convertirte en una estadística</p>
        </motion.div>
        <div className="space-y-12">
          <motion.div variants={fadeUp} className="bg-white p-8 border-l-4 border-[#2800ff]">
            <h3 className="text-xl font-bold text-[#1C00A8] mb-4">El Contexto de Crisis</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#2800ff] mb-2">42%</p>
                <p className="text-gray-700">de pymes cerraron sin beneficios</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#2800ff] mb-2">46%</p>
                <p className="text-gray-700">sufrió problemas de liquidez</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#2800ff] mb-2">Récord</p>
                <p className="text-gray-700">histórico de concursos</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white p-8">
            <h3 className="text-xl font-bold text-[#1C00A8] mb-4">¿Qué te Falta Sin Claridad Financiera?</h3>
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

          <motion.div variants={fadeUp} className="bg-[#1C00A8] text-white p-8">
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
                  <CheckCircle2 className="w-5 h-5 text-[#7B8CFF] flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-8 text-lg italic">
              "La diferencia entre una Pyme que prospera y una que quiebra no es la suerte — es la claridad financiera."
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
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Autoevaluación</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Las Preguntas que Toda Pyme Debe Hacerse
          </h2>
          <p className="text-lg text-gray-600">Si no puedes responder estas preguntas, tu negocio está en riesgo</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <h3 className="text-lg font-bold text-[#1C00A8] mb-6 flex items-center gap-2">
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
                  <HelpCircle className="w-4 h-4 text-[#2800ff] flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 2 */}
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <h3 className="text-lg font-bold text-[#1C00A8] mb-6 flex items-center gap-2">
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
                  <HelpCircle className="w-4 h-4 text-[#2800ff] flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category 3 */}
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <h3 className="text-lg font-bold text-[#1C00A8] mb-6 flex items-center gap-2">
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
                  <HelpCircle className="w-4 h-4 text-[#2800ff] flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-700">{q}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="mt-12 text-center bg-[#1C00A8] text-white p-8">
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
    title: "Destrucción de Valor Disfrazada de Crecimiento",
    desc: "Tu empresa crece, pero el valor real disminuye. Si ROCE < Coste de Deuda, cada inversión destruye valor. El diagnóstico lo detecta ahora, con tus datos reales.",
    icon: FileBarChart,
  },
];

function ProblemsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Diagnóstico</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Los Problemas Financieros que Destruyen Pymes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">El diagnóstico detecta y cuantifica cada uno con los datos reales de su empresa</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sixProblems.map((p) => (
            <motion.div key={p.num} variants={fadeUp} className="bg-[#f8f7ff] p-8 border-l-4 border-[#2800ff] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#2800ff] flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold text-[#1C00A8]/20" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {p.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1C00A8] mb-3">{p.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-12 text-center bg-[#1C00A8] text-white p-8">
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
    <section className="bg-[#f8f7ff] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Impacto</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
                <item.icon className="w-8 h-8 text-[#2800ff] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#1C00A8] mb-1">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <img src={ANALYSIS_VISUAL} alt="Impacto" className="w-full object-contain" />
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
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Comparativa</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Habilita vs Lo que Evita
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <h3 className="text-xl font-bold text-[#1C00A8] mb-6 flex items-center gap-2">
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
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-[#1C00A8] mb-6 flex items-center gap-2">
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
    title: "Análisis de Solvencia",
    desc: "Evaluamos tu capacidad para cumplir obligaciones a largo plazo.",
  },
  {
    num: "02",
    title: "Análisis de Liquidez",
    desc: "Medimos tu capacidad para pagar deudas a corto plazo.",
  },
  {
    num: "03",
    title: "Análisis de Rentabilidad",
    desc: "Cuantificamos el retorno real de tu inversión.",
  },
  {
    num: "04",
    title: "Análisis de Eficiencia",
    desc: "Optimizamos el uso de tus activos y recursos.",
  },
  {
    num: "05",
    title: "Análisis de Crecimiento",
    desc: "Evaluamos si tu crecimiento es financieramente sostenible.",
  },
  {
    num: "06",
    title: "Análisis Sectorial",
    desc: "Comparamos tu desempeño vs. competidores en tu industria.",
  },
];

function AnalysisSection() {
  return (
    <section id="analisis" className="bg-[#f8f7ff] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Metodología</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Los 6 Bloques del Análisis
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisBlocks.map((block) => (
            <motion.div key={block.num} variants={fadeUp} className="bg-white p-8 border-l-4 border-[#2800ff]">
              <span className="text-4xl font-bold text-[#1C00A8]/20 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {block.num}
              </span>
              <h3 className="text-lg font-bold text-[#1C00A8] mb-3">{block.title}</h3>
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
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Entregables</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Recibe con el Diagnóstico
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-[#2800ff]" />
              <h3 className="text-lg font-bold text-[#1C00A8]">Informe Interactivo</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Dashboard interactivo con todos tus ratios
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Visualizaciones de datos en tiempo real
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Análisis comparativo sectorial
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-[#2800ff]" />
              <h3 className="text-lg font-bold text-[#1C00A8]">Informes PDF</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                PDF de diagnóstico ejecutivo
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                PDF financiero detallado
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Plan de acción recomendado
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <div className="flex items-center gap-3 mb-4">
              <Video className="w-6 h-6 text-[#2800ff]" />
              <h3 className="text-lg font-bold text-[#1C00A8]">Sesión Estratégica</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                45 minutos de videollamada
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Revisión personalizada del informe
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Priorización de acciones inmediatas
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#f8f7ff] p-8 border-t-4 border-[#2800ff]">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#2800ff]" />
              <h3 className="text-lg font-bold text-[#1C00A8]">Director Financiero</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Profesional certificado y con experiencia
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Especializado en Pymes españolas
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Disponible para seguimiento
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
            Conoce a nuestro Director Financiero
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        <motion.p variants={fadeUp} className="text-center text-white/60 text-sm mt-8 italic bg-[#1C00A8] py-4 px-6 rounded">
          * La videollamada de 45 minutos está incluida en todas las opciones de diagnóstico.
        </motion.p>
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
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Proceso</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Cómo Funciona
          </h2>
          <p className="text-lg text-gray-600">3 pasos sencillos para obtener claridad financiera</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6">
            {steps.map((s) => (
              <motion.div key={s.num} variants={fadeUp} className="text-center sm:text-left">
                <div className="w-16 h-16 bg-[#2800ff] flex items-center justify-center mx-auto sm:mx-0 mb-4">
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-4xl font-bold text-[#1C00A8]/20 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.num}
                </span>
                <h3 className="text-lg font-bold text-[#1C00A8] mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
    <section id="precios" className="bg-[#f8f7ff] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Inversión</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Planes y Propuesta de Valor
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Diagnóstico Único */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-xl font-bold text-[#1C00A8] mb-2">Diagnóstico Único</h3>
            <p className="text-sm text-gray-600 mb-6">Perfecto para una evaluación puntual</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#2800ff]">447€</span>
              <span className="text-gray-600 ml-2">+ IVA</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Informe interactivo + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Videollamada de 45 min con un Director Financiero Senior
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Entrega en 48 horas
              </li>
            </ul>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2800ff] hover:bg-[#2000d6] text-white font-semibold py-3 text-center transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>

          {/* Plan Semestral */}
          <motion.div variants={fadeUp} className="bg-white border-2 border-[#2800ff] p-8 flex flex-col relative">
            <div className="absolute top-4 right-4 bg-[#2800ff] text-white px-3 py-1 text-xs font-bold">
              RECOMENDADO
            </div>
            <h3 className="text-xl font-bold text-[#1C00A8] mb-2">Plan Semestral</h3>
            <p className="text-sm text-gray-600 mb-6">Monitoreo continuo de tu salud financiera</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#2800ff]">347€</span>
              <span className="text-gray-600 ml-2">+ IVA</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Informes interactivos + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                2 videollamadas de 45 min con un Director Financiero Senior
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Seguimiento semestral
              </li>
            </ul>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#2800ff] hover:bg-[#2000d6] text-white font-semibold py-3 text-center transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>

          {/* Plan Trimestral */}
          <motion.div variants={fadeUp} className="bg-[#1C00A8] text-white p-8 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Plan Trimestral</h3>
            <p className="text-sm text-white/80 mb-6">Máximo control y optimización financiera</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#7B8CFF]">267€</span>
              <span className="text-white/80 ml-2">+ IVA</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#7B8CFF] mt-0.5 flex-shrink-0" />
                Informes interactivos + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#7B8CFF] mt-0.5 flex-shrink-0" />
                4 videollamadas de 45 min con un Director Financiero Senior
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#7B8CFF] mt-0.5 flex-shrink-0" />
                Máximo ahorro por diagnóstico
              </li>
            </ul>
            <a
              href={TALLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#7B8CFF] hover:bg-[#6a7db8] text-white font-semibold py-3 text-center transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </motion.div>
        </div>
        <motion.div variants={fadeUp} className="mt-12 bg-[#EEE0FF] border-l-4 border-[#2800ff] p-8">
          <p className="text-gray-800">
            Una auditoría financiera básica para pyme cuesta entre <strong>3.000 € y 6.000 €</strong>. <br />
            Este diagnóstico cubre 43 ratios, 8 KPIs, análisis sectorial y sesión estratégica con un Director Financiero Senior en solo <strong>48 horas</strong>.
          </p>
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0060]/95 to-[#1C00A8]/90" />
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
          <a
            href={TALLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2800ff] hover:bg-[#2000d6] text-white font-semibold px-10 py-4 text-lg transition-colors"
          >
            Solicitar Diagnóstico Ahora
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
    <footer className="bg-[#0d0060] text-white/60 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={LOGO_WHITE} alt="Ascente CFO" className="h-8 object-contain mb-4" />
            <p className="text-sm">Diagnóstico de Claridad Financiera para Pymes</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Ascente CFO® — Todos los derechos reservados
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
      <StatsSection />
      <RootProblemSection />
      <WhatIsDiagnosisSection />
      <WhyIsImportantSection />
      <KeyQuestionsSection />
      <ProblemsSection />
      <WhatDiagnosisDoes />
      <BenefitsSection />
      <AnalysisSection />
      <DeliverablesSection />
      <ProcessSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
