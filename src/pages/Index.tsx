import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import SolarCommunityHero from "@/components/SolarCommunityHero";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  Sun,
  Share2,
  PlugZap,
  Leaf,
  Users,
  ShieldCheck,
  ScrollText,
  Factory,
  Home,
} from "lucide-react";

const steps = [
  {
    icon: Sun,
    title: "Produzir",
    desc: "Painéis fotovoltaicos instalados localmente geram energia 100% renovável — em telhados, coberturas industriais ou terrenos da comunidade.",
  },
  {
    icon: Share2,
    title: "Partilhar",
    desc: "O excedente de produção é distribuído entre os membros da comunidade, promovendo a autonomia energética coletiva.",
  },
  {
    icon: PlugZap,
    title: "Consumir",
    desc: "Cada membro consome energia local e vê o desconto aplicado diretamente na sua fatura de eletricidade.",
  },
];

const definitionPoints = [
  { icon: Users, title: "Entidades legais", desc: "Reúnem cidadãos, empresas e entidades públicas em torno de energia comum." },
  { icon: Sun, title: "Produção local", desc: "Energia 100% renovável gerada por painéis fotovoltaicos na comunidade." },
  { icon: Share2, title: "Partilha justa", desc: "Autoconsumo e distribuição do excedente pelos membros da comunidade." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Mais autonomia energética e menos emissões de CO₂ para todos." },
];

const memberTypes = [
  {
    icon: Factory,
    to: "/produtor",
    eyebrow: "Membro Produtor",
    title: "Tem espaço para produzir energia?",
    desc: "Instale painéis sem investimento inicial, pague apenas o que consome e rentabilize o excedente partilhado com a comunidade.",
    points: ["0% de investimento inicial", "Paga só o que consome", "Rentabiliza o excedente"],
    accent: "eco" as const,
  },
  {
    icon: Home,
    to: "/consumidor",
    eyebrow: "Membro Consumidor",
    title: "Quer poupar na fatura de eletricidade?",
    desc: "Receba energia renovável partilhada pela comunidade e um desconto automático na fatura — sem instalar qualquer equipamento.",
    points: ["Sem custo de adesão", "Desconto automático na fatura", "Mantém a sua comercializadora"],
    accent: "brand" as const,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dot-grid flex flex-col min-h-[calc(100svh-5rem)] lg:block lg:min-h-0">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="container relative flex flex-1 flex-col py-6 lg:block lg:py-16">
          <div className="flex flex-1 flex-col gap-4 sm:gap-6 lg:flex-none lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            {/* Intro text */}
            <div className="order-1 lg:order-none lg:col-start-1 lg:row-start-1 space-y-4 sm:space-y-5 lg:space-y-7 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-[11px] sm:text-xs font-sub font-semibold tracking-wider uppercase shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow shrink-0" />
                Comunidades de Energia Renovável
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.08] sm:leading-[1.06] tracking-tight">
                Produza, consuma e partilhe <span className="text-gradient-brand">energia renovável</span> com a sua comunidade.
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground max-w-xl font-body leading-snug sm:leading-relaxed">
                A Nextenergy Community desenvolve e gere Comunidades de Energia Renovável, ligando quem produz a quem consome — energia local, mais limpa e mais barata para todos.
              </p>
            </div>

            {/* Hero graphic — grows to fill the space between text and buttons on
                mobile so the hero fills the viewport; right column on desktop */}
            <div className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center relative flex flex-1 items-center justify-center lg:block lg:flex-none mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
              <SolarCommunityHero />
            </div>

            {/* CTAs — side by side on mobile */}
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2 flex gap-3 sm:gap-4 w-full">
              <Button
                asChild
                variant="brand"
                size="xl"
                className="h-12 sm:h-14 flex-1 sm:flex-none min-w-0 px-4 sm:px-10 text-sm sm:text-base whitespace-nowrap leading-tight [&_svg]:hidden sm:[&_svg]:inline-block"
              >
                <Link to="/contact">Aderir à comunidade <ArrowRight /></Link>
              </Button>
              <Button
                asChild
                variant="brand-outline"
                size="xl"
                className="h-12 sm:h-14 flex-1 sm:flex-none min-w-0 px-4 sm:px-10 text-sm sm:text-base whitespace-nowrap leading-tight"
              >
                <a href="#como-funciona">Como funciona</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT ARE ENERGY COMMUNITIES */}
      <section className="container py-12 lg:py-20">
        <ScrollReveal className="max-w-2xl mb-14">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">O conceito</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">O que são comunidades de energia?</h2>
          <p className="mt-5 text-lg text-muted-foreground font-body leading-relaxed">
            Entidades legais que permitem a cidadãos, empresas e entidades públicas produzirem, consumirem e partilharem energia 100% renovável entre si. A energia é produzida localmente, através de painéis fotovoltaicos, para autoconsumo e distribuição pelos membros da comunidade — promovendo a autonomia energética e a sustentabilidade.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {definitionPoints.map((p, i) => (
            <ScrollReveal
              key={p.title}
              delay={i * 90}
              className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft overflow-hidden"
            >
              <div className="absolute top-0 left-7 right-7 h-1 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-gradient-brand-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal as="p" className="mt-8 text-xs md:text-sm text-muted-foreground font-body border-l-2 border-primary/40 pl-4 lg:whitespace-nowrap">
          Abrange as figuras legais de Autoconsumo Coletivo e Comunidades de Energia Renovável, ao abrigo do{" "}
          <a
            href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/15-2022-177634016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            Decreto-Lei 15/2022
          </a>.
        </ScrollReveal>
      </section>

      {/* HOW IT WORKS — dark band */}
      <section id="como-funciona" className="scroll-mt-24 bg-brand-dark text-background py-14 lg:py-20 relative overflow-hidden bg-dot-grid-light">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container relative">
          <ScrollReveal className="max-w-2xl mb-14">
            <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Como funciona</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Da produção à sua fatura, <span className="text-gradient-brand">em três passos</span>.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 120} className="relative p-8 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 transition-colors duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <s.icon className="text-primary-foreground" size={26} />
                  </div>
                  <span className="font-display text-3xl font-bold text-background/15">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-background/60 font-body leading-relaxed">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBER TYPES */}
      <section className="container py-12 lg:py-20">
        <ScrollReveal className="max-w-2xl mb-14">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Faça parte</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Dois caminhos para entrar na <span className="text-gradient-brand">comunidade</span>.
          </h2>
          <p className="mt-4 text-muted-foreground font-body">
            Produza energia ou beneficie da energia produzida pela comunidade. Em qualquer dos casos, tratamos de tudo por si.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {memberTypes.map((m, i) => (
            <ScrollReveal key={m.to} delay={i * 120}>
              <Link
                to={m.to}
                className="group relative h-full p-8 md:p-10 rounded-3xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all duration-500 flex flex-col"
              >
                {/* dedicated (non-transformed) clip layer: keeps the card's
                    corner radius while the top-right glow fades in on hover —
                    avoids the squared corner caused by overflow-hidden +
                    border-radius meeting the hover transform */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                  <div
                    className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${m.accent === "eco" ? "bg-gradient-eco" : "bg-gradient-brand"}`}
                  />
                </div>
                <div className="relative flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${m.accent === "eco" ? "bg-gradient-eco" : "bg-gradient-brand"}`}>
                    <m.icon size={26} />
                  </div>
                  <span className={`text-xs font-sub font-semibold uppercase tracking-wider ${m.accent === "eco" ? "text-eco" : "text-primary"}`}>
                    {m.eyebrow}
                  </span>
                </div>
                <h3 className="relative font-display text-2xl font-bold mb-3">{m.title}</h3>
                <p className="relative text-muted-foreground font-body leading-relaxed mb-6">{m.desc}</p>
                <ul className="relative space-y-2 mb-8">
                  {m.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm font-body">
                      <span className={`w-1.5 h-1.5 rounded-full ${m.accent === "eco" ? "bg-eco" : "bg-primary"}`} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className={`relative mt-auto inline-flex items-center gap-2 text-sm font-sub font-semibold ${m.accent === "eco" ? "text-eco" : "text-primary"} group-hover:gap-3 transition-all`}>
                  Saber mais <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* O NOSSO PAPEL */}
      <section className="container pb-4 lg:pb-12 space-y-6">
        {/* 1 — EGAC banner: the entity that manages the community */}
        <ScrollReveal className="relative overflow-hidden rounded-3xl bg-brand-dark text-background p-8 md:p-14">
          <div className="absolute inset-0 bg-dot-grid-light pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-brand opacity-10 pointer-events-none" />
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-4">
              <ShieldCheck size={14} /> O nosso papel
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Gestor de confiança da <span className="text-gradient-brand">sua comunidade</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-background/70 font-body leading-relaxed">
              A Nextenergy Community atua como Entidade Gestora de Autoconsumo Coletivo (EGAC), assumindo a gestão operacional, legal e técnica da comunidade de energia em nome dos seus membros. Os membros produzem, consomem e partilham energia — nós tratamos do resto.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 — from feasibility to management */}
        <ScrollReveal className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-soft p-8 md:p-12 grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-sub font-semibold uppercase tracking-widest text-eco mb-3">
              <ScrollText size={14} /> Do estudo à gestão
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Da viabilidade à gestão, a Nextenergy trata de tudo.
            </h2>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-xl">
              Estudo de viabilidade, dimensionamento, instalação dos painéis, licenciamento e gestão contínua da comunidade — com uma plataforma que mostra a produção, a poupança e o impacto de cada membro.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Estudo", v: "Viabilidade e dimensionamento" },
              { k: "Instalação", v: "Painéis chave-na-mão" },
              { k: "Licenciamento", v: "Todo o processo legal" },
              { k: "Gestão", v: "Plataforma e apoio contínuo" },
            ].map((b) => (
              <div key={b.k} className="p-5 rounded-2xl bg-background border border-border">
                <div className="text-xs font-sub uppercase tracking-wider text-primary">{b.k}</div>
                <div className="mt-1 text-sm font-body text-muted-foreground">{b.v}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="container py-12 lg:py-20">
        <ScrollReveal className="relative rounded-3xl overflow-hidden p-12 md:p-20 bg-gradient-brand text-primary-foreground text-center shadow-brand">
          <div className="absolute inset-0 bg-dot-grid-light opacity-60" />
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)" }} />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Junte-se à sua comunidade de energia.</h2>
            <p className="font-body opacity-90">Quer produzir, quer poupar na fatura, ajudamos a dar o primeiro passo. Fale connosco, sem compromisso.</p>
            <Button asChild size="xl" className="bg-background text-primary font-semibold shadow-soft transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-background hover:shadow-brand">
              <Link to="/contact">Aderir à comunidade <ArrowRight /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Index;
