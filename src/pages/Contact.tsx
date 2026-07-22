import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Globe, MapPin, Building2, Send } from "lucide-react";
import { toast } from "sonner";

const profiles = ["Quero ser produtor", "Quero ser consumidor", "Entidade pública", "Outro"];

const contactCards = [
  { icon: Mail, title: "Email", value: "geral@nextcommunity.pt", href: "mailto:geral@nextcommunity.pt" },
  { icon: Globe, title: "Website", value: "www.nextcommunity.pt", href: "https://www.nextcommunity.pt" },
  { icon: Building2, title: "Nextenergy Community, Lda", value: "NIPC: 518 423 687", href: undefined },
  { icon: MapPin, title: "Onde estamos", value: "Portugal", href: undefined },
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [profile, setProfile] = useState<string>(profiles[1]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Mensagem enviada. A nossa equipa entrará em contacto brevemente.");
      (e.target as HTMLFormElement).reset();
      setProfile(profiles[1]);
    }, 800);
  };

  return (
    <Layout>
      <section className="relative bg-dot-grid overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="container relative pt-12 pb-8">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-primary/20 text-xs font-sub font-semibold tracking-wider uppercase shadow-soft text-primary">
            <Mail size={14} /> Contactos
          </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Junte-se à sua <span className="text-gradient-brand">comunidade</span>.
            </h1>
            <p className="text-[15px] sm:text-base lg:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
              Quer produzir energia, poupar na fatura ou promover uma comunidade no seu território? Deixe-nos os seus dados e ajudamos a dar o primeiro passo — sem compromisso.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {contactCards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 90}>
              <a
                {...(c.href ? { href: c.href } : {})}
                className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0">
                    <c.icon className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-sub uppercase tracking-wider text-muted-foreground">{c.title}</div>
                    <div className="font-display font-semibold text-lg mt-1 break-words">{c.value}</div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={contactCards.length * 90} className="p-6 rounded-2xl bg-gradient-brand text-eco-foreground lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <div className="font-sub font-semibold mb-2">Sem custo, sem compromisso</div>
            <div className="text-sm opacity-90 font-body">A adesão como consumidor não tem qualquer custo e o benefício aparece automaticamente na fatura.</div>
          </ScrollReveal>
        </div>

        <ScrollReveal as="form" delay={120} onSubmit={onSubmit} className="lg:col-span-3 p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft space-y-6">
          <div className="space-y-3">
            <Label className="font-sub">O seu perfil</Label>
            <div className="flex flex-wrap gap-2">
              {profiles.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setProfile(p)}
                  className={`px-4 py-2 rounded-full text-sm font-sub border transition-colors ${
                    profile === p
                      ? "bg-gradient-brand text-primary-foreground border-transparent"
                      : "bg-background border-border text-muted-foreground hover:border-primary/40"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-sub">Nome completo</Label>
              <Input id="name" required placeholder="O seu nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-sub">Email</Label>
              <Input id="email" type="email" required placeholder="nome@email.com" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-sub">Telefone</Label>
              <Input id="phone" placeholder="+351 ..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="font-sub">Localidade</Label>
              <Input id="location" placeholder="Concelho / freguesia" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-sub">Mensagem</Label>
            <Textarea id="message" required rows={6} placeholder="Conte-nos um pouco sobre a sua situação: consumo, espaço disponível, objetivos..." />
          </div>
          <Button type="submit" variant="brand" size="lg" disabled={sending} className="w-full sm:w-auto">
            {sending ? "A enviar..." : <>Enviar mensagem <Send size={16} /></>}
          </Button>
        </ScrollReveal>
      </section>
    </Layout>
  );
};

export default Contact;
