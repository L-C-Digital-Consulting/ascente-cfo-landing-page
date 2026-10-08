/*
 * L&C CFO® — Dirección financiera para hostelería
 * Landing sectorial (SEO): /direccion-financiera-hosteleria
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { setPageSEO } from "@/lib/utils";
import {
  ArrowRight,
  Utensils,
  Truck,
  Users,
  Home,
  Eye,
  Calendar,
  Wallet,
  ChefHat,
  BarChart3,
  Boxes,
  UserCheck,
  Lightbulb,
  Target,
  Landmark,
  LineChart,
  Store,
  Receipt,
  Compass,
  KeyRound,
  ClipboardCheck,
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
  AdemasSection,
  type AdemasItem,
} from "@/components/SectorLayout";

const ADEMAS_ITEMS: AdemasItem[] = [
  {
    Icon: UserCheck,
    titulo: "Coste real del personal",
    texto: "Cocineros, camareros, encargados. Lo desglosamos mes a mes para saber cuánto te cuesta cada euro de venta en personal y si la plantilla está bien dimensionada para cada temporada.",
  },
  {
    Icon: Store,
    titulo: "¿Me sale a cuenta abrir otro local?",
    texto: "Antes de firmar el contrato de arrendamiento, construimos el plan económico y financiero del nuevo local: qué ventas necesitas, cuántos cubiertos al día para no perder dinero y cuánto tardas en recuperar la inversión.",
  },
  {
    Icon: Lightbulb,
    titulo: "Decisiones críticas antes de tomarlas",
    texto: "¿Subo los precios o bajo el coste de la materia prima? ¿Contrato un cocinero fijo o trabajo con extras? ¿El delivery me está comiendo el margen? Analizamos cada decisión con datos.",
  },
  {
    Icon: Landmark,
    titulo: "Financiación y negociación bancaria",
    texto: "Si tienes un préstamo, una póliza o un leasing, controlamos cuánto te cuesta realmente y cuándo amortizar. Si necesitas financiación para una reforma o apertura, te acompañamos con el banco.",
  },
  {
    Icon: LineChart,
    titulo: "Resultados reales mes a mes",
    texto: "Cada mes cierras con el P&G real de tu negocio: cuánto ha generado cada local, cuánto queda después de género y personal, y cómo evoluciona el margen.",
  },
  {
    Icon: Target,
    titulo: "Presupuesto por temporada",
    texto: "Qué ventas esperas en cada mes del año, qué costes tienes comprometidos y cuánto necesitas facturar para no depender de que el verano salga bien. El plan que la gestoría no te hace.",
  },
];

const HERO_BG =
  "/img/hero-bg.webp";
const WA_HOSTELERIA =
  "https://wa.me/34635580883?text=Hola%2C%20tengo%20un%20negocio%20de%20hosteler%C3%ADa%20y%20me%20interesa%20la%20direcci%C3%B3n%20financiera%20de%20L%26C%20CFO%C2%AE.";

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
            L&C CFO® · Dirección financiera para hostelería
          </p>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tu restaurante factura,
            <br />
            pero a fin de mes no queda nada.
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl">
            Llenas mesas, el ticket sale, y aun así vas justo de caja. No es mala
            suerte. En un restaurante bien llevado, de cada 100 € que vendes quedan
            unos 15 € de resultado operativo. Si el género, el personal o el
            alquiler se pasan unos puntos, esos 15 € desaparecen. Te ayudamos a
            verlo cada mes y a decidir antes de que el saldo del banco te lo diga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WA_HOSTELERIA}
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
            Tener lleno el local no es ganar dinero.
          </h2>
          <div className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed space-y-5 text-pretty">
            <p>
              Puedes tener el local a tope un viernes y cerrar el mes sin caja. El
              problema no es la venta. Es lo que se queda por el camino antes de
              llegar a tu bolsillo.
            </p>
            <p>
              Las referencias del sector lo dejan claro: la materia prima se lleva
              en torno al 30 % de lo que vendes; el personal, en torno al 33 %; el
              alquiler, no más del 5 %; y el resto de gastos generales (suministros,
              limpieza, mantenimiento, seguros, comisiones del datáfono), en torno al
              17 %. Lo que queda, unos 15 puntos, es tu resultado operativo. En un
              local que vende 100.000 € al mes, cada punto de más en género o en
              personal son 1.000 € menos cada mes. Si no lo miras cada mes, no sabes
              cuántos puntos te quedan.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}

// ─── DÓNDE SE TE ESCAPA EL DINERO ───
function DondeSeEscapaSection() {
  const partidas = [
    {
      icon: Utensils,
      partida: "Materia prima",
      cuanto: "En torno al 30 % de las ventas",
      nota: "La partida más grande. La referencia es un 25 % en comida y un 40 % en bebida, cada una sobre su propia venta. Un punto de más aquí se come tu beneficio del mes.",
    },
    {
      icon: Users,
      partida: "Personal",
      cuanto: "En torno al 33 % de las ventas",
      nota: "La otra gran partida. Fija, todos los meses, suba o baje la venta.",
    },
    {
      icon: Home,
      partida: "Alquiler del local",
      cuanto: "No más del 5 % de las ventas",
      nota: "Llene o no llene. En agosto flojo o en enero, el recibo es el mismo.",
    },
    {
      icon: Receipt,
      partida: "Gastos generales",
      cuanto: "En torno al 17 % de las ventas",
      nota: "Luz, gas y agua, limpieza, mantenimiento, seguros, comisiones del datáfono. Muchas partidas pequeñas que, sumadas, pesan como una grande.",
    },
    {
      icon: LineChart,
      partida: "Lo que queda",
      cuanto: "En torno al 15 % de las ventas",
      nota: "El resultado operativo de un restaurante bien llevado. Si las partidas de arriba se pasan, aquí no queda nada.",
    },
  ];

  return (
    <section id="donde" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Dónde se te escapa el dinero
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Las partidas que se comen tu margen
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
          Son referencias del sector para un restaurante en marcha. Sobre tus
          ventas reales se traducen en miles de euros cada mes. Tu negocio tiene
          sus propios números, y justo eso es lo que medimos contigo cada mes.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── LO QUE NO VES SIN CONTROL MENSUAL ───
function LoQueNoVesSection() {
  const puntos = [
    {
      icon: Truck,
      titulo: "Lo que te cuesta el delivery",
      texto:
        "La comisión de la plataforma sale de tu margen, no de tu venta. Un pedido que parece bueno puede dejarte muy poco: lo analizamos para que decidas con datos si te compensa.",
    },
    {
      icon: Calendar,
      titulo: "Los meses flojos entre temporadas",
      texto:
        "La caja de un mes fuerte tapa la de un mes débil, hasta que deja de taparla. Enero y los valles entre temporadas siempre llegan — la diferencia es verlos venir con meses de antelación o sufrirlos de golpe.",
    },
    {
      icon: Wallet,
      titulo: "Si llegas a las nóminas del mes que viene",
      texto:
        "Antes de que toque pagarlas, no después de revisar el saldo con angustia. La proyección de caja a 12 meses te dice cuándo va a apretar, con tiempo suficiente para actuar.",
    },
    {
      icon: Eye,
      titulo: "El efectivo que no controlas",
      texto:
        "Lo que entra en caja y no llega al banco no aparece en ningún sitio. Lo ordenamos para que tu dinero deje de ser invisible.",
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
            Lo que tu cuenta del banco no te cuenta a tiempo
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

// ─── ESCANDALLO E INVENTARIO ───
function EscandalloSection() {
  const bloques = [
    {
      icon: ChefHat,
      titulo: "El coste real de cada plato",
      texto:
        "Calculamos el escandallo de tu carta: cuánto te cuesta la materia prima de cada plato sobre lo que cobras por él, con sub-recetas y mermas incluidas. Te decimos qué platos están en verde, cuáles en ámbar y cuáles en rojo, y a qué precio deberías venderlos para llegar a tu margen.",
    },
    {
      icon: BarChart3,
      titulo: "Qué platos te hacen ganar y cuáles no",
      texto:
        "Cruzamos lo que vendes con lo que te cuesta. La ingeniería de menú ordena tus platos según las unidades que vendes cada mes y el margen de cada uno: te dice cuáles son tus platos estrella, cuáles te llenan la mesa pero no la caja para subir de precio o reformular, y cuáles retirar de la carta.",
    },
    {
      icon: Boxes,
      titulo: "Tu inventario bajo control",
      texto:
        "Sabes qué tienes en almacén, cuánto vale y cuándo un producto baja de su stock mínimo, antes de quedarte sin género en pleno servicio. Cargamos tu inventario inicial y lo mantenemos al día contigo.",
    },
  ];

  return (
    <section id="escandallo" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            El control que cambia tu margen
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            En hostelería se gana o se pierde plato a plato.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            Controlar la caja es el primer paso. Pero en un restaurante el margen se
            decide en la carta y en el almacén: un punto de más en el coste de la materia prima se come
            tu beneficio del mes. Por eso, además de tu tesorería, llevamos el coste
            de tus platos y tu inventario.
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
          La referencia del sector es un coste del 25 % en comida y del 40 % en
          bebida sobre su precio de venta. Hasta ahí, el plato está en verde; hasta
          cinco puntos más, en ámbar; por encima, en rojo. Te decimos en cuál está
          cada plato.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── METODOLOGÍA L&C CFO® RESTAURACIÓN ───
function MetodologiaSection() {
  const etapas = [
    {
      icon: Compass,
      etapa: "Antes de abrir",
      pregunta: "¿Es viable o es una ilusión?",
      texto:
        "Construimos tu plan económico y financiero. Primero el aforo, los días de apertura, la rotación y el ticket medio; después, las ventas en dos escenarios, el conservador y el optimista, y los costes partida a partida. El punto de equilibrio sale traducido a cubiertos por día: sabes cuánto tienes que vender para no perder dinero antes de firmar el alquiler.",
    },
    {
      icon: KeyRound,
      etapa: "Al abrir",
      pregunta: "¿Cómo paso del papel a la realidad?",
      texto:
        "El plan se convierte en tu sistema de control. Cargamos tus contratos, nóminas, préstamos y proveedores, escandallamos tu carta y hacemos el inventario inicial. Desde el primer mes, tus números reales se comparan con lo que planificaste.",
    },
    {
      icon: ClipboardCheck,
      etapa: "Después de abrir",
      pregunta: "¿Voy como dije que iría?",
      texto:
        "Cada mes, el plan contra la realidad: cierre del mes, proyección de caja a 12 meses, coste de tus platos y de tu personal, y un informe que puedes enseñar a tus socios. Y cuando toca, el presupuesto del año, la rentabilidad de cada local y una auditoría interna de tus controles.",
    },
  ];

  return (
    <section id="metodologia" className="bg-[#FAF8F4] py-20 lg:py-28">
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase mb-3">
            Metodología L&C CFO® Restauración
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] mb-6 text-balance"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tener un plan no es tener el control.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed text-pretty">
            Un restaurante se dirige igual desde antes de abrir hasta años después:
            con un plan, con los números reales de cada mes contra ese plan y con
            alguien que te diga dónde te estás desviando. Nuestra metodología para
            restauración une las referencias del sector, nuestra experiencia en
            restauración y nuestra plataforma, en tres etapas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {etapas.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white border border-gray-200 border-t-4 border-t-[#C9A84C] p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 flex-shrink-0 bg-[#0A0A0A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C9A84C]" />
                  </div>
                  <p className="text-[#C9A84C] font-semibold text-sm tracking-widest uppercase">
                    {i + 1} · {e.etapa}
                  </p>
                </div>
                <h3
                  className="font-bold text-[#0A0A0A] mb-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {e.pregunta}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{e.texto}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          variants={fadeUp}
          className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto"
        >
          Si tu restaurante ya está abierto, empezamos por la tercera etapa, y
          podemos arrancar con una auditoría interna de tus controles antes de
          empezar. Si estás pensando en abrir otro local, por la primera.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── CÓMO LO LLEVAMOS NOSOTROS ───
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
            La dirección financiera de tu negocio, llevada por nosotros.
          </h2>
          <div className="text-white/70 text-lg leading-relaxed space-y-5 text-pretty max-w-3xl mx-auto">
            <p>
              Cada mes recogemos tus ventas (TPV, plataformas de delivery y caja),
              tus pagos a proveedores y tus gastos. Los analizamos y, en tu sesión
              mensual, te decimos cómo vas contra tu plan, cómo va la
              proyección de caja a 12 meses y qué decisión tienes encima. Sin que toques una
              hoja de cálculo y sin aprender ningún programa.
            </p>
            <p className="text-white">
              Es la Dirección Financiera Mensual® de L&C CFO® aplicada a la
              hostelería: bares, restaurantes, cafeterías, grupos de restauración y
              empresas de catering, tengan uno o varios locales. Sin contratar a
              nadie en la empresa y sin permanencia.
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
          Sabes lo que vendes.
          <br />
          La pregunta es cuánto te queda.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          En 48 horas puedes tener una radiografía financiera de tu negocio, con una
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
            href={WA_HOSTELERIA}
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
export default function HosteleriaHome() {
  useEffect(() => {
    setPageSEO({
      title:
        "Dirección financiera para hostelería: por qué tu restaurante factura y no gana | L&C CFO®",
      description:
        "Tu restaurante factura pero a fin de mes no queda nada. Te ayudamos a controlar el género, el personal y la caja, mes a mes, con la Metodología L&C CFO® Restauración. Dirección financiera para hostelería.",
      canonical: "https://lccfo.es/direccion-financiera-hosteleria",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <SectorNavbar waLink={WA_HOSTELERIA} />
      <HeroSection />
      <ProblemaSection />
      <ExcelCajaSection
        tipoNegocio="restaurante"
        ejemploEspecifico="No sabe cuánto vas a vender la semana que viene ni si el agosto flojo va a comprometer la caja."
      />
      <DondeSeEscapaSection />
      <LoQueNoVesSection />
      <MetodologiaSection />
      <DFEExplicacionSection sectorParrafo="controla que tu coste de materia prima está donde debe estar, que tu plantilla está dimensionada para lo que vendes, y que la caja aguanta los meses de menos venta." />
      <EscandalloSection />
      <AdemasSection items={ADEMAS_ITEMS} />
      <ComoSection />
      <CTAFinalSection />
      <SectorFooter waLink={WA_HOSTELERIA} currentSector="hosteleria" />
    </div>
  );
}
