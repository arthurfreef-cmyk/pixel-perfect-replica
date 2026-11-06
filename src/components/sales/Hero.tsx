import { Calculator, FileDown, HardHat, Sparkles } from "lucide-react";
import { SITE, PRICES } from "@/config/site";
import { CtaLink, Reveal } from "./primitives";

export function TopBar() {
  return (
    <div className="bg-ink px-4 py-2.5 text-center text-xs text-ink-muted sm:text-sm">
      <span>Seu próximo orçamento pode ser mais rápido, mais claro e muito mais profissional.</span>{" "}
      <a href="#produto" className="ml-1 font-bold text-accent underline-offset-4 hover:underline focus-visible:underline">
        Conhecer o OBRA IA →
      </a>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-border bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#topo" className="flex items-center gap-2 text-ink-foreground" aria-label="OBRA IA — início">
          {SITE.logoUrl ? (
            <img src={SITE.logoUrl} alt="OBRA IA" className="h-8 w-auto" />
          ) : (
            <>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-accent-foreground">
                <HardHat className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                OBRA <span className="text-accent">IA</span>
              </span>
            </>
          )}
        </a>
        <CtaLink size="md" arrow={false} className="hidden sm:inline-flex">
          Quero o OBRA IA
        </CtaLink>
      </div>
    </header>
  );
}

const rows: { label: string; value: string }[] = [
  { label: "Materiais", value: "R$ 2.180,00" },
  { label: "Mão de obra", value: "R$ 1.900,00" },
  { label: "Transporte", value: "R$ 180,00" },
  { label: "Custos indiretos", value: "R$ 260,00" },
];

function Mockup() {
  return (
    <div className="relative" aria-label="Tela ilustrativa do sistema OBRA IA" role="img">
      <div className="absolute -left-3 -top-4 z-10 flex items-center gap-1.5 rounded-full bg-accent-gradient px-3 py-1.5 text-xs font-bold text-accent-foreground shadow-cta">
        <Sparkles className="h-3.5 w-3.5" aria-hidden /> Orçamento organizado em poucos passos
      </div>
      <div className="overflow-hidden rounded-2xl border border-ink-border bg-card text-card-foreground shadow-mockup">
        <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
          <span className="ml-3 text-xs font-semibold text-muted-foreground">obra-ia / novo orçamento</span>
        </div>
        <div className="space-y-4 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Obra</p>
              <p className="text-lg font-extrabold">Reforma de banheiro</p>
            </div>
            <div className="rounded-lg bg-secondary px-3 py-1.5 text-right">
              <p className="text-[10px] font-semibold uppercase text-muted-foreground">Área</p>
              <p className="font-extrabold">8 m²</p>
            </div>
          </div>
          <ul className="divide-y divide-border rounded-xl border border-border">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center justify-between px-4 py-2.5 text-sm">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Calculator className="h-3.5 w-3.5 text-accent" aria-hidden /> {r.label}
                </span>
                <span className="font-bold tabular-nums">{r.value}</span>
              </li>
            ))}
            <li className="flex items-center justify-between px-4 py-2.5 text-sm">
              <span className="text-muted-foreground">Margem desejada</span>
              <span className="rounded-md bg-success/15 px-2 py-0.5 font-bold text-success">20%</span>
            </li>
          </ul>
          <div className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-primary-foreground">
            <span className="text-sm font-semibold">Preço final sugerido</span>
            <span className="text-xl font-extrabold tabular-nums">R$ 5.424,00</span>
          </div>
          <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-gradient py-3 text-sm font-extrabold text-accent-foreground">
            <FileDown className="h-4 w-4" aria-hidden /> Gerar proposta em PDF
          </div>
          <p className="text-center text-[10px] text-muted-foreground">Valores meramente ilustrativos.</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink-gradient px-4 pb-20 pt-14 sm:px-6 lg:pb-28 lg:pt-20">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="mb-5 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-accent">
            Para pedreiros, empreiteiros e profissionais de reformas
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-foreground sm:text-5xl lg:text-6xl">
            Você pode estar <span className="text-accent">perdendo dinheiro</span> em cada obra por cobrar errado.
          </h1>
          <p className="mt-6 text-lg text-ink-foreground/90">
            Descubra quanto considerar em materiais, mão de obra, custos adicionais e margem — e transforme essas
            informações em um orçamento profissional com o OBRA IA.
          </p>
          <p className="mt-4 text-ink-muted">
            Pare de depender de papel, calculadora e memória para calcular seus serviços. O OBRA IA ajuda você a
            organizar os dados da obra, estimar materiais, calcular mão de obra, revisar custos e apresentar propostas
            mais claras aos seus clientes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink>Quero organizar meus orçamentos</CtaLink>
            <CtaLink href="#metodo" variant="ghost" arrow={false}>
              Ver como funciona
            </CtaLink>
          </div>
          <p className="mt-5 text-sm text-ink-muted">
            Acesso digital • Ferramentas práticas • Criado para a rotina da construção civil
          </p>
          <p className="sr-only">Plano Profissional por {PRICES.profissional}</p>
        </Reveal>
        <Reveal delay={150}>
          <Mockup />
        </Reveal>
      </div>
    </section>
  );
}
