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
} from "lucide-react";

// CDN URLs
const LOGO_WHITE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/hero_bg-hCmBTqbzuN6tTGJpJsBUWU.webp";
const ANALYSIS_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/analysis_visual-j2t5e5SjLANxscfmmRgggu.webp";
const PROCESS_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/process_visual-D5SBNVriRFz7PheorVEk5j.webp";
const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/cta_bg-dTM6XQZtDsLVuXizNMU6cV.webp";

const TALLY_LINK = "https://tally.so/r/xXyWaJ";

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
          <a href="#precios" className="hover:text-white transition-colors">Precios</a>
        </div>
        <a
          href={TALLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2800ff] hover:bg-[#2000d6] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
        >
          Solicitar Diagnóstico
        </a>
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
            Análisis financiero profesional para pymes. Conoce el estado real de tu empresa con 37 ratios, 8 KPIs y una sesión estratégica con un CFO — en solo 48 horas.
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
            <p className="text-xl font-bold text-[#2800ff] leading-snug mt-4">
              Este diagnóstico, los mide con tus propios datos en tan solo 48 horas.
            </p>
          </div>
          <div className="lg:col-span-2">
            <img
              src={ANALYSIS_VISUAL}
              alt="Dashboard financiero"
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── 6 PROBLEMS ───
const sixProblems = [
  {
    num: "01",
    title: "Crecer en ventas puede destruir liquidez",
    desc: "Si el margen es insuficiente, el crecimiento consume caja más rápido de lo que la genera.",
    icon: TrendingUp,
  },
  {
    num: "02",
    title: "Facturar más no garantiza ganar más",
    desc: "Los costes pueden crecer más rápido que los ingresos. Un 10% más de facturación puede traducirse en un EBITDA igual o peor.",
    icon: BarChart3,
  },
  {
    num: "03",
    title: "Beneficios en el papel, sin dinero en el banco",
    desc: "El resultado contable y la liquidez son distintos. Se puede tener beneficios y no poder pagar la nómina.",
    icon: Wallet,
  },
  {
    num: "04",
    title: "Deuda controlada — hasta que el banco dice que no",
    desc: "DFN/EBITDA > 3,0x es una alerta roja para la banca. El diagnóstico lo calcula antes de que el banco cierre el grifo.",
    icon: AlertTriangle,
  },
  {
    num: "05",
    title: "Costes fijos que amplifican las pérdidas",
    desc: "El Apalancamiento Operativo (GAO) mide la caída del resultado si las ventas bajan. Estructuras elevadas multiplican pérdidas.",
    icon: Shield,
  },
  {
    num: "06",
    title: "Facturar más cada año y destruir valor",
    desc: "Se puede mejorar la cifra de negocio y reducir el Retorno sobre Capital Empleado (ROCE). Si ROCE < coste de deuda, se destruye valor.",
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
            Los 6 Problemas Financieros que Destruyen Pymes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            El diagnóstico detecta y cuantifica cada uno con los datos reales de su empresa.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sixProblems.map((p) => (
            <motion.div
              key={p.num}
              variants={fadeUp}
              className="group relative p-6 border-l-4 border-[#2800ff] bg-[#f8f7ff] hover:bg-[#eeedff] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1C00A8] flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2800ff] tracking-wider">{p.num}</span>
                  <h3 className="text-lg font-bold text-[#1C00A8] mt-1 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── DELIVERABLES ───
const deliverables = [
  {
    icon: Monitor,
    title: "Informe Interactivo",
    items: [
      "Punto de partida, cómo leer este informe",
      "5 bloques financieros ¿Qué miden? ¿Por qué importan?",
      "8 Indicadores clave y Semáforo por bloque",
      "Gráficos dinámicos interactivos",
      "Tabla de 37 ratios con alertas y Resumen",
    ],
  },
  {
    icon: FileText,
    title: "PDF Financiero",
    items: [
      "Balance y PyG comparativos",
      "Explicación de las principales variaciones",
      "Cálculo de 37 ratios detallados",
      "Glosario completo de términos",
    ],
  },
  {
    icon: FileBarChart,
    title: "PDF Diagnóstico Financiero",
    items: [
      "Lo que este diagnóstico hace por tu negocio",
      "Contexto sectorial detallado",
      "Fortalezas y áreas de mejora",
      "Soluciones recomendadas de Ascente CFO®",
    ],
  },
  {
    icon: Video,
    title: "Sesión con el CFO",
    items: [
      "Revisión personalizada de 30 min",
      "Contexto estratégico y resolución de dudas",
      "Priorización de acciones inmediatas",
      "Hoja de ruta personalizada",
    ],
  },
];

function DeliverablesSection() {
  return (
    <section id="entregables" className="bg-[#1C00A8] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#7B8CFF] font-semibold text-sm tracking-widest uppercase mb-3">Entregables</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Recibe con el Diagnóstico
          </h2>
          <p className="text-lg text-white/70">Cuatro entregables clave en 48 horas.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {deliverables.map((d, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-sm border border-white/15 p-6 lg:p-8 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#2800ff] flex items-center justify-center flex-shrink-0">
                  <d.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {d.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {d.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/80 text-sm">
                    <span className="text-[#7B8CFF] mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.p variants={fadeUp} className="text-center text-white/60 text-sm mt-8 italic">
          * La videollamada de 30 minutos está incluida en todas las opciones de diagnóstico.
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
    title: "Sesión con el CFO",
    desc: "30 minutos de trabajo estratégico: revisión del informe, resolución de dudas y priorización de acciones inmediatas.",
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

// ─── 5 ANALYSIS BLOCKS ───
const analysisBlocks = [
  {
    num: 1,
    title: "Solidez Patrimonial",
    desc: "Estructura del balance, endeudamiento y capacidad de absorber pérdidas. Incluye equilibrio patrimonial y calidad de deuda.",
    color: "#2800ff",
  },
  {
    num: 2,
    title: "Solvencia y Liquidez",
    desc: "Capacidad real de pago a corto plazo. Incluye solvencia corriente, fondo de maniobra, acid test y disponibilidad.",
    color: "#1C00A8",
  },
  {
    num: 3,
    title: "Rentabilidad",
    desc: "Márgenes reales y retorno sobre activos y fondos propios. Incluye EBITDA, EBIT, ROA, ROCE y apalancamiento.",
    color: "#2800ff",
  },
  {
    num: 4,
    title: "Ciclo de Maduración",
    desc: "Tiempo necesario para convertir la operativa en caja. Incluye PMM de clientes, existencias y proveedores.",
    color: "#1C00A8",
  },
  {
    num: 5,
    title: "Estructura de Costes",
    desc: "Fragilidad ante caídas de ventas y punto de equilibrio real. Incluye margen de seguridad y GAO.",
    color: "#2800ff",
  },
];

function AnalysisSection() {
  return (
    <section id="analisis" className="bg-[#f8f7ff] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Metodología</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8] mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Los 5 Bloques del Análisis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cada bloque recibe un semáforo con análisis calibrado al contexto del sector. 37 ratios en total.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {analysisBlocks.map((b) => (
            <motion.div
              key={b.num}
              variants={fadeUp}
              className="bg-white p-6 border-t-4 hover:shadow-lg transition-shadow"
              style={{ borderTopColor: b.color }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ backgroundColor: b.color }}
              >
                {b.num}
              </div>
              <h3 className="text-base font-bold text-[#1C00A8] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {b.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p variants={fadeUp} className="text-center text-gray-500 text-sm mt-8 italic">
          * 37 ratios en la tabla principal + 8 KPIs en el dashboard + variaciones interanuales de cada partida.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── BENEFITS ───
const enables = [
  "Negociar financiación bancaria con los ratios de riesgo que usa la banca.",
  "Decidir contrataciones o inversiones conociendo el impacto en el punto de equilibrio.",
  "Iniciar conversaciones con socios o inversores con un informe financiero sólido.",
  "Fijar precios conociendo el coste real y el margen de contribución.",
  "Planificar sobre una base financiera medida y comparable.",
];

const avoids = [
  "Tomar deuda sin saber si la empresa puede pagarla (DFN/EBITDA).",
  "Repartir dividendos sin soporte de patrimonio neto o caja operativa.",
  "Ignorar una crisis de liquidez hasta que no queda margen de maniobra.",
  "Dimensionar costes fijos sin conocer la fragilidad que el GAO revela.",
];

function BenefitsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#2800ff] font-semibold text-sm tracking-widest uppercase mb-3">Beneficios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C00A8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Lo que Habilita vs. Lo que Evita
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="border-t-4 border-[#2800ff] bg-[#f8f7ff] p-8">
            <h3 className="text-xl font-bold text-[#2800ff] uppercase tracking-wider mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Lo que Habilita
            </h3>
            <ul className="space-y-4">
              {enables.map((e, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-[#2800ff] mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{e}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="border-t-4 border-red-600 bg-red-50/50 p-8">
            <h3 className="text-xl font-bold text-red-600 uppercase tracking-wider mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Lo que Evita
            </h3>
            <ul className="space-y-4">
              {avoids.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
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
            Precios y Propuesta de Valor
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Diagnóstico Único */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-lg font-bold text-[#1C00A8] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Diagnóstico Único
            </h3>
            <p className="text-sm text-gray-500 mb-6">Análisis puntual completo</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#1C00A8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>397 €</span>
              <span className="text-sm text-gray-500 ml-1">+ IVA</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                1 diagnóstico completo
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Informe interactivo + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Videollamada de 30 min con CFO
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
              className="block text-center bg-white border-2 border-[#1C00A8] text-[#1C00A8] hover:bg-[#1C00A8] hover:text-white font-semibold py-3 transition-colors"
            >
              Solicitar
            </a>
          </motion.div>

          {/* Plan Semestral */}
          <motion.div variants={fadeUp} className="bg-white border border-gray-200 p-8 flex flex-col">
            <h3 className="text-lg font-bold text-[#1C00A8] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Plan Semestral
            </h3>
            <p className="text-sm text-gray-500 mb-6">2 diagnósticos al año</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#1C00A8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>697,52 €</span>
              <span className="text-sm text-gray-500 ml-1">+ IVA</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                2 diagnósticos completos
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                Informes interactivos + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#2800ff] mt-0.5 flex-shrink-0" />
                2 videollamadas de 30 min con CFO
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
              className="block text-center bg-white border-2 border-[#1C00A8] text-[#1C00A8] hover:bg-[#1C00A8] hover:text-white font-semibold py-3 transition-colors"
            >
              Solicitar
            </a>
          </motion.div>

          {/* Plan Anual Trimestral — DESTACADO */}
          <motion.div variants={fadeUp} className="relative bg-[#1C00A8] text-white p-8 flex flex-col">
            <div className="absolute top-0 right-0 bg-[#2800ff] text-white text-xs font-bold px-4 py-1.5 uppercase tracking-wider">
              Recomendado
            </div>
            <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Plan Anual Trimestral
            </h3>
            <p className="text-sm text-white/70 mb-6">4 diagnósticos al año</p>
            <div className="mb-2">
              <span className="text-4xl font-bold text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>1.046,84 €</span>
              <span className="text-sm text-white/70 ml-1">+ IVA / año</span>
            </div>
            <p className="text-sm text-[#7B8CFF] mb-6">249,25 € por trimestre</p>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#7B8CFF] mt-0.5 flex-shrink-0" />
                4 diagnósticos completos
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#7B8CFF] mt-0.5 flex-shrink-0" />
                Informes interactivos + PDFs
              </li>
              <li className="flex items-start gap-2 text-sm text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#7B8CFF] mt-0.5 flex-shrink-0" />
                4 videollamadas de 30 min con CFO
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
              className="block text-center bg-[#2800ff] hover:bg-[#2000d6] text-white font-semibold py-3 transition-colors"
            >
              Solicitar Plan Anual
            </a>
          </motion.div>
        </div>

        {/* Note about monthly clients */}
        <motion.div variants={fadeUp} className="mt-10 bg-white border-l-4 border-[#2800ff] p-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong className="text-[#1C00A8]">Clientes del servicio mensual de CFO externo:</strong> el diagnóstico trimestral está incluido de forma gratuita en su suscripción.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 bg-[#eeedff] p-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            Una auditoría financiera básica para pyme cuesta entre <strong className="text-[#1C00A8]">3.000 € y 6.000 €</strong>.
            Este diagnóstico cubre 43 ratios, 8 KPIs, análisis sectorial y videollamada con el CFO en solo <strong className="text-[#1C00A8]">48 horas</strong>.
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
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${CTA_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0060]/85 to-[#1C00A8]/90" />
      <AnimatedSection className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={fadeUp}>
          <img src={LOGO_WHITE} alt="Ascente CFO" className="h-10 mx-auto mb-8 object-contain" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Solicite su Diagnóstico Hoy
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
            Transforme la incertidumbre en claridad financiera para su pyme en solo 48 horas.
          </p>
          <a
            href={TALLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#2800ff] hover:bg-[#2000d6] text-white font-bold px-10 py-5 text-lg transition-colors"
          >
            Acceder al Formulario
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── FOOTER ───
function Footer() {
  return (
    <footer className="bg-[#0d0060] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src={LOGO_WHITE} alt="Ascente CFO" className="h-6 object-contain" />
        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Ascente CFO® — Todos los derechos reservados
        </p>
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
      <ProblemsSection />
      <DeliverablesSection />
      <ProcessSection />
      <AnalysisSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
