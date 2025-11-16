import { useState } from "react"
import logo from "../assets/logo-mcp.svg"

const navItems = [
  { id: "curso", label: "Módulos", href: "#curso" },
  { id: "feedbacks", label: "Feedbacks", href: "#feedbacks" },
  { id: "aprendizados", label: "Aprendizados", href: "#aprendizados" },
  { id: "sobre", label: "Sobre nós", href: "#sobre" },
  { id: "faq", label: "Perguntas frequentes", href: "#faq" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  // 👉 aqui estava o problema: useState<string>("curso")
  const [activeId, setActiveId] = useState("curso")

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black">
      <nav className="relative flex h-22 items-center justify-between px-15">
        {/* LOGO */}
        <a href="#top" className="inline-flex items-center">
          <img src={logo} alt="mcp" className="h-9" />
        </a>

        {/* MENU DESKTOP CENTRALIZADO */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          <div className="pointer-events-auto flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                className={`relative text-sm font-medium text-white transition ${
                  item.id === activeId
                    ? "after:absolute after:left-0 after:top-full after:h-[2px] after:w-full after:bg-purple-400"
                    : "hover:text-purple-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* BOTÃO ROXO – desktop */}
        <a
          href="#cta"
          className="hidden rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110 lg:inline-flex"
        >
          ADQUIRIR JÁ!
        </a>

        {/* HAMBÚRGUER – mobile */}
        <button
          type="button"
          className="relative flex h-8 w-8 items-center justify-center lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          <span
            className={`absolute h-[2px] w-6 bg-white transition-transform ${
              open ? "translate-y-0 rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-[2px] w-6 bg-white transition-transform ${
              open ? "translate-y-0 -rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* MENU MOBILE ABERTO */}
      {open && (
        <div className="bg-black lg:hidden">
          <div className="flex flex-col items-center gap-6 border-t border-zinc-800 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveId(item.id)
                  setOpen(false)
                }}
                className={`relative text-lg font-medium text-white ${
                  item.id === activeId
                    ? "after:absolute after:left-0 after:top-full after:h-[2px] after:w-full after:bg-purple-400"
                    : "hover:text-purple-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
