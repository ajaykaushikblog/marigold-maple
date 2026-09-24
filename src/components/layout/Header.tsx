import { useState } from 'react'
import { nav, type NavItem } from '../../lib/content'
import { navigate } from '../../lib/router'
import { Container, Button } from '../ui/primitives'
import { Search, Menu, Close, ChevronDown, Pinterest, Facebook, ArrowRight } from '../ui/icons'

/* ---- Wordmark: fixed brand identity, occasion-independent ---- */
function Wordmark() {
  return (
    <a href="/" className="flex items-baseline gap-0 font-serif text-[1.5rem] font-semibold tracking-tight text-foreground">
      <span>Marigold</span>
      <span className="text-primary">&amp;</span>
      <span>Maple</span>
    </a>
  )
}

function MegaMenu({ item }: { item: NavItem }) {
  if (!item.groups) return null
  return (
    <div className="invisible absolute left-1/2 top-full z-40 w-[min(680px,90vw)] -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-lg border border-border bg-card p-6 shadow-[0_16px_40px_-24px_rgba(38,32,27,0.4)] sm:grid-cols-3">
        {item.groups.map((g) => (
          <div key={g.label}>
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {g.label}
            </p>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="text-[0.9rem] text-foreground transition-colors hover:text-primary"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const submitSearch = () => {
    const t = searchTerm.trim()
    navigate(t ? `/search?q=${encodeURIComponent(t)}` : '/search')
    setSearchOpen(false)
    setSearchTerm('')
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur">
      {/* Promo bar */}
      <div className="bg-foreground text-background">
        <Container width="wide" className="flex h-9 items-center justify-center gap-2 text-center text-[0.78rem]">
          <span className="truncate">
            Join <span className="font-semibold">The Sunday Edit</span> — our weekly newsletter of seasonal ideas
          </span>
          <a href="/subscribe" className="hidden shrink-0 items-center gap-1 font-semibold underline underline-offset-2 sm:inline-flex">
            Subscribe <ArrowRight width={13} height={13} />
          </a>
        </Container>
      </div>

      {/* Main bar */}
      <div className="border-b border-border">
        <Container width="wide" className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu />
            </button>
            <Wordmark />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-[0.86rem] font-medium text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                  {item.groups && <ChevronDown width={14} height={14} className="text-muted-foreground" />}
                </a>
                <MegaMenu item={item} />
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <a href="#" aria-label="Facebook" className="hidden h-10 w-10 items-center justify-center rounded-md text-foreground hover:text-primary sm:inline-flex">
              <Facebook width={18} height={18} />
            </a>
            <a href="#" aria-label="Pinterest" className="hidden h-10 w-10 items-center justify-center rounded-md text-foreground hover:text-primary sm:inline-flex">
              <Pinterest width={18} height={18} />
            </a>
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:text-primary"
            >
              <Search />
            </button>
            <Button size="sm" className="ml-1 hidden sm:inline-flex">
              Subscribe
            </Button>
          </div>
        </Container>

        {/* Search drawer */}
        {searchOpen && (
          <div className="border-t border-border bg-card">
            <Container width="wide" className="py-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  submitSearch()
                }}
                className="flex items-center gap-3 rounded-lg border border-border bg-background px-4"
              >
                <Search className="text-muted-foreground" />
                <input
                  autoFocus
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search Christmas nails, wedding tables, fall recipes…"
                  className="h-12 flex-1 bg-transparent text-[0.95rem] text-foreground outline-none placeholder:text-muted-foreground"
                />
                <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search" className="text-muted-foreground hover:text-foreground">
                  <Close />
                </button>
              </form>
            </Container>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 flex h-full w-[min(340px,86vw)] flex-col bg-background shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-border px-5">
              <Wordmark />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-foreground">
                <Close />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-5 py-4">
              {nav.map((item) => (
                <div key={item.label} className="border-b border-border/60 py-1">
                  {item.groups ? (
                    <>
                      <button
                        onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                        className="flex w-full items-center justify-between py-2.5 text-[0.95rem] font-medium text-foreground"
                      >
                        {item.label}
                        <ChevronDown
                          width={16}
                          height={16}
                          className={`text-muted-foreground transition-transform ${openGroup === item.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openGroup === item.label && (
                        <div className="pb-2 pl-1">
                          {item.groups.flatMap((g) => g.items).map((it) => (
                            <a key={it.label} href={it.href} className="block py-1.5 text-[0.88rem] text-muted-foreground hover:text-primary">
                              {it.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a href={item.href} className="block py-2.5 text-[0.95rem] font-medium text-foreground hover:text-primary">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t border-border p-5">
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
