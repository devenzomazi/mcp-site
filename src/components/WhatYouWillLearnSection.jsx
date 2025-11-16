// src/components/WhatYouLearnSection.tsx
import cardInstagram from "../assets/card-cursos-instagram.png"
import cardFinanceiro from "../assets/card-cursos-financeiro.png"
import cardVerificado from "../assets/card-cursos-verificado.png"
import iconArrow from "../assets/icon-arrow.svg"

const items = [
  {
    img: cardInstagram,
    alt: "Dominar a criação de conteúdos",
    description:
      "Utilizando apenas seu celular (fotos, vídeos, Reels e Stories);",
  },
  {
    img: cardFinanceiro,
    alt: "Aprender a cobrar do seu cliente",
    description:
      "Saber precificar, montar contratos e atender clientes com segurança.",
  },
  {
    img: cardVerificado,
    alt: "Como se posicionar nas redes",
    description: "Entenda como se posicionar de forma profissional nas redes.",
  },
]

export default function WhatYouLearnSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-screen-2xl">
        {/* TÍTULO CENTRALIZADO */}
        <header className="mb-12 flex items-center justify-center gap-3 text-center">
          <img src={iconArrow} alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold leading-snug text-black">
            O que você aprenderá nesse curso…
          </h2>
        </header>

        {/* GRID DE CARDS */}
        <div className="grid gap-10 md:grid-cols-3 justify-items-center">
          {items.map((item) => (
            <article key={item.alt} className="flex flex-col items-center">
              {/* CONTAINER DO CARD */}
              <div className="w-full max-w-[484px] flex flex-col items-center">
                {/* IMAGEM */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-auto block"
                />

                {/* TEXTO */}
                <div className="mt-6 w-[90%]">
                  <div className="h-[3px] w-full bg-gradient-to-r from-[#d45bff] to-[#8d3bff] rounded-full" />

                  <p className="mt-4 text-base text-neutral-800 leading-relaxed font-extrabold">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
