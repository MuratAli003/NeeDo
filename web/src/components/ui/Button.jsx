import { cn } from '../../lib/theme'

export function Button({ children, variant = 'primary', className = '', loading = false, ...props }) {
  const styles = {
    primary: 'bg-[var(--primary)] text-white shadow-[var(--shadow-primary)] hover:bg-[var(--primary-dark)] disabled:bg-[var(--primary-light)]',
    secondary: 'border border-[var(--primary)] bg-white text-[var(--primary)] hover:bg-[color:rgba(79,70,229,0.06)]',
    danger: 'bg-[var(--error)] text-white hover:opacity-95',
    ghost: 'bg-transparent text-[var(--primary)] hover:bg-[color:rgba(79,70,229,0.06)] shadow-none',
  }

  return (
    <button
      className={cn(
        'inline-flex min-h-14 items-center justify-center rounded-[var(--radius-md)] px-6 py-4 text-[15px] font-semibold transition disabled:cursor-not-allowed disabled:opacity-70',
        styles[variant] || styles.primary,
        className,
      )}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-r-transparent" /> : children}
    </button>
  )
}
