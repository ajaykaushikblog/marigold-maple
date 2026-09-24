import { useState } from 'react'
import { Button } from '../../ui/primitives'
import { AdminPageHeader, Panel, Field, Textarea, Badge, PillButton, StatCard } from '../ui'
import { mediaItems, mediaTotal, type MediaItem } from '../../../lib/admin/cms'

export function Media() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [selected, setSelected] = useState<MediaItem | null>(null)
  const pinReady = mediaItems.filter((m) => m.pinterestReady).length

  return (
    <div>
      <AdminPageHeader
        breadcrumb={['CMS', 'Media', 'Library']}
        title="Media Library"
        description="Images, Pinterest-ready assets and galleries used across the site."
        actions={<Button size="md">+ Upload media</Button>}
      />

      <section className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Total files" value={mediaTotal.toLocaleString()} />
        <StatCard label="In this view" value={mediaItems.length} />
        <StatCard label="Pinterest-ready" value={pinReady} />
        <StatCard label="Galleries" value={18} />
      </section>

      <div className="mb-4 flex items-center justify-between">
        <input
          placeholder="Search media…"
          className="w-full max-w-xs rounded-md border border-border bg-background px-3 py-2 text-[0.85rem] text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40"
        />
        <div className="flex gap-1.5">
          <PillButton active={view === 'grid'} onClick={() => setView('grid')}>
            Grid
          </PillButton>
          <PillButton active={view === 'list'} onClick={() => setView('list')}>
            List
          </PillButton>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
        <div>
          {view === 'grid' ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {mediaItems.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelected(m)}
                  className={`group overflow-hidden rounded-lg border bg-card text-left transition-colors ${
                    selected?.id === m.id ? 'border-primary' : 'border-border hover:border-foreground/30'
                  }`}
                >
                  <div className="relative aspect-square bg-secondary">
                    <img src={m.url} alt={m.alt} loading="lazy" className="h-full w-full object-cover" />
                    {m.pinterestReady && (
                      <span className="absolute left-2 top-2 rounded-full bg-[#e60023] px-2 py-0.5 text-[0.6rem] font-bold text-white">
                        Pin
                      </span>
                    )}
                  </div>
                  <div className="p-2">
                    <p className="truncate text-[0.76rem] font-medium text-foreground">{m.filename}</p>
                    <p className="text-[0.68rem] text-muted-foreground">
                      {m.width}×{m.height} · {m.sizeKB} KB
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[560px] text-left text-[0.84rem]">
                <thead className="bg-secondary/60 text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">File</th>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Dimensions</th>
                    <th className="px-4 py-3 font-semibold">Used in</th>
                    <th className="px-4 py-3 font-semibold">Pin</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaItems.map((m) => {
                    const uses = m.usage.articles + m.usage.recipes + m.usage.diy
                    return (
                      <tr
                        key={m.id}
                        onClick={() => setSelected(m)}
                        className={`cursor-pointer border-t border-border transition-colors hover:bg-secondary/40 ${
                          selected?.id === m.id ? 'bg-seasonal-soft/40' : 'bg-card'
                        }`}
                      >
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <img src={m.url} alt="" className="h-9 w-9 rounded object-cover" />
                            <span className="font-medium text-foreground">{m.filename}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{m.type}</td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {m.width}×{m.height}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{uses} pages</td>
                        <td className="px-4 py-3">
                          <Badge
                            label={m.pinterestReady ? 'Ready' : '—'}
                            tone={m.pinterestReady ? 'bg-success/15 text-success' : 'bg-muted text-muted-foreground'}
                          />
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <aside>
          <Panel title="Details">
            {selected ? (
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border border-border bg-secondary">
                  <img src={selected.url} alt={selected.alt} className="h-40 w-full object-cover" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-[0.78rem] text-muted-foreground">
                  <span>{selected.type}</span>
                  <span className="text-right">{selected.sizeKB} KB</span>
                  <span>{selected.width}×{selected.height}</span>
                  <span className="text-right">
                    {selected.usage.pins} pin{selected.usage.pins === 1 ? '' : 's'}
                  </span>
                </div>
                <Field key={selected.id + 't'} label="Title" value={selected.title} />
                <Field key={selected.id + 'a'} label="Alt text" value={selected.alt} />
                <Textarea key={selected.id + 'c'} label="Caption" rows={2} value={selected.caption} placeholder="Optional caption" />
                <div>
                  <p className="mb-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Usage
                  </p>
                  <p className="text-[0.8rem] text-muted-foreground">
                    {selected.usage.articles} articles · {selected.usage.recipes} recipes · {selected.usage.diy} DIY
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="md">Save</Button>
                  <Button size="md" variant="outline">
                    Copy URL
                  </Button>
                </div>
              </div>
            ) : (
              <p className="py-6 text-center text-[0.85rem] text-muted-foreground">
                Select a media item to view details.
              </p>
            )}
          </Panel>
        </aside>
      </div>
    </div>
  )
}
