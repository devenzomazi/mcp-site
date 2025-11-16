// src/components/FeedbackSection.jsx
import { useState } from "react"

// Prints de feedback
import fb1 from "../assets/Feedback (4).png"
import fb2 from "../assets/Feedback (2).png"
import fb3 from "../assets/Feedback (3).png"
import fb4 from "../assets/Feedback (1).png"

// Ícone do balão
import iconHeart from "../assets/Ballon-feedback.png"

const feedbackImages = [
  { src: fb1, alt: "Feedback 1 de aluna MCP" },
  { src: fb2, alt: "Feedback 2 de aluna MCP" },
  { src: fb3, alt: "Feedback 3 de aluna MCP" },
  { src: fb4, alt: "Feedback 4 de aluna MCP" },
]

// tamanhos só para desktop (lg+)
const sizeByIndex = [
  "lg:w-[380px]",
  "lg:w-[420px]",
  "lg:w-[400px]",
  "lg:w-[380px]",
]

export default function FeedbackSection() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative w-full bg-white py-16 px-4">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 pb-16">
        {/* TÍTULO */}
        <header className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <img
            src={iconHeart}
            alt=""
            className="h-16 w-16 md:h-20 md:w-20 drop-shadow-[0_0_25px_rgba(255,0,255,0.5)]"
          />

          <div>
            <p className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.3em] text-[#ff4ad9]">
              FEEDBACKS
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-black">
              QUE AMAMOS!
            </h2>
          </div>
        </header>

        {/* CARROSSEL MOBILE + GRID DESKTOP */}
        <div className="mt-6 w-full">
          {/* MOBILE: carrossel horizontal (scrollbar invisível) */}
          <div
            className="
              -mx-4 flex gap-4 overflow-x-auto pb-4 pl-4 lg:hidden
              snap-x snap-mandatory
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {feedbackImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelected(img)}
                className="
                  group relative 
                  snap-center 
                  min-w-[80%] max-w-[360px]
                  transition-transform duration-200 
                  hover:-translate-y-1
                "
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="
                    block w-full h-auto
                    transition-transform duration-200 
                    group-hover:scale-[1.02]
                  "
                />
              </button>
            ))}
          </div>

          {/* DESKTOP: grid 2x2 simétrico */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:justify-items-center">
            {feedbackImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelected(img)}
                className="
                  group relative 
                  transition-transform duration-200 
                  hover:-translate-y-1
                "
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`
                    block h-auto
                    ${sizeByIndex[index] || "lg:w-[400px]"}
                    transition-transform duration-200 
                    group-hover:scale-[1.02]
                  `}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="
                absolute -top-10 right-0 
                rounded-full bg-white/10 
                px-3 py-1 text-xs font-semibold uppercase 
                tracking-[0.15em] text-white 
                hover:bg-white/20
              "
            >
              Fechar ✕
            </button>

            <img
              src={selected.src}
              alt={selected.alt}
              className="w-full h-auto rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      )}
    </section>
  )
}
