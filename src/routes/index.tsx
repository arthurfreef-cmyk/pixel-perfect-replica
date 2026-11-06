import { createFileRoute } from "@tanstack/react-router";
import { TopBar, Header, Hero } from "@/components/sales/Hero";
import { Problem, Product } from "@/components/sales/Problem";
import { HowItWorks } from "@/components/sales/Method";
import { Offer, Guarantee } from "@/components/sales/Offer";
import { Faq, Footer, MobileStickyCta } from "@/components/sales/Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OBRA IA | Pare de errar nos seus orçamentos" },
      {
        name: "description",
        content:
          "Organize materiais, mão de obra e custos da obra. Monte orçamentos mais claros e propostas profissionais com o OBRA IA.",
      },
      { property: "og:title", content: "OBRA IA — Orçamentos sem improviso" },
      {
        property: "og:description",
        content: "Organize seus custos, revise seus cálculos e apresente propostas profissionais.",
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
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Product />
        <HowItWorks />
        <Offer />
        <Guarantee />
        <Faq />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
