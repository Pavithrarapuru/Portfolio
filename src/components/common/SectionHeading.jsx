function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mb-[55px] max-w-[610px] max-small:mb-[38px]">
      <span className="font-mono text-[10px] uppercase tracking-[.08em] text-accent">{eyebrow}</span>
      <h2 className="my-[18px] mb-[17px] max-w-[570px] whitespace-pre-line text-[clamp(2.2rem,4.3vw,4.15rem)] font-bold leading-[1.04] tracking-[-.07em]">{title}</h2>
      {copy && <p className="m-0 max-w-[490px] text-[15px] text-muted">{copy}</p>}
    </div>
  )
}

export default SectionHeading
