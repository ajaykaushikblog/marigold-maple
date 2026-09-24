import { Container } from '../ui/primitives'
import { Pinterest, Facebook, Instagram } from '../ui/icons'

const columns: { title: string; links: string[] }[] = [
  { title: 'Explore', links: ['Occasions', 'Weddings', 'Food & Recipes', 'Beauty', 'DIY & Crafts', 'Home & Decor'] },
  { title: 'Seasonal', links: ['Christmas', 'Halloween', 'Thanksgiving', "Valentine's Day", 'Easter', "Mother's Day"] },
  { title: 'Company', links: ['About', 'Contact', 'Our Editors', 'Write for Us', 'Advertise'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Use', 'AI Use Policy', 'Affiliate Disclosure', 'Sitemap'] },
]

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card">
      <Container width="wide" className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="/" className="font-serif text-[1.4rem] font-semibold tracking-tight text-foreground">
              Marigold<span className="text-primary">&amp;</span>Maple
            </a>
            <p className="mt-3 max-w-xs text-[0.88rem] leading-relaxed text-muted-foreground">
              A warm, image-first home for seasonal ideas, celebrations, recipes and everyday inspiration — all year round.
            </p>
            <div className="mt-4 flex gap-2">
              {[Pinterest, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
                  aria-label="Social link"
                >
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[0.88rem] text-foreground transition-colors hover:text-primary">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-[0.78rem] text-muted-foreground sm:flex-row">
          <p>© 2026 Marigold &amp; Maple Media. All rights reserved.</p>
          <p>Made with care for makers, hosts and dreamers.</p>
        </div>
      </Container>
    </footer>
  )
}
