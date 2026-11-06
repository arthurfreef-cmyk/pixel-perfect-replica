import {
  Ruler, Package, PaintBucket, HardHat, Truck, Percent, FileText,
  Layers, Zap, Eye, BadgeCheck, Info, type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading, Reveal } from "./primitives";

const questions: { icon: LucideIcon; text: string }[] = [
  { icon: Ruler, text: "Quais medidas e quantidades considerar?" },
  { icon: Package, text: "Quanto material comprar — e quanto reservar para perdas?" },
  { icon: PaintBucket, text: "Qual o custo real dos materiais?" },
  { icon: HardHat, text: "Quanto cobrar pela mão de obra?" },
  { icon: Truck, text: "Transporte, equipamentos e custos extras entraram na conta?" },
  { icon: Percent, text: "A margem cobre o trabalho e os riscos da obra?" },
  { icon: FileText, text: "O cliente vai entender sua proposta?" },
];

export function Problem() {
  return (
    <Section className="bg-background">
      <SectionHeading
        eyebrow="O custo do improviso"
        title="Um orçamento mal calculado pode consumir o lucro de uma obra inteira."
        subtitle="Não basta somar material e mão de obra. Um item esquecido, uma quantidade errada ou um custo que ficou de fora pode transformar serviço em prejuízo."
      />
      <div className="mx-auto mt-9 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map(({ icon: Icon, text }, i) => (
          <Reveal key={text} delay={i * 35} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-foreground">{text}</span>
          </Reveal>
        ))}
      </div>
      <Reveal className="mx-auto mt-8 max-w-3xl rounded-xl border border-border bg-muted px-5 py-4 text-center">
        <p className="text-base font-extrabold text-foreground sm:text-lg">
          Se você não enxerga todos os custos, não sabe exatamente o que está cobrando.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          O OBRA IA ajuda a colocar essas informações em ordem para você revisar antes de apresentar o preço.
        </p>
      </Reveal>
    </Section>
  );
}

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Layers, title: "Custos organizados", text: "Materiais, mão de obra e despesas em uma estrutura única." },
  { icon: Zap, title: "Menos retrabalho", text: "Use ferramentas e modelos para não começar sempre do zero." },
  { icon: Eye, title: "Mais clareza", text: "Revise quantidades, custos e margem antes de fechar o preço." },
  { icon: BadgeCheck, title: "Propostas melhores", text: "Apresente o serviço e os valores de forma profissional." },
];

export function Product() {
  return (
    <Section id="produto" className="bg-muted">
      <SectionHeading
        eyebrow="A solução"
        title="Chega de montar orçamento no improviso."
        subtitle="O OBRA IA reúne ferramentas de apoio para estimar materiais, calcular mão de obra, organizar custos e preparar propostas. Você mantém o controle e revisa os dados de cada obra."
      />
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }) => (
          <Reveal key={title} className="rounded-xl border border-border bg-card p-5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-accent">
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-extrabold text-foreground">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto mt-6 flex max-w-3xl items-start gap-2 text-xs leading-relaxed text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
        Os resultados dependem dos dados inseridos, dos preços locais e das condições da obra. A ferramenta não substitui a análise do profissional.
      </p>
    </Section>
  );
}
