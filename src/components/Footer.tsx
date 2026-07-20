import { Link } from "react-router-dom";
import communityLogoWhite from "@/assets/nxe_com_branco.png";
import { Mail, Globe, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-brand-dark text-background mt-20">
    <div className="container py-16 grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2 space-y-4">
        <Link to="/" aria-label="Nextenergy Community — início" className="inline-flex">
          <img src={communityLogoWhite} alt="Nextenergy Community" className="h-11 w-auto object-contain" />
        </Link>
        <p className="text-sm text-background/60 max-w-sm font-body">
          Nextenergy Community, Lda — desenvolvimento e gestão de Comunidades de Energia
          Renovável (CER) e autoconsumo coletivo. Produza, consuma e partilhe energia
          100% renovável com a sua comunidade.
        </p>
        <a
          href="https://www.gruponextenergy.pt/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-sub uppercase tracking-wider text-background/50 hover:text-primary transition-colors"
        >
          Uma empresa do Grupo Nextenergy
        </a>
      </div>
      <div>
        <h4 className="font-sub font-semibold mb-4 text-sm tracking-wider uppercase">Navegação</h4>
        <ul className="space-y-2 text-sm text-background/70">
          <li><Link to="/" className="hover:text-primary transition-colors">Início</Link></li>
          <li><Link to="/produtor" className="hover:text-primary transition-colors">Membro Produtor</Link></li>
          <li><Link to="/consumidor" className="hover:text-primary transition-colors">Membro Consumidor</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contactos</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-sub font-semibold mb-4 text-sm tracking-wider uppercase">Contactos</h4>
        <ul className="space-y-3 text-sm text-background/70">
          <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> geral@nextenergycommunity.pt</li>
          <li className="flex items-center gap-2"><Globe size={14} className="text-primary" /> www.nextenergycommunity.pt</li>
          <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Portugal</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-background/10">
      <div className="container py-6 text-xs text-background/50 flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} Nextenergy Community, Lda. Todos os direitos reservados.</span>
        <span>NIPC: 518 423 687</span>
      </div>
    </div>

    {/* Barras de apoios / cofinanciamento (clicáveis → fichas de projeto em PDF) */}
    <div className="bg-white">
      <div className="container py-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-12 gap-y-5">
        <Link
          to="/prr"
          aria-label="Ver a ficha de projeto PRR"
          className="w-full max-w-[460px] transition-opacity hover:opacity-80"
        >
          <img
            src="/barra-acores-prr.png"
            alt="PRR — Plano de Recuperação e Resiliência, Governo dos Açores, República Portuguesa, Financiado pela União Europeia (NextGenerationEU)"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </Link>
        <a
          href="/2030.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir a ficha de projeto 2030 (PDF)"
          className="w-full max-w-[460px] transition-opacity hover:opacity-80"
        >
          <img
            src="/barra-construir-2030-removebg.png"
            alt="Construir 2030 — Açores 2030, Governo dos Açores, Portugal 2030, Cofinanciado pela União Europeia"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
