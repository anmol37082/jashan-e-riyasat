# Jashan-e-Riyasat — Website & Brand Theme Guide

Yeh document website ki current visual identity, design choices aur reusable guidelines ka reference hai. Isi ko dekh kar same brand ki doosri website ya landing page banayi ja sakti hai. Jahan kisi value ka source code mein seedha definition hai, wahan exact value di gayi hai; section-level exceptions ko alag note kiya gaya hai.

## Brand snapshot

- **Brand:** Jashan-e-Riyasat
- **Positioning:** luxury wedding planning, event design aur refined hospitality; India aur destination celebrations ke liye.
- **Overall feel:** regal, romantic, cinematic, heritage-inspired aur premium.
- **Visual approach:** bade wedding photographs/video, warm ivory surfaces, deep wine headings, understated gold details aur editorial serif typography.
- **Logo assets:** `public/mainlogo.webp`, `public/logo.webp`, `public/textlogo.webp` (header/footer mein istemal hone wala asset component se verify karein).

## Color palette

Core CSS variables `src/app/globals.css` mein defined hain. Inhe naye pages mein bhi CSS variables ke through use karein.

| Role | Color | Kahan / kaise use hota hai |
|---|---|---|
| Warm ivory / cream | `#FEFAE7` (`--cream`) | Main page aur section backgrounds; warm, paper-like base. |
| Deep brown | `#2C241B` (`--dark-brown`) | Primary body/UI text, scrolled header aur dark overlays. |
| Muted antique gold | `#B8A88A` (`--gold`) | Fine accents, labels, borders aur understated highlights. |
| Muted brown | `#6B5D4D` (`--text-muted`) | Supporting copy aur secondary text. |
| Deep wine / maroon | `#550000` (`--title-color`) | Section headings, selected brand accents, press strip/footer backgrounds. |

### Supporting colors already used

Yeh global tokens nahin hain, lekin current components mein nazar aate hain:

- `#8B3A3A` — testimonial/gallery controls jaise berry accent.
- `#A65D5D` — testimonial hover/secondary berry shade.
- `#FEDB7C` — footer par warm champagne-gold text.
- `#FFF8EF`, `#FAF7F2`, `#F0E8DC` — dark/photo backgrounds par light text.
- `#1A2332` — gallery filter tabs ka navy color; core palette ke saath consistent nahin lagta.
- Black/white aur `rgba(...)` overlays — photo par contrast aur readability ke liye.

### Palette guidance for the next site

Cream ko dominant background rakhein; maroon ko headings/important accents tak limit karein; brown ko readable body text ke liye aur antique gold ko small details ke liye use karein. Gold ko long text ya chhote low-contrast text mein na rakhein. Maujooda gallery ka navy aur kuch alag burgundy shades ko consolidate karke global tokens banana brand consistency improve karega.

## Typography

Global font imports `src/app/globals.css` mein hain. Display aur body ke roles alag rakhe gaye hain.

### Cormorant Garamond — editorial/display serif

- Main headings, hero copy, brand wordmark styling, testimonials aur elegant body/quote copy.
- Aam taur par light weights `300–400`; emphasis ke liye `500–600`; italic form occasional romantic emphasis ke liye.
- Iska high-contrast serif look luxury/editorial tone deta hai.

### Montserrat — clean sans-serif

- Navigation, eyebrow/section labels, buttons, form labels aur compact UI text.
- Aam taur par `400–600`, uppercase, letter spacing ke saath.
- Serif headings ke saath contrast aur small UI text ki legibility deta hai.

### Extra/fallback fonts in existing components

- `Georgia` / `Times New Roman` kuch FAQ, blog-card aur story text styles mein fallbacks ya direct overrides hain.
- `Inter` Wedding Gallery stylesheet mein tabs aur gallery UI ke liye import/use hua hai. Global import Montserrat hai; agle build mein ek hi sans-serif (behtar: Montserrat) par standardize karna chahiye.

**Nayi site ke liye:** Cormorant Garamond ko headings/editorial copy aur Montserrat ko navigation, form/UI, metadata ke liye rakhein. Font weights ko restrained rakhein, paragraphs ke liye readable size/line-height dein aur har component mein font family explicitly alag-alag override na karein.

## Layout & component style

