import { useMemo, useState } from 'react'
import { Button } from '../../ui/primitives'
import { PinterestPreview, SocialPreview } from '../../pinterest'
import { SeoPanel } from '../seo/SeoPanel'
import { InternalLinkAssistant } from '../seo/InternalLinkAssistant'
import {
  AdminPageHeader,
  Badge,
  Field,
  Textarea,
  Select,
  Tabs,
  Panel,
  PillButton,
  ConceptNote,
} from '../ui'
import {
  contentType,
  statusMeta,
  statusOrder,
  editorBlocks,
  schemaTypes,
  pinTemplateOptions,
  adminAuthors,
  taxonomyByKind,
  type ContentItem,
  type ContentTypeId,
  type EditorBlockType,
} from '../../../lib/admin/cms'

type Block = { id: string; type: EditorBlockType; text: string }

let seq = 0
const uid = () => `b-${Date.now()}-${seq++}`

const starterBlocks: Block[] = [
  { id: uid(), type: 'paragraph', text: 'Open with an inviting intro that sets the seasonal scene…' },
  { id: uid(), type: 'heading', text: 'What you’ll need' },
  { id: uid(), type: 'list', text: 'First item\nSecond item\nThird item' },
  { id: uid(), type: 'image', text: 'Featured step photo' },
]

const panelTabs = [
  { id: 'content', label: 'Content' },
  { id: 'taxonomy', label: 'Taxonomy' },
  { id: 'seo', label: 'SEO' },
  { id: 'pinterest', label: 'Pinterest' },
  { id: 'social', label: 'Social' },
  { id: 'publishing', label: 'Publishing' },
]

const previewSizes: Record<string, string> = {
  desktop: 'max-w-full',
  tablet: 'max-w-[768px]',
  mobile: 'max-w-[390px]',
}

