import { useState } from 'react'
import { Button } from '../../ui/primitives'
import { AdminPageHeader, Panel, Field, Textarea, Select, Badge, StatCard, ConceptNote, EmptyState } from '../ui'
import {
  activityLog,
  healthChecks,
  roles,
  permissions,
  rolePermissions,
  robotsOptions,
  contentTypes,
  type HealthState,
} from '../../../lib/admin/cms'

const activityTone: Record<string, string> = {
  published: 'bg-success/15 text-success',
  edited: 'bg-primary/12 text-primary',
  created: 'bg-secondary text-secondary-foreground',
  media: 'bg-warning/15 text-warning',
  seo: 'bg-primary/12 text-primary',
  trash: 'bg-error/12 text-error',
}

export function ActivityLog() {
  return (
    <div>
      <AdminPageHeader breadcrumb={['CMS', 'System', 'Activity Log']} title="Activity Log" description="A running record of editorial actions across the CMS." />
      <Panel>
        <ul className="divide-y divide-border">
          {activityLog.map((a) => (
            <li key={a.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
              <span className={`shrink-0 rounded-full px-2.5 py-1 text-[0.66rem] font-semibold ${activityTone[a.tone]}`}>
                {a.action}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.88rem] font-medium text-foreground">{a.target}</p>
                <p className="text-[0.74rem] text-muted-foreground">by {a.user}</p>
              </div>
              <span className="shrink-0 text-[0.76rem] text-muted-foreground">{a.when}</span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}

const healthTone: Record<HealthState, { label: string; tone: string }> = {
  healthy: { label: 'Healthy', tone: 'bg-success/15 text-success' },
  warning: { label: 'Warning', tone: 'bg-warning/15 text-warning' },
  attention: { label: 'Needs attention', tone: 'bg-error/12 text-error' },
}

export function SiteHealth() {
  const healthy = healthChecks.filter((c) => c.state === 'healthy').length
  const warning = healthChecks.filter((c) => c.state === 'warning').length
  const attention = healthChecks.filter((c) => c.state === 'attention').length
  return (
    <div>
      <AdminPageHeader breadcrumb={['CMS', 'System', 'Site Health']} title="Site Health" description="Content, SEO and technical checks at a glance." />
      <div className="mb-4">
        <ConceptNote>
          These are interface states for the future health monitor. Live crawling, link checking and
          indexing status connect in the backend phase — no automated scan runs yet.
        </ConceptNote>
      </div>
      <section className="mb-6 grid grid-cols-3 gap-3">
        <StatCard label="Healthy" value={healthy} />
        <StatCard label="Warnings" value={warning} />
        <StatCard label="Needs attention" value={attention} />
      </section>
      <div className="grid gap-3 sm:grid-cols-2">
        {healthChecks.map((c) => (
          <div key={c.id} className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
            <div>
              <p className="text-[0.9rem] font-semibold text-foreground">{c.label}</p>
              <p className="text-[0.76rem] text-muted-foreground">{c.detail}</p>
            </div>
            <div className="flex items-center gap-2.5">
              {c.count > 0 && <span className="font-serif text-[1.3rem] font-semibold text-foreground">{c.count}</span>}
              <Badge label={healthTone[c.state].label} tone={healthTone[c.state].tone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ImportExport() {
  return (
    <div>
      <AdminPageHeader breadcrumb={['CMS', 'System', 'Import / Export']} title="Import & Export" description="Bulk content operations." />
      <div className="mb-4">
        <ConceptNote>Interface only — no data is processed until backend import/export services are connected.</ConceptNote>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Import">
          <div className="rounded-lg border border-dashed border-border bg-secondary/30 px-6 py-10 text-center">
            <p className="font-serif text-[1.1rem] font-semibold text-foreground">Drop a file to import</p>
            <p className="mx-auto mt-1 max-w-xs text-[0.8rem] text-muted-foreground">Supports CSV, JSON and WordPress WXR exports.</p>
            <div className="mt-4">
              <Button size="md" variant="outline">Choose file</Button>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            <Select label="Import as" value="article" options={contentTypes.map((t) => ({ value: t.id, label: t.label }))} />
            <Select label="Default status" value="draft" options={['draft', 'review', 'published']} />
          </div>
        </Panel>
        <Panel title="Export">
          <div className="space-y-3">
            <Select label="Content type" value="all" options={[{ value: 'all', label: 'All content' }, ...contentTypes.map((t) => ({ value: t.id, label: t.label }))]} />
            <Select label="Format" value="json" options={['json', 'csv', 'wxr']} />
            <Select label="Status" value="all" options={['all', 'published', 'draft']} />
            <Button size="md">Generate export</Button>
          </div>
        </Panel>
      </div>
    </div>
  )
}

const settingsSections = ['General', 'Reading', 'SEO defaults', 'Social', 'Pinterest', 'Advanced']

export function Settings() {
  const [section, setSection] = useState('General')
  return (
    <div>
      <AdminPageHeader breadcrumb={['CMS', 'Site', 'Settings']} title="Site Settings" description="Global configuration for the site." actions={<Button size="md">Save settings</Button>} />
      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav className="flex flex-row flex-wrap gap-1.5 lg:flex-col">
          {settingsSections.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSection(s)}
              className={`rounded-md px-3 py-2 text-left text-[0.84rem] font-medium transition-colors ${
                section === s ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
              }`}
            >
              {s}
            </button>
          ))}
        </nav>
        <Panel title={section}>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {section === 'General' && (
              <>
                <Field label="Site title" value="Marigold & Maple" />
                <Field label="Tagline" value="Seasonal living, thoughtfully curated" />
                <Field label="Site URL" mono value="https://marigoldandmaple.com" />
                <Field label="Admin email" type="email" value="hello@marigoldandmaple.com" />
              </>
            )}
            {section === 'Reading' && (
              <>
                <Field label="Homepage" value="Latest & featured" />
                <Field label="Posts per archive page" type="number" value="24" />
                <Textarea label="Footer text" rows={2} value="© Marigold & Maple. All rights reserved." />
              </>
            )}
            {section === 'SEO defaults' && (
              <>
                <Field label="Default meta title suffix" value=" | Marigold & Maple" />
                <Textarea label="Default meta description" rows={3} value="Seasonal recipes, decor, DIY and celebration ideas." />
                <Select label="Default robots" value={robotsOptions[0]} options={robotsOptions} />
              </>
            )}
            {section === 'Social' && (
              <>
                <Field label="Facebook page" placeholder="https://facebook.com/…" />
                <Field label="Instagram" placeholder="https://instagram.com/…" />
                <Field label="X / Twitter handle" placeholder="@marigoldmaple" />
                <Field label="Default OG image" placeholder="https://…" />
              </>
            )}
            {section === 'Pinterest' && (
              <>
                <Field label="Pinterest profile" placeholder="https://pinterest.com/…" />
                <Field label="Domain verification tag" mono placeholder="<meta name='p:domain_verify' …>" />
                <label className="flex items-center gap-2 text-[0.85rem] text-foreground">
                  <input type="checkbox" defaultChecked /> Enable rich pins metadata
                </label>
              </>
            )}
            {section === 'Advanced' && (
              <>
                <Textarea label="Custom head scripts" rows={3} mono placeholder="<!-- analytics, verification, etc. -->" />
                <Textarea label="robots.txt" rows={4} mono value={'User-agent: *\nAllow: /\nSitemap: https://marigoldandmaple.com/sitemap.xml'} />
              </>
            )}
            <div className="pt-1">
              <Button size="md" type="submit">Save changes</Button>
            </div>
          </form>
        </Panel>
      </div>
    </div>
  )
}

export function Roles() {
  return (
    <div>
      <AdminPageHeader breadcrumb={['CMS', 'System', 'Roles & Permissions']} title="Roles & Permissions" description="Editorial roles and their capabilities." />
      <div className="mb-4">
        <ConceptNote>Permissions UI only — no authentication or access control is enforced in this prototype.</ConceptNote>
      </div>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[640px] text-left text-[0.84rem]">
          <thead className="bg-secondary/60 text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Capability</th>
              {roles.map((r) => (
                <th key={r} className="px-4 py-3 text-center font-semibold">
                  {r}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permissions.map((p) => (
              <tr key={p} className="border-t border-border bg-card">
                <td className="px-4 py-3 font-medium text-foreground">{p}</td>
                {roles.map((r) => (
                  <td key={r} className="px-4 py-3 text-center">
                    {rolePermissions[r].has(p) ? (
                      <span className="text-success" aria-label="allowed">
                        ✓
                      </span>
                    ) : (
                      <span className="text-border" aria-label="denied">
                        —
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function Placeholder({ title, breadcrumb }: { title: string; breadcrumb: string[] }) {
  return (
    <div>
      <AdminPageHeader breadcrumb={breadcrumb} title={title} />
      <EmptyState
        title={`${title} — coming together`}
        hint="This section uses the same universal admin building blocks and will be wired up in a later pass."
      />
    </div>
  )
}
