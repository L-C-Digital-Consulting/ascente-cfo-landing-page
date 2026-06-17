/*
 * L&C CFO® — Dirección Financiera Mensual® (S2)
 * Landing page: /direccion-financiera-mensual
 * Dark: #0A0A0A · Accent: #C9A84C · Light: #FAF8F4
 */

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  TrendingUp,
  AlertCircle,
  Banknote,
  Wallet,
  Package,
  Landmark,
} from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/hero_bg-hCmBTqbzuN6tTGJpJsBUWU.webp";
const WHATSAPP_LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/whatsapp_logo_09eed037.png";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/miguel-ángel-lópez-sainz-0bb25341";
const DIAGNOSTICO_URL = "/diagnostico-financiero-pyme";
const WA_S2 =
  "https://wa.me/34635580883?text=Hola%2C%20me%20interesa%20la%20Direcci%C3%B3n%20Financiera%20Mensual%C2%AE%20de%20L%26C%20CFO%C2%AE%20y%20quiero%20ver%20si%20encaja%20con%20mi%20empresa.";
const WA_POST_DIAGNOSTICO =
  "https://wa.me/34635580883?text=Hola%2C%20ya%20hice%20el%20Diagn%C3%B3stico%20y%20me%20interesa%20ver%20c%C3%B3mo%20encaja%20la%20Direcci%C3%B3n%20Financiera%20Mensual%C2%AE%20con%20mi%20empresa.";

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

function IaBadge() {
  return (
    <span className="inline-flex text-[0.5rem] font-bold tracking-[0.1em] uppercase text-[#C9A84C] bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded-[3px] px-1.5 py-px ml-1.5 align-middle">
      ✦ IA
    </span>
  );
}

// ─── SERVICIOS (para dropdown navbar) ───
const servicios = [
  { name: "Diagnóstico de Claridad Financiera®", link: DIAGNOSTICO_URL, ia: true },
  { name: "Dirección Financiera Mensual®", link: "/direccion-financiera-mensual", ia: true },
  { name: "Presupuesto Estratégico Anual®", link: null, ia: false },
  { name: "Gestión de Personal®", link: null, ia: false },
  { name: "Análisis de Decisiones Críticas®", link: null, ia: true },
  { name: "Optimización de Rentabilidad y Caja®", link: null, ia: false },
  { name: "Estrategia de Deuda y Capital®", link: null, ia: false },
  { name: "Validación de Nuevos Negocios®", link: null, ia: false },
];

