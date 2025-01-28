export interface IHeroSimpleBlockProps {
  imgUrl: string
  title: string
}

export const HeroSimpleBlock = ({ imgUrl, title }: IHeroSimpleBlockProps) => {
  return (
    <section className="relative flex flex-col gap-0">
      {imgUrl && (
        <div
          className={`w-full h-40 md:h-96 lg:h-[450px] xl:h-[550px] bg-cover bg-top`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
      )}
      <h2 className="bg-black py-8 px-8 md:px-24 lg:px-64 text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center text-balance md:w-fit md:max-w-screen-2xl md:mx-auto md:absolute md:bottom-0 md:left-0 md:right-0">
        {title}
      </h2>
    </section>
  )
}
