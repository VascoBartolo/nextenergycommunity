import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
  ArrowRight,
  Home,
  Building2,
  Landmark,
  TrendingDown,
  Leaf,
  Handshake,
  BadgeEuro,
  PlugZap,
  UserPlus,
  Sparkles,
} from "lucide-react";

const canBe = [
  { icon: Home, title: "Um particular", desc: "Numa habitação, apartamento ou moradia." },
  { icon: Building2, title: "Uma empresa", desc: "Escritório, comércio ou unidade industrial." },
  { icon: Landmark, title: "Uma entidade pública", desc: "Câmara municipal, escola, hospital ou outro serviço público." },
];

const advantages = [
  { icon: TrendingDown, title: "Redução na fatura", desc: "A energia renovável partilhada pela comunidade é descontada automaticamente na sua fatura de eletricidade, sem qualquer ação da sua parte." },
  { icon: Leaf, title: "Energia 100% renovável", desc: "Consome energia produzida localmente a partir de fontes renováveis, contribuindo para a redução de emissões de CO₂." },
  { icon: Handshake, title: "Mantém a sua comercializadora", desc: "Não é necessário alterar o contrato de eletricidade nem mudar de comercializadora." },
  { icon: BadgeEuro, title: "Sem custo de adesão", desc: "Aderir à comunidade não tem qualquer custo. O benefício é imediato e aparece automaticamente na fatura." },
];

const steps = [
  { icon: UserPlus, title: "Adere à comunidade", desc: "Sem instalar qualquer equipamento e sem custos de adesão." },
  { icon: PlugZap, title: "Recebe energia partilhada", desc: "Fica com a sua percentagem de energia renovável produzida pela comunidade." },
  { icon: Sparkles, title: "O desconto aparece na fatura", desc: "Aplicado diretamente pelo operador de rede, de forma automática." },
];

const Consumer = () => (
  <Layout>
    {/* HERO */}
    <section className="relative bg-dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="container relative pt-12 pb-8">
        <div className="max-w-3xl space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft text-primary">
            <Home size={14} /> Membro Consumidor
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            O que é um <span className="text-gradient-brand">membro consumidor</span>?
          </h1>
          <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed">
            Qualquer pessoa singular ou coletiva que recebe uma parte da energia renovável produzida pela comunidade, beneficiando de um desconto automático na sua fatura de eletricidade — sem a necessidade de instalar qualquer equipamento.
          </p>
          <Button asChild variant="brand" size="xl">
            <Link to="/contact">Quero poupar na fatura <ArrowRight /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* PODE SER — caixinhas */}
    <section className="container py-12 lg:py-16">
      <ScrollReveal className="max-w-2xl mb-10">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Quem pode ser consumidor</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Um consumidor pode ser…</h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {canBe.map((c, i) => (
          <ScrollReveal
            key={c.title}
            delay={i * 90}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft overflow-hidden"
          >
            <div className="absolute top-0 left-7 right-7 h-1 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 text-primary-foreground group-hover:scale-110 transition-transform duration-500">
              <c.icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">{c.desc}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* HOW — dark band, 3 steps */}
    <section className="bg-brand-dark text-background py-14 lg:py-20 relative overflow-hidden bg-dot-grid-light">
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <div className="container relative">
        <ScrollReveal className="max-w-2xl mb-12">
          <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Simples, sem obras</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Não precisa de instalar <span className="text-gradient-brand">nada</span>.
          </h2>
          <p className="mt-4 text-background/70 font-body leading-relaxed max-w-lg">
            Adere à comunidade, recebe a sua percentagem de energia renovável partilhada, e o desconto é aplicado diretamente na fatura pelo operador de rede.
          </p>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 120} className="relative p-8 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/40 transition-colors duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground">
                  <s.icon size={26} />
                </div>
                <span className="font-display text-3xl font-bold text-background/15">0{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-background/60 font-body leading-relaxed">{s.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* VANTAGENS */}
    <section className="container py-12 lg:py-20">
      <ScrollReveal className="max-w-2xl mb-12">
        <div className="text-xs font-sub font-semibold uppercase tracking-widest text-primary mb-3">Vantagens</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Vantagens em ser <span className="text-gradient-brand">consumidor</span>.
        </h2>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 gap-6">
        {advantages.map((a, i) => (
          <ScrollReveal
            key={a.title}
            delay={i * 80}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft flex gap-5"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 text-primary-foreground group-hover:scale-110 transition-transform duration-500">
              <a.icon size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{a.desc}</p>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">Comece a poupar sem mudar nada.</h2>
          <p className="font-body opacity-90">Sem obras, sem custos de adesão e sem mudar de comercializadora. O benefício aparece na sua fatura.</p>
          <Button asChild size="xl" className="bg-background text-primary font-semibold shadow-soft hover:-translate-y-0.5 transition-transform duration-300 hover:bg-background">
            <Link to="/contact">Aderir à comunidade <ArrowRight /></Link>
          </Button>
        </div>
      </ScrollReveal>
    </section>
  </Layout>
);

export default Consumer;