- **Header:** transparent over the home hero; scroll karne par cream background aur subtle shadow. Desktop navigation uppercase, tracked Montserrat; logo center-aligned. Mobile par menu toggle/mobile navigation.
- **Hero:** viewport-filling slideshow/video/photo, dark translucent overlay, white text aur restrained indicators. Imagery hi first impression carry karti hai.
- **Section rhythm:** cream background, centered eyebrow + large serif heading + optional italic subtitle; spacious padding and generous whitespace.
- **Photography/cards:** large, edge-to-edge wedding imagery; service cards par subtle dark gradient, white titles, gentle image zoom on hover. Corner radius generally minimal/square.
- **Buttons/filters:** understated borders and uppercase letter-spaced sans-serif labels. Interactive states ko brand palette mein consistent rakhein.
- **Footer:** dark wine/photo background, light gold copy, centered brand mark aur simple uppercase navigation.
- **Motion:** fades, slow image zoom/parallax, slideshow transitions aur loader; motion ko smooth aur secondary rakhein.
- **Responsive behavior:** desktop par multi-column editorial layouts; tablet/mobile par fewer columns, stacked content aur compact navigation. New pages par same breakpoints/spacing rhythm rakhein.

## Brand photography & assets

Photography palette ka bada hissa hai, sirf content nahin. Existing `public/` assets mein hero, portfolio, gallery, destination, service, review aur wedding-story imagery/video hain. Nayi site mein:

- warm, cinematic lighting aur rich but natural colors wali authentic wedding imagery choose karein;
- image crops, contrast aur overlays ko section-to-section consistent rakhein;
- text-on-image ke neeche readable overlay rakhein;
- hero/video ko compress karein, mobile crops aur meaningful alt text provide karein;
- logos ko stretch ya recolor na karein; supplied asset ka aspect ratio preserve karein.

## Site content / information architecture

Current app mein home, About, Contact, Stories (listing aur individual stories), Destinations (listing/data aur detail pages) aur Blog (listing/detail) sections hain. Homepage components mein hero, intro, services, portfolio, gallery, stories, testimonials, press logos, video, blogs aur FAQ jaise blocks hain. Same brand ki doosri site mein bhi inquiry path ko prominent rakhein aur high-intent visitors ko services, portfolio/stories aur contact tak aasani se pahunchayein.

## Voice & content direction

- Refined, warm aur confident language; overly salesy ya loud claims se bachein.
- Celebration, thoughtful planning, hospitality, craft aur personal storytelling par focus karein.
- Short headings; supporting text ko calm aur informative rakhein.
- Brand spelling/capitalization ko consistent rakhein: **Jashan-e-Riyasat**.

## New website ke liye practical suggestions

1. Global tokens ko ek source of truth rakhein. `--cream`, `--dark-brown`, `--gold`, `--text-muted`, `--title-color` already available hain; naye accent variables zarurat par define karein.
2. Gallery ka `#1A2332`, berry accents aur footer gold jaise exceptions ko decide karke either brand palette mein formally add karein, ya core colors mein simplify karein.
3. Global `body` mein `color` do baar set hai; aakhri declaration `--title-color` hai, isliye current base text color dark brown ke bajaye maroon hota hai. Nayi site mein body text aur heading color ko alag roles dein.
4. Gallery mein Inter aur kuch sections mein Georgia direct use hota hai, jabki core system Cormorant Garamond + Montserrat hai. Typography ko do main families tak standardize karein.
5. Fonts multiple component CSS files mein bhi import kiye gaye hain. Shared global font loading rakhein taaki duplicate requests aur inconsistent font behavior na ho.
6. Color contrast, keyboard focus, alt text, form validation/error states, reduced-motion preference aur mobile tap targets ko design system ka hissa banayein.
7. Consistent spacing/type scale aur shared button/card styles banayein; har page par naye one-off values kam rakhein.

## Project quick start

`client/` directory se commands chalayein:

```bash
npm install
npm run dev
```

Development server Next.js app ko local environment mein chalata hai. Production build ke liye `npm run build`, serve karne ke liye `npm run start`, aur lint ke liye `npm run lint` available hain.

## Key reference files

- `src/app/globals.css` — global font imports, root color variables aur base styles.
- `src/app/layout.js` — site metadata, root layout aur global shell.
- `src/components/SiteShell.jsx` — shared header, mobile menu, footer aur home loader.
- `src/features/home/components/*.module.css` — homepage sections ki visual styling.
- `src/features/about/components/*.module.css` — About page sections.
- `src/features/contact/components/*.module.css` — contact/info/enquiry styling.
- `src/app/blog/`, `src/app/stories/`, `src/app/destinations/` — editorial aur detail-page styles.
- `public/` — logos, wedding photography, video aur other visual assets.

