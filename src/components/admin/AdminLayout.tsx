import { useState, type ReactNode } from 'react'
import { usePathname } from '../../lib/router'
import { useAdminSeo } from './ui'
import { Search, Menu, Close } from '../ui/icons'
import {
  contentItems,
  contentTypes,
  taxonomyKinds,
  contentType,
  type ContentTypeId,
  type TaxonomyKind,
} from '../../lib/admin/cms'

import { Dashboard } from './pages/Dashboard'
import { ContentTable } from './pages/ContentTable'
import { ContentEditor } from './pages/ContentEditor'
import { Taxonomy } from './pages/Taxonomy'
import { Media } from './pages/Media'
import { Authors } from './pages/Authors'
import {
  ActivityLog,
  SiteHealth,
  ImportExport,
  Settings,
  Roles,
  Placeholder,
} from './pages/System'
import {
  SeoDashboard,
  SeoAudit,
  RedirectManager,
  NotFoundManager,
  OrphanPagesView,
  SitemapManager,
  RobotsManager,
  IndexingManager,
  SchemaCenter,
  ImageSeo,
  SeoSettings,
  SeoChangeLog,
} from './pages/Seo'
import { AdminMonetization } from './AdminMonetization'
import { AdminPinterest } from './AdminPinterest'

/* =========================================================================
   AdminLayout — the CMS shell: left sidebar, top admin bar, main area.
   An internal path router maps every /admin/* route to a page built from
   the shared universal admin components.
   ========================================================================= */

type NavItem = { label: string; href: string }
type NavSection = { title?: string; items: NavItem[] }

const nav: NavSection[] = [
  { items: [{ label: 'Dashboard', href: '/admin' }] },
  {
    title: 'Content',
    items: [
      { label: 'All Content', href: '/admin/content' },
      { label: 'Articles', href: '/admin/articles' },
      { label: 'Recipes', href: '/admin/recipes' },
      { label: 'DIY & Tutorials', href: '/admin/diy' },
      { label: 'Guides', href: '/admin/guides' },
      { label: 'Listicles', href: '/admin/listicles' },
      { label: 'Product Guides', href: '/admin/product-guides' },
      { label: 'Drafts', href: '/admin/drafts' },
      { label: 'Scheduled', href: '/admin/scheduled' },
      { label: 'Published', href: '/admin/published' },
      { label: 'Trash', href: '/admin/trash' },
    ],
  },
  {
    title: 'Taxonomy',
    items: [
      { label: 'Categories', href: '/admin/taxonomy/categories' },
      { label: 'Subcategories', href: '/admin/taxonomy/subcategories' },
      { label: 'Occasions', href: '/admin/taxonomy/occasions' },
      { label: 'Seasons', href: '/admin/taxonomy/seasons' },
      { label: 'Tags', href: '/admin/taxonomy/tags' },
      { label: 'Styles', href: '/admin/taxonomy/styles' },
      { label: 'Colors', href: '/admin/taxonomy/colors' },
      { label: 'Audiences', href: '/admin/taxonomy/audiences' },
    ],
  },
  {
    title: 'Media',
    items: [
      { label: 'Media Library', href: '/admin/media' },
      { label: 'Pinterest Images', href: '/admin/media/pinterest' },
      { label: 'Galleries', href: '/admin/media/galleries' },
    ],
  },
  {
    title: 'People',
    items: [
      { label: 'Authors', href: '/admin/authors' },
      { label: 'Contributors', href: '/admin/contributors' },
    ],
  },
  {
    title: 'Monetization',
    items: [
      { label: 'Advertisements', href: '/admin/monetization' },
      { label: 'Affiliate Products', href: '/admin/affiliate' },
      { label: 'Sponsored Content', href: '/admin/sponsored' },
      { label: 'Pinterest', href: '/admin/pinterest' },
    ],
  },
  {
    title: 'SEO',
    items: [
      { label: 'SEO Dashboard', href: '/admin/seo' },
      { label: 'SEO Audit', href: '/admin/seo/audit' },
      { label: 'Redirects', href: '/admin/seo/redirects' },
      { label: '404 Monitor', href: '/admin/seo/404' },
      { label: 'Orphan Pages', href: '/admin/seo/orphans' },
      { label: 'Sitemaps', href: '/admin/seo/sitemap' },
      { label: 'Robots.txt', href: '/admin/seo/robots' },
      { label: 'Indexing & IndexNow', href: '/admin/seo/indexing' },
      { label: 'Structured Data', href: '/admin/seo/schema' },
      { label: 'Image SEO', href: '/admin/seo/images' },
      { label: 'SEO Settings', href: '/admin/seo/settings' },
      { label: 'Change Log', href: '/admin/seo/history' },
    ],
  },
  {
    title: 'Site',
    items: [
      { label: 'Homepage', href: '/admin/homepage' },
      { label: 'Navigation', href: '/admin/navigation' },
      { label: 'Newsletter', href: '/admin/newsletter' },
      { label: 'Settings', href: '/admin/settings' },
    ],
  },
  {
    title: 'System',
    items: [
      { label: 'Activity Log', href: '/admin/activity' },
      { label: 'Import / Export', href: '/admin/import-export' },
      { label: 'Roles & Permissions', href: '/admin/roles' },
      { label: 'Site Health', href: '/admin/site-health' },
    ],
  },
]

