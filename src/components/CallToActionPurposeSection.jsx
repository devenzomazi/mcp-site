// src/components/CallToActionPurposeSection.tsx
import iconLampada from "../assets/icon-lampada.svg"

export default function CallToActionPurposeSection() {
  return (
    <section className="w-full bg-white px-4 py-16 lg:py-19">
      <div className="mx-auto max-w-3xl text-center text-[#1a1a1a]">
        {/* ÍCONE */}
        <img
          src={iconLampada}
          alt="Ícone de ideia"
          className="mx-auto mb-4 h-10 w-10 lg:h-12 lg:w-12"
        />

        {/* TÍTULO */}
        <h2 className="text-2xl lg:text-4xl font-semibold leading-snug mb-4">
          Se assim como nós, você
          <br />
          entendeu o seu{" "}
          <span className="text-[#b55bff]">propósito...</span>
        </h2>

        {/* TEXTO DE APOIO */}
        <p className="text-sm lg:text-base text-neutral-600 leading-relaxed mb-8">
          Esse curso é para você.{" "}
          <span className="font-semibold">Clique agora</span> no botão abaixo e
          comece sua carreira como Storymakers e Reelsmakers.
        </p>

        {/* BOTÃO */}
        <button
          className="
            inline-flex items-center justify-center
            mx-auto
            px-10 lg:px-14
            py-3.5 lg:py-4
            rounded-lg
            text-sm lg:text-base
            font-bold
            text-white
            bg-gradient-to-r from-[#d45bff] to-[#8d3bff]
            shadow-lg shadow-[#8d3bff]/40
            hover:scale-[1.03]
            transition-transform duration-300
          "
        >
          COMEÇAR AGORA!
        </button>
      </div>
    </section>
  )
}
