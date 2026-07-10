import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  Home,
  Factory,
  Landmark,
  KeyRound,
  Wallet,
  Receipt,
  TrendingUp,
  Share2,
  Wrench,
  Sun,
  Zap,
} from "lucide-react";

const canBe = [
  { icon: Home, title: "Um particular", desc: "Com painéis no telhado de casa." },
  { icon: Factory, title: "Uma empresa", desc: "Com painéis numa cobertura industrial." },
  { icon: Landmark, title: "Uma entidade pública", desc: "Como uma câmara municipal ou uma escola." },
  { icon: KeyRound, title: "Um proprietário", desc: "Que cede o espaço para a instalação dos painéis." },
];

const advantages = [
  { icon: Wallet, title: "0% de investimento inicial", desc: "Entra na produção sem custos de arranque — a Nextenergy viabiliza o projeto por si." },
  { icon: Receipt, title: "Paga apenas o que consome", desc: "A energia que produz e consome localmente é descontada diretamente na sua fatura de eletricidade." },
  { icon: TrendingUp, title: "Rentabilização da energia", desc: "Os excedentes de produção são partilhados com a comunidade, gerando retorno pelo espaço disponibilizado." },
  { icon: Share2, title: "Partilha de energia", desc: "A energia excedente beneficia os restantes membros da comunidade, promovendo a autonomia energética coletiva." },
  { icon: Wrench, title: "Dimensionamento e instalação", desc: "A Nextenergy trata de todo o processo técnico — do estudo de viabilidade à instalação dos painéis." },
];

const Producer = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-eco/30 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft text-eco">
            <Sun size={14} /> Membro Produtor
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            O que é um <span className="text-gradient-eco">membro produtor</span>?
          </h1>
          <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
            Qualquer pessoa singular ou coletiva que instala e opera uma unidade de produção de energia renovável — painéis fotovoltaicos — num espaço da sua propriedade ou gestão, e que partilha o excedente dessa produção com os restantes membros da comunidade.
          </p>
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">Quero produzir energia <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* PODE SER — caixinhas */}
    <section className="container py-12 lg:py-16">
      <ScrollReveal className="max-w-2xl mb-10">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-eco mb-3">Quem pode ser produtor</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Um produtor pode ser…</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {canBe.map((c, i) => (
          <ScrollReveal
            key={c.title}
            delay={i * 90}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-eco/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft overflow-hidden"
          >
            <div className="absolute top-0 left-7 right-7 h-1 bg-gradient-eco rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl bg-gradient-eco flex items-center justify-center mb-5 text-eco-foreground group-hover:scale-110 transition-transform duration-500">
              <c.icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{c.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* AUTOCONSUMO EXPLAINER — dark band */}
    <section className="bg-brand-dark text-background py-14 lg:py-20 relative overflow-hidden bg-dot-grid-light">
      <div className="absolute inset-0 bg-gradient-eco opacity-10" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Como funciona</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Consome primeiro, <span className="text-gradient-brand">partilha o resto</span>.
          </h2>
          <p className="mt-5 text-background/70 font-body leading-relaxed max-w-lg">
            O membro produtor consome primeiro a energia que produz (autoconsumo). O excedente — o que sobra depois do seu próprio consumo — é injetado na rede e distribuído pelos membros consumidores da comunidade.
          </p>
        </ScrollReveal>
        <div className="space-y-4">
          <ScrollReveal delay={100} className="flex gap-5 p-6 rounded-2xl bg-background/5 border border-background/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-eco flex items-center justify-center shrink-0 text-eco-foreground">
              <Zap size={22} />
            </div>
            <div>
              <h4 className="font-sub font-semibold text-lg">1 · Autoconsumo</h4>
              <p className="text-sm text-background/60 mt-1 font-body">A energia produzida abastece primeiro o seu próprio consumo, descontada na sua fatura.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="flex gap-5 p-6 rounded-2xl bg-background/5 border border-background/10">
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 text-primary-foreground">
              <Share2 size={22} />
            </div>
            <div>
              <h4 className="font-sub font-semibold text-lg">2 · Partilha do excedente</h4>
              <p className="text-sm text-background/60 mt-1 font-body">O que sobra é distribuído pelos membros consumidores, gerando retorno pelo espaço disponibilizado.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* VANTAGENS */}
    <section className="container py-12 lg:py-20">
      <ScrollReveal className="max-w-2xl mb-12">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-eco mb-3">Vantagens</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Vantagens em ser <span className="text-gradient-eco">produtor</span>.
        </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {advantages.map((a, i) => (
          <ScrollReveal
            key={a.title}
            delay={i * 80}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-eco/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-eco flex items-center justify-center mb-6 text-eco-foreground group-hover:scale-110 transition-transform duration-500">
              <a.icon size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{a.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-16">
      <ScrollReveal className="relative rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-eco text-eco-foreground text-center shadow-soft">
        <div className="absolute inset-0 bg-dot-grid-light opacity-50" />
        <div className="relative max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Tem um espaço com potencial solar?</h2>
          <p className="font-body opacity-90">Fazemos o estudo de viabilidade sem compromisso e tratamos de todo o processo, do dimensionamento à instalação.</p>
          <Button asChild size="xl" className="bg-background text-eco font-semibold shadow-soft hover:-translate-y-0.5 transition-transform duration-300 hover:bg-background">
            <Link to="/contact">Pedir estudo de viabilidade <ArrowRight /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default Producer;
