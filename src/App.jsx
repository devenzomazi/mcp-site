import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import IntroSection from "./components/IntroSection"
import DoubtsSection from "./components/DoubtsSection"
import ModulesSection from "./components/ModulesSection"
import FeedbacksSection from "./components/FeedbackSection"
import PurposeBanner from "./components/PurposeBanner";
import WhatYouWillLearnSection from "./components/WhatYouWillLearnSection"
import PriceSection from "./components/PriceSection"
import AboutMCPSection from "./components/AboutMCPSection"
import CallToActionPurposeSection from "./components/CallToActionPurposeSection"
import FaqSection from "./components/FaqSection"

function App() {
  return (
    <>
      <Navbar />

      {/* padding pra compensar a navbar fixa */}
      <main className="pt-16">
        {/* TOPO (pra logo #top) */}
        <section id="top" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="intro" className="scroll-mt-24">
          <IntroSection />
        </section>

        <section id="duvidas" className="scroll-mt-24">
          <DoubtsSection />
        </section>

        {/* esse precisa bater com o href "#curso" */}
        <section id="curso" className="scroll-mt-24">
          <ModulesSection />
        </section>

        <section id="feedbacks" className="scroll-mt-24">
          <FeedbacksSection />
        </section>

        <section id="aprendizados" className="scroll-mt-24">
          <PurposeBanner />
          <WhatYouWillLearnSection />
        </section>

        {/* seção do botão ADQUIRIR JÁ! (#cta) */}
        <section id="cta" className="scroll-mt-24">
          <PriceSection />
        </section>

        <section id="sobre" className="scroll-mt-24">
          <AboutMCPSection />
          <CallToActionPurposeSection />
        </section>

        <section id="faq" className="scroll-mt-24">
          <FaqSection />
        </section>
      </main>
    </>
  )
}

export default App
