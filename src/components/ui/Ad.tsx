/* Reserved-space ad placeholder — dimensions are fixed to prevent layout
   shift. Real ad markup (AdSense / affiliate / custom) drops in later. */

type AdFormat = 'leaderboard' | 'billboard' | 'rectangle' | 'half-page' | 'mobile'

const formats: Record<AdFormat, { w: number; h: number; label: string }> = {
  leaderboard: { w: 728, h: 90, label: '728 × 90' },
  billboard: { w: 970, h: 250, label: '970 × 250' },
  rectangle: { w: 300, h: 250, label: '300 × 250' },
  'half-page': { w: 300, h: 600, label: '300 × 600' },
  mobile: { w: 320, h: 100, label: '320 × 100' },
}

export function Ad({ format = 'rectangle' }: { format?: AdFormat }) {
  const f = formats[format]
  return (
    <div
      className="mx-auto flex w-full flex-col items-center justify-center rounded-md border border-dashed border-border bg-secondary/60 text-muted-foreground"
      style={{ maxWidth: f.w, aspectRatio: `${f.w} / ${f.h}` }}
      aria-label="Advertisement"
    >
      <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em]">Advertisement</span>
      <span className="mt-1 text-[0.72rem]">{f.label}</span>
    </div>
  )
}
