import arrowIcon from "../assets/icon-arrow.svg" // ajuste o caminho se precisar

const doubts = [
  "Não sabe por onde começar ou como gravar sozinho?",
  "Fica perdido na edição e não entende o que realmente engaja?",
  "Posta, mas não tem resultado nem retorno de clientes?",
  "Fica travado tentando fazer tudo “perfeito” e acaba não começando?",
]

export default function DoubtsSection() {
  return (
    <section className="bg-[#110f12] px-4 py-10 lg:px-10 lg:px-16 lg:py-10 lg:py-15">
      <div className="mx-auto max-w-[1650px]">
        {/* MOBILE: cards empilhados (branco, roxo, branco, roxo) */}
        <div className="mx-auto max-w-md space-y-4 lg:hidden">
          {doubts.map((text, index) => {
            const isPurple = index % 2 === 1

            return (
              <div
                key={text}
                className={`flex items-center gap-4 rounded-3xl px-6 py-7 text-base leading-relaxed shadow-sm ${
                  isPurple
                    ? "bg-[#2b032e] text-white"
                    : "bg-white text-[#111111]"
                }`}
              >
                <img
                  src={arrowIcon}
                  alt=""
                  className="h-5 w-5 shrink-0"
                />
                <p>{text}</p>
              </div>
            )
          })}
        </div>

        {/* DESKTOP: 4 cards (2x2) com padrão de cores alternado em “xadrez” */}
        <div className="hidden lg:block">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 lg:gap-10">
              {doubts.map((text, index) => {
                // padrão: [branco, roxo, roxo, branco]
                const isPurpleDesktop = [false, true, true, false][index]

                return (
                  <div
                    key={text}
                    className={`flex h-full items-center gap-4 rounded-3xl px-8 py-8 text-[25px] leading-relaxed shadow-xl lg:px-10 lg:py-10 ${
                      isPurpleDesktop
                        ? "bg-[#2b032e] text-white"
                        : "bg-white text-[#111111]"
                    }`}
                  >
                    <img
                      src={arrowIcon}
                      alt=""
                      className="h-10 w-10 shrink-0"
                    />
                    <p>{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
