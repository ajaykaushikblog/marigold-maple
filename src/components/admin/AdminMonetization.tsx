import { useEffect, useState } from 'react'
import { Container, Button } from '../ui/primitives'
import {
  allSlots,
  slotSummary,
  analyticsFields,
  adFormats,
  type AdSlotConfig,
} from '../../lib/ads'

/* =========================================================================
   CMS → Monetization → Advertisements

   Front-end concept for the future Advertisement Manager. Dashboard counts
   are derived from the real slot registry; performance analytics are honest
   placeholders ("—") until a real network/CMS is connected. This screen is a
   UI/UX representation — it does not implement a live ad network.
   ========================================================================= */

function useAdminSeo() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Monetization — Marigold & Maple CMS'
    const robots = document.createElement('meta')
    robots.name = 'robots'
    robots.content = 'noindex, nofollow'
    document.head.appendChild(robots)
    return () => {
      document.title = prev
      robots.remove()
    }
  }, [])
}

const statusTone: Record<AdSlotConfig['status'], string> = {
  active: 'bg-success/15 text-success',
  inactive: 'bg-muted text-muted-foreground',
  scheduled: 'bg-warning/15 text-warning',
}

function StatCard({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-serif text-[1.9rem] font-semibold leading-none text-foreground">
        {value}
      </p>
      {hint && <p className="mt-1.5 text-[0.72rem] text-muted-foreground">{hint}</p>}
    </div>
  )
}

/* ---- Ad editor (representative concept form) ---- */
function AdEditor({ slot }: { slot: AdSlotConfig }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-xl border border-border bg-card p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-serif text-[1.3rem] font-semibold text-foreground">Ad Editor</h3>
        <span className="rounded bg-secondary px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Concept
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ad name" value={slot.name} />
        <Field label="Ad slot ID" value={slot.id} mono />
        <Select label="Ad type" value={slot.type} options={['display', 'affiliate', 'sponsored', 'native']} />
        <Field label="Placement" value={slot.placement} />
        <Select label="Device targeting" value={slot.device} options={['all', 'desktop', 'mobile']} />
        <Select label="Status" value={slot.status} options={['active', 'inactive', 'scheduled']} />
        <Field label="Start date" value={slot.startDate ?? ''} placeholder="—" type="date" />
        <Field label="End date" value={slot.endDate ?? ''} placeholder="—" type="date" />
        <Field label="Destination URL" value={slot.destinationUrl ?? ''} placeholder="https://…" />
        <Field label="Affiliate URL" value="" placeholder="https://… (affiliate)" />
        <Field label="Sponsored brand" value="" placeholder="Brand name" />
        <Field label="Image URL" value={slot.image ?? ''} placeholder="https://…" />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Ad code placeholder
        </label>
        <textarea
          rows={3}
          defaultValue={slot.code}
          placeholder="<!-- Paste AdSense / network ad unit code here -->"
          className="w-full rounded-md border border-border bg-background px-3 py-2 font-mono text-[0.8rem] text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40"
        />
      </div>
      <div className="mt-4">
        <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Disclosure text
        </label>
        <input
          defaultValue=""
          placeholder="This post may contain affiliate links…"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-[0.85rem] text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40"
        />
      </div>
      <div className="mt-5 flex gap-3">
        <Button size="md" type="submit">Save ad slot</Button>
        <Button size="md" variant="outline" type="button">Preview</Button>
      </div>
    </form>
  )
}

function Field({
  label,
  value,
  placeholder,
  mono,
  type = 'text',
}: {
  label: string
  value: string
  placeholder?: string
  mono?: boolean
  type?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        className={`w-full rounded-md border border-border bg-background px-3 py-2 text-[0.85rem] text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40 ${
          mono ? 'font-mono' : ''
        }`}
      />
    </div>
  )
}

function Select({ label, value, options }: { label: string; value: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </label>
      <select
        defaultValue={value}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-[0.85rem] capitalize text-foreground outline-none focus:border-foreground/40"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}

export function AdminMonetization() {
  useAdminSeo()
  const slots = allSlots()
  const summary = slotSummary()
  const [selected, setSelected] = useState<AdSlotConfig>(slots[0])

  return (
    <main className="min-h-screen bg-background py-10">
      <Container width="wide">
        {/* Breadcrumb / title */}
        <div className="mb-2 text-[0.78rem] text-muted-foreground">
          CMS <span className="mx-1.5 text-border">/</span> Monetization{' '}
          <span className="mx-1.5 text-border">/</span>{' '}
          <span className="text-foreground">Advertisements</span>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-[2rem] font-semibold tracking-tight text-foreground sm:text-[2.4rem]">
              Advertisement Manager
            </h1>
            <p className="mt-1 text-[0.9rem] text-muted-foreground">
              Configure reusable ad slots, affiliate and sponsored placements across the site.
            </p>
          </div>
          <Button size="md">+ New ad slot</Button>
        </div>

        {/* Dashboard summary — real counts from the slot registry */}
        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <StatCard label="Total slots" value={String(summary.total)} />
          <StatCard label="Active" value={String(summary.active)} />
          <StatCard label="Inactive" value={String(summary.inactive)} />
          <StatCard label="Sponsored" value={String(summary.sponsored)} />
          <StatCard label="Desktop" value={String(summary.desktop)} />
          <StatCard label="Mobile" value={String(summary.mobile)} />
        </section>

        {/* Slots table + editor */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]">
          <section>
            <h2 className="mb-3 font-serif text-[1.3rem] font-semibold text-foreground">Ad Slots</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[560px] text-left text-[0.85rem]">
                <thead className="bg-secondary/60 text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Slot</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Device</th>
                    <th className="px-4 py-3 font-semibold">Format</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {slots.map((s) => (
                    <tr
                      key={s.id}
                      onClick={() => setSelected(s)}
                      className={`cursor-pointer border-t border-border transition-colors hover:bg-secondary/40 ${
                        selected.id === s.id ? 'bg-seasonal-soft/40' : 'bg-card'
                      }`}
                    >
                      <td className="px-4 py-3">
                        <p className="font-semibold text-foreground">{s.name}</p>
                        <p className="font-mono text-[0.72rem] text-muted-foreground">{s.id}</p>
                      </td>
                      <td className="px-4 py-3 capitalize text-muted-foreground">{s.type}</td>
                      <td className="px-4 py-3 capitalize text-muted-foreground">{s.device}</td>
                      <td className="px-4 py-3 text-muted-foreground">{adFormats[s.format].label}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-[0.68rem] font-semibold capitalize ${statusTone[s.status]}`}
                        >
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <AdEditor slot={selected} />
        </div>

        {/* Analytics — placeholders only, never fabricated data */}
        <section className="mt-12">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="font-serif text-[1.3rem] font-semibold text-foreground">
              Monetization Analytics
            </h2>
            <span className="rounded bg-secondary px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Awaiting live data
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {analyticsFields.map((m) => (
              <StatCard
                key={m.key}
                label={m.label}
                value={m.value == null ? '—' : String(m.value)}
                hint={m.hint}
              />
            ))}
          </div>
          <p className="mt-3 text-[0.78rem] text-muted-foreground">
            Values populate once Google AdSense, affiliate networks and sponsored campaigns are
            connected in the backend. No estimated or sample figures are shown.
          </p>
        </section>
      </Container>
    </main>
  )
}
