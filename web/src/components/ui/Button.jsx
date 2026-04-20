export function Button({ children, variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'secondary'
      ? 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
      : 'bg-indigo-600 text-white hover:bg-indigo-700'

  return (
    <button
      className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
