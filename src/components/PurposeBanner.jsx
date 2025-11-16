export default function PurposeBanner() {
  return (
    // fundo neutro (pode ser branco ou seguir o fundo da seção anterior)
    <section className="w-full bg-white">
      {/* barra preta com a curva só no canto superior esquerdo */}
      <div className="w-full bg-[#121013] rounded-tl-[56px] py-10 lg:py-14">
        {/* wrapper só para limitar a largura do texto e centralizar */}
        <div className="mx-auto max-w-4x2 px-6 text-center text-white">
          <h2 className="text-4xl leading-snug lg:text-5xl lg:leading-snug font-medium">
            Crie com{" "}
            <span className="text-[#c254ff] font-semibold">
              propósito.
            </span>{" "}
            Cresça com estratégia.
            <br />
            Viva do que você ama!
          </h2>
        </div>
      </div>
    </section>
  );
}
