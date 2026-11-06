import {
  Ruler, Grid3x3, Package, PaintBucket, HardHat, Clock, Truck, Percent, FileText,
  Layers, Zap, Eye, BadgeCheck, Info, type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";

const questions: { icon: LucideIcon; text: string }[] = [
  { icon: Ruler, text: "Quantos metros quadrados serão revestidos?" },
  { icon: Grid3x3, text: "Quanto comprar de piso ou revestimento?" },
  { icon: Package, text: "Quantos sacos de argamassa serão necessários?" },
  { icon: PaintBucket, text: "Quanto de tinta será utilizado?" },
  { icon: HardHat, text: "Quanto cobrar pela mão de obra?" },
  { icon: Clock, text: "Quanto tempo o serviço pode levar?" },
  { icon: Truck, text: "Quais custos de transporte e equipamentos devem entrar?" },
  { icon: Percent, text: "Qual margem deve ser considerada?" },
  { icon: FileText, text: "Como apresentar tudo isso ao cliente?" },
];

export function Problem() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="O problema"
        title="O problema não é trabalhar muito. É trabalhar sem saber se o orçamento está certo."
      />
      <Reveal className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-muted-foreground">Quando o cliente pergunta:</p>
        <p className="mt-3 text-2xl font-extrabold text-foreground">“Quanto você cobra para reformar meu banheiro?”</p>
        <p className="mt-3 text-muted-foreground">Você precisa calcular rapidamente:</p>
      </Reveal>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map(({ icon: Icon, text }, i) => (
          <li key={text}>
            <Reveal delay={i * 40} className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="font-semibold text-foreground">{text}</span>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mx-auto mt-12 max-w-2xl space-y-3 text-lg text-foreground">
        <p>Se você esquecer um item, <strong>pode cobrar menos do que deveria.</strong></p>
        <p>Se calcular tudo de forma exagerada, <strong>pode perder a oportunidade.</strong></p>
        <p>Se apresentar uma proposta confusa, <strong>pode transmitir menos profissionalismo do que realmente possui.</strong></p>
        <p className="text-muted-foreground">
          O problema é que muitos profissionais ainda fazem tudo no papel, na memória ou em planilhas espalhadas.
        </p>
      </Reveal>
      <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border-l-4 border-accent bg-primary p-8 text-primary-foreground shadow-soft">
        <p className="text-xl font-extrabold sm:text-2xl">Você não precisa virar engenheiro para organizar melhor seus orçamentos.</p>
        <p className="mt-3 text-primary-foreground/80">
          Você precisa de um processo claro para levantar as informações, calcular os principais custos e apresentar
          sua proposta com mais segurança.
        </p>
      </Reveal>
    </Section>
  );
}

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: "Mais organização", text: "Centralize as principais informações do serviço em um único processo." },
  { icon: Zap, title: "Mais agilidade", text: "Evite repetir os mesmos cálculos e procure menos informações espalhadas." },
  { icon: Eye, title: "Mais clareza", text: "Visualize materiais, mão de obra, custos e margem de forma estruturada." },
  { icon: BadgeCheck, title: "Mais profissionalismo", text: "Apresente propostas claras, completas e fáceis de entender." },
];

export function Product() {
  return (
    <Section id="produto" className="bg-muted">
      <SectionHeading
        eyebrow="A solução"
        title="Conheça o OBRA IA: seu apoio inteligente para elaborar orçamentos"
        subtitle="Uma solução prática para organizar orçamentos, estimar materiais, calcular mão de obra e montar propostas comerciais mais profissionais. Em vez de começar do zero, você segue uma estrutura para visualizar os principais custos e revisar tudo antes de enviar ao cliente."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 80} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-accent">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wider text-foreground">{title}</h3>
            <p className="mt-2 text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
        <p>
          O OBRA IA é uma ferramenta de apoio. Os resultados dependem das informações inseridas, dos preços praticados
          na região, das condições da obra e da revisão feita pelo profissional.
        </p>
      </Reveal>
    </Section>
  );
}
