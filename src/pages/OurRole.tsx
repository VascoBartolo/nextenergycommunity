import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  ClipboardCheck,
  Ruler,
  FileCheck2,
  Wrench,
  Network,
  LayoutDashboard,
  Mail,
  CreditCard,
  BarChart3,
  Leaf,
  TreePine,
  CloudSun,
} from "lucide-react";

const process = [
  { icon: ClipboardCheck, title: "Estudo de viabilidade", desc: "Analisamos consumos, espaço disponível e potencial solar para desenhar a comunidade certa." },
  { icon: Ruler, title: "Dimensionamento e projeto", desc: "Definimos a potência a instalar e o modelo de partilha entre produtores e consumidores." },
  { icon: FileCheck2, title: "Licenciamento", desc: "Tratamos do registo da CER e do autoconsumo coletivo ao abrigo do Decreto-Lei 15/2022." },
  { icon: Wrench, title: "Instalação chave-na-mão", desc: "Instalamos os painéis fotovoltaicos e todo o equipamento necessário, sem custos para os membros." },
  { icon: Network, title: "Gestão da partilha", desc: "Coordenamos a distribuição da energia produzida e a relação com o operador de rede." },
  { icon: LayoutDashboard, title: "Plataforma e acompanhamento", desc: "Gestão contínua da comunidade com uma plataforma que mostra produção, poupança e impacto." },
];

const experience = [
  { icon: Mail, title: "Pack de boas-vindas", desc: "Carta de adesão e onboarding claro no momento em que entra na comunidade." },
  { icon: CreditCard, title: "Cartão de membro", desc: "A sua identidade na comunidade — também disponível em wallet digital." },
  { icon: BarChart3, title: "Boletim mensal", desc: "Um resumo simples da energia produzida, consumida e da poupança do mês." },
  { icon: LayoutDashboard, title: "Dashboard da CER", desc: "Visão geral da comunidade: produção, autoconsumo, poupança e impacto ambiental." },
];

const impact = [
  { icon: CloudSun, value: "218 kg", label: "CO₂ evitado por mês (comunidade tipo)" },
  { icon: TreePine, value: "342", label: "Árvores equivalentes por ano" },
  { icon: Leaf, value: "71%", label: "Autoconsumo médio da comunidade" },
];

const OurRole = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary">O nosso papel</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Desenvolvemos e gerimos a sua <span className="text-gradient-brand">comunidade de energia</span>.
          </h1>
          <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
            A Nextenergy Community trata de todo o ciclo de vida de uma Comunidade de Energia Renovável — do primeiro estudo à gestão diária — para que produtores e consumidores só tenham de aproveitar os benefícios.
          </p>
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">Falar connosco <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* PROCESS */}
    <section className="container py-12 lg:py-20">
      <ScrollReveal className="max-w-2xl mb-14">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">De ponta a ponta</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">Tratamos de tudo por si.</h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {process.map((p, i) => (
          <ScrollReveal
            key={p.title}
            delay={i * 80}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft overflow-hidden"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-500">
                <p.icon size={24} />
              </div>
              <span className="font-display text-3xl font-bold text-muted-foreground/25">0{i + 1}</span>
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{p.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* MEMBER EXPERIENCE — dark band */}
    <section className="bg-brand-dark text-background py-14 lg:py-20 relative overflow-hidden bg-dot-grid-light">
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <div className="container relative">
        <ScrollReveal className="max-w-2xl mb-14">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">A experiência de membro</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Tudo o que precisa, <span className="text-gradient-brand">num só lugar</span>.
          </h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experience.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 90} className="p-7 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 transition-colors duration-500">
              <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 text-primary-foreground">
                <e.icon size={22} />
              </div>
              <h3 className="font-sub font-semibold text-base mb-2">{e.title}</h3>
              <p className="text-sm text-background/60 font-body leading-relaxed">{e.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* IMPACT — eco accent */}
    <section className="container py-12 lg:py-20">
      <ScrollReveal className="relative rounded-3xl overflow-hidden p-8 md:p-12 bg-gradient-eco text-eco-foreground">
        <div className="absolute inset-0 bg-dot-grid-light opacity-40" />
        <div className="relative">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-sub font-semibold uppercase tracking-widest opacity-80 mb-3">Impacto coletivo</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Energia que também faz bem ao planeta.</h2>
            <p className="mt-3 font-body opacity-90 max-w-xl">
              Cada comunidade acompanha o seu impacto ambiental em tempo real. Valores ilustrativos de uma comunidade tipo.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {impact.map((s) => (
              <div key={s.label} className="p-6 rounded-2xl bg-background/15 border border-background/20 backdrop-blur-sm">
                <s.icon size={26} className="mb-4 opacity-90" />
                <div className="font-display text-4xl font-bold">{s.value}</div>
                <div className="mt-1 text-sm font-body opacity-85">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>

    {/* CTA */}
    <section className="container pb-16 text-center">
      <ScrollReveal>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Pronto para criar ou aderir a uma comunidade?</h2>
        <p className="mt-3 text-muted-foreground font-body max-w-xl mx-auto">
          Seja produtor, consumidor ou uma entidade que quer promover uma CER no seu território, começamos com uma conversa.
        </p>
        <Button asChild variant="brand" size="xl" className="mt-8">
          <Link to="/contact">Falar com a Nextenergy Community <ArrowRight /></Link>
        </Button>
      </ScrollReveal>
    </section>
  </Layout>
);

export default OurRole;
