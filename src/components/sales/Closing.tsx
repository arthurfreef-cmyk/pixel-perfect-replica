import { AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE, PRICES, isCheckoutPlaceholder } from "@/config/site";
import { Section, SectionHeading, Reveal, CtaLink } from "./primitives";

const faqs = [
  { q: "O OBRA IA é um curso?", a: "Não. O OBRA IA é uma solução prática de apoio à elaboração de orçamentos, com calculadoras, modelos, estrutura de precificação, geração de propostas e recursos de apoio com inteligência artificial." },
  { q: "Preciso entender de inteligência artificial para usar?", a: "Não. A proposta é oferecer uma experiência simples e orientada para a rotina de orçamentos. Você deverá inserir as informações da obra e revisar os resultados antes de utilizar ou enviar a proposta." },
  { q: "O sistema garante que meu orçamento estará sempre correto?", a: "Não. Os resultados dependem dos dados inseridos, dos preços praticados na sua região, das condições específicas da obra e da revisão feita pelo profissional. O OBRA IA é uma ferramenta de apoio e não substitui a análise profissional." },
  { q: "Serve para quem trabalha sozinho?", a: "Sim. O produto foi pensado especialmente para profissionais autônomos, empreiteiros e pequenas equipes que precisam organizar seus orçamentos de maneira mais prática." },
  { q: "Posso usar para pintura, elétrica ou hidráulica?", a: "A estrutura pode ser usada como apoio para diferentes tipos de serviços, incluindo reformas, pintura, elétrica e hidráulica. Os dados e parâmetros devem ser adaptados conforme cada atividade e cada obra." },
  { q: "O OBRA IA substitui um engenheiro ou arquiteto?", a: "Não. O OBRA IA não substitui engenheiros, arquitetos, técnicos ou outros profissionais habilitados. Ele serve como ferramenta de organização e apoio comercial. Projetos, cálculos técnicos, normas e responsabilidades legais devem ser tratados por profissionais habilitados quando necessário." },
  { q: `O pagamento de ${PRICES.profissional} é único ou mensal?`, a: "Consulte as condições de cobrança e acesso apresentadas no checkout antes de concluir a compra." },
  { q: "Como receberei o acesso?", a: "Após a confirmação da compra, as instruções de acesso serão enviadas conforme o processo configurado no checkout." },
  { q: "Posso adaptar os modelos para diferentes clientes?", a: "Sim. Os modelos servem como base de organização e devem ser personalizados conforme a obra, o cliente, os custos, as condições de pagamento e os serviços oferecidos." },
];

export function Faq() {
  return (
    <Section className="bg-muted">
      <SectionHeading eyebrow="Dúvidas" title="Perguntas frequentes" />
      <Reveal className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="rounded-xl border border-border bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left text-base font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-gradient px-4 py-24 text-center sm:px-6">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <Reveal className="relative mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-ink-foreground sm:text-5xl">
          Pare de começar cada orçamento <span className="text-accent">do zero.</span>
        </h2>
        <p className="mt-5 text-lg text-ink-muted">
          Organize seus cálculos, revise os principais custos e apresente suas propostas com mais clareza usando o OBRA IA.
        </p>
        <CtaLink className="mt-9">Quero organizar meus orçamentos agora</CtaLink>
        <p className="mt-5 text-sm text-ink-muted">
          Ferramenta de apoio para profissionais da construção civil. Revise todas as informações antes de enviar ou executar qualquer orçamento.
        </p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const links = [
    { label: "Termos de uso", href: SITE.termsUrl },
    { label: "Política de privacidade", href: SITE.privacyUrl },
    { label: "Suporte", href: `mailto:${SITE.supportEmail}` },
    { label: "Checkout", href: SITE.checkoutUrl },
  ];
  return (
    <footer className="border-t border-ink-border bg-ink px-4 pb-28 pt-12 text-ink-muted sm:px-6 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <p className="font-extrabold text-ink-foreground">
          OBRA <span className="text-accent">IA</span> <span className="font-medium text-ink-muted">— {SITE.tagline}</span>
        </p>
        <nav aria-label="Links do rodapé" className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-accent focus-visible:text-accent">{l.label}</a>
          ))}
        </nav>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed">
          O OBRA IA é uma ferramenta de apoio à organização de orçamentos. Ele não substitui análise técnica, profissional
          habilitado, conferência de medidas, consulta a fornecedores ou avaliação das condições específicas de cada obra.
        </p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} OBRA IA. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/** CTA fixo no rodapé, apenas no celular. */
export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-border bg-ink/95 p-3 backdrop-blur md:hidden">
      <CtaLink size="md" className="w-full">Quero o OBRA IA — {PRICES.profissional}</CtaLink>
    </div>
  );
}

/** Aviso visível quando o link de checkout ainda é o placeholder. */
export function CheckoutWarning() {
  if (!isCheckoutPlaceholder()) return null;
  return (
    <div role="alert" className="flex items-center justify-center gap-2 bg-destructive px-4 py-2 text-center text-xs font-semibold text-destructive-foreground">
      <AlertTriangle className="h-4 w-4 shrink-0" aria-hidden />
      Atenção: o link de checkout ainda é provisório. Configure o link real antes de publicar.
    </div>
  );
}
