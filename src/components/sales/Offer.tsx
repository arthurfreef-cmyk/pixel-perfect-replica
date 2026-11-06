import { Check, ShieldCheck } from "lucide-react";
import { PRICES, GUARANTEE_ENABLED, GUARANTEE, planCheckout } from "@/config/site";
import { cn } from "@/lib/utils";
import { Section, SectionHeading, Reveal, CtaLink } from "./primitives";

const plans = [
  {
    key: "essencial" as const,
    name: "Essencial",
    price: PRICES.essencial,
    description: "Para começar a organizar os cálculos.",
    items: ["Calculadora de materiais", "Calculadora de mão de obra", "Modelos básicos de orçamento", "Treinamento inicial"],
  },
  {
    key: "profissional" as const,
    name: "Profissional",
    price: PRICES.profissional,
    description: "A estrutura completa para sua rotina de orçamentos.",
    items: ["Tudo do Essencial", "Orçamentista completo", "Gerador de orçamento em PDF", "Consultor de obras com IA", "Controle de obras e lucro", "Biblioteca com 50 modelos", "Calculadora de pisos e pintura", "Kit de fechamento de serviços"],
  },
  {
    key: "master" as const,
    name: "Master",
    price: PRICES.master,
    description: "Recursos adicionais para uma operação mais ampla.",
    items: ["Tudo do Profissional", "Biblioteca avançada de composições", "Modelos especializados de propostas", "Treinamento de precificação", "Ferramentas para múltiplas obras", "Implementação avançada"],
  },
];

export function Offer() {
  return (
    <Section id="oferta" className="bg-ink-gradient">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">Escolha seu acesso</p>
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink-foreground sm:text-4xl">
          Quanto custa continuar fazendo orçamento no escuro?
        </h2>
        <p className="mt-3 text-base text-ink-muted">
          Escolha a versão do OBRA IA que combina com o seu trabalho e tenha uma estrutura para organizar custos e propostas.
        </p>
      </div>
      <div className="mx-auto mt-9 grid max-w-5xl items-stretch gap-4 lg:grid-cols-3">
        {plans.map((p) => {
          const featured = p.key === "profissional";
          return (
            <Reveal key={p.key} className={cn(
              "flex flex-col rounded-2xl border p-5 sm:p-6",
              featured ? "border-accent bg-card text-card-foreground shadow-mockup lg:-translate-y-2" : "border-ink-border bg-ink-card text-ink-foreground",
            )}>
              {featured && <span className="mb-3 self-start rounded-full bg-accent/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-primary">Mais completo</span>}
              <h3 className="text-sm font-extrabold uppercase tracking-wider">{p.name}</h3>
              <p className={cn("mt-2 text-4xl font-extrabold tracking-tight", featured ? "text-primary" : "text-ink-foreground")}>{p.price}</p>
              <p className={cn("mt-2 min-h-10 text-sm", featured ? "text-muted-foreground" : "text-ink-muted")}>{p.description}</p>
              <div className={cn("my-4 h-px", featured ? "bg-border" : "bg-ink-border")} />
              <ul className="space-y-2.5 text-sm">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    <span className={featured ? "text-foreground" : "text-ink-muted"}>{item}</span>
                  </li>
                ))}
              </ul>
              <CtaLink href={planCheckout(p.key)} variant={featured ? "primary" : "ghost"} size="md" className="mt-6 w-full">
                Escolher {p.name}
              </CtaLink>
            </Reveal>
          );
        })}
      </div>
      <p className="mt-6 text-center text-xs text-ink-muted">
        Confira as condições de acesso e pagamento antes de concluir sua compra.
      </p>
    </Section>
  );
}

export function Guarantee() {
  return (
    <Section className="bg-background">
      <Reveal className="mx-auto flex max-w-3xl items-center gap-4 rounded-xl border border-border bg-card p-5">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-success/15 text-success">
          <ShieldCheck className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h2 className="font-extrabold text-foreground">Compre com informação clara</h2>
          {GUARANTEE_ENABLED ? (
            <div className="mt-1 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Garantia de {GUARANTEE.days} dias.</strong> {GUARANTEE.text}</p>
              <p className="mt-1">{GUARANTEE.conditions} Contato: <a className="underline" href={`mailto:${GUARANTEE.email}`}>{GUARANTEE.email}</a></p>
            </div>
          ) : (
            <p className="mt-1 text-sm text-muted-foreground">Consulte as condições de acesso, suporte e reembolso antes de finalizar o pedido.</p>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
