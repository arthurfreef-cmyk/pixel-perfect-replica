import { createFileRoute } from "@tanstack/react-router";
import { TopBar, Header, Hero } from "@/components/sales/Hero";
import { Problem, Product } from "@/components/sales/Problem";
import { HowItWorks, Method, Modules } from "@/components/sales/Method";
import { Bonuses, Audience, Offer, Guarantee } from "@/components/sales/Offer";
import { Faq, FinalCta, Footer, MobileStickyCta, CheckoutWarning } from "@/components/sales/Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OBRA IA | Orçamentos e Precificação para Construção Civil" },
      {
        name: "description",
        content:
          "Organize materiais, mão de obra, custos e propostas profissionais com o OBRA IA, uma solução de apoio para pedreiros, empreiteiros e profissionais de reformas.",
      },
      { property: "og:title", content: "OBRA IA — Pare de improvisar nos seus orçamentos" },
      {
        property: "og:description",
        content:
          "Uma ferramenta prática para ajudar profissionais da construção civil a organizar custos, precificar serviços e apresentar propostas profissionais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <CheckoutWarning />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Product />
        <HowItWorks />
        <Method />
        <Modules />
        <Bonuses />
        <Audience />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
