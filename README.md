# Oorlogsdagboek François Stevens — 10 mei · 28 mei 1940

[![Bekijk de website](screenshots/website.jpg)](https://tom-michiels.github.io/oorlogsdagboek-francois-stevens/)

**[→ Bezoek de website](https://tom-michiels.github.io/oorlogsdagboek-francois-stevens/)**

Interactieve website rond het handgeschreven oorlogsdagboek van soldaat François Stevens
(1e Regiment Artillerie, IIIe Groep, 7e Batterij), bijgehouden tijdens de Achttiendaagse
Veldtocht van 10 tot 28 mei 1940.

**Talen:** Nederlands · Français · English · Deutsch (taalwisselaar in de navigatie, of `?lang=nl|fr|en|de`)

- Volledige transcriptie van alle 65 pagina's, dag per dag op een tijdlijn
- Interactieve kaart met de route van de terugtocht en de terugkeer naar huis (moderne OSM standaard; NGI-topokaart 1939 als optie)
- 3D-bladerboek waarin je door het originele schriftje kunt bladeren

De site is puur HTML/CSS/JavaScript, zonder build-stap. Open `index.html` lokaal of bezoek de
[GitHub Pages-versie](https://tom-michiels.github.io/oorlogsdagboek-francois-stevens/).

Bestanden voor meertaligheid: `i18n.js` (UI), `data.js` (NL), `data-fr.js`, `data-en.js`, `data-de.js`.

## Bezoekersstatistieken (GoatCounter)

De site telt pageviews via [GoatCounter](https://www.goatcounter.com/) (privacyvriendelijk, geen cookies).

1. Maak een gratis account op https://www.goatcounter.com/signup
2. Kies als site-code precies: `oorlogsdagboek-stevens`
3. Bevestig je e-mailadres

Daarna zie je de statistieken op:
https://oorlogsdagboek-stevens.goatcounter.com

## Vindbaar maken voor zoekmachines (SEO)

De site bevat al:

- `robots.txt` en `sitemap.xml`
- titel, meta description, canonical URL
- Open Graph / Twitter-kaarten (voor deelpreviews)
- `hreflang` voor NL / FR / EN / DE
- structured data (JSON-LD) over de website en het dagboek
- statische H1-tekst in de HTML (ook zonder JavaScript leesbaar voor crawlers)

### Stap 1 — Google Search Console

1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Voeg de property toe: `https://tom-michiels.github.io/oorlogsdagboek-francois-stevens/`
3. Kies **HTML-tag** of een andere verificatiemethode
4. Dien daarna de sitemap in:  
   `https://tom-michiels.github.io/oorlogsdagboek-francois-stevens/sitemap.xml`
5. Gebruik **URL-inspectie** → “Indexering aanvragen” voor de homepage

### Stap 2 — Bing Webmaster Tools (optioneel)

Zelfde sitemap indienen op [Bing Webmaster Tools](https://www.bing.com/webmasters).

### Stap 3 — Links & inhoud

Zoekmachines vinden de site sneller als andere sites ernaar linken (familie, lokale erfgoedverenigingen, schoolprojecten). De transcriptie op de tijdlijn is al rijke, unieke inhoud — dat helpt op termijn bij ranking.
