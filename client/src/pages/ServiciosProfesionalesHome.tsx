/*
 * L&C CFO® — Dirección financiera para servicios profesionales
 * Landing sectorial (SEO): /direccion-financiera-servicios-profesionales
 * Dark: #0A0A0A · Accent: #C9A84C · Light: #FAF8F4
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { setPageSEO } from "@/lib/utils";
import {
  ArrowRight,
  Users,
  Monitor,
  Award,
  Building2,
  Shield,
  BarChart3,
  Calendar,
  Clock,
  TrendingUp,
  FileText,
  CheckSquare,
} from "lucide-react";
import {
  SectorNavbar,
  SectorFooter,
  AnimatedSection,
  fadeUp,
  WHATSAPP_LOGO,
  DIAGNOSTICO_URL,
  S2_URL,
} from "@/components/SectorLayout";

const WA_SERVICIOS =
  "https://wa.me/34635580883?text=Hola%2C%20tengo%20un%20despacho%20profesional%20y%20me%20interesa%20la%20direcci%C3%B3n%20financiera%20de%20L%26C%20CFO%C2%AE.";

// ─── HERO ───
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0A0A0A] to-[#0A0A0A]" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9A84C]" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C9A84C] font-bold text-base tracking-widest uppercase mb-6 border-l-4 border-[#C9A84C] pl-4">
            L&C CFO® · Dirección financiera para despachos y gestorías
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Llevas las finanzas de tus clientes
            <br />
            al día. Las tuyas propias
            <br className="hidden sm:block" />
            llevan meses esperando.
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl">
            Tienes clientes de cuota mensual, campañas estacionales de renta e
            impuesto de sociedades, y técnicos cuyo coste real no siempre
            cuadra con lo que facturan. El margen de tu despacho —qué clientes
            son rentables, qué cobros llevan semanas sin llegar, cómo queda la
            caja en verano— se gestiona a ojo o no se gestiona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_SERVICIOS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
            >
              <img src={WHATSAPP_LOGO} alt="" className="w-5 h-5 object-contain" />
              Hablar con nosotros
            </a>
            <a
              href="#problema"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-10 py-4 text-lg transition-colors"
            >
              Por qué pasa esto
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── EL PROBLEMA ───
function ProblemaSection() {
  return (
    <section id="problema" className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            El problema del sector
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Cuota mensual fija no significa igual rentabilidad para todos tus clientes.
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed space-y-5 text-pretty">
            <p>
              Un despacho con 40 clientes de cuota parece una máquina de
              ingresos recurrentes. Lo es en apariencia. Pero algunos de esos
              clientes consumen el doble de horas que otros al mismo precio,
              las declaraciones estacionales apilan trabajo en abril y julio sin
              que los ingresos suban en la misma proporción, y los cobros de
              clientes que pagan tarde se acumulan sin que nadie los reclame
              de forma sistemática.
            </p>
            <p>
              El resultado: la facturación crece, los gastos de personal
              también, y el margen real del despacho —lo que queda después de
              pagar todo— es opaco. Sin separar los ingresos por tipo de
              servicio y controlar los cobros pendientes, no puedes saber si
              tu despacho está creciendo de forma rentable o solo creciendo.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── DÓNDE SE VA EL DINERO ───
function DondeSeEscapaSection() {
  const partidas = [
    {
      icon: Users,
      partida: "Personal técnico y administrativo",
      cuanto: "La partida de gasto más grande",
      nota: "Técnicos que llevan expedientes, administrativos de soporte. El coste de personal sube con cada incorporación, pero no siempre lo hace el margen de cada servicio.",
    },
    {
      icon: Monitor,
      partida: "Software profesional",
      cuanto: "A3, Sage, Holded, Wolters Kluwer, Lex-on",
      nota: "Licencias por usuario con renovación anual. Cada nueva herramienta suma una cuota fija. Sin control, el gasto en software crece cada año sin que se revise si realmente se usa.",
    },
    {
      icon: Award,
      partida: "Cuotas colegiales",
      cuanto: "Economistas, abogados, graduados sociales",
      nota: "Pagos anuales obligatorios para el ejercicio de la profesión. Pasan a final de año y, si no están provisionados, compiten con la tesorería del despacho.",
    },
    {
      icon: Building2,
      partida: "Alquiler de oficina",
      cuanto: "Coste fijo mensual + retención IRPF trimestral",
      nota: "El alquiler no varía aunque tengas un mes con menos trabajo. La retención del 19% que se ingresa en AEAT cada trimestre (Mod. 115) es una salida adicional que hay que planificar.",
    },
    {
      icon: Shield,
      partida: "Seguro de responsabilidad civil profesional",
      cuanto: "Obligatorio en la mayoría de despachos",
      nota: "Prima anual que se paga en un único vencimiento. Si no está en el calendario de caja, puede coincidir con otros vencimientos y generar tensión puntual.",
    },
  ];

  return (
    <section id="donde" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Dónde se va el dinero
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Los gastos que comprimen el margen antes de que los veas
          </h2>
        </motion.div>

        <div className="space-y-4">
          {partidas.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex items-center gap-4 sm:w-1/2">
                  <div className="w-11 h-11 flex-shrink-0 bg-[#0A0A0A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0A0A0A]">{p.partida}</p>
                    <p className="text-[#C9A84C] font-semibold text-sm">{p.cuanto}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed sm:w-1/2">{p.nota}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto"
        >
          Cada despacho tiene su estructura de costes. El margen real es la
          diferencia entre lo que cobras y lo que te cuesta operar. Eso es
          lo que medimos contigo cada mes.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── LO QUE NO VES ───
function LoQueNoVesSection() {
  const puntos = [
    {
      icon: BarChart3,
      titulo: "Qué clientes generan margen y cuáles llevas al coste",
      texto:
        "Un cliente de cuota baja que llama dos veces por semana, otro que paga más y apenas da trabajo. Sin separar los ingresos por cliente y tipo de servicio, el resultado del despacho suma todo sin distinguir.",
    },
    {
      icon: Calendar,
      titulo: "Cómo queda la caja entre campaña y campaña",
      texto:
        "Enero-febrero, abril-mayo, julio y diciembre son picos de trabajo e ingresos. Entre medias, los ingresos bajan y los costes fijos siguen. La proyección de caja te dice con antelación si el verano va a ser estrecho.",
    },
    {
      icon: Clock,
      titulo: "Facturas pendientes que llevan semanas sin cobrar",
      texto:
        "Un cliente que paga tarde cada mes, una factura puntual que quedó olvidada. Sin un aging actualizado, el cobro se reclama cuando el problema lleva semanas acumulado.",
    },
    {
      icon: Users,
      titulo: "El coste real de cada empleado frente a lo que genera",
      texto:
        "Nómina, Seguridad Social y formación por empleado. Si no cruzas el coste de cada técnico con los servicios que lleva, no puedes decidir si contratar tiene sentido o si el problema es de precio.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Lo que no ves sin control mensual
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lo que tu facturación recurrente oculta mes a mes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {puntos.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#FAF8F4] border border-gray-200 p-6"
              >
                <div className="w-11 h-11 bg-[#0A0A0A] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3
                  className="font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.texto}</p>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}

// ─── CONTROL DEL DESPACHO ───
function ControlNegocioSection() {
  const bloques = [
    {
      icon: TrendingUp,
      titulo: "Rentabilidad por línea de servicio",
      texto:
        "Separamos los ingresos por tipo de servicio —fiscal, contable, laboral, jurídico— y los cruzamos con los costes de cada línea. Al cierre de cada mes sabes cuál aporta margen y cuál estás manteniendo por inercia.",
    },
    {
      icon: FileText,
      titulo: "Facturas emitidas y aging de cobros",
      texto:
        "Cada factura con su estado real: emitida, parcialmente cobrada o cobrada. El aging te muestra qué clientes superan los 30, 60 o 90 días y a cuáles hay que reclamar esta semana.",
    },
    {
      icon: CheckSquare,
      titulo: "Control de pagos a proveedores",
      texto:
        "Cada pago a proveedor pasa por una orden de pago: la creamos, la autorizamos y la conciliamos cuando sale del banco. Sin trazabilidad no se paga nada, y el histórico de cada proveedor queda registrado.",
    },
  ];

  return (
    <section id="control" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            El control que cambia tu margen
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            En un despacho el margen se decide cliente a cliente y servicio a servicio.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            Controlar la caja del despacho es el primer paso. Pero en servicios
            profesionales el margen real depende de cuánto cobra cada línea y
            cuánto le cuesta operar. Por eso, además de la tesorería, llevamos
            la rentabilidad por servicio, el aging de cobros y el control de
            pagos cada mes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {bloques.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white border border-gray-200 p-6"
              >
                <div className="w-11 h-11 bg-[#0A0A0A] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3
                  className="font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {b.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.texto}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto"
        >
          Los despachos tienen picos estacionales, cobros con retención IRPF
          y clientes que pagan tarde. Te ayudamos a leer estos patrones mes a mes
          y a actuar antes de que el problema llegue a la caja.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── CÓMO LO LLEVAMOS ───
function ComoSection() {
  return (
    <section id="como" className="bg-[#0A0A0A] py-20 lg:py-28">
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-10">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Cómo te ayudamos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            La dirección financiera de tu despacho, llevada por nosotros.
          </h2>
          <div className="text-white/70 text-lg leading-relaxed space-y-5 text-pretty max-w-3xl mx-auto">
            <p>
              Cada mes recogemos los extractos bancarios de todas tus cuentas,
              las facturas emitidas y los pagos a proveedores. Los analizamos
              por tipo de servicio y, en tu sesión mensual, te decimos qué
              línea tiene margen, qué cobros están pendientes y cómo queda la
              caja para los próximos meses. Sin que pases horas mirando hojas
              de cálculo.
            </p>
            <p className="text-white">
              Es la Dirección Financiera Mensual® de L&C CFO® aplicada a
              despachos contables, fiscales, laborales, jurídicos y gestorías.
              Sin contratar a nadie en el despacho y sin permanencia.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={S2_URL}
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-8 py-4 text-base transition-colors"
          >
            Ver la Dirección Financiera Mensual®
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={DIAGNOSTICO_URL}
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 text-base transition-colors"
          >
            Empezar por el Diagnóstico
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── CTA FINAL ───
function CTAFinalSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4 text-balance"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          ¿Sabes qué margen tiene cada línea de tu despacho?
          <br />
          La respuesta debería ser sí.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          En 48 horas puedes tener una radiografía financiera de tu despacho,
          con una sesión de 45 minutos para entenderla. A partir de ahí decides
          si quieres que la llevemos contigo cada mes.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={DIAGNOSTICO_URL}
            className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#B8943B] text-[#0A0A0A] font-semibold px-10 py-4 text-lg transition-colors"
          >
            Solicitar el Diagnóstico
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={WA_SERVICIOS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[#0A0A0A]/20 hover:border-[#0A0A0A]/50 text-[#0A0A0A] px-10 py-4 text-lg transition-colors"
          >
            <img src={WHATSAPP_LOGO} alt="" className="w-5 h-5 object-contain" />
            Hablar con nosotros
          </a>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── MAIN PAGE ───
export default function ServiciosProfesionalesHome() {
  useEffect(() => {
    setPageSEO({
      title:
        "Dirección financiera para despachos y gestorías | L&C CFO®",
      description:
        "Llevas las finanzas de tus clientes al día pero no sabes qué margen tiene cada línea de tu despacho. Te ayudamos a controlar cobros, rentabilidad por servicio y caja, mes a mes.",
      canonical:
        "https://lccfo.es/direccion-financiera-servicios-profesionales",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <SectorNavbar waLink={WA_SERVICIOS} />
      <HeroSection />
      <ProblemaSection />
      <DondeSeEscapaSection />
      <LoQueNoVesSection />
      <ControlNegocioSection />
      <ComoSection />
      <CTAFinalSection />
      <SectorFooter waLink={WA_SERVICIOS} currentSector="servicios-profesionales" />
    </div>
  );
}
