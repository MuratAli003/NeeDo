export const theme = {
  colors: {
    primary: '#4F46E5',
    primaryLight: '#818CF8',
    primaryDark: '#3730A3',
    secondary: '#10B981',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    error: '#EF4444',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    textHint: '#9CA3AF',
    border: '#E5E7EB',
    warning: '#F59E0B',
  },
  radius: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    pill: '999px',
  },
  shadow: {
    card: '0 8px 24px rgba(17, 24, 39, 0.06)',
    primary: '0 16px 30px rgba(79, 70, 229, 0.24)',
  },
  spacing: {
    4: '4px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    48: '48px',
  },
}

export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
