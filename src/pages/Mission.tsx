import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  Heart,
  ScrollText,
  Lightbulb,
  Wallet,
  TrendingDown,
  Users,
  HeartHandshake,
  TrendingUp,
  Leaf,
} from "lucide-react";

const modelCards = [
  {
    icon: Wallet,
    title: "100% do investimento por nossa conta",
    desc: "Assumimos a totalidade dos custos de desenvolvimento da comunidade — instalação, licenciamento e toda a gestão inicial do projeto. Existe sempre a possibilidade de o produtor investir diretamente, mas não é este o modelo que promovemos.",
  },
  {
    icon: TrendingDown,
    title: "Energia mais económica, sempre",
    desc: "A remuneração baseia-se na energia produzida pela central, faturada aos membros a um valor significativamente abaixo da tarifa regulada — analisado caso a caso — reduzindo a fatura de eletricidade.",
  },
];

const impactCards = [
  {
    icon: Users,
    title: "Comunidade envolvida",
    desc: "Pessoas, empresas e instituições locais a fazer parte de um projeto comum, com benefícios partilhados por todos.",
  },
  {
    icon: HeartHandshake,
    title: "Valor para território",
    desc: "Parte do valor gerado pode contribuir para apoiar associações, IPSS e entidades de utilidade pública presentes no território.",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento local",
    desc: "Projetos que geram autonomia energética, reduzem custos para famílias e empresas e fortalecem a economia do território onde se inserem.",
  },
  {
    icon: Leaf,
    title: "Transição energética para todos",
    desc: "A energia renovável não deve ser privilégio de quem pode investir. O nosso modelo garante que qualquer pessoa pode beneficiar, independentemente dos seus recursos.",
  },
];

const Mission = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft text-primary">
            <Heart size={14} /> A Nossa Missão
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Em comunidade, a energia não se divide <span className="text-gradient-brand">— partilha-se</span>.
          </h1>
          <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
            A Nextenergy Community nasceu de uma convicção com anos de maturação: a energia renovável produzida localmente deve beneficiar quem vive e trabalha nessa comunidade. Somos parceiros de um movimento que acreditamos poder transformar a forma como as pessoas acedem à energia.
          </p>
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">Fale connosco <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* A NOSSA HISTÓRIA */}
    <section className="container py-12 lg:py-16">
      <ScrollReveal className="mb-10">
        <div className="flex flex-row gap-6">
          <div>
            <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">A Nossa História</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Uma visão antiga. Uma oportunidade <span className="text-gradient-brand">nova</span>.
            </h2>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              A criação da Nextenergy Community resulta de uma visão que acompanha a empresa há vários anos. Sempre acreditámos que a produção local de energia e a sua partilha poderiam transformar a forma como as comunidades consomem eletricidade.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Contudo, apenas com a evolução do enquadramento legal e regulamentar passou a ser possível concretizar esta visão. Hoje existem regras claras para o licenciamento, gestão e faturação das comunidades de energia — criando as condições para desenvolver projetos sólidos, transparentes e sustentáveis.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden p-8 md:p-10 bg-card border border-border shadow-soft">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0 text-primary-foreground">
                <Lightbulb size={30} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">De ideia a realidade</h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Foi este novo contexto que nos permitiu transformar uma convicção antiga numa realidade capaz de beneficiar produtores, consumidores e as comunidades onde estamos presentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* <ScrollReveal delay={100} className="relative rounded-3xl overflow-hidden p-8 md:p-10 bg-card border border-border shadow-soft">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shrink-0 text-primary-foreground">
            <Lightbulb size={30} />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">De ideia a realidade</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Foi este novo contexto que nos permitiu transformar uma convicção antiga numa realidade capaz de beneficiar produtores, consumidores e as comunidades onde estamos presentes.
            </p>
          </div>
        </div>
      </ScrollReveal> */}
    </section>

    {/* O NOSSO MODELO — dark band */}
    <section className="bg-brand-dark text-background py-14 lg:py-20 relative overflow-hidden bg-dot-grid-light">
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <div className="container relative">
        <ScrollReveal className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">
            <ScrollText size={14} /> O nosso modelo
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Investimos nós, para que <span className="text-gradient-brand">não tenha de investir</span>.
          </h2>
          <p className="mt-4 text-background/70 font-body leading-relaxed max-w-lg">
            O nosso modelo assenta no investimento integral por parte da Nextenergy Community — eliminamos a barreira do investimento inicial para que mais pessoas e entidades possam beneficiar da transição energética.
          </p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {modelCards.map((c, i) => (
            <ScrollReveal
              key={c.title}
              delay={i * 100}
              className="relative p-8 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 transition-colors duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center mb-6 text-primary-foreground">
                <c.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-background/60 font-body leading-relaxed">{c.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* IMPACTO SOCIAL */}
    <section className="container py-12 lg:py-20">
      <ScrollReveal className="max-w-2xl mb-12">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Impacto Social</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Mais do que poupança: <span className="text-gradient-brand">valor social e local</span>.
        </h2>
        <p className="mt-4 text-muted-foreground font-body leading-relaxed">
          Para nós, a comunidade vai muito além da partilha de energia. Significa envolver pessoas, empresas e instituições locais num projeto comum — com impacto positivo no território onde nos inserimos.
        </p>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {impactCards.map((c, i) => (
          <ScrollReveal
            key={c.title}
            delay={i * 80}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft overflow-hidden"
          >
            <div className="absolute top-0 left-7 right-7 h-1 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl bg-gradient-brand-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <c.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{c.desc}</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Faça parte de uma comunidade que acredita no que faz.</h2>
          <p className="font-body opacity-90">Seja como Consumidor ou Produtor, junte-se a um projeto que gera valor para si e para quem vive à sua volta.</p>
          <Button asChild size="xl" className="bg-background text-primary font-semibold shadow-soft hover:-translate-y-0.5 transition-transform duration-300 hover:bg-background">
            <Link to="/contact">Fale connosco <ArrowRight /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default Mission;
