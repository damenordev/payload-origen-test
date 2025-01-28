import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="max-w-screen-lg mx-auto border-t border-gray-500 pt-8 pb-4 px-6">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
        <div className="w-full">
          <h3 className="font-bold text-xl text-balance md:mb-4">¿Quiénes somos?</h3>
          <ul>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/principios-origen/"
              >
                Principios Origen
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/sistema-integral-de-mejora/"
              >
                Sistema integral de mejora
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/terapias-y-tratamientos/"
              >
                Terapias y tratamientos
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/quienes-somos-y-que-ofrecemos/"
              >
                Psicólogos y psiquiatras
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/area-de-negocio/"
              >
                Abre tu clínica
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/wm-hospitals/"
              >
                Wm Hospitals
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/colaboracion-de-clinicas-origen-con-mensajeros-de-la-paz/"
              >
                Fundación Healthy Ways
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/politica-de-calidad/"
              >
                Política de calidad
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/proteccion-de-datos-personales/"
              >
                Protección de Datos Personales
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-xl text-balance md:mb-4">Más Origen</h3>
          <ul>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/trabaja-con-nosotros/"
              >
                Trabaja con nosotros
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/contacta-con-nosotros/"
              >
                Contacta con nosotros
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/atencion-al-cliente/"
              >
                Atención al paciente
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/articulos/area-de-prensa/"
              >
                Área de prensa
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="/nuestras-clinicas/"
              >
                Nuestras clínicas
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/wmclinics/"
              >
                Wm Clinics
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary hover:underline hover:transition-colors text-sm"
                href="https://clinicasorigen.es/politica-de-calidad-iso/"
              >
                Política de calidad ISO
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-xl text-balance mb-4">Posts recientes</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-2">
              <img
                className="size-16 rounded-full object-cover"
                src="https://clinicasorigen.es/wp-content/uploads/2025/01/Tecnicas-psicologicas-1-300x158.jpg"
                alt=""
              />
              <p className="text-sm">Técnicas psicológicas (que realmente funcionan) para mejorar tu estado de ánimo y sobreponerte a una semana difícil.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="size-16 rounded-full object-cover"
                src="https://clinicasorigen.es/wp-content/uploads/2025/01/senales-depresion-1-300x158.jpg"
                alt=""
              />
              <p className="text-sm">Señales de depresión: aprende a identificar los primeros síntomas de un trastorno depresivo.</p>
            </li>
            <li className="flex gap-2">
              <img
                className="size-16 rounded-full object-cover"
                src="https://clinicasorigen.es/wp-content/uploads/2025/01/botox-y-depresion-1-300x158.jpg"
                alt=""
              />
              <p className="text-sm">Bótox y depresión: cómo el tratamiento con neuromoduladores mejora también las arrugas del alma.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 pt-12">
        <img
          className="h-14"
          src="https://clinicasorigen.es/wp-content/uploads/2021/05/alfonso.png"
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-sm">© Clínicas Origen Psicologia y Psiquiatria 2025</p>
          <div className="flex justify-center gap-4">
            <Link
              className="text-xs"
              href="https://clinicasorigen.es/aviso-legal-politica-privacidad/"
              rel="nofollow"
            >
              Aviso legal y privacidad
            </Link>
            <Link
              className="text-xs"
              href="https://clinicasorigen.es/politica-de-cookies/"
              rel="nofollow"
            >
              Política de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