const statusRoutes: Record<string, { title: string; status: any }> = {
  drafts: { title: 'Drafts', status: 'draft' },
  scheduled: { title: 'Scheduled', status: 'scheduled' },
  published: { title: 'Published', status: 'published' },
  trash: { title: 'Trash', status: 'trash' },
}

const typeRoutes: Record<string, ContentTypeId> = {
  articles: 'article',
  recipes: 'recipe',
  diy: 'diy',
  guides: 'guide',
  listicles: 'listicle',
  'product-guides': 'product-guide',
}

const taxRoutes: Record<string, TaxonomyKind> = {
  categories: 'category',
  subcategories: 'subcategory',
  occasions: 'occasion',
  seasons: 'season',
  tags: 'tag',
  styles: 'style',
  colors: 'color',
  audiences: 'audience',
}

function renderPage(parts: string[]): ReactNode {
  const [, a, b, c] = parts // parts[0] === 'admin'

  if (!a) return <Dashboard />

  // Content
  if (a === 'content') {
    if (!b) return <ContentTable title="All Content" breadcrumb={['CMS', 'Content', 'All']} />
    if (b === 'new') {
      const type = (typeRoutes[`${c}s`] ?? (c as ContentTypeId)) || 'article'
      const valid = contentTypes.some((t) => t.id === c)
      return <ContentEditor typeId={valid ? (c as ContentTypeId) : type} />
    }
    const item = contentItems.find((i) => i.id === b)
    if (item) return <ContentEditor item={item} typeId={item.type} />
    return <Placeholder title="Content not found" breadcrumb={['CMS', 'Content']} />
  }

  // Type-filtered content views
  if (typeRoutes[a]) {
    const t = typeRoutes[a]
    return <ContentTable title={contentType(t).plural} breadcrumb={['CMS', 'Content', contentType(t).plural]} lockType={t} />
  }

  // Status-filtered content views
  if (statusRoutes[a]) {
    const s = statusRoutes[a]
    return <ContentTable title={s.title} breadcrumb={['CMS', 'Content', s.title]} lockStatus={s.status} />
  }

  // Taxonomy
  if (a === 'taxonomy') {
    const kind = taxRoutes[b] ?? 'category'
    return <Taxonomy kind={kind} />
  }

  // Media
  if (a === 'media') return <Media />

  // People
  if (a === 'authors' || a === 'contributors') return <Authors />

  // Monetization / Pinterest (reuse existing managers)
  if (a === 'monetization') return <AdminMonetization />
  if (a === 'pinterest') return <AdminPinterest />
  if (a === 'affiliate') return <Placeholder title="Affiliate Products" breadcrumb={['CMS', 'Monetization', 'Affiliate']} />
  if (a === 'sponsored') return <Placeholder title="Sponsored Content" breadcrumb={['CMS', 'Monetization', 'Sponsored']} />

  // SEO control center
  if (a === 'seo') {
    switch (b) {
      case undefined:
        return <SeoDashboard />
      case 'audit':
        return <SeoAudit />
      case 'redirects':
        return <RedirectManager />
      case '404':
        return <NotFoundManager />
      case 'orphans':
        return <OrphanPagesView />
      case 'sitemap':
        return <SitemapManager />
      case 'robots':
        return <RobotsManager />
      case 'indexing':
        return <IndexingManager />
      case 'schema':
        return <SchemaCenter />
      case 'images':
        return <ImageSeo />
      case 'settings':
        return <SeoSettings />
      case 'history':
        return <SeoChangeLog />
      default:
        return <SeoDashboard />
    }
  }

  // Site
  if (a === 'settings') return <Settings />
  if (['homepage', 'navigation', 'newsletter'].includes(a))
    return <Placeholder title={a[0].toUpperCase() + a.slice(1)} breadcrumb={['CMS', 'Site', a]} />

  // System
  if (a === 'activity') return <ActivityLog />
  if (a === 'import-export') return <ImportExport />
  if (a === 'roles') return <Roles />
  if (a === 'site-health') return <SiteHealth />

  return <Placeholder title="Not found" breadcrumb={['CMS', a]} />
}

