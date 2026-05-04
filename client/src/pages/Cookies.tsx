import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const LOGO_WHITE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663493406861/AbQacd8d6pBJJuTzbrztLz/ascente_logo_white_bcd9e595.png";

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Cookies — L&C CFO®";
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

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#1C00A8] mb-2">Política de Cookies</h1>
        <p className="text-sm text-gray-500 mb-10">
          L&C Digital &amp; Consulting, S.L. · Última actualización: mayo de 2026
        </p>

        {/* 1. Qué son */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            1. ¿Qué son las cookies?
          </h2>
          <p className="text-sm text-gray-600">
            Las cookies son pequeños archivos de texto que un sitio web almacena en el dispositivo
            del usuario cuando este lo visita. Permiten que el sitio recuerde información entre
            visitas, como preferencias de navegación o el estado de la sesión. La normativa europea
            (Directiva 2009/136/CE, transpuesta en España en la LSSICE) exige informar al usuario
            sobre las cookies utilizadas y, cuando proceda, obtener su consentimiento previo.
          </p>
        </section>

        {/* 2. Cookies utilizadas */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            2. Cookies utilizadas en este sitio web
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800 font-medium">
              Este sitio web únicamente utiliza cookies técnicas estrictamente necesarias para su
              funcionamiento. No se instalan cookies de analítica, publicidad ni seguimiento.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1C00A8] text-white">
                  <th className="px-4 py-3 text-left font-medium">Nombre</th>
                  <th className="px-4 py-3 text-left font-medium">Tipo</th>
                  <th className="px-4 py-3 text-left font-medium">Proveedor</th>
                  <th className="px-4 py-3 text-left font-medium">Finalidad</th>
                  <th className="px-4 py-3 text-left font-medium">Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs text-gray-700">__session / cf_clearance</td>
                  <td className="px-4 py-3 text-gray-600">Técnica (necesaria)</td>
                  <td className="px-4 py-3 text-gray-600">Titular / CDN</td>
                  <td className="px-4 py-3 text-gray-600">
                    Seguridad básica y mantenimiento de la sesión de navegación. No recoge datos
                    personales identificables.
                  </td>
                  <td className="px-4 py-3 text-gray-600">Sesión</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            Las cookies técnicas no requieren consentimiento previo conforme a la Guía AEPD 2023. El
            Titular se compromete a mantener actualizado este listado. Si en el futuro se incorporaran
            herramientas que instalen cookies no técnicas, esta política será actualizada y se
            habilitará el banner de consentimiento correspondiente.
          </p>
        </section>

        {/* 3. Otras tecnologías */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            3. Otras tecnologías utilizadas que no instalan cookies
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Además de las cookies propias indicadas, el sitio utiliza las siguientes tecnologías de
            terceros que <strong>no instalan cookies</strong> en el dispositivo del usuario pero que
            pueden implicar una transmisión de datos:
          </p>

          <div className="space-y-6">
            {/* Umami */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Umami Analytics</h3>
              <p className="text-sm text-gray-600 mb-2">
                El Titular utiliza Umami, una herramienta de analítica web diseñada para respetar la
                privacidad de los usuarios. Umami <strong>no instala ninguna cookie</strong>, no
                rastrea al usuario entre sesiones ni entre sitios, y no recopila datos personales
                identificables. Los datos recogidos (páginas visitadas, tipo de dispositivo, idioma
                del navegador) son completamente anónimos y no pueden vincularse a una persona
                física. Por este motivo, no requiere consentimiento previo conforme al RGPD ni a la
                Guía AEPD 2023.
              </p>
              <a
                href="https://umami.is/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1C00A8] underline underline-offset-2"
              >
                Más información: umami.is/privacy
              </a>
            </div>

            {/* Google Fonts */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Google Fonts (CDN de tipografías)</h3>
              <p className="text-sm text-gray-600 mb-2">
                El sitio web carga tipografías a través del servicio Google Fonts
                (fonts.googleapis.com). Esta carga implica que el navegador del usuario realiza una
                solicitud HTTP a los servidores de Google LLC, lo que conlleva la transmisión
                transitoria de la dirección IP del usuario. Google ha declarado que no almacena esta
                información ni la utiliza con fines de seguimiento o publicidad. No se instalan
                cookies. La base jurídica de este tratamiento es el interés legítimo del Titular en
                ofrecer una experiencia visual óptima (art. 6.1.f RGPD).
              </p>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1C00A8] underline underline-offset-2"
              >
                Política de privacidad de Google
              </a>
            </div>

            {/* Tally */}
            <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Tally.so (formularios de contratación)</h3>
              <p className="text-sm text-gray-600 mb-2">
                Los formularios de contratación del sitio se alojan en el dominio{" "}
                <strong>tally.so</strong>, operado por Tally BV. Cuando el usuario accede a un
                formulario, navega a un dominio externo al sitio del Titular y queda sujeto a la
                política de privacidad y cookies de Tally. El Titular no controla las cookies o
                tecnologías que Tally pueda instalar en ese dominio.
              </p>
              <a
                href="https://tally.so/help/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1C00A8] underline underline-offset-2"
              >
                Política de privacidad de Tally
              </a>
            </div>
          </div>
        </section>

        {/* 4. Gestión */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            4. Cómo gestionar las cookies del navegador
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Dado que este sitio únicamente utiliza cookies técnicas estrictamente necesarias, no se
            muestra un banner de consentimiento de cookies. No obstante, el usuario puede configurar
            su navegador para bloquear o eliminar cookies en cualquier momento:
          </p>
          <ul className="space-y-1 text-sm text-gray-600 mb-3">
            {[
              "Google Chrome: Configuración > Privacidad y seguridad > Cookies y otros datos de sitios",
              "Mozilla Firefox: Opciones > Privacidad & Seguridad > Cookies y datos del sitio",
              "Safari: Preferencias > Privacidad > Gestionar datos del sitio web",
              "Microsoft Edge: Configuración > Cookies y permisos del sitio",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[#1C00A8] font-bold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500">
            Tenga en cuenta que bloquear las cookies técnicas puede afectar al correcto
            funcionamiento del sitio web.
          </p>
        </section>

        {/* 5. Actualizaciones */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-l-4 border-[#1C00A8] pl-3">
            5. Actualizaciones de esta política
          </h2>
          <p className="text-sm text-gray-600">
            El Titular puede modificar esta Política de Cookies para adaptarla a cambios normativos,
            tecnológicos o de las herramientas utilizadas. Si se incorporan cookies no técnicas en el
            futuro, se actualizará esta política y se habilitará el mecanismo de consentimiento
            obligatorio. Para cualquier consulta:{" "}
            <a
              href="mailto:miguel.lopez@lycconsulting.com"
              className="text-[#1C00A8] underline underline-offset-2"
            >
              miguel.lopez@lycconsulting.com
            </a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-6 px-6 text-center text-xs text-gray-400">
        L&amp;C Digital &amp; Consulting, S.L. · NIF B22652069 · Madrid, España
      </footer>
    </div>
  );
}
