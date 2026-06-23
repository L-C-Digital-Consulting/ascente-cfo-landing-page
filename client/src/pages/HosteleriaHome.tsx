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
  Zap,
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
    texto: "Antes de firmar el contrato de arrendamiento, calculamos si el nuevo local puede ser rentable con tu estructura de costes, qué ventas necesitas y cuánto tarda en cubrir la inversión.",
  },
  {
    Icon: Lightbulb,
    titulo: "Decisiones críticas antes de tomarlas",
    texto: "¿Subo los precios o bajo el food cost? ¿Contrato un cocinero fijo o trabajo con extras? ¿El delivery me está comiendo el margen? Analizamos cada decisión con datos.",
  },
  {
    Icon: Landmark,
    titulo: "Financiación y negociación bancaria",
    texto: "Si tienes un préstamo, una póliza o un leasing, controlamos cuánto te cuesta realmente y cuándo amortizar. Si necesitas financiación para una reforma o apertura, te acompañamos con el banco.",
  },
  {
    Icon: LineChart,
    titulo: "Resultados reales mes a mes",
    texto: "Cada mes cierras con el P&G real de tu negocio: cuánto ha generado cada local o canal, cuánto queda después de género y personal, y cómo evoluciona el margen.",
  },
  {
    Icon: Target,
    titulo: "Presupuesto por temporada",
    texto: "Qué ventas esperas en cada mes del año, qué costes tienes comprometidos y cuánto necesitas facturar para no depender de que el verano salga bien. El plan que la gestoría no te hace.",
  },
];

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/hero_bg-hCmBTqbzuN6tTGJpJsBUWU.webp";
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
            suerte. En hostelería, de cada 100 euros que vendes te quedan muy
            pocos: el margen real se evapora entre el género, los suministros, las
            comisiones de las plataformas y el personal. Te ayudamos a verlo cada
            mes y a decidir antes de que el saldo del banco te lo diga.
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
              El género se lleva entre el 25% y el 35% de lo que vendes: en un
              local de 100.000 euros al mes, son entre 25.000 y 35.000 euros solo
              en compras. Las plataformas de delivery se quedan hasta el 35% de cada
              pedido que entra por ellas, según la plataforma y la hora. La luz,
              el gas y el agua, otro 5% a 10%. Y encima, el personal y el alquiler,
              que pagas llene o no llene. Cuando sumas, el margen real cabe en muy
              pocos puntos. Si no lo miras cada mes, no sabes cuántos te quedan.
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
      partida: "Género y materia prima",
      cuanto: "25% a 35% de las ventas",
      nota: "La partida más grande. Un punto de más aquí se come tu beneficio del mes.",
    },
    {
      icon: Truck,
      partida: "Comisiones de plataformas",
      cuanto: "Hasta el 35% por pedido",
      nota: "Glovo, Uber Eats, Just Eat. Según la plataforma, hasta un tercio de cada pedido se queda por el camino.",
    },
    {
      icon: Zap,
      partida: "Suministros",
      cuanto: "5% a 10% de las ventas",
      nota: "Luz, gas y agua. En hostelería pesan mucho más que en cualquier oficina.",
    },
    {
      icon: Users,
      partida: "Personal",
      cuanto: "Nóminas y Seguridad Social",
      nota: "La otra gran partida. Fija, todos los meses, suba o baje la venta.",
    },
    {
      icon: Home,
      partida: "Alquiler del local",
      cuanto: "Fijo cada mes",
      nota: "Llene o no llene. En agosto flojo o en enero, el recibo es el mismo.",
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
          Estos porcentajes son el patrón del sector. Sobre tus ventas reales se
          traducen en miles de euros cada mes. Tu negocio tiene los suyos, y justo
          eso es lo que medimos contigo cada mes.
        </motion.p>
      </AnimatedSection>
    </section>
  );
}

// ─── LO QUE NO VES SIN CONTROL MENSUAL ───
function LoQueNoVesSection() {
  const puntos = [
    {
      icon: Eye,
      titulo: "Qué canal te deja margen y cuál no",
      texto:
        "La sala puede dejarte el doble que el delivery. Si no los separas, los tratas igual y pierdes en el que menos te conviene.",
    },
    {
      icon: Calendar,
      titulo: "El bache de enero y el agosto flojo",
      texto:
        "La caja de un mes fuerte tapa la de un mes débil, hasta que deja de taparla. Lo ves venir con meses de antelación o lo sufres de golpe.",
    },
    {
      icon: Wallet,
      titulo: "Si llegas a las nóminas del mes que viene",
      texto:
        "Antes de que toque pagarlas, no después de revisar el saldo con angustia. La proyección de caja a 12 meses te dice cuándo va a apretar, con tiempo suficiente para actuar.",
    },
    {
      icon: Truck,
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
        "Cruzamos lo que vendes con lo que te cuesta. La ingeniería de menú ordena tus platos según las unidades que vendes cada mes y el margen de cada uno: te dice cuáles son tus estrella, cuáles te llenan la mesa pero no la caja para subir de precio o reformular, y cuáles retirar de la carta.",
    },
    {
      icon: Boxes,
      titulo: "Tu inventario bajo control",
      texto:
        "Sabes qué tienes en almacén, cuánto vale y cuándo un producto baja de su stock mínimo, antes de quedarte sin género en pleno servicio. Cargas el inventario inicial y lo actualizas desde una hoja de Excel.",
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
            decide en la carta y en el almacén: un punto de food cost de más se come
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
          Un food cost por debajo del 30% suele ser sano; por encima del 35%, una
          señal de alerta. Te decimos en cuál estás, plato a plato.
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
              mensual, te decimos qué canal te está dejando margen, cómo va la
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
        "Tu restaurante factura pero a fin de mes no queda nada. Te ayudamos a controlar el género, las comisiones de delivery y la caja, mes a mes. Dirección financiera para hostelería.",
      canonical: "https://lccfo.es/direccion-financiera-hosteleria",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <SectorNavbar waLink={WA_HOSTELERIA} />
      <HeroSection />
      <ProblemaSection />
      <ExcelCajaSection
        tipoNegocio="negocio de hostelería"
        ejemploEspecifico="No sabe cuánto vas a vender la semana que viene ni si el agosto flojo va a comprometer la caja."
      />
      <DondeSeEscapaSection />
      <LoQueNoVesSection />
      <DFEExplicacionSection sectorParrafo="controla que tu coste de materia prima está donde debe estar, que cada canal de venta te deja margen real, y que la caja aguanta los meses de menos venta." />
      <EscandalloSection />
      <AdemasSection items={ADEMAS_ITEMS} />
      <ComoSection />
      <CTAFinalSection />
      <SectorFooter waLink={WA_HOSTELERIA} currentSector="hosteleria" />
    </div>
  );
}