export function ContentEditor({ item, typeId }: { item?: ContentItem; typeId: ContentTypeId }) {
  const def = contentType(typeId)
  const isNew = !item
  const [blocks, setBlocks] = useState<Block[]>(starterBlocks)
  const [tab, setTab] = useState('content')
  const [preview, setPreview] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [title, setTitle] = useState(item?.title ?? '')
  const [status, setStatus] = useState(item?.status ?? 'draft')

  const slug = useMemo(
    () =>
      item?.slug ??
      title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .slice(0, 60),
    [title, item],
  )

  const move = (i: number, dir: -1 | 1) => {
    setBlocks((b) => {
      const j = i + dir
      if (j < 0 || j >= b.length) return b
      const next = b.slice()
      ;[next[i], next[j]] = [next[j], next[i]]
      return next
    })
  }
  const remove = (id: string) => setBlocks((b) => b.filter((x) => x.id !== id))
  const add = (type: EditorBlockType) => setBlocks((b) => [...b, { id: uid(), type, text: '' }])

  return (
    <div>
      <AdminPageHeader
        breadcrumb={['CMS', 'Content', isNew ? `New ${def.label}` : 'Edit']}
        title={isNew ? `New ${def.label}` : (item?.title ?? 'Untitled')}
        actions={
          <>
            <Badge label={statusMeta[status].label} tone={statusMeta[status].tone} />
            <a href={isNew ? '#' : `${def.routePrefix}/${slug}`}>
              <Button size="md" variant="outline">
                Preview
              </Button>
            </a>
            <Button size="md">{status === 'published' ? 'Update' : 'Save'}</Button>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)]">
        {/* ---- Main editing area ---- */}
        <div className="min-w-0">
          <div className="rounded-xl border border-border bg-card p-5">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={`${def.label} title`}
              className="w-full bg-transparent font-serif text-[1.7rem] font-semibold text-foreground outline-none placeholder:text-muted-foreground"
            />
            <p className="mt-1 font-mono text-[0.75rem] text-muted-foreground">
              /{def.editorPath === 'article' ? 'article' : def.routePrefix.replace('/', '')}/{slug || 'untitled'}
            </p>
          </div>

          {/* Preview device toggle */}
          <div className="mt-5 flex items-center justify-between">
            <h2 className="font-serif text-[1.15rem] font-semibold text-foreground">Content blocks</h2>
            <div className="flex gap-1.5">
              {(['desktop', 'tablet', 'mobile'] as const).map((d) => (
                <PillButton key={d} active={preview === d} onClick={() => setPreview(d)}>
                  <span className="capitalize">{d}</span>
                </PillButton>
              ))}
            </div>
          </div>

          {/* Reorderable blocks */}
          <div className={`mx-auto mt-4 space-y-3 ${previewSizes[preview]}`}>
            {blocks.map((b, i) => (
              <div key={b.id} className="rounded-lg border border-border bg-card p-3.5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {editorBlocks.find((e) => e.type === b.type)?.label ?? b.type}
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => move(i, -1)}
                      className="rounded px-1.5 py-0.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                      aria-label="Move up"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => move(i, 1)}
                      className="rounded px-1.5 py-0.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                      aria-label="Move down"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      onClick={() => remove(b.id)}
                      className="rounded px-1.5 py-0.5 text-muted-foreground hover:bg-error/10 hover:text-error"
                      aria-label="Delete block"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <textarea
                  rows={b.type === 'paragraph' || b.type === 'list' ? 3 : 1}
                  defaultValue={b.text}
                  placeholder={`Enter ${b.type} content…`}
                  className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-[0.85rem] leading-relaxed text-foreground outline-none placeholder:text-muted-foreground focus:border-foreground/40"
                />
              </div>
            ))}
          </div>

          {/* Block palette */}
          <div className="mt-4 rounded-lg border border-dashed border-border bg-secondary/30 p-4">
            <p className="mb-2.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Add block
            </p>
            <div className="flex flex-wrap gap-2">
              {editorBlocks.map((e) => (
                <button
                  key={e.type}
                  type="button"
                  onClick={() => add(e.type)}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2.5 py-1.5 text-[0.78rem] font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-secondary"
                >
                  <span aria-hidden className="text-muted-foreground">
                    {e.icon}
                  </span>
                  {e.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Right settings panel ---- */}
        <aside className="min-w-0">
          <div className="lg:sticky lg:top-4">
            <div className="rounded-xl border border-border bg-card">
              <div className="px-3 pt-2">
                <Tabs tabs={panelTabs} active={tab} onChange={setTab} />
              </div>
              <div className="space-y-4 p-4">
                {tab === 'content' && (
                  <>
                    <Textarea label="Excerpt" placeholder="Short summary for cards & search…" rows={3} value={item?.title ? '' : ''} />
                    <Field label="Featured image URL" value={item?.featuredImage} placeholder="https://…" />
                    <Field label="Image alt text" placeholder="Describe the image" />
                    <Field label="Read time" placeholder="e.g. 6 min read" />
                  </>
                )}

                {tab === 'taxonomy' && (
                  <>
                    <Select
                      label="Category"
                      value={item?.category ?? taxonomyByKind.category[0].name}
                      options={taxonomyByKind.category.map((t) => t.name)}
                    />
                    <TagPicker label="Subcategories" options={taxonomyByKind.subcategory.map((t) => t.name)} selected={item?.subcategories} />
                    <TagPicker label="Occasions" options={taxonomyByKind.occasion.map((t) => t.name)} selected={item?.occasions} />
                    <TagPicker label="Seasons" options={taxonomyByKind.season.map((t) => t.name)} selected={item?.seasons} />
                    <TagPicker label="Styles" options={taxonomyByKind.style.map((t) => t.name)} selected={item?.styles} />
                    <TagPicker label="Colors" options={taxonomyByKind.color.map((t) => t.name)} selected={item?.colors} />
                    <TagPicker label="Audiences" options={taxonomyByKind.audience.map((t) => t.name)} selected={item?.audiences} />
                    <Field label="Tags" value={item?.tags.join(', ')} placeholder="comma, separated, tags" />
                  </>
                )}

                {tab === 'seo' && (
                  <>
                    <SeoPanel
                      defaultTitle={title || item?.title}
                      url={`${def.routePrefix}/${slug || 'untitled'}`}
                      image={item?.featuredImage}
                      showPinterest={false}
                    />
                    <div className="grid grid-cols-1 gap-3 border-t border-border pt-4">
                      <Select label="Schema type" value={schemaTypes[0]} options={schemaTypes} />
                      <Field label="Focus keyword" placeholder="e.g. christmas nail ideas" />
                    </div>
                    <div className="border-t border-border pt-4">
                      <InternalLinkAssistant current={item} />
                    </div>
                  </>
                )}

                {tab === 'pinterest' && (
                  <>
                    <ConceptNote>Configure Pinterest metadata; full multi-pin management lives in Monetization → Pinterest.</ConceptNote>
                    <Field label="Pin title" value={title} placeholder="Keyword-rich pin title" />
                    <Textarea label="Pin description" rows={3} placeholder="Rich, keyword-forward description with a call to action…" />
                    <Select label="Pin template" value={pinTemplateOptions[0].id} options={pinTemplateOptions.map((p) => ({ value: p.id, label: p.label }))} />
                    <div className="pt-1">
                      <PinterestPreview
                        image={item?.featuredImage ?? 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=70'}
                        title={title || 'Your pin title appears here'}
                        description="Your pin description preview."
                        template={pinTemplateOptions[0].id}
                        destination={`${def.routePrefix}/${slug}`}
                      />
                    </div>
                  </>
                )}

                {tab === 'social' && (
                  <>
                    <Field label="OG title" value={title} placeholder="Title for social shares" />
                    <Textarea label="OG description" rows={3} placeholder="Description for Facebook / X cards…" />
                    <Field label="OG image URL" value={item?.featuredImage} placeholder="https://… (1.91:1)" />
                    <div className="pt-1">
                      <SocialPreview
                        image={item?.featuredImage ?? 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&q=70'}
                        title={title || 'Social card title'}
                        description="How this appears when shared on social."
                        destination={`${def.routePrefix}/${slug}`}
                      />
                    </div>
                  </>
                )}

                {tab === 'publishing' && (
                  <>
                    <Select
                      label="Status"
                      value={status}
                      onChange={(v) => setStatus(v as ContentItem['status'])}
                      options={statusOrder.map((s) => ({ value: s, label: statusMeta[s].label }))}
                    />
                    <Select label="Author" value={item?.author ?? adminAuthors[0].name} options={adminAuthors.map((a) => a.name)} />
                    <Field label="Publish date" type="datetime-local" />
                    <label className="flex items-center gap-2 text-[0.85rem] text-foreground">
                      <input type="checkbox" defaultChecked={item?.featured} /> Featured content
                    </label>
                    <label className="flex items-center gap-2 text-[0.85rem] text-foreground">
                      <input type="checkbox" defaultChecked /> Allow comments
                    </label>
                    <div className="border-t border-border pt-3">
                      <Panel title="Revision workflow">
                        <p className="text-[0.8rem] text-muted-foreground">
                          Saving a draft never affects the live version. Submit for review or schedule to publish later.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <PillButton>Save draft</PillButton>
                          <PillButton>Submit for review</PillButton>
                          <PillButton>Schedule</PillButton>
                        </div>
                      </Panel>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function TagPicker({ label, options, selected = [] }: { label: string; options: string[]; selected?: string[] }) {
  const [chosen, setChosen] = useState<Set<string>>(new Set(selected))
  return (
    <div>
      <span className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const on = chosen.has(o)
          return (
            <button
              key={o}
              type="button"
              onClick={() =>
                setChosen((s) => {
                  const next = new Set(s)
                  next.has(o) ? next.delete(o) : next.add(o)
                  return next
                })
              }
              className={`rounded-full border px-2.5 py-1 text-[0.74rem] font-medium transition-colors ${
                on
                  ? 'border-primary bg-primary/12 text-primary'
                  : 'border-border bg-background text-muted-foreground hover:border-foreground/30'
              }`}
            >
              {o}
            </button>
          )
        })}
      </div>
    </div>
  )
}
