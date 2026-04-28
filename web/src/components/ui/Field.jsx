import { cn } from '../../lib/theme'

export function Field({
  label,
  hint,
  prefix,
  suffix,
  textarea = false,
  className = '',
  inputClassName = '',
  ...props
}) {
  const Component = textarea ? 'textarea' : 'input'

  return (
    <label className={cn('block', className)}>
      {label ? <span className="mb-2 block text-sm font-semibold text-[var(--text-primary)]">{label}</span> : null}
      <span className="flex min-h-14 items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-white px-4 transition focus-within:border-[var(--primary)] focus-within:ring-2 focus-within:ring-[color:rgba(79,70,229,0.12)]">
        {prefix ? <span className="shrink-0 text-[var(--text-hint)]">{prefix}</span> : null}
        <Component
          className={cn(
            'w-full resize-none border-0 bg-transparent text-[15px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-hint)]',
            textarea ? 'min-h-28 py-4' : 'py-4',
            inputClassName,
          )}
          placeholder={hint}
          {...props}
        />
        {suffix ? <span className="shrink-0 text-[var(--text-hint)]">{suffix}</span> : null}
      </span>
    </label>
  )
}
