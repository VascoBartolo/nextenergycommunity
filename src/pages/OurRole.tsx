import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  ShieldCheck,
  ScrollText,
  FileSearch,
  Wrench,
  Scale,
  Monitor,
  Users,
  ClipboardCheck,
  BarChart3,
  HeartHandshake,
  Lightbulb,
  Settings,
} from "lucide-react";

const responsibilities = [
  {
    icon: FileSearch,
    title: "Estudo de viabilidade",
    desc: "Análise técnica e económica do potencial solar da comunidade, dimensionamento da instalação e projeção de poupanças.",
  },
  {
    icon: Wrench,
    title: "Instalação chave-na-mão",
    desc: "Gestão integral da instalação dos painéis fotovoltaicos — do projeto à ligação à rede, sem preocupações para os membros.",
  },
  {
    icon: Scale,
    title: "Licenciamento e conformidade",
    desc: "Tratamos de toda a documentação legal, registos na DGEG e cumprimento do Decreto-Lei 15/2022.",
  },
  {
    icon: Monitor,
    title: "Plataforma de gestão",
    desc: "Monitorização em tempo real da produção, consumo e poupança de cada membro através de uma plataforma digital dedicada.",
  },
  {
    icon: Users,
    title: "Gestão de membros",
    desc: "Adesão de novos membros, definição de coeficientes de partilha e coordenação entre produtores e consumidores.",
  },
  {
    icon: Settings,
    title: "Manutenção e operação",
    desc: "Acompanhamento contínuo do desempenho da instalação, manutenção preventiva e suporte técnico permanente.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Conformidade garantida",
    desc: "A EGAC assegura o cumprimento de toda a regulamentação aplicável, protegendo os membros de riscos legais e administrativos.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão profissional",
    desc: "Os membros beneficiam da produção e partilha de energia sem se preocuparem com a operação técnica ou burocrática.",
  },
  {
    icon: BarChart3,
    title: "Transparência total",
    desc: "Relatórios periódicos e acesso à plataforma para consultar produção, consumo, poupança e impacto ambiental.",
  },
  {
    icon: HeartHandshake,
    title: "Interlocutor único",
    desc: "Um ponto de contacto para tudo — desde a adesão à resolução de questões com o operador de rede ou a DGEG.",
  },
];

const processSteps = [
  { n: "01", title: "Estudo", desc: "Avaliamos o potencial solar, dimensionamos a instalação e projetamos a poupança para cada membro." },
  { n: "02", title: "Instalação", desc: "Gerimos todo o projeto de instalação dos painéis — do fornecimento à ligação à rede elétrica." },
  { n: "03", title: "Licenciamento", desc: "Tratamos de toda a documentação legal, registo na DGEG e cumprimento regulamentar." },
  { n: "04", title: "Gestão", desc: "Monitorizamos a produção, gerimos os membros e garantimos a operação contínua da comunidade." },
];

const OurRole = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft text-primary">
            <ShieldCheck size={14} /> O nosso papel
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Gestor de confiança da <span className="text-gradient-brand">sua comunidade</span>.
          </h1>
          <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
            A Nextenergy Community atua como Entidade Gestora de Autoconsumo Coletivo (EGAC), assumindo a responsabilidade pela gestão operacional, legal e técnica da comunidade de energia — para que os membros possam produzir, consumir e partilhar energia sem preocupações.
          </p>
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">Fale connosco <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* WHAT IS AN EGAC */}
    <section className="container py-12 lg:py-16">
      <ScrollReveal className="max-w-2xl mb-10">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">EGAC</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          O que é uma <span className="text-gradient-brand">EGAC</span>?
        </h2>
        <p className="mt-4 text-muted-foreground font-body leading-relaxed">
          A Entidade Gestora de Autoconsumo Coletivo (EGAC) é a entidade responsável pela organização, gestão e operação de uma comunidade de energia renovável. Define os coeficientes de partilha, gere a relação com o operador de rede e assegura o cumprimento da regulamentação aplicável — ao abrigo do Decreto-Lei 15/2022.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={100} className="relative rounded-3xl overflow-hidden p-8 md:p-10 bg-card border border-border shadow-soft">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0 text-primary-foreground">
            <Lightbulb size={30} />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">A Nextenergy Community como EGAC</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Como EGAC, a Nextenergy Community assume a totalidade da gestão da comunidade de energia em nome dos seus membros. Desde o estudo inicial de viabilidade até à operação diária da comunidade, tratamos de todo o processo — técnico, legal e administrativo — para que cada membro se concentre apenas no que importa: produzir ou poupar energia.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* PROCESS — dark band */}
    <section className="bg-brand-dark text-background py-14 lg:py-20 relative overflow-hidden bg-dot-grid-light">
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <div className="container relative">
        <ScrollReveal className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">
            <ScrollText size={14} /> Do estudo à gestão
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Da viabilidade à gestão, <span className="text-gradient-brand">tratamos de tudo</span>.
          </h2>
          <p className="mt-4 text-background/70 font-body leading-relaxed max-w-lg">
            Estudo de viabilidade, dimensionamento, instalação dos painéis, licenciamento e gestão contínua da comunidade — com uma plataforma que mostra a produção, a poupança e o impacto de cada membro.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 100} className="relative p-8 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 transition-colors duration-500">
              <span className="font-display text-3xl font-bold text-background/15 mb-4 block">{s.n}</span>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-background/60 font-body leading-relaxed">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* RESPONSIBILITIES */}
    <section className="container py-12 lg:py-20">
      <ScrollReveal className="max-w-2xl mb-12">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Responsabilidades</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          O que fazemos pela <span className="text-gradient-brand">sua comunidade</span>.
        </h2>
        <p className="mt-4 text-muted-foreground font-body leading-relaxed">
          Enquanto EGAC, a Nextenergy Community assume a gestão integral do ciclo de vida da comunidade de energia.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {responsibilities.map((r, i) => (
          <ScrollReveal
            key={r.title}
            delay={i * 80}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-500">
              <r.icon size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{r.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* BENEFITS */}
    <section className="container pb-12 lg:pb-20">
      <ScrollReveal className="max-w-2xl mb-12">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Vantagens</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Vantagens de ter uma <span className="text-gradient-brand">EGAC dedicada</span>.
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {benefits.map((b, i) => (
          <ScrollReveal
            key={b.title}
            delay={i * 80}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft flex gap-5"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 text-primary-foreground group-hover:scale-110 transition-transform duration-500">
              <b.icon size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-16">
      <ScrollReveal className="relative rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-brand text-primary-foreground text-center shadow-brand">
        <div className="absolute inset-0 bg-dot-grid-light opacity-50" />
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)" }} />
        <div className="relative max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Deixe a gestão da comunidade connosco.</h2>
          <p className="font-body opacity-90">Da viabilidade à operação diária, tratamos de tudo para que a sua comunidade funcione sem preocupações.</p>
          <Button asChild size="xl" className="bg-background text-primary font-semibold shadow-soft hover:-translate-y-0.5 transition-transform duration-300 hover:bg-background">
            <Link to="/contact">Fale connosco <ArrowRight /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default OurRole;
