import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";


export default function AvisoLegal() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aviso Legal — L&C CFO®";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-[#0A0A0A] py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src="/logo-lc-negro.png" alt="L&C CFO®" className="h-10 w-auto mix-blend-screen" />
          <Link href="/">
            <a className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <ArrowLeft size={16} />
              Volver
            </a>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#C9A84C] mb-2">Aviso Legal</h1>
        <p className="text-sm text-gray-500 mb-10">
          L&C Digital &amp; Consulting, S.L. · Última actualización: mayo de 2026
        </p>

        {/* 1. Datos identificativos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            1. Datos identificativos del titular
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
            Sociedad de la Información y del Comercio Electrónico (LSSICE), se facilitan a
            continuación los datos identificativos del titular de este sitio web:
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Denominación social", "L&C Digital & Consulting, S.L."],
                  ["NIF", "B22652069"],
                  ["Domicilio social", "Calle del Poeta Joan Maragall 23, 28020, Madrid"],
                  ["Correo electrónico", "legal@lycconsulting.com"],
                  ["Actividad principal", "Servicios de consultoría, análisis empresarial y herramientas digitales"],
                  ["Inscripción registral", "Inscrita en el Registro Mercantil de Madrid, Hoja M-859195, Inscripción 1ª"],
                  ["EUID", "ES28065.082379878"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-700 w-2/5">{label}</td>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Objeto */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            2. Objeto y ámbito de aplicación
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El presente Aviso Legal regula el acceso y uso del sitio web titularidad de L&amp;C
            Digital &amp; Consulting, S.L. (en adelante, «el Titular» o «el Prestador»). El acceso al
            sitio web implica la aceptación plena y sin reservas de todas las condiciones incluidas en
            este Aviso Legal en la versión publicada en el momento del acceso. El Titular se reserva
            el derecho a modificar en cualquier momento las condiciones aquí establecidas.
          </p>
          <p className="text-sm text-gray-600">
            El sitio web puede utilizarse para conocer los servicios ofrecidos bajo las marcas
            comerciales del Titular, solicitar información y acceder al proceso de contratación
            electrónica de dichos servicios.
          </p>
        </section>

        {/* 3. Propiedad intelectual */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            3. Propiedad intelectual e industrial
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Todos los contenidos del sitio web —incluyendo, sin limitación, textos, fotografías,
            gráficos, imágenes, iconos, tecnología, software, diseños, logotipos y nombres
            comerciales— son titularidad del Titular o de terceros que han autorizado su uso, y están
            protegidos por la legislación española e internacional sobre propiedad intelectual e
            industrial.
          </p>
          <p className="text-sm text-gray-600">
            Queda expresamente prohibida la reproducción, distribución, comunicación pública,
            transformación o cualquier otra forma de explotación de los contenidos sin autorización
            escrita previa del Titular. El incumplimiento dará lugar a las responsabilidades
            legalmente establecidas.
          </p>
        </section>

        {/* 4. Condiciones de uso */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            4. Condiciones de uso del sitio web
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El usuario se compromete a hacer un uso adecuado del sitio web y, en particular, a:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "No utilizar el sitio web con fines ilícitos o contrarios a este Aviso Legal.",
              "No introducir, almacenar o difundir mediante el sitio web datos o contenidos que vulneren derechos de terceros o sean difamatorios, obscenos o contrarios al orden público.",
              "No realizar acciones que puedan dañar, inutilizar o deteriorar el sitio web o impedir su normal funcionamiento.",
              "No intentar acceder, obtener o modificar sin autorización los datos de otros usuarios o a otras secciones restringidas del sistema.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-medium text-gray-500 shrink-0">{String.fromCharCode(97 + i)})</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Exclusión de garantías */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            5. Exclusión de garantías y de responsabilidad
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El Titular no garantiza la disponibilidad y continuidad ininterrumpida del funcionamiento
            del sitio web y queda exonerado de toda responsabilidad por daños y perjuicios de
            cualquier naturaleza derivados de la falta de disponibilidad o continuidad del sitio web.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Los contenidos del sitio web tienen carácter meramente informativo y no constituyen
            asesoramiento jurídico, financiero, fiscal ni de ningún otro tipo. El Titular no será
            responsable de las decisiones adoptadas por el usuario en base a la información contenida
            en el sitio web.
          </p>
          <p className="text-sm text-gray-600">
            El sitio web puede contener enlaces a sitios web de terceros. El Titular no controla
            dichos sitios, no asume responsabilidad alguna por su contenido y recomienda al usuario
            que consulte las políticas de privacidad y condiciones de uso de dichos sitios.
          </p>
        </section>

        {/* 6. Protección de datos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            6. Protección de datos personales
          </h2>
          <p className="text-sm text-gray-600">
            El tratamiento de los datos personales recabados a través del sitio web se rige por la{" "}
            <a href="/privacidad" className="text-[#C9A84C] underline underline-offset-2">
              Política de Privacidad
            </a>{" "}
            del Titular, disponible en este mismo sitio web. Dicha Política informa al usuario sobre
            los tratamientos realizados, sus finalidades, bases jurídicas, derechos y los
            procedimientos para ejercerlos, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y
            la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
        </section>

        {/* 7. Cookies */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            7. Política de cookies
          </h2>
          <p className="text-sm text-gray-600">
            El sitio web puede utilizar cookies y tecnologías similares. La información detallada
            sobre las cookies utilizadas, su finalidad, el plazo de conservación y las opciones del
            usuario para gestionarlas se encuentra en la{" "}
            <a href="/cookies" className="text-[#C9A84C] underline underline-offset-2">
              Política de Cookies
            </a>
            , accesible desde el pie de página del sitio web.
          </p>
        </section>

        {/* 8. Legislación */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#C9A84C] pl-3">
            8. Legislación aplicable y jurisdicción
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Las presentes condiciones se rigen por la legislación española. Para la resolución de
            cualquier controversia derivada del acceso o uso del sitio web, el Titular y el usuario,
            con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a los
            Juzgados y Tribunales de la ciudad de Madrid, sin perjuicio de los derechos que asistan
            al usuario como consumidor conforme a la normativa vigente.
          </p>
          <p className="text-sm text-gray-500 text-xs">
            Normativa de referencia: Ley 34/2002 (LSSICE), Ley 7/1998 (LCGC), Real Decreto
            Legislativo 1/2007 (TRLGDCU), Reglamento (UE) 2016/679 (RGPD), Ley Orgánica 3/2018
            (LOPDGDD).
          </p>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-6 text-center text-xs text-gray-400">
        L&amp;C Digital &amp; Consulting, S.L. · NIF B22652069 · Madrid, España
      </footer>
    </div>
  );
}
