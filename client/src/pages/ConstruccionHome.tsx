/*
 * L&C CFO® — Dirección financiera para construcción
 * Landing sectorial (SEO): /direccion-financiera-construccion
 * Dark: #0A0A0A · Accent: #C9A84C · Light: #FAF8F4
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { setPageSEO } from "@/lib/utils";
import {
  ArrowRight,
  Package,
  Users,
  Truck,
  HardHat,
  FileText,
  BarChart3,
  Calendar,
  Wallet,
  ClipboardList,
  TrendingUp,
  CheckSquare,
  Wrench,
} from "lucide-react";
import {
  SectorNavbar,
  SectorFooter,
  AnimatedSection,
  fadeUp,
  WHATSAPP_LOGO,
  DIAGNOSTICO_URL,
  S2_URL,
  DFEExplicacionSection,
  ExcelCajaSection,
} from "@/components/SectorLayout";

const WA_CONSTRUCCION =
  "https://wa.me/34635580883?text=Hola%2C%20tengo%20una%20empresa%20de%20construcci%C3%B3n%20y%20me%20interesa%20la%20direcci%C3%B3n%20financiera%20de%20L%26C%20CFO%C2%AE.";

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
            L&C CFO® · Dirección financiera para construcción
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Ejecutas la obra desde el primer día.
            <br />
            Cobras al final. Entre medias,
            <br className="hidden sm:block" />
            la caja decide todo.
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl">
            En una empresa de construcción los costes llegan antes que los ingresos.
            Materiales al inicio, subcontratas durante la obra, nóminas cada mes.
            Las certificaciones y los cobros finales tardan entre 30 y 90 días, y la
            retención de garantía puede quedarse pendiente hasta un año después de
            entregar la obra. Si no controlas la caja de cada proyecto mes a mes,
            no sabes cuánto ganas por obra hasta que ya es tarde para actuar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_CONSTRUCCION}
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
            Tienes proyectos llenos de trabajo y la caja siempre justa.
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed space-y-5 text-pretty">
            <p>
              Una constructora puede facturar bien y tener la tesorería en tensión
              permanente. No es una contradicción: es la estructura del sector. Gastas
              desde el primer día de obra, certificas cada mes o al finalizar, cobras
              después de 30, 60 o hasta 90 días, y la retención de garantía puede
              quedarse en manos del cliente hasta un año después de entregar la obra.
            </p>
            <p>
              En ese intervalo, tus costes siguen. Las nóminas, la Seguridad Social,
              los materiales del siguiente proyecto, el leasing de la maquinaria. Sin
              un control mensual por proyecto, acumulas movimientos sin saber qué
              obra tiene margen y cuál está drenando caja.
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
      icon: Package,
      partida: "Materiales de construcción",
      cuanto: "La partida de coste directo más grande",
      nota: "Cemento, hierro, carpintería, instalaciones. Cada obra tiene su estructura de materiales, y un mal control de compras se convierte directamente en pérdida.",
    },
    {
      icon: Users,
      partida: "Subcontratistas",
      cuanto: "Electricistas, fontaneros, pintores, yeseros",
      nota: "Los pagas cuando terminan su trabajo, independientemente de si has cobrado ya la certificación al cliente.",
    },
    {
      icon: Truck,
      partida: "Alquiler de maquinaria",
      cuanto: "Andamios, grúas, retroexcavadoras",
      nota: "Cada semana de retraso en la obra es una semana más de alquiler. El coste sigue aunque la obra esté parada.",
    },
    {
      icon: HardHat,
      partida: "Personal propio",
      cuanto: "Nóminas y Seguridad Social",
      nota: "Técnicos y operarios en plantilla. El coste es fijo todos los meses, aunque las certificaciones lleguen tarde.",
    },
    {
      icon: FileText,
      partida: "Visados y licencias",
      cuanto: "Antes de que entre el primer euro",
      nota: "Licencias municipales, visados colegiales, seguros de obra obligatorios. Costes fijos que hay que pagar antes de ejecutar.",
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
            Las partidas que se comen el margen antes de que cobres
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
          Cada proyecto tiene su estructura de costes. El margen real de tu empresa
          es la diferencia entre lo que cobras por cada obra y lo que te ha costado
          ejecutarla. Eso es lo que medimos contigo cada mes.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── LO QUE NO VES SIN CONTROL MENSUAL ───
function LoQueNoVesSection() {
  const puntos = [
    {
      icon: BarChart3,
      titulo: "Qué proyecto tiene margen y cuál no",
      texto:
        "Si llevas varias obras activas, el saldo del banco consolida todo. Sin separar los costes por proyecto, una obra rentable puede estar tapando otra que está drenando caja.",
    },
    {
      icon: Calendar,
      titulo: "Cuándo aprieta la caja antes de la siguiente certificación",
      texto:
        "El intervalo entre lo que has pagado y lo que aún no has cobrado puede volverse muy estrecho. Lo ves venir con semanas de antelación o te alcanza de golpe.",
    },
    {
      icon: Wallet,
      titulo: "Si llegas a las nóminas en un mes sin cobros de obra",
      texto:
        "Los meses en que no llega ninguna certificación siguen teniendo costes fijos. La proyección de caja te dice si llegas o si necesitas mover algo antes.",
    },
    {
      icon: ClipboardList,
      titulo: "Subcontratas y proveedores acumulados sin autorizar",
      texto:
        "Facturas de materiales, pagos a subcontratistas que acaban de terminar su parte, alquileres de maquinaria. Sin control de órdenes de pago, el acumulado aparece de golpe.",
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
            Lo que tu extracto bancario no te dice hasta que ya es tarde
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

// ─── CONTROL POR PROYECTO ───
function ControlProyectoSection() {
  const bloques = [
    {
      icon: TrendingUp,
      titulo: "Rentabilidad por proyecto",
      texto:
        "Cada obra como un Centro de Beneficio independiente: sus ingresos y sus costes separados del resto. Al cierre de cada mes sabes cuánto ha ganado cada proyecto, no solo cuánto ha facturado la empresa.",
    },
    {
      icon: CheckSquare,
      titulo: "Control de pagos a subcontratas y proveedores",
      texto:
        "Cada pago a un subcontratista o proveedor pasa por una orden de pago: la creamos, la autorizamos y la conciliamos cuando sale del banco. No se paga nada sin trazabilidad, y el histórico de cada proveedor queda registrado.",
    },
    {
      icon: Wrench,
      titulo: "Maquinaria propia y financiada",
      texto:
        "Si tienes maquinaria propia, la controlamos como activo fijo con amortización según el PGC. Si la tienes en leasing o renting, gestionamos las cuotas como crédito. Sabes cuánto te cuesta cada máquina al año.",
    },
  ];

  return (
    <section id="proyectos" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            El control que cambia tu margen
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            En construcción se gana o se pierde proyecto a proyecto.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            Controlar la caja de la empresa es el primer paso. Pero en una
            constructora el margen se decide en cada obra: un mal control de
            materiales o un subcontratista que se sale del presupuesto se convierte
            en pérdida por proyecto. Por eso, además de la tesorería, llevamos la
            rentabilidad y los pagos proyecto a proyecto.
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
          Las obras de larga duración, las certificaciones y las retenciones de
          garantía tienen sus propios patrones de caja. Te ayudamos a leerlos mes a mes.
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
            La dirección financiera de tu empresa constructora, llevada por nosotros.
          </h2>
          <div className="text-white/70 text-lg leading-relaxed space-y-5 text-pretty max-w-3xl mx-auto">
            <p>
              Cada mes recogemos los extractos bancarios de todas tus cuentas, los
              movimientos de obras y los pagos a subcontratas y proveedores. Los
              analizamos por proyecto y, en tu sesión mensual, te decimos qué obra
              tiene margen, cómo está la caja para los próximos meses y qué decisión
              tienes encima. Sin que pases horas revisando hojas de cálculo.
            </p>
            <p className="text-white">
              Es la Dirección Financiera Mensual® de L&C CFO® aplicada a la
              construcción: empresas de reformas, constructoras con varias obras
              activas y arquitectura llave en mano. Sin contratar a nadie en la
              empresa y sin permanencia.
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
          En construcción, la caja manda.
          <br />
          La pregunta es si la tienes bajo control.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          En 48 horas puedes tener una radiografía financiera de tu empresa, con una
          sesión de 45 minutos para entenderla. A partir de ahí decides si quieres
          que la llevemos contigo cada mes.
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
            href={WA_CONSTRUCCION}
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
export default function ConstruccionHome() {
  useEffect(() => {
    setPageSEO({
      title:
        "Dirección financiera para constructoras y empresas de reformas | L&C CFO®",
      description:
        "Ejecutas la obra desde el primer día pero cobras al final. Te ayudamos a controlar la caja por proyecto, las subcontratas y los materiales, mes a mes.",
      canonical: "https://lccfo.es/direccion-financiera-construccion",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <SectorNavbar waLink={WA_CONSTRUCCION} />
      <HeroSection />
      <ProblemaSection />
      <ExcelCajaSection
        tipoNegocio="constructora"
        ejemploEspecifico="No sabe cuándo vence el pago a la subcontrata ni cuándo llega la siguiente certificación."
      />
      <DondeSeEscapaSection />
      <LoQueNoVesSection />
      <DFEExplicacionSection sectorParrafo="controla que cada obra genera el margen esperado, que los pagos a subcontratas y proveedores están autorizados antes de salir del banco, y que la caja aguanta hasta la siguiente certificación." />
      <ControlProyectoSection />
      <ComoSection />
      <CTAFinalSection />
      <SectorFooter waLink={WA_CONSTRUCCION} currentSector="construccion" />
    </div>
  );
}
