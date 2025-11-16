import imgModulos from "../assets/img-modulos.jpg"
import iconCursos from "../assets/icon-cursos.svg"

const itens = [
  "4 módulos - 18 aulas",
  "Curso 100% online",
  "Certificado de conclusão",
  "Do básico ao avançado",
  "Plano vitalício",
  "Suporte por WhatsApp",
]

export default function ModulesSection() {
  return (
    <section className="bg-black">
      <div className="flex min-h-screen w-full flex-col">
        
        {/* --- IMAGEM + TÍTULO SOBREPOSTO --- */}
        <div className="relative w-full overflow-hidden">
          <img
            src={imgModulos}
            alt="Alunas do curso"
            className="h-[430px] lg:h-[600px] w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

          <div className="absolute bottom-8 lg:bottom-16 left-1/2 w-full -translate-x-1/2 px-6 text-center">
            <h2 className="text-[40px] lg:text-[72px] font-extrabold leading-tight tracking-tight text-white">
              <span className="block lg:inline">DO ZERO AO</span>{" "}
              <span className="block lg:inline text-[#c254ff]">
                PROPÓSITO
              </span>
            </h2>
          </div>
        </div>

        {/* --- LISTA DE MÓDULOS --- */}
        <div className="flex-1 bg-black px-4 pb-16 pt-10">
          <div
            className="
              mx-auto 
              max-w-md 
              lg:max-w-5xl 
              rounded-[32px] 
              bg-[#19181E] 
              px-4 lg:px-10 
              py-6 lg:py-10 
              space-y-4 
              lg:space-y-0 
              lg:grid 
              lg:grid-cols-2 
              lg:gap-6
            "
          >
            {itens.map((texto) => (
              <div
                key={texto}
                className="rounded-[999px] bg-gradient-to-b from-[#27272f] to-[#050507] px-4 py-4 shadow-[0_12px_25px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-center gap-3 lg:gap-4">
                  <span className="flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-gradient-to-b from-[#d45bff] to-[#8b3bff] shadow-[0_0_20px_rgba(212,91,255,0.8)]">
                    <img src={iconCursos} alt="" className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>

                  <p className="text-white text-[15px] lg:text-[18px]">
                    {texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="
              mt-8 
              block 
              w-full 
              max-w-md 
              lg:max-w-lg 
              rounded-[999px] 
              bg-gradient-to-r 
              from-[#ff4ad9] via-[#c254ff] to-[#8245ff] 
              py-4 
              text-center 
              text-xs lg:text-sm 
              font-semibold 
              uppercase 
              tracking-[0.12em] 
              text-white 
              shadow-[0_18px_35px_rgba(0,0,0,0.85)] 
              mx-auto
            "
          >
            CLIQUE AQUI E ADQUIRA JÁ!
          </button>
        </div>
      </div>
    </section>
  )
}
