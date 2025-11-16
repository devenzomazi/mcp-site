// src/components/AboutMCPSection.tsx
import mainImage from "../assets/img-depoimento.png"
import quoteBalloon from "../assets/depoimento-balao.png"
import logoMCP from "../assets/logo-mcp.svg" // ajuste o nome se necessário

export default function AboutMCPSection() {
  return (
    <section className="w-full bg-[#000106] text-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* TOPO: IMAGEM + TEXTO (ordem muda no mobile) */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start">
          {/* TEXTO – mobile primeiro / desktop direita */}
          <div className="order-1 lg:order-2 w-full lg:w-[52%]">
            {/* TÍTULO + LOGO */}
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-semibold leading-tight text-[#b55bff]">
                Como surgiu a
              </h2>

              {/* LOGO + EXCLAMAÇÃO */}
              <div className="flex items-end gap-2 mt-2 justify-center lg:justify-start">
                <img
                  src={logoMCP}
                  alt="Logo MCP"
                  className="h-12 lg:h-12"
                />
                <span className="text-5xl lg:text-6xl font-bold text-[#b55bff]">
                  ?
                </span>
              </div>
            </div>

            {/* TEXTO DESCRITIVO */}
            <p className="text-base lg:text-lg text-neutral-200 text-justify leading-relaxed">
              A MCP (Mídia com Propósito) nasceu com Vitória e Júlia, duas
              estudantes de Publicidade e Propaganda que transformaram o celular
              em uma ferramenta de trabalho e propósito. Há quatro anos, a MCP
              vem criando conteúdos para marcas, eventos e profissionais de
              diferentes áreas, mostrando que é possível produzir com excelência
              usando o que se tem nas mãos.
              <br />
              <br />
              Com uma trajetória construída na prática, a agência se tornou
              referência em vídeos feitos com celular e hoje compartilha toda
              essa experiência através do curso Do Zero ao Propósito, formando
              novos Storymakers e Reelsmakers prontos para começar do jeito
              certo.
            </p>
          </div>

          {/* IMAGEM PRINCIPAL – mobile depois / desktop esquerda */}
          <div className="order-2 lg:order-1 w-full lg:w-[48%] flex justify-center">
            <img
              src={mainImage}
              alt="Vitória e Júlia da MCP"
              className="w-full max-w-[620px] rounded-[32px] object-cover"
            />
          </div>
        </div>

        {/* BALÃO DEPOIMENTO – embaixo em ambos */}
        <div className="mt-20 flex justify-center">
          <img
            src={quoteBalloon}
            alt="Depoimento MCP"
            className="w-full max-w-[1100px]"
          />
        </div>
      </div>
    </section>
  )
}
