import { useEffect, useRef, type ComponentProps, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";

const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-xl font-extrabold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-gradient text-accent-foreground shadow-cta hover:-translate-y-0.5 hover:brightness-105",
        ghost:
          "border border-ink-border bg-ink-card/60 text-ink-foreground hover:bg-ink-card",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        md: "px-5 py-3 text-sm",
        lg: "px-7 py-4 text-sm sm:text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "lg" },
  },
);

export interface CtaLinkProps extends ComponentProps<"a">, VariantProps<typeof ctaVariants> {
  arrow?: boolean;
}

/** Botão-link reutilizável. Por padrão aponta para o checkout. */
export function CtaLink({ className, variant, size, arrow = true, href, children, ...props }: CtaLinkProps) {
  const target = href ?? SITE.checkoutUrl;
  const external = target.startsWith("http");
  return (
    <a
      href={target}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(ctaVariants({ variant, size }), className)}
      {...props}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </a>
  );
}

/** Aplica animação discreta de entrada ao rolar. */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg", dark ? "text-ink-muted" : "text-muted-foreground")}>{subtitle}</p>
      )}
    </Reveal>
  );
}

export function Section({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={cn("scroll-mt-20 px-4 py-20 sm:px-6 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
