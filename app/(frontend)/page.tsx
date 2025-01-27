import { Footer, FormScheduleAppointment } from '@/components'

interface IHeroSimpleBlockProps {
  imgUrl: string
  title: string
}
const HeroSimpleBlock = ({ imgUrl, title }: IHeroSimpleBlockProps) => {
  return (
    <section className="relative flex flex-col gap-0">
      {imgUrl && (
        <div
          className={`w-full h-40 md:h-96 lg:h-[450px] bg-cover bg-center`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}
      <h2 className="bg-black py-8 md:px-24 px-12 text-white text-4xl font-bold text-center text-balance md:w-fit md:mx-auto md:absolute md:bottom-0 md:left-0 md:right-0">
        {title}
      </h2>
    </section>
  )
}

const dataHeroSimpleBlock = {
  imgUrl: 'https://clinicasorigen.es/wp-content/uploads/2022/04/1900x550-Especialidades-banner-emociones.jpg',
  title: 'Emociones y Regulación Emocional',
}

const ContainerWithStickyForm = () => {
  return (
    <div className="container mx-auto max-w-screen-lg grid md:grid-cols-[1fr_360px] md:gap-8 py-20 px-6 lg:px-0">
      {/* Main Content Column */}
      <div className="prose max-w-none">
        <h1 className="text-3xl font-bold mb-6">¿Qué son las emociones?</h1>

        <p className="text-lg mb-6">
          Las emociones son reacciones psicofisiológicas que representan modos de adaptación a ciertos estímulos cuando percibimos un objeto, persona, lugar,
          suceso o recuerdo importante.
        </p>

        <p className="mb-4">
          En términos generales, las emociones son estados afectivos que experimentamos ante cualquier estímulo ya sea interno o externo que nos pueda afectar.
          De este modo, las emociones son reacciones subjetivas, influidas por las experiencias y acompañadas de cambios fisiológicos y endocrinos de origen
          innato. No son un esfuerzo consciente, sino un estado mental que surge espontáneamente.
        </p>

        <p className="mb-6">
          En el ser humano la experiencia de una emoción consiste en un conjunto de cogniciones, creencias sobre el mundo y actitudes que influyen en la
          percepción de cada situación.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">La importancia de las emociones</h2>

        <p className="mb-4">
          A lo largo de la historia las emociones no se han tenido mucho en cuenta, aunque todo el mundo sabe que existen, siempre se ha dado más importancia a
          la parte racional del ser humano, a lo que se produce de forma consciente.
        </p>

        <p className="mb-4">
          A través de las emociones podemos intuir la conducta futura de una persona y ya desde que nacemos vamos adquiriendo una serie de emociones básicas y
          universales que se les denomina las 5 emociones básicas (miedo, tristeza, alegría, sorpresa y asco).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">¿Para qué sirven las emociones?</h2>

        <p className="mb-4">
          Las emociones juegan un papel importante tanto en nuestro pensamiento como en nuestro comportamiento. Las emociones que sentimos cada día pueden
          llegar a influir considerablemente en las decisiones que tomamos sobre nuestras vidas, sean más o menos importantes, grandes o pequeñas.
        </p>

        <p className="mb-4">
          Las emociones tienen una función adaptativa de nuestro organismo a todo lo que nos rodea, siendo un estado que aparece espontánea e inesperadamente y
          que no suele prolongarse mucho en el tiempo.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Funciones principales de las emociones:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nos dan una mayor seguridad</li>
            <li>Nos protegen de las amenazas</li>
            <li>Nos ayudan a adaptarnos</li>
            <li>Nos ayudan a alcanzar nuestros objetivos</li>
            <li>Facilitan nuestra comunicación con los demás</li>
          </ul>
        </div>
      </div>

      {/* Sticky Form Column */}
      <aside className="md:sticky md:top-20 h-fit">
        <FormScheduleAppointment />
      </aside>
    </div>
  )
}

export default async function HomePage() {
  return (
    <main>
      <HeroSimpleBlock {...dataHeroSimpleBlock} />
      <ContainerWithStickyForm />
      <Footer />
    </main>
  )
}
