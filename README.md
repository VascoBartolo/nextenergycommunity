# Nextenergy Community Website

Marketing website for **Nextenergy Community, Lda** — the operational company of the
Grupo Nextenergy dedicated to developing and managing **Renewable Energy Communities
(CER)** and **collective self-consumption** under Decreto-Lei 15/2022.

Produce, consume and share 100% renewable energy with your community.

## Stack

Same toolchain as the sibling Grupo Nextenergy / Nextenergy / Deep sites:

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** with the shared design tokens (Sora / Chillax / Manrope, orange–red brand gradient)
- **shadcn/ui** (Radix) components
- **React Router** for routing
- **lucide-react** icons, **sonner** toasts

## Design notes

The site shares the Grupo Nextenergy visual language (palette, fonts, layout, animations)
but carries its own **special trait**:

- an **eco-green accent** (`--eco`) for producer / sustainability / impact content, echoing
  the green "impact" card in the brand's community mockups;
- an animated **energy-flow network** hero (`EnergyNetwork`) that tells the
  produce → share → consume story, in place of the group's rotating constellation.

## Pages

- `/` — Início (hero, what are energy communities, how it works, member types, our role, CTA)
- `/produtor` — Membro Produtor (who can be a producer, self-consumption, advantages)
- `/consumidor` — Membro Consumidor (who can be a consumer, how it works, advantages)
- `/o-nosso-papel` — O Nosso Papel (end-to-end service, member experience, impact)
- `/contact` — Contactos (adhesion form + company details)

## Development

```sh
npm install
npm run dev      # start dev server
npm run build    # production build
npm run lint     # eslint
npm test         # vitest
```

---

© Nextenergy Community, Lda — NIPC 518 423 687 · www.nextcommunity.pt
