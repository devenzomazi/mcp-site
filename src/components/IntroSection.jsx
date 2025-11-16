import imgHome2 from "../assets/img-home2.png"

export default function IntroSection() {
  return (
    <section className="bg-[#110f12] px-4 py-1 lg:px-10 lg:px-10 lg:py-1">
      <div className="mx-auto flex max-w-[1650px] flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-24">
        {/* COLUNA TEXTO */}
        <div className="w-full text-center lg:w-[50%] lg:text-left">
          {/* limita largura do texto no mobile pra ficar mais parecido com o Figma */}
          <div className="mx-auto max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
            <h2 className="font-montserrat text-[24px] font-extrabold leading-tight tracking-tight text-white sm:text-[26px] lg:text-[40px] lg:text-[50px]">
              APRENDA A CRIAR{" "}
              <span className="text-purple-400">CONTEÚDOS</span>{" "}
              <span className="text-purple-400">PROFISSIONAIS</span> COM O
              CELULAR E À VIVER DA SUA CRIATIVIDADE.
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-zinc-200 sm:text-[15px] lg:mt-6 lg:max-w-lg lg:text-base lg:text-[17px]">
              Você vai aprender do absoluto zero, tudo que precisa para começar
              hoje sua carreira como storymaker e fechar seu primeiro contrato.
            </p>

            <button className="mt-8 inline-flex rounded-full border border-purple-400 px-10 py-3.5 text-xs font-semibold uppercase tracking-wide text-purple-300 transition hover:bg-purple-500 hover:text-white sm:text-sm lg:px-10 lg:py-3.5 lg:text-sm">
              FAÇA SUA INSCRIÇÃO AGORA!
            </button>
          </div>
        </div>

        {/* COLUNA IMAGEM */}
        <div className="flex w-full justify-center lg:w-[50%] lg:justify-end">
          <img
            src={imgHome2}
            alt="iPhone com balões"
            className="w-[320px] sm:w-[340px] lg:w-[520px] lg:w-[600px] xl:w-[680px]"
          />
        </div>
      </div>
    </section>
  )
}
