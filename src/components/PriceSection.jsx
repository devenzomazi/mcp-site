// src/components/PriceSection.tsx
import bgPrecoCurso from "../assets/bg-preco-curso.png"
import iconArrow from "../assets/icon-arrow.svg"

export default function PriceSection() {
  return (
    <section className="w-full bg-[#000106] text-white pt-16 pb-16 px-4">
      <div className="mx-auto max-w-4xl lg:max-w-4xl text-center">
        {/* TÍTULO COM ÍCONE */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src={iconArrow}
            alt=""
            className="h-9 w-9 lg:h-10 lg:w-10"
          />
          <h2 className="text-4xl lg:text-5xl font-semibold leading-snug">
            E muito mais...
          </h2>
        </div>

        {/* DESCRIÇÃO – bem maior no mobile */}
        <p className="text-lg lg:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-6">
          São 18 aulas divididas em 4 módulos, com aulas curtas e diretas
          que abordam o necessário para fazer com que você finalize o
          curso pronto e seguro para fechar seu primeiro contrato.
        </p>

        {/* PREÇO ANTIGO */}
        <p className="text-lg lg:text-2xl text-neutral-300 line-through">
          de R$ 97,00
        </p>

        {/* PREÇO ATUAL – bem grande já no mobile */}
        <p className="mt-2 text-5xl lg:text-6xl font-bold text-[#bb4dff]">
          R$ 70,00
        </p>

        {/* PARCELAMENTO */}
        <p className="text-base lg:text-lg text-neutral-300 mt-1">
          em até 10x*
        </p>

        {/* BOTÃO – grande e quase full-width no mobile */}
        <button
          className="
            mt-8
            w-full max-w-sm mx-auto
            px-10 py-4
            text-lg lg:text-[15px]
            font-bold
            text-white
            rounded-lg
            bg-gradient-to-r from-[#d45bff] to-[#8d3bff]
            shadow-lg shadow-[#8d3bff]/40
            hover:scale-[1.03]
            transition-all duration-300
          "
        >
          CLIQUE AQUI PARA ADQUIRIR JÁ!
        </button>

         {/* BLOCO DA IMAGEM DO CELULAR */}
        <div className="mt-6 lg:mt-10">
          {/* MOBILE: recorte fechado só no celular */}
          <div className="flex justify-center lg:hidden">
            <div className="relative w-full max-w-sm h-48 overflow-hidden">
              <img
                src={bgPrecoCurso}
                alt=""
                className="
                  absolute
                  bottom-[-40px]
                  left-1/2 -translate-x-1/2
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-[900px] h-[260px] overflow-hidden">
              <img
                src={bgPrecoCurso}
                alt=""
                className="
                  absolute
                  bottom-[-100px]
                  left-1/2 -translate-x-1/2
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute top-0 left-0 right-0
                  h-1
                  bg-gradient-to-b
                  from-[#020508]
                  to-transparent
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
