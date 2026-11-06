/**
 * Configurações editáveis da página de vendas do OBRA IA.
 * Altere aqui links, preços, contatos e garantia — a página inteira lê deste arquivo.
 */

export const CHECKOUT_PLACEHOLDER = "https://SEU-LINK-DE-CHECKOUT.com";

export const SITE = {
  productName: "OBRA IA",
  tagline: "Sistema Inteligente de Orçamentos e Precificação para Construção Civil",
  /** Link real do checkout (substitua o placeholder). */
  checkoutUrl: CHECKOUT_PLACEHOLDER,
  /** Links opcionais por plano; se vazios, usam checkoutUrl. */
  planCheckoutUrls: { essencial: "", profissional: "", master: "" },
  termsUrl: "#",
  privacyUrl: "#",
  supportEmail: "suporte@seudominio.com.br",
  /** URL da logo definitiva (vazio = logotipo em texto). */
  logoUrl: "",
} as const;

export const PRICES = {
  essencial: "R$ 197",
  profissional: "R$ 297",
  master: "R$ 597",
  bonusReferenceTotal: "R$ 258",
} as const;

/** Garantia: mantenha desativada até confirmar as condições reais. */
export const GUARANTEE_ENABLED = false;
export const GUARANTEE = {
  days: 7,
  text: "Se o OBRA IA não fizer sentido para a sua rotina, você pode solicitar o reembolso dentro do prazo.",
  conditions: "A solicitação deve ser feita pelo e-mail de suporte, dentro do prazo, informando o e-mail de compra.",
  email: SITE.supportEmail,
} as const;

export const isCheckoutPlaceholder = (url: string = SITE.checkoutUrl): boolean =>
  url.trim() === "" || url === CHECKOUT_PLACEHOLDER;

export type PlanKey = keyof typeof SITE.planCheckoutUrls;

export const planCheckout = (plan: PlanKey): string =>
  SITE.planCheckoutUrls[plan] || (isCheckoutPlaceholder() ? "#oferta" : SITE.checkoutUrl);
