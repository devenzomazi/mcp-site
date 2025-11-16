// src/components/FaqSection.tsx
import faqIcon from "../assets/ballon-_.png"
import pergunta1 from "../assets/Pergunta-1.png"
import pergunta2 from "../assets/pergunta-2.png"
import pergunta3 from "../assets/pergunta-3.png"
import resposta1 from "../assets/resposta-1.png"
import resposta2 from "../assets/resposta-2.png"
import resposta3 from "../assets/resposta-3.png"
import bgFooter from "../assets/bg-footer.jpg"
import footerSocial from "../assets/footer-redes-sociais.png"

export default function FaqSection() {
  return (
    <section className="relative w-full bg-[#000106] text-white">
      {/* CONTEÚDO (fica por cima da wave) */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-40 pb-40 lg:pb-56">
        {/* ÍCONE + TÍTULO */}
        <div className="flex gap-4">
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight tracking-[0.18em]">
            <span className="block">PERGUNTAS</span>
            <span className="block">FREQUENTES</span>
          </h2>
          <img
            src={faqIcon}
            alt="Balão de pergunta"
            className="h-16 w-16 lg:h-24 lg:w-24"
          />
        </div>

        {/* PARES PERGUNTA + RESPOSTA */}
        <div className="mt-14 flex flex-col gap-12 lg:gap-14 max-w-5xl">
          {/* PAR 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src={pergunta1}
                alt="Para quem o curso é destinado?"
                className="w-[260px] lg:w-[320px]"
              />
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={resposta1}
                alt="Resposta 1"
                className="w-full max-w-[620px]"
              />
            </div>
          </div>

          {/* PAR 2 */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src={pergunta2}
                alt="Quanto tempo de curso?"
                className="w-[230px] lg:w-[280px]"
              />
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={resposta2}
                alt="Resposta 2"
                className="w-full max-w-[620px]"
              />
            </div>
          </div>

          {/* PAR 3 */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-center lg:justify-start">
              <img
                src={pergunta3}
                alt="Terei um certificado no final?"
                className="w-[260px] lg:w-[320px]"
              />
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src={resposta3}
                alt="Resposta 3"
                className="w-full max-w-[620px]"
              />
            </div>
          </div>
        </div>

        {/* REDES SOCIAIS SOBRE A ONDA */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <img
            src={footerSocial}
            alt="@mcpmidia e email de contato"
            className="w-[220px] lg:w-[260px]"
          />
        </div>
      </div>

      {/* LINKS DE POLÍTICAS NO CANTO INFERIOR DIREITO */}
      <div className="absolute bottom-3 lg:bottom-5 right-4 lg:right-10 z-20">
        <nav className="flex flex-col items-end gap-1 text-[10px] lg:flex-row lg:items-center lg:gap-4 lg:text-xs text-white/85">
          <a href="#" className="hover:text-white transition">
            Políticas de Privacidade
          </a>
          <span className="hidden lg:inline-block text-white/60">|</span>
          <a href="#" className="hover:text-white transition">
            Políticas de Cookies
          </a>
          <span className="hidden lg:inline-block text-white/60">|</span>
          <a href="#" className="hover:text-white transition">
            Termos de Serviço
          </a>
        </nav>
      </div>

      {/* FUNDO ONDA ROXA NA PARTE INFERIOR */}
      <img
        src={bgFooter}
        alt=""
        className="
          pointer-events-none select-none
          absolute inset-x-0 bottom-0
          h-[220px] lg:h-[260px]
          w-full
          object-cover
          z-0
        "
      />
    </section>
  )
}
