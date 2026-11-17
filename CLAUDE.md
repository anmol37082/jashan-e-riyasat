
# Launch notes

The SEO metadata, JSON-LD, `robots.txt`, and `sitemap.xml` currently use a reserved example domain because the production domain was not present in the project:

- In `src/lib/seo.js`, replace `https://www.jashaneriyaasat.example` with the verified canonical production origin (including the preferred `www` or non-`www` form). This value drives canonical absolute URLs and the sitemap.
- Official social profile URLs are configured in `src/app/layout.js` and the contact page.
- Confirm `logo` at `/mainlogo.webp` is the intended public Organization logo; update it if the final logo asset differs.

The business owner provided phone/WhatsApp `+91 78891 08874`, email `jashneriyasat@gmail.com`, and official social profiles. The physical studio address is still unconfirmed; keep it as “Studio address available on request” and do not add a postal address to Organization JSON-LD until confirmed.

The sitemap is generated from the current static routes and story, blog, and destination data. Add any new indexable route families to `src/app/sitemap.js` when they are introduced. Keep private, staging, and thank-you pages out of the sitemap.