// Landing routes that have deeper siblings must match exactly, so a sub-route
// doesn't also highlight the section's index link.
const exactOnly = new Set(['/admin', '/admin/seo', '/admin/content', '/admin/media'])

function isActive(href: string, pathname: string) {
  const p = pathname.replace(/\/+$/, '') || '/'
  if (exactOnly.has(href)) return p === href
  return p === href || p.startsWith(href + '/')
}

export function AdminLayout() {
  const pathname = usePathname()
  const parts = pathname.replace(/^\/+/, '').replace(/\/+$/, '').split('/')
  const [open, setOpen] = useState(false)
  useAdminSeo('CMS')

  return (
    <div className="min-h-screen bg-secondary/30 text-foreground">
      {/* Top admin bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card px-4 sm:px-6">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-1.5 text-foreground hover:bg-secondary lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
        </button>
        <a href="/admin" className="font-serif text-[1.1rem] font-semibold tracking-tight">
          Marigold &amp; Maple <span className="text-muted-foreground">CMS</span>
        </a>
        <div className="relative ml-auto hidden max-w-xs flex-1 items-center sm:flex">
          <Search width={16} height={16} className="absolute left-3 text-muted-foreground" />
          <input
            placeholder="Search the CMS…"
            className="w-full rounded-md border border-border bg-background py-1.5 pl-9 pr-3 text-[0.82rem] text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40"
          />
        </div>
        <a
          href="/"
          className="ml-auto rounded-md border border-border px-2.5 py-1.5 text-[0.78rem] font-semibold text-foreground hover:bg-secondary sm:ml-0"
        >
          View site
        </a>
        <span className="hidden h-8 w-8 place-items-center rounded-full bg-primary/15 text-[0.78rem] font-bold text-primary sm:grid">
          MM
        </span>
      </header>

      <div className="mx-auto flex max-w-[1500px]">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 top-14 z-20 w-64 overflow-y-auto border-r border-border bg-card px-3 py-4 transition-transform lg:sticky lg:top-14 lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="space-y-5">
            {nav.map((section, i) => (
              <div key={i}>
                {section.title && (
                  <p className="mb-1.5 px-2 text-[0.64rem] font-bold uppercase tracking-[0.16em] text-muted-foreground/70">
                    {section.title}
                  </p>
                )}
                <ul className="space-y-0.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-2.5 py-1.5 text-[0.83rem] font-medium transition-colors ${
                          isActive(item.href, pathname)
                            ? 'bg-seasonal-soft/60 text-foreground'
                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile scrim */}
        {open && (
          <div
            className="fixed inset-0 top-14 z-10 bg-foreground/30 lg:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}

        {/* Main */}
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">{renderPage(parts)}</main>
      </div>
    </div>
  )
}
