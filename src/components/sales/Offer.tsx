import { Gift, Check, X, ShieldCheck } from "lucide-react";
import { PRICES, GUARANTEE_ENABLED, GUARANTEE, planCheckout } from "@/config/site";
import { cn } from "@/lib/utils";
import { Section, SectionHeading, Reveal, CtaLink } from "./primitives";

const bonuses = [
  { title: "Biblioteca com 50 modelos de orçamentos", label: "Modelos para", items: ["Reformas", "Pintura", "Elétrica", "Hidráulica", "Construção"], value: "R$ 67" },
  { title: "Calculadora de pisos e revestimentos", label: "Inclui", items: ["Cálculo de áreas", "Quantidade de peças", "Percentual de perdas", "Argamassa", "Rejunte"], value: "R$ 47" },
  { title: "Precificador de serviços de pintura", label: "Inclui", items: ["Área", "Rendimento", "Materiais", "Mão de obra", "Custos envolvidos"], value: "R$ 47" },
  { title: "Kit de fechamento de serviços", label: "Inclui", items: ["Modelos de propostas", "Mensagens comerciais", "Estrutura de apresentação de orçamento", "Mensagens de acompanhamento de clientes"], value: "R$ 97" },
];

export function Bonuses() {
  return (
    <Section className="bg-background">
      <SectionHeading eyebrow="Bônus" title="E você ainda recebe estes 4 bônus para acelerar seu processo" />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {bonuses.map((b, i) => (
          <Reveal key={b.title} delay={(i % 2) * 80} className="relative rounded-2xl border-2 border-dashed border-accent/50 bg-card p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient text-accent-foreground">
                <Gift className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-accent">Bônus {i + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-foreground">{b.title}</h3>
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{b.label}</p>
            <ul className="mt-2 grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2">
              {b.items.map((it) => (
                <li key={it} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />{it}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">Valor de referência: <span className="font-bold text-foreground">{b.value}</span></p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-10 max-w-md rounded-2xl bg-primary px-6 py-5 text-center text-primary-foreground">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-foreground/70">Valor de referência dos bônus</p>
        <p className="mt-1 text-3xl font-extrabold text-accent">{PRICES.bonusReferenceTotal}</p>
      </Reveal>
    </Section>
  );
}

const forYou = ["Você trabalha por conta própria.", "Você possui uma pequena equipe.", "Você faz reformas e serviços de construção.", "Você calcula materiais e mão de obra manualmente.", "Você perde tempo refazendo orçamentos.", "Você quer apresentar propostas mais profissionais.", "Você deseja revisar melhor os custos de cada obra."];
const notForYou = ["Você procura uma fórmula mágica para definir qualquer preço.", "Você quer garantir lucro sem revisar os dados.", "Você espera que a ferramenta substitua um engenheiro ou arquiteto.", "Você não pretende conferir as informações antes de enviar a proposta.", "Você quer uma solução que funcione sem inserir dados corretos."];
const without = ["Informações espalhadas", "Cálculos repetidos", "Maior chance de esquecer itens", "Dificuldade para revisar", "Propostas pouco padronizadas", "Mais tempo para responder ao cliente"];
const withObra = ["Informações estruturadas", "Fluxo de orçamento organizado", "Materiais e custos separados", "Parâmetros ajustáveis", "Propostas mais profissionais", "Mais facilidade para revisar os dados"];

function ListCard({ title, items, positive }: { title: string; items: string[]; positive: boolean }) {
  const Icon = positive ? Check : X;
  return (
    <Reveal className={cn("rounded-2xl border p-7", positive ? "border-success/40 bg-card shadow-soft" : "border-border bg-muted")}>
      <h3 className={cn("text-sm font-extrabold uppercase tracking-wider", positive ? "text-success" : "text-muted-foreground")}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full", positive ? "bg-success text-success-foreground" : "bg-destructive/15 text-destructive")}>
              <Icon className="h-3 w-3" aria-hidden />
            </span>
            <span className={positive ? "text-foreground" : "text-muted-foreground"}>{it}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Audience() {
  return (
    <Section className="bg-muted">
      <SectionHeading title="O OBRA IA foi feito para profissionais que querem cobrar com mais organização" />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <ListCard title="É para você se" items={forYou} positive />
        <ListCard title="Não é para você se" items={notForYou} positive={false} />
      </div>
      <div className="mt-24">
        <SectionHeading title="Pare de improvisar cada orçamento do zero" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ListCard title="Sem um processo organizado" items={without} positive={false} />
          <ListCard title="Com o OBRA IA" items={withObra} positive />
        </div>
      </div>
    </Section>
  );
}

const proItems = ["Calculadora inteligente de materiais", "Calculadora de mão de obra", "Orçamentista completo", "Gerador de orçamentos em PDF", "Consultor de obras com IA", "Controle de obras e lucro", "Biblioteca com 50 modelos de orçamentos", "Calculadora de pisos e revestimentos", "Precificador de serviços de pintura", "Kit de fechamento de serviços"];

const plans = [
  { key: "essencial" as const, name: "OBRA IA Essencial", price: PRICES.essencial, items: ["Calculadora de materiais", "Calculadora de mão de obra", "Modelos básicos de orçamento", "Treinamento inicial"] },
  { key: "profissional" as const, name: "OBRA IA Profissional", price: PRICES.profissional, items: ["Tudo do Essencial", "Orçamentista completo", "Gerador de PDF", "Consultor de IA", "Controle de obras", "Quatro bônus"] },
  { key: "master" as const, name: "OBRA IA Master", price: PRICES.master, items: ["Tudo do Profissional", "Biblioteca avançada de composições", "Modelos especializados de propostas", "Treinamento de precificação", "Ferramentas para múltiplas obras", "Implementação avançada"] },
];

export function Offer() {
  return (
    <Section id="oferta" className="relative overflow-hidden bg-ink-gradient">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="relative">
        <SectionHeading
          dark
          eyebrow="Oferta"
          title="Comece a organizar seus orçamentos com o OBRA IA Profissional"
          subtitle="Tenha uma estrutura prática para calcular materiais, organizar mão de obra, considerar custos adicionais, revisar sua margem e apresentar propostas mais profissionais."
        />
        <Reveal className="relative mx-auto mt-14 max-w-xl rounded-3xl border-2 border-accent bg-card p-8 text-card-foreground shadow-mockup sm:p-10">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent-gradient px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-accent-foreground">
            Plano mais completo para começar
          </span>
          <p className="text-center text-sm font-extrabold uppercase tracking-widest text-muted-foreground">OBRA IA Profissional</p>
          <p className="mt-2 text-center text-6xl font-extrabold tracking-tight text-primary">{PRICES.profissional}</p>
          <p className="mx-auto mt-4 max-w-sm text-center text-muted-foreground">
            Tudo o que você precisa para estruturar seus orçamentos e transformar informações soltas em propostas mais claras.
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-muted-foreground">O plano inclui</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {proItems.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />{it}</li>
            ))}
          </ul>
          <CtaLink href={planCheckout("profissional")} className="mt-8 w-full">Quero o OBRA IA Profissional</CtaLink>
          <p className="mt-3 text-center text-xs text-muted-foreground">Acesso e condições comerciais conforme informações apresentadas no checkout.</p>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((p) => {
            const featured = p.key === "profissional";
            return (
              <Reveal key={p.key} className={cn("flex flex-col rounded-2xl border p-6", featured ? "border-accent bg-card text-card-foreground md:scale-105 shadow-mockup" : "border-ink-border bg-ink-card text-ink-foreground")}>
                {featured && <span className="mb-3 self-start rounded-full bg-accent/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-accent">Recomendado</span>}
                <h3 className="text-sm font-extrabold uppercase tracking-wider">{p.name}</h3>
                <p className={cn("mt-2 text-4xl font-extrabold", featured ? "text-primary" : "text-ink-foreground")}>{p.price}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden /><span className={featured ? "" : "text-ink-muted"}>{it}</span></li>
                  ))}
                </ul>
                <CtaLink href={planCheckout(p.key)} variant={featured ? "primary" : "ghost"} size="md" className="mt-auto w-full" style={{ marginTop: "1.5rem" }}>
                  Escolher plano
                </CtaLink>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export function Guarantee() {
  return (
    <Section className="bg-background">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
        <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-success/15 text-success">
          <ShieldCheck className="h-10 w-10" aria-hidden />
        </span>
        <div>
          <h2 className="text-2xl font-extrabold text-foreground">Conheça o OBRA IA com tranquilidade</h2>
          {GUARANTEE_ENABLED ? (
            <div className="mt-2 space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Garantia de {GUARANTEE.days} dias.</strong> {GUARANTEE.text}</p>
              <p className="text-sm">{GUARANTEE.conditions} Contato: <a className="underline" href={`mailto:${GUARANTEE.email}`}>{GUARANTEE.email}</a></p>
            </div>
          ) : (
            <p className="mt-2 text-muted-foreground">Consulte no checkout as condições de acesso, suporte, garantia e reembolso aplicáveis a esta oferta.</p>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