// ─── NAVBAR ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
          <a href="#que-es" className="hover:text-white transition-colors">
            Qué es
          </a>
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
            >
              Servicios
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
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
          <a href="#planes" className="hover:text-white transition-colors">
            Planes
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={WA_S2}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <img src={WHATSAPP_LOGO} alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
          <a
            href={WA_S2}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-6 py-2 text-sm transition-colors"
          >
            Contáctanos
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
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
            L&C CFO® · Dirección Financiera Mensual®
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tu empresa tiene gestoría.
            <br />
            Pero la gestoría no te dice qué va a pasar
            <br />
            el mes que viene.
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl">
            Un Director Financiero Externo que analiza tu empresa cada mes,
            proyecta tu caja y decide contigo lo que viene.
            Sin contratarlo en plantilla. Sin permanencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_S2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="" className="w-5 h-5 object-contain" />
              Contáctanos
            </a>
            <a
              href="#que-es"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-10 py-4 text-lg transition-colors"
            >
              Ver cómo funciona
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── QUÉ ES S2 ───
function QueEsSection() {
  return (
    <section id="que-es" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            La distinción clave
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lo que hace tu gestoría.<br />
            Lo que hace un Director Financiero.
            <span className="block text-[#C9A84C] mt-1">No es lo mismo.</span>
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed space-y-5 text-pretty">
            <p>
              Tu gestor lleva la contabilidad fiscal, presenta los impuestos y entrega el balance.
              Lo hace bien — es su función. Pero el balance que te entrega en abril refleja lo que
              pasó en diciembre: para entonces llevas cuatro meses tomando decisiones con datos del
              año anterior. O peor: con una hoja de Excel que actualizas tú a mano.
            </p>
            <p>
              <strong>La Dirección Financiera Mensual®</strong> es la función que falta:{" "}
              <span className="text-[#0A0A0A] font-semibold">el control total de tu negocio en un solo sitio.</span>{" "}
              Tu caja, con saldos reales y proyectados. Tus cobros, registrados, aplicados y ordenados
              por antigüedad para saber a quién reclamar y cuándo. Tus inventarios, tus salidas por banco,
              tus créditos y la negociación de tu deuda con los bancos, que llevamos nosotros por ti.
              Y la planificación que lo une todo: el resultado real de cada mes — y, según tu plan,
              el presupuesto anual, la previsión financiera y el reporting.
            </p>
          </div>
        </motion.div>

        <div className="overflow-x-auto overflow-y-hidden mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-6 bg-gray-50 text-sm font-semibold text-gray-500 w-1/2">
                  Lo que ya tienes
                </th>
                <th className="text-left py-3 px-6 bg-[#0A0A0A] text-sm font-semibold text-[#C9A84C] w-1/2">
                  Lo que añade la Dirección Financiera Mensual®
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Tu gestor registra lo que pasó",
                  "Analizamos tu negocio y lo proyectamos para que tomes mejores decisiones",
                ],
                [
                  "El balance de diciembre llega en abril",
                  "Te damos información estimada en tiempo real",
                ],
                [
                  "Sin un número para tomar la decisión",
                  "Toda la información necesaria para saber el estado de tu negocio",
                ],
                [
                  "Cierre fiscal trimestral o anual",
                  "Te damos cierres mensuales para actuar a tiempo",
                ],
              ].map(([left, right], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="py-4 px-6 text-sm text-gray-600 border-b border-gray-100">
                    {left}
                  </td>
                  <td className="py-4 px-6 text-sm text-[#0A0A0A] font-medium border-b border-gray-100 bg-[#FAF8F4]">
                    {right}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <motion.div
          variants={fadeUp}
          className="bg-[#0A0A0A] px-8 py-8 border-l-4 border-[#C9A84C]"
        >
          <p
            className="text-xl sm:text-2xl text-white leading-snug"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            "Tu gestor lleva la contabilidad fiscal.
            Nosotros llevamos la dirección financiera.
            Son funciones distintas.
            Y ambas son necesarias."
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── CICLO MENSUAL ───
function CicloSection() {
  const pasos = [
    {
      num: "01",
      titulo: "Lo ponemos en marcha por ti",
      desc: "Empezamos entendiendo tu negocio en una conversación. Lo diagnosticamos y lo configuramos en la plataforma por ti. No peleas con hojas de cálculo ni aprendes ningún sistema.",
    },
    {
      num: "02",
      titulo: "Lo mantenemos al día, cada mes",
      desc: "Tu caja, tus cobros, tus pagos, tu inventario y tu financiación, siempre actualizados y ordenados por unidad de negocio. Cerramos tu mes dentro de los primeros 10 días.",
    },
    {
      num: "03",
      titulo: "Te damos la lectura para decidir",
      desc: "No solo qué pasó: proyectamos tu caja desde tus contratos —visible hasta 12 meses— para anticipar los meses en rojo y los picos de liquidez, y que decidas financiación o inversión a tiempo. La tecnología hace el trabajo; el criterio lo ponemos nosotros.",
    },
  ];

  return (
    <section id="ciclo" className="bg-[#0A0A0A] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Cómo lo hacemos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Cómo trabajamos contigo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0">
          {pasos.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative p-6 border-t-2 border-[#C9A84C] md:border-t-2 md:border-l-0 first:border-l-0"
            >
              <p className="text-[#C9A84C] font-bold text-3xl mb-3 opacity-40">
                {p.num}
              </p>
              <h3
                className="text-white font-bold text-lg mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.titulo}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-12 text-center border-t border-white/10 pt-10"
        >
          <p className="text-white/70 text-lg">
            <span className="text-white font-semibold">Tú apruebas lo importante y nos avisas de los cambios.</span>
            {" "}El resto lo hacemos nosotros.
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── ENTREGABLES ───
function EntregablesSection() {
  const entregables = [
    {
      icon: Wallet,
      nombre: "Tu caja",
      desc: "Sabes cuánto tienes, cuánto tendrás o cuánto te faltará. Todos tus bancos en un solo sitio, con saldo real y proyección desde tus contratos, visible hasta 12 meses.",
    },
    {
      icon: AlertCircle,
      nombre: "Tus cobros",
      desc: "Quién te debe, cuánto y desde cuándo. A quién reclamar y cuándo, ordenado por antigüedad. Actúas antes de que afecte a tu caja.",
    },
    {
      icon: Banknote,
      nombre: "Tus pagos",
      desc: "Qué pagas y en qué orden. Tú autorizas desde la plataforma y la conciliación con el banco es automática. Ningún pago te sorprende.",
    },
    {
      icon: Package,
      nombre: "Tu inventario",
      desc: "Control de stock con alertas y cuánto te cuesta de verdad lo que vendes. Tu food cost en hostelería; tus materiales por obra frente a presupuesto en construcción.",
    },
    {
      icon: Landmark,
      nombre: "Tu financiación",
      desc: "El coste real de tu deuda y cuándo conviene amortizar o refinanciar. Tus créditos bajo control, no dispersos en cada banco.",
    },
    {
      icon: TrendingUp,
      nombre: "Tu rentabilidad",
      desc: "Cuánto ganas de verdad cada mes — y por unidad de negocio, no en bloque. El resultado real frente a lo que esperabas.",
    },
  ];

  return (
    <section id="entregables" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            El alcance
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Todo lo que tienes bajo control
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cada área de tu negocio financiero, ordenada y al día. Según el plan que contrates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {entregables.map((e, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white border border-gray-200 p-6 flex flex-col group hover:border-[#C9A84C] transition-colors"
            >
              <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center mb-4 group-hover:bg-[#C9A84C] transition-colors flex-shrink-0">
                <e.icon className="w-5 h-5 text-[#C9A84C] group-hover:text-[#0A0A0A] transition-colors" />
              </div>
              <h3
                className="font-bold text-[#0A0A0A] text-sm mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {e.nombre}
              </h3>
              <p className="text-gray-600 text-sm flex-1">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── PLANES ───
type ModuloRow =
  | { type: "header"; name: string }
  | { type: "module"; name: string; ia?: boolean; control: boolean; direccion: boolean; estrategia: boolean; note?: boolean; sub?: boolean };

const modulosPlanes: ModuloRow[] = [
  { type: "module", name: "Tesorería + Clientes + Proveedores", ia: true, control: true, direccion: true, estrategia: true },
  { type: "module", name: "Inventarios", control: true, direccion: true, estrategia: true },
  { type: "module", name: "Financiación", ia: true, control: false, direccion: true, estrategia: true },
  { type: "module", name: "Diagnóstico de Claridad Financiera® bonificado", ia: true, control: true, direccion: true, estrategia: true },
  { type: "header", name: "Planificación Financiera" },
  { type: "module", name: "Resultados Operativos", sub: true, control: true, direccion: true, estrategia: true },
  { type: "module", name: "Presupuesto Estratégico Anual®", sub: true, note: true, control: false, direccion: true, estrategia: true },
  { type: "module", name: "Previsión Financiera", ia: true, sub: true, control: false, direccion: false, estrategia: true },
  { type: "module", name: "Reporting ejecutivo", control: false, direccion: false, estrategia: true },
];

const planes = [
  {
    nombre: "Control",
    target: "1–15 empleados",
    facturacion: "300K–800K €/año",
    tagline: "Visibilidad y control total de tu operativa financiera mensual.",
    highlight: false,
  },
  {
    nombre: "Dirección",
    target: "10–35 empleados",
    facturacion: "800K–3M €/año",
    tagline: "Dirección financiera activa con financiación, presupuesto anual y Diagnóstico incluido.",
    highlight: true,
  },
  {
    nombre: "Estrategia",
    target: "25–80 empleados",
    facturacion: "3M–15M €/año",
    tagline: "CFO Estratégico con planificación anual, presupuesto y reporting ejecutivo.",
    highlight: false,
  },
];

function Cell({ value, plan }: { value: boolean | "note"; plan: "control" | "direccion" | "estrategia" }) {
  if (value === false)
    return (
      <td className={`text-center py-3 px-4 ${plan === "direccion" ? "bg-[#C9A84C]/5" : ""}`}>
        <span className="text-white/20 text-lg">—</span>
      </td>
    );
  return (
    <td className={`text-center py-3 px-4 ${plan === "direccion" ? "bg-[#C9A84C]/5" : ""}`}>
      <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mx-auto" />
      {value === "note" && <span className="text-[#C9A84C] text-xs ml-0.5">*</span>}
    </td>
  );
}

function PlanesSection() {
  return (
    <section id="planes" className="bg-[#0A0A0A] py-20 lg:py-28">
      <AnimatedSection className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Elige tu nivel
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tres planes. Una sola dirección financiera.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            El plan correcto depende del tamaño de tu empresa y del nivel de control que necesitas.
            Todos incluyen sesión mensual con tu Director Financiero y ciclo completo de análisis.
          </p>
        </motion.div>

        {/* Tabla módulos con cabecera integrada */}
        <p className="text-white/30 text-xs text-right mb-1 sm:hidden">← Desliza para ver los tres planes →</p>
        <motion.div variants={fadeUp} className="overflow-x-auto overflow-y-hidden">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="w-[52%]" />
                {planes.map((p, i) => (
                  <th
                    key={i}
                    className={`p-6 text-center ${
                      p.highlight
                        ? "bg-[#C9A84C] text-[#0A0A0A]"
                        : "bg-white/5 border border-white/10 text-white"
                    }`}
                  >
                    {p.highlight && (
                      <p className="text-[0.65rem] font-bold tracking-widest uppercase mb-2 text-[#0A0A0A]/60">
                        MÁS POPULAR
                      </p>
                    )}
                    <h3
                      className={`text-2xl font-bold mb-1 ${p.highlight ? "text-[#0A0A0A]" : "text-white"}`}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {p.nombre}
                    </h3>
                    <p className={`text-xs mb-0.5 ${p.highlight ? "text-[#0A0A0A]/70" : "text-white/50"}`}>
                      {p.target}
                    </p>
                    <p className={`text-xs font-semibold ${p.highlight ? "text-[#0A0A0A]/80" : "text-[#C9A84C]"}`}>
                      {p.facturacion}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modulosPlanes.map((row, i) => {
                if (row.type === "header") {
                  return (
                    <tr key={i}>
                      <td
                        colSpan={4}
                        className="py-3 px-4 text-xs font-bold tracking-widest uppercase text-[#C9A84C] bg-white/5 border-t border-b border-white/10"
                      >
                        {row.name}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-3 px-4 text-sm text-white/70">
                      <span className={row.sub ? "pl-3 text-white/50" : ""}>
                        {row.name}
                        {row.ia && <IaBadge />}
                      </span>
                    </td>
                    <Cell value={row.control} plan="control" />
                    <Cell value={row.direccion && row.note ? "note" : row.direccion} plan="direccion" />
                    <Cell value={row.estrategia} plan="estrategia" />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 text-white/40 text-xs">
          * El Presupuesto Estratégico Anual® requiere un setup inicial con coste único en el plan Dirección. Incluido en Plan Estrategia.
        </motion.div>

        {/* Funcionalidades sectoriales */}
        <motion.div variants={fadeUp} className="mt-8 border border-white/10 p-5">
          <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">
            Funcionalidades sectoriales
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-[#C9A84C] font-bold text-xs bg-[#C9A84C]/10 border border-[#C9A84C]/30 px-2 py-0.5 flex-shrink-0">
                Hostelería
              </span>
              <p className="text-white/50 text-xs leading-relaxed">
                Escandallos y análisis de food cost incluidos desde Plan Dirección — fichas de producto, coste por receta y control de stock con alertas.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/20 font-bold text-xs bg-white/5 border border-white/10 px-2 py-0.5 flex-shrink-0">
                Construcción
              </span>
              <p className="text-white/30 text-xs leading-relaxed italic">
                Módulos sectoriales por obra — control de materiales frente a presupuesto. En desarrollo.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-10 text-center">
          <p className="text-white/60 text-sm mb-6">
            ¿No sabes qué plan encaja con tu empresa? Cuéntanos en qué punto estás y lo vemos juntos.
          </p>
          <a
            href={WA_S2}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
          >
            <img src={WHATSAPP_LOGO} alt="" className="w-5 h-5 object-contain" />
            Contáctanos
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── PARA QUIÉN ───
function ParaQuienSection() {
  const encaja = [
    "Tu empresa factura entre 300.000€ y 15M€ y sigues tomando decisiones financieras sin un número claro que las respalde.",
    "Tienes gestor o contable, pero nadie te dice qué va a pasar con tu caja el mes que viene.",
    "Hay meses en los que no sabes si vas a llegar a nóminas sin revisar el saldo bancario con angustia.",
    "Estás contratando, invirtiendo o pidiendo financiación y la decisión la tomas más con sensación que con datos.",
    "Tu empresa crece — pero la caja no refleja ese crecimiento.",
  ];

  const noEncaja = [
    { text: "Facturas menos de 300.000€.", sub: "El Diagnóstico de Claridad Financiera® es el primer paso correcto." },
    { text: "Necesitas un director financiero en plantilla, a jornada completa.", sub: "La Dirección Financiera Mensual® es un servicio externo: llevamos tu dirección financiera por ti, sin el coste de un CFO interno." },
    { text: "Buscas un software para gestionarlo tú mismo.", sub: "Esto es un servicio operado por nosotros, no una herramienta de autogestión: del dato nos encargamos nosotros." },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Cualificación
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            La Dirección Financiera Mensual® encaja si…
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="space-y-4">
            {encaja.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-[#FAF8F4] border border-gray-200 p-6 space-y-5"
          >
            <h3
              className="font-bold text-[#0A0A0A] text-sm mb-4 uppercase tracking-widest"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Probablemente no encaja aún
            </h3>
            {noEncaja.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <span className="text-gray-300 font-bold text-lg leading-none">×</span>
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-medium">{item.text}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── VS CFO INTERNO ───
function VsCFOSection() {
  const filas = [
    { concepto: "Disponible desde", interno: "3–6 meses (selección, preaviso, onboarding)", lc: "Semanas desde el primer contacto" },
    { concepto: "Experiencia", interno: "Variable según el candidato", lc: "20+ años en finanzas · ex PwC · ESADE · 20+ países" },
    { concepto: "Compromiso", interno: "Contrato laboral — meses o años para deshacer", lc: "Mes a mes. Sin permanencia." },
    { concepto: "Visión", interno: "Solo tu empresa, solo tu sector", lc: "Perspectiva de múltiples sectores y mercados" },
    { concepto: "Tecnología", interno: "La que él traiga", lc: "Plataforma L&C CFO® con IA integrada" },
  ];

  return (
    <section className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            La alternativa
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Un CFO interno cuesta entre 6.000 y 9.000 €/mes.
            <br />
            Estos son los números.
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Si has llegado a la conclusión de que necesitas dirección financiera mensual,
            la siguiente pregunta es cómo la tienes. Contratar a alguien en plantilla o tenerlo externo.
          </p>
        </motion.div>

        <p className="text-gray-400 text-xs text-right mb-1 sm:hidden">← Desliza para comparar →</p>
        <motion.div variants={fadeUp} className="overflow-x-auto overflow-y-hidden">
          <table className="w-full min-w-[480px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-5 bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide w-1/4">
                  Concepto
                </th>
                <th className="text-left py-3 px-5 bg-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wide w-3/8">
                  CFO interno
                </th>
                <th className="text-left py-3 px-5 bg-[#0A0A0A] text-xs font-semibold text-[#C9A84C] uppercase tracking-wide w-3/8">
                  L&C CFO®
                </th>
              </tr>
            </thead>
            <tbody>
              {filas.map((f, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-4 px-5 text-xs font-semibold text-gray-500 uppercase tracking-wide bg-gray-50">
                    {f.concepto}
                  </td>
                  <td className="py-4 px-5 text-sm text-gray-600">{f.interno}</td>
                  <td className="py-4 px-5 text-sm text-white font-medium bg-[#0A0A0A]">
                    {f.lc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 border-l-4 border-[#C9A84C] pl-6">
          <p className="text-gray-700 text-base leading-relaxed">
            La mayoría de las empresas que necesitan dirección financiera mensual
            no pueden esperar 6 meses ni comprometerse con una nómina fija de 9.000 €.
            <span className="font-semibold text-[#0A0A0A]"> Hay otra forma.</span>
          </p>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── PRIMER PASO ───
function PrimerPasoSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            El inicio
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ¿Por dónde empezamos?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Path A */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-[#C9A84C]/30 p-8 flex flex-col"
          >
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4">
              Ya hiciste el Diagnóstico
            </p>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Ya tienes el mapa.
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
              El Diagnóstico te dijo dónde está tu empresa realmente.
              El siguiente paso es que trabajemos con esos datos cada mes:
              analizando lo que pasa, proyectando lo que viene y decidiendo contigo.
            </p>
            <a
              href={WA_POST_DIAGNOSTICO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-8 py-3 transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="" className="w-4 h-4 object-contain" />
              Contáctanos
            </a>
          </motion.div>

          {/* Path B */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 border border-white/10 p-8 flex flex-col"
          >
            <p className="text-white/40 text-xs font-bold tracking-widest uppercase mb-4">
              Aún no lo has hecho
            </p>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Empieza por saber dónde estás.
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
              El Diagnóstico de Claridad Financiera® analiza más de 40 indicadores de tu empresa
              y te los entrega en 48 horas con una sesión de 45 minutos con tu Director Financiero.
              Es el punto de partida correcto — y después decides si la Dirección Financiera Mensual® tiene sentido para ti.
            </p>
            <a
              href={DIAGNOSTICO_URL}
              className="inline-flex items-center gap-2 border border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-8 py-3 transition-colors"
            >
              Ver el Diagnóstico
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── FAQ ───
const faqs = [
  {
    q: "¿Necesito haber hecho el Diagnóstico antes de contratar la Dirección Financiera Mensual®?",
    a: "No es un requisito. Si ya conoces tu situación financiera con claridad, podemos empezar directamente. Si no, el Diagnóstico de Claridad Financiera® es el punto de partida recomendado: en 48 horas tienes la fotografía completa de tu empresa y sabes si es lo que necesitas.",
  },
  {
    q: "¿Qué pasa si ya tengo gestor o gestoría?",
    a: "Trabajan en paralelo, no en competencia. Tu gestor lleva la contabilidad fiscal y las declaraciones de impuestos. Nosotros llevamos la lectura financiera mensual, la proyección de caja y las decisiones que vienen de entender los números, no de registrarlos. Son funciones distintas. La mayoría de los clientes que trabajan con nosotros tienen gestoría activa.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicar al mes?",
    a: "Muy poco: aprobar tus pagos y avisarnos de los cambios relevantes — un cliente nuevo, un contrato que cambia. El resto — recoger los datos, analizarlos, preparar el dashboard y proyectar la caja — lo hacemos nosotros. No necesitas aprender ningún software, preparar informes ni interpretar nada.",
  },
  {
    q: "¿Hay permanencia mínima?",
    a: "No. El servicio es mes a mes desde el primer día. Si en algún momento no sientes que te aporta lo que debería, lo hablamos. No hay contrato que te ate.",
  },
  {
    q: "¿Tengo acceso a la plataforma de gestión?",
    a: "Hoy la plataforma L&C CFO® la operamos nosotros — es lo que nos permite analizar con rapidez y entregar resultados precisos. Tú recibes los outputs directamente: dashboard mensual, P&G, proyección de caja desde tus contratos (visible hasta 12 meses), aging de cobros y la lectura de tu Director Financiero. Recibes los resultados sin trabajo operativo de tu parte.",
  },
  {
    q: "¿Cómo son las primeras semanas?",
    a: "Las primeras semanas las dedicamos a la configuración inicial: estructura financiera de tu empresa, conexión de fuentes de datos (bancos, facturación), histórico si lo necesitamos. A partir del segundo mes el ciclo mensual funciona a plena capacidad.",
  },
  {
    q: "¿Para qué sectores trabajáis?",
    a: "Hostelería (bares, restaurantes, grupos de restauración), Servicios Profesionales (despachos, consultoras, gestorías), Empresas de Servicios (limpieza, mantenimiento, fumigación y similares) y Construcción (constructoras, reformas, arquitectura llave en mano). Son los sectores donde la dirección financiera mensual tiene mayor impacto directo en los resultados reales del negocio.",
  },
  {
    q: "¿Qué diferencia hay entre los planes Control, Dirección y Estrategia?",
    a: "Control cubre tesorería, cobros, pagos, inventarios y tu P&G mensual (Resultados Operativos). Dirección añade el módulo de Financiación y el Presupuesto Estratégico Anual®. Estrategia incluye además la previsión financiera con IA y el reporting ejecutivo, con el setup del Presupuesto Estratégico Anual® ya incluido. El Diagnóstico de Claridad Financiera® se bonifica al contratar cualquiera de los tres planes.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Preguntas frecuentes
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Todo lo que necesitas saber
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span
                  className="font-semibold text-[#0A0A0A] text-sm group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C9A84C] flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── CTA FINAL ───
function CTAFinalSection() {
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
            El momento
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Cada mes que pasa sin dirección financiera
            es un mes de decisiones que no puedes deshacer.
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Contratar, invertir, comprometerte con un pago — sin el número que lo justificaba.
            Eso ya pasó. La pregunta es si el mes que viene va a ser diferente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_S2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="" className="w-5 h-5 object-contain" />
              Contáctanos
            </a>
            <a
              href={DIAGNOSTICO_URL}
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-10 py-4 text-lg transition-colors"
            >
              Primero quiero hacer el Diagnóstico
              <ArrowRight className="w-5 h-5" />
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
                <a href={DIAGNOSTICO_URL} className="hover:text-white transition-colors">
                  Diagnóstico de Claridad Financiera®
                </a>
              </li>
              <li>
                <a href="/direccion-financiera-mensual" className="hover:text-white transition-colors">
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
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={WA_S2} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:legal@lycconsulting.com" className="hover:text-white transition-colors">
                  legal@lycconsulting.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a></li>
              <li><a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="/cookies" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="/condiciones" className="hover:text-white transition-colors">Condiciones Generales</a></li>
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
export default function S2Home() {
  useEffect(() => {
    document.title = "Dirección Financiera Mensual® | L&C CFO®";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <QueEsSection />
      <CicloSection />
      <EntregablesSection />
      <PlanesSection />
      <ParaQuienSection />
      <VsCFOSection />
      <PrimerPasoSection />
      <FAQSection />
      <CTAFinalSection />
      <Footer />
    </div>
  );
}
