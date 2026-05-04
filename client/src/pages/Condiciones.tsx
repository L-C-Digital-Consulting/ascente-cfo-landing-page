import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";

export default function Condiciones() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Condiciones Generales de Contratación — L&C CFO®";
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
          Condiciones Generales de Contratación
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          L&amp;C Digital &amp; Consulting, S.L. · Última actualización: abril de 2026
        </p>

        {/* 1. Identificación */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            1. Identificación del Prestador
          </h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Denominación social", "L&C Digital & Consulting, S.L."],
                  ["NIF", "B22652069"],
                  ["Domicilio", "Calle del Poeta Joan Maragall 23, 28020, Madrid"],
                  ["Correo electrónico", "miguel.lopez@lycconsulting.com"],
                  ["Inscripción registral", "Registro Mercantil de Madrid, Hoja M-859195, Inscripción 1ª"],
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

        {/* 2. Objeto */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            2. Objeto y ámbito de aplicación
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Las presentes Condiciones Generales de Contratación (en adelante, las "Condiciones") regulan la
            relación contractual entre L&amp;C Digital &amp; Consulting, S.L. (en adelante, el "Prestador") y
            cualquier persona física o jurídica (en adelante, el "Cliente") que contrate los servicios ofrecidos
            por el Prestador bajo cualquiera de sus marcas comerciales, incluyendo, entre otros, servicios de
            análisis financiero, diagnóstico empresarial, consultoría, formación y herramientas digitales de análisis.
          </p>
          <p className="text-sm text-gray-600">
            La descripción detallada del servicio específico contratado —incluyendo entregables, plazos de
            ejecución y condiciones particulares— se recoge en la Confirmación del Servicio que el Prestador
            remitirá al Cliente junto con la factura correspondiente, en el plazo máximo de dos (2) días hábiles
            desde la recepción del pago. Dicho documento forma parte integrante del contrato.
          </p>
        </section>

        {/* 3. Proceso */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            3. Proceso de contratación
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El contrato se formaliza mediante aceptación electrónica expresa habilitada por el Prestador en el
            proceso de pago, conforme a los artículos 23 y 24 de la Ley 34/2002 (LSSICE), el Reglamento (UE)
            910/2014 (eIDAS) y la Ley 6/2020 reguladora de determinados aspectos de los servicios electrónicos
            de confianza. El registro generado por el sistema constituirá prueba de la identidad del aceptante,
            la fecha y hora de la aceptación, y el contenido de las Condiciones en ese momento.
          </p>
          <p className="text-sm text-gray-600">
            La persona que acepta las presentes Condiciones en nombre de una entidad declara y garantiza que
            dispone de autorización suficiente para contratar y obligar jurídicamente a dicha entidad. En caso
            de que dicha autorización no existiera, la persona aceptante responderá personalmente de las
            obligaciones económicas derivadas del contrato.
          </p>
        </section>

        {/* 4. Precio */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            4. Precio y forma de pago
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El precio del servicio es el indicado en el proceso de compra en el momento de la contratación,
            expresado en euros. El precio incluye el Impuesto sobre el Valor Añadido (IVA) aplicable conforme
            a la normativa vigente.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            El pago se efectúa mediante los métodos habilitados en la pasarela de pago en el momento de la
            contratación. El Prestador utiliza Stripe como procesador de pagos; los datos de pago son
            gestionados directamente por Stripe conforme a sus políticas de seguridad (PCI-DSS). El Prestador
            no almacena datos de tarjetas de pago.
          </p>
          <p className="text-sm text-gray-600">
            En servicios con pago fraccionado, las condiciones específicas de cada plazo —importe, fecha de
            cargo y número de cuotas— se detallan en el proceso de compra y en la Confirmación del Servicio.
          </p>
        </section>

        {/* 5. Desistimiento */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            5. Derecho de desistimiento
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            De conformidad con el artículo 103.a) del Real Decreto Legislativo 1/2007 (TRLGDCU), el Cliente
            no tendrá derecho de desistimiento una vez que el Prestador haya iniciado la ejecución del servicio
            con el consentimiento expreso del Cliente y con conocimiento de que pierde dicho derecho.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Al completar el proceso de contratación, el Cliente consiente expresamente el inicio inmediato de
            la prestación del servicio y declara conocer que perderá el derecho de desistimiento desde ese momento.
          </p>
          <p className="text-sm text-gray-600">
            En caso de que el servicio no haya sido iniciado, el Cliente podrá ejercer el derecho de
            desistimiento en el plazo de catorce (14) días naturales desde la fecha de contratación, mediante
            comunicación escrita dirigida a{" "}
            <a href="mailto:miguel.lopez@lycconsulting.com" className="text-[#1C00A8] underline underline-offset-2">
              miguel.lopez@lycconsulting.com
            </a>.
          </p>
        </section>

        {/* 6. Ejecución */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            6. Ejecución del servicio
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El Prestador se compromete a ejecutar el servicio contratado con la diligencia y competencia
            profesional adecuadas. Los plazos de entrega son orientativos salvo que se indique expresamente
            lo contrario en la Confirmación del Servicio.
          </p>
          <p className="text-sm text-gray-600">
            Para la correcta prestación del servicio, el Cliente deberá facilitar al Prestador la documentación
            e información que se indique en la Confirmación del Servicio o en las comunicaciones del Prestador,
            en el plazo y forma requeridos. El incumplimiento de esta obligación por parte del Cliente podrá
            afectar a los plazos de entrega sin responsabilidad para el Prestador.
          </p>
        </section>

        {/* 7. Propiedad intelectual */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            7. Propiedad intelectual
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El Prestador es titular exclusivo de la metodología, modelos de análisis, procesos, herramientas,
            software y estructura de los informes y productos entregados, protegidos por el Real Decreto
            Legislativo 1/1996 (TRLPI) y la Ley 1/2019 de Secretos Empresariales.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            La entrega de cualquier informe, documento o resultado al Cliente no implica cesión de derechos de
            propiedad intelectual sobre dichos elementos. El Cliente podrá utilizar los entregables
            exclusivamente en el ámbito de su actividad empresarial interna. Queda expresamente prohibido:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Comercializar, reproducir públicamente o distribuir los entregables como producto propio.",
              "Ceder, sublicenciar o transferir los entregables a terceros sin autorización escrita del Prestador.",
              "Utilizar los entregables para desarrollar productos o servicios que compitan con los del Prestador.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-medium text-gray-700 shrink-0">{String.fromCharCode(97 + i)})</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 8. Confidencialidad */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            8. Confidencialidad
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Ambas partes se comprometen a mantener la confidencialidad de la información que la otra parte les
            facilite con carácter reservado en el marco de la prestación del servicio, y a no divulgarla a
            terceros ni utilizarla para fines distintos de los previstos en el contrato.
          </p>
          <p className="text-sm text-gray-600">
            Esta obligación se mantendrá vigente durante cinco (5) años desde la finalización del servicio,
            con independencia de la causa de extinción del contrato.
          </p>
        </section>

        {/* 9. Limitación de responsabilidad */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            9. Limitación de responsabilidad
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Los servicios del Prestador tienen carácter de consultoría y análisis; no constituyen asesoramiento
            legal, fiscal ni contable. Las decisiones empresariales adoptadas por el Cliente a partir de los
            análisis, informes o recomendaciones entregados son de su exclusiva responsabilidad.
          </p>
          <p className="text-sm text-gray-600 mb-3">
            La responsabilidad total del Prestador por daños directos derivados de la prestación del servicio
            quedará limitada, en todo caso, al importe efectivamente abonado por el Cliente por el servicio
            concreto que originó el perjuicio.
          </p>
          <p className="text-sm text-gray-600">
            El Prestador no será responsable de daños indirectos, pérdida de beneficios, pérdida de negocio,
            interrupción de actividad ni perjuicios similares, aunque hubiera sido informado de su posibilidad.
          </p>
        </section>

        {/* 10. Protección de datos */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            10. Protección de datos personales
          </h2>
          <p className="text-sm text-gray-600">
            El tratamiento de los datos personales del Cliente se rige por la{" "}
            <a href="/privacidad" className="text-[#1C00A8] underline underline-offset-2">
              Política de Privacidad
            </a>{" "}
            del Prestador. El Responsable del tratamiento es L&amp;C Digital &amp; Consulting, S.L. (NIF B22652069),
            correo electrónico:{" "}
            <a href="mailto:miguel.lopez@lycconsulting.com" className="text-[#1C00A8] underline underline-offset-2">
              miguel.lopez@lycconsulting.com
            </a>.
            El tratamiento tiene como base jurídica la ejecución del contrato (art. 6.1.b RGPD). El Cliente
            podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y
            portabilidad dirigiéndose a la dirección de correo indicada.
          </p>
        </section>

        {/* 11. Modificaciones */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            11. Modificaciones de las Condiciones
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            El Prestador podrá actualizar las presentes Condiciones Generales para reflejar cambios normativos,
            operativos o en la oferta de servicios. La versión vigente estará siempre disponible en el proceso
            de contratación.
          </p>
          <p className="text-sm text-gray-600">
            Los cambios sustanciales serán comunicados al Cliente por correo electrónico con un mínimo de
            quince (15) días de antelación a su entrada en vigor. El uso continuado de los servicios tras la
            entrada en vigor de los cambios implicará la aceptación de las nuevas Condiciones.
          </p>
        </section>

        {/* 12. Ley aplicable */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            12. Ley aplicable y jurisdicción
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Las presentes Condiciones se rigen por el Derecho español. Para la resolución de cualquier
            controversia derivada de su interpretación o aplicación, las partes, con renuncia expresa a
            cualquier otro fuero que pudiera corresponderles, se someten a los Juzgados y Tribunales de
            la ciudad de Madrid.
          </p>
          <p className="text-sm text-gray-600">
            En el caso de que el Cliente tenga la condición de consumidor o usuario conforme al TRLGDCU,
            serán de aplicación las normas de protección de consumidores y usuarios, y la competencia
            jurisdiccional corresponderá a los tribunales del domicilio del consumidor.
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
