import {
  ClipboardList, Boxes, Calculator, FileCheck2, Check, Bot, LineChart, HardHat, FileDown, type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading, Reveal, CtaLink } from "./primitives";

const steps = [
  { title: "Informe os dados da obra", text: "Registre o tipo de serviço, as dimensões, as etapas e as informações disponíveis." },
  { title: "Organize os materiais", text: "Estime quantidades, rendimentos e perdas conforme as características do serviço." },
  { title: "Calcule os custos", text: "Considere materiais, mão de obra, transporte, equipamentos, custos indiretos e margem." },
  { title: "Apresente a proposta", text: "Gere uma estrutura profissional para revisar e enviar ao seu cliente." },
];

export function HowItWorks() {
  return (
    <Section className="bg-background">
      <SectionHeading eyebrow="Como funciona" title="Do pedido do cliente até um orçamento mais organizado" />
      <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
        <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-border md:block" aria-hidden />
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 100} className="relative">
              <span className="relative grid h-12 w-12 place-items-center rounded-full bg-accent-gradient text-lg font-extrabold text-accent-foreground shadow-cta">
                {i + 1}
              </span>
              <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wider text-foreground">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="mx-auto mt-14 max-w-2xl text-center text-lg font-semibold text-foreground">
        O objetivo não é substituir sua experiência. É ajudar você a transformar sua experiência em um processo mais organizado.
      </Reveal>
    </Section>
  );
}

const obra: { letter: string; title: string; text: string; icon: LucideIcon }[] = [
  { letter: "O", title: "Organizar o serviço", icon: ClipboardList, text: "Identifique o tipo de obra, as dimensões, as etapas, o escopo e as informações necessárias para começar." },
  { letter: "B", title: "Base de materiais", icon: Boxes, text: "Estime quantidades, rendimentos e perdas usando parâmetros ajustáveis conforme a realidade do serviço." },
  { letter: "R", title: "Realizar os cálculos", icon: Calculator, text: "Calcule materiais, mão de obra, equipamentos, transporte, custos indiretos, imprevistos e margem desejada." },
  { letter: "A", title: "Apresentar a proposta", icon: FileCheck2, text: "Transforme os dados em um orçamento claro e em uma proposta profissional para o cliente." },
];

export function Method() {
  return (
    <Section id="metodo" className="relative overflow-hidden bg-ink-gradient">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-30" aria-hidden />
      <div className="relative">
        <SectionHeading
          dark
          eyebrow="Método exclusivo"
          title={<>O Método <span className="text-accent">O.B.R.A.</span> para construir orçamentos mais completos</>}
          subtitle="Uma estrutura simples para reduzir o improviso e organizar as principais informações de cada serviço."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {obra.map(({ letter, title, text, icon: Icon }, i) => (
            <Reveal key={letter} delay={i * 80} className="group relative overflow-hidden rounded-2xl border border-ink-border bg-ink-card p-7 transition-colors hover:border-accent/50">
              <span className="pointer-events-none absolute -right-2 -top-6 text-[9rem] font-extrabold leading-none text-ink-foreground/5" aria-hidden>
                {letter}
              </span>
              <div className="relative flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent-gradient text-2xl font-extrabold text-accent-foreground">
                  {letter}
                </span>
                <Icon className="h-6 w-6 text-ink-muted" aria-hidden />
              </div>
              <h3 className="relative mt-5 text-xl font-extrabold text-ink-foreground">
                {letter} — {title}
              </h3>
              <p className="relative mt-2 text-ink-muted">{text}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <CtaLink>Quero usar o Método O.B.R.A.</CtaLink>
        </div>
      </div>
    </Section>
  );
}

const modules: { n: number; icon: LucideIcon; title: string; items: string[]; text: string; label?: string }[] = [
  { n: 1, icon: Calculator, title: "Calculadora inteligente de materiais", items: ["Cálculo de área e volume", "Estimativa de quantidade de materiais", "Cálculo de pisos e revestimentos", "Estimativa de argamassa e rejunte", "Estimativa de tinta", "Percentual de perdas ajustável"], text: "Organize a estimativa dos principais materiais e tenha uma base mais clara para revisar seus cálculos." },
  { n: 2, icon: HardHat, title: "Calculadora de mão de obra", items: ["Precificação por metro quadrado", "Precificação por diária", "Cálculo por etapa", "Estimativa de duração", "Custos de equipe", "Simulador de preço mínimo"], text: "Visualize melhor o custo da execução e evite deixar a mão de obra escondida dentro do orçamento." },
  { n: 3, icon: ClipboardList, title: "Orçamentista completo", items: ["Materiais", "Mão de obra", "Equipamentos", "Transporte", "Custos indiretos", "Reserva para imprevistos", "Margem desejada"], text: "Consolide os principais custos do serviço em uma estrutura única e mais fácil de revisar." },
  { n: 4, icon: FileDown, title: "Gerador de orçamentos em PDF", items: ["Identificação do cliente", "Descrição dos serviços", "Lista de materiais", "Mão de obra", "Valores por etapa", "Condições de pagamento", "Validade da proposta"], text: "Apresente sua proposta de forma mais organizada e profissional." },
  { n: 5, icon: Bot, title: "Consultor de obras com IA", label: "Permite perguntar", items: ["Quais informações faltam neste orçamento?", "Quais materiais devo considerar?", "Como organizar as etapas?", "Quais custos posso ter esquecido?", "Como explicar esta proposta ao cliente?"], text: "Use a inteligência artificial como apoio para organizar informações, revisar pontos importantes e identificar possíveis esquecimentos." },
  { n: 6, icon: LineChart, title: "Controle de obras e lucro", items: ["Orçamento previsto versus realizado", "Controle de gastos", "Acompanhamento de compras", "Comparação de custos", "Resultado financeiro por obra"], text: "Acompanhe o que foi planejado e compare com o que realmente aconteceu durante a execução do serviço." },
];

export function Modules() {
  return (
    <Section className="bg-muted">
      <SectionHeading
        eyebrow="Módulos"
        title="Tudo o que você precisa para sair do improviso no orçamento"
        subtitle="Ferramentas práticas para organizar diferentes partes do processo de precificação."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {modules.map(({ n, icon: Icon, title, items, text, label }, i) => (
          <Reveal key={n} delay={(i % 3) * 80} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-accent">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Módulo {n}</span>
            </div>
            <h3 className="mt-4 text-lg font-extrabold text-foreground">{title}</h3>
            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">{label ?? "Inclui"}</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden /> {it}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-5 text-sm text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
