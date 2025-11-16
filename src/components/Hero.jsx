import heroImage from "../assets/img-home.jpg"

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* desktop (por enquanto usando a mesma imagem) */}
      <img
        src={heroImage}
        alt="mcp hero"
        className="hidden w-full lg:block"
      />

      {/* versão mobile - mesma imagem por enquanto */}
      <img
        src={heroImage}
        alt="mcp hero mobile"
        className="w-full lg:hidden"
      />
    </section>
  )
}
