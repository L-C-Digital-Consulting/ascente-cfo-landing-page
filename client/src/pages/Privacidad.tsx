import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";

export default function Privacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidad — L&C CFO®";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-[#1C00A8] py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <img src={LOGO_WHITE} alt="L&C CFO®" className="h-8" />
          <Link href="/">
            <a className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
              <ArrowLeft size={16} />
              Volver
            </a>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1C00A8] mb-2">
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          L&C Digital &amp; Consulting, S.L. · Última actualización: abril de 2026
        </p>

        {/* 1. Responsable */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            1. Responsable del tratamiento
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Denominación social", "L&C Digital & Consulting, S.L."],
                  ["NIF", "B22652069"],
                  ["Domicilio", "Calle del Poeta Joan Maragall 23, 28020, Madrid"],
                  ["Correo electrónico", "miguel.lopez@lycconsulting.com"],
                  [
                    "Actividad",
                    "Servicios de consultoría, análisis empresarial y herramientas digitales",
                  ],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 font-medium text-gray-700 w-1/3">{label}</td>
                    <td className="px-4 py-3 text-gray-600">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2. Datos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            2. Datos que tratamos y su origen
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            En el marco de la contratación y prestación de los servicios ofrecidos por el
            Prestador bajo cualquiera de sus marcas comerciales tratamos las siguientes
            categorías de datos:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="font-medium text-gray-700 shrink-0">a)</span>
              <span>
                <strong>Datos del representante o persona de contacto del Cliente:</strong>{" "}
                nombre y apellidos, cargo, correo electrónico, teléfono, NIF/CIF de la entidad
                y domicilio fiscal. Recogidos directamente del interesado a través del
                formulario de contratación.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-gray-700 shrink-0">b)</span>
              <span>
                <strong>
                  Datos económicos, financieros o empresariales de la entidad Cliente
                </strong>{" "}
                aportados para la prestación del servicio contratado. Esta documentación puede
                contener datos personales de terceros (empleados, socios, proveedores,
                clientes) en la medida en que figuren en la documentación aportada.
              </span>
            </li>
          </ul>
        </section>

        {/* 3. Finalidad */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            3. Finalidad y base jurídica del tratamiento
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C00A8] text-white">
                  <th className="px-4 py-3 text-left font-medium">Finalidad</th>
                  <th className="px-4 py-3 text-left font-medium">Base jurídica</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Gestión de la relación contractual, facturación y comunicaciones relativas al servicio",
                    "Art. 6.1.b RGPD — ejecución de un contrato",
                  ],
                  [
                    "Análisis y tratamiento de la documentación aportada por el Cliente para la prestación del servicio",
                    "Art. 6.1.b RGPD — ejecución de un contrato",
                  ],
                  [
                    "Tratamiento de datos de terceros contenidos en la documentación contable",
                    "Art. 6.1.f RGPD — interés legítimo, en la medida estrictamente necesaria para la prestación del servicio",
                  ],
                  [
                    "Cumplimiento de obligaciones legales (fiscales, mercantiles)",
                    "Art. 6.1.c RGPD — obligación legal",
                  ],
                ].map(([fin, base], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-600">{fin}</td>
                    <td className="px-4 py-3 text-gray-600 font-medium">{base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Destinatarios */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            4. Destinatarios
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Los datos no serán cedidos a terceros, salvo en los siguientes casos:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="font-medium text-gray-700 shrink-0">a)</span>
              <span>
                <strong>Obligación legal:</strong> cuando sea requerido por autoridad
                competente (AEAT, juzgados u otras administraciones públicas).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-gray-700 shrink-0">b)</span>
              <span>
                <strong>Encargados del tratamiento:</strong> proveedores tecnológicos
                especializados que intervienen en la prestación del servicio (procesamiento,
                almacenamiento y comunicaciones), con quienes el Responsable ha suscrito los
                correspondientes acuerdos de encargo de tratamiento conforme al art. 28 RGPD.
                Estos proveedores actúan únicamente bajo instrucciones del Responsable y no
                pueden utilizar los datos para fines propios.
              </span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-3">
            Pueden producirse transferencias internacionales de datos con las garantías
            adecuadas previstas en los arts. 44 y siguientes del RGPD, incluyendo cláusulas
            contractuales tipo aprobadas por la Comisión Europea u otros mecanismos
            equivalentes.
          </p>
        </section>

        {/* 5. Plazo */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            5. Plazo de conservación
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Los datos personales se conservarán durante la vigencia de la relación contractual
            y, una vez finalizada, durante los siguientes plazos:
          </p>
          <ul className="space-y-1 text-sm text-gray-600 mb-3">
            <li className="flex gap-2">
              <span className="text-[#1C00A8] font-bold">·</span>
              <span>
                <strong>4 años</strong> — obligaciones fiscales y mercantiles (Ley General
                Tributaria, Código de Comercio).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#1C00A8] font-bold">·</span>
              <span>
                <strong>5 años</strong> — obligación de confidencialidad establecida en el
                contrato de servicio.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#1C00A8] font-bold">·</span>
              <span>
                <strong>6 años</strong> — documentos contables conforme al art. 30 del Código
                de Comercio.
              </span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mb-2">
            Transcurridos dichos plazos, los datos serán suprimidos o anonimizados de forma
            irreversible.
          </p>
          <p className="text-sm text-gray-600">
            La documentación aportada por el Cliente para la prestación del servicio se
            eliminará de los sistemas del Responsable en el plazo máximo de treinta (30) días
            desde la finalización del servicio, salvo que la relación contractual esté vigente
            y dicha documentación sea necesaria para la continuación de los servicios
            contratados.
          </p>
        </section>

        {/* 6. Derechos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            6. Derechos de los interesados
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Cualquier persona cuyos datos sean objeto de tratamiento tiene derecho a:
          </p>
          <ul className="space-y-1 text-sm text-gray-600 mb-4">
            {[
              ["Acceso", "obtener confirmación de si se tratan sus datos y una copia de los mismos."],
              ["Rectificación", "solicitar la corrección de datos inexactos o incompletos."],
              ["Supresión", "solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos."],
              ["Oposición", "oponerse al tratamiento basado en interés legítimo."],
              ["Limitación", "solicitar que el tratamiento quede restringido en determinadas circunstancias."],
              ["Portabilidad", "recibir sus datos en formato estructurado, de uso común y lectura mecánica."],
            ].map(([right, desc], i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#1C00A8] font-bold">·</span>
                <span>
                  <strong>{right}:</strong> {desc}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 mb-2">
            Para ejercer estos derechos, el interesado deberá dirigir comunicación escrita a{" "}
            <a
              href="mailto:miguel.lopez@lycconsulting.com"
              className="text-[#1C00A8] underline underline-offset-2"
            >
              miguel.lopez@lycconsulting.com
            </a>
            , indicando el derecho que desea ejercer y adjuntando copia de documento
            acreditativo de identidad. El Responsable responderá en el plazo de un (1) mes
            desde la recepción de la solicitud, prorrogable por otros dos meses en casos de
            especial complejidad.
          </p>
          <p className="text-sm text-gray-600">
            Sin perjuicio de lo anterior, el interesado tiene derecho a presentar una
            reclamación ante la Agencia Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C00A8] underline underline-offset-2"
            >
              www.aepd.es
            </a>
            ) si considera que el tratamiento de sus datos no es conforme al RGPD.
          </p>
        </section>

        {/* 7. Seguridad */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            7. Seguridad de la información
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            El Responsable aplica medidas técnicas y organizativas adecuadas al riesgo para
            garantizar la seguridad, confidencialidad e integridad de los datos personales,
            incluyendo controles de acceso, cifrado en tránsito y en reposo cuando resulte
            apropiado, y políticas internas de seguridad de la información.
          </p>
          <p className="text-sm text-gray-600">
            En caso de brecha de seguridad que afecte a datos personales, el Responsable
            notificará a la AEPD en el plazo máximo de 72 horas desde su detección, conforme
            al art. 33 RGPD, y comunicará al interesado si la brecha entraña un alto riesgo
            para sus derechos y libertades.
          </p>
        </section>

        {/* 8. Herramientas */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            8. Uso de herramientas tecnológicas de procesamiento automatizado
          </h2>
          <p className="text-sm text-gray-600">
            Para la prestación de determinados servicios se pueden utilizar herramientas
            tecnológicas de procesamiento automatizado, siempre bajo supervisión humana directa
            por parte del Responsable o de los profesionales designados al efecto. Dicho
            procesamiento automatizado no produce decisiones con efectos jurídicos
            significativos sobre las personas físicas interesadas sin intervención humana.
          </p>
        </section>

        {/* 9. Modificaciones */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            9. Modificaciones de la Política de Privacidad
          </h2>
          <p className="text-sm text-gray-600">
            Esta Política de Privacidad puede ser actualizada para reflejar cambios normativos
            o en los servicios prestados. La versión vigente estará siempre disponible en el
            proceso de contratación o en la web oficial del Prestador. Los cambios sustanciales
            serán comunicados al Cliente por correo electrónico con un mínimo de quince (15)
            días de antelación a su entrada en vigor.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-6 text-center text-xs text-gray-400">
        L&amp;C Digital &amp; Consulting, S.L. · NIF B22652069 · Madrid, España
      </footer>
    </div>
  );
}
