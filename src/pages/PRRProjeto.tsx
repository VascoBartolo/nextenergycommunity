import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ExternalLink, HandCoins } from "lucide-react";

const PRRProjeto = () => (
  <Layout>
    <section className="container pt-20 pb-12">
      <div className="max-w-3xl space-y-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft text-primary">
            <HandCoins size={14} /> Financiamento
          </div>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          Transição Digital <span className="text-gradient-brand">Empresarial</span>.
        </h1>
        <p className="text-lg text-muted-foreground font-body leading-relaxed">
          Projeto cofinanciado pelo Plano de Recuperação e Resiliência (PRR), no âmbito do NextGenerationEU.
        </p>
      </div>
    </section>

    <section className="container pb-16">
      <ScrollReveal className="mx-auto max-w-3xl">
        <a
          href="/PRR-projeto.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir a ficha de projeto PRR (PDF)"
          className="block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow duration-500 hover:shadow-brand"
        >
          <img
            src="/PRR-projeto.png"
            alt="Ficha de projeto — Transição Digital Empresarial Nextenergy, financiado pelo PRR (NextGenerationEU)"
            className="w-full h-auto object-contain"
          />
        </a>
      </ScrollReveal>
    </section>

    <section className="container pb-24 text-center">
      <ScrollReveal>
        <Button
          asChild
          variant="brand"
          size="xl"
          className="px-6 sm:px-10 text-sm sm:text-base"
        >
          <a href="https://recuperarportugal.gov.pt/" target="_blank" rel="noopener noreferrer">
            PRR — Recuperar Portugal <ExternalLink />
          </a>
        </Button>
      </ScrollReveal>
    </section>
  </Layout>
);

export default PRRProjeto;
