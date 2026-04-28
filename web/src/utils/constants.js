import {
  MdChatBubbleOutline,
  MdChat,
  MdDashboardCustomize,
  MdGridView,
  MdHandyman,
  MdHomeWork,
  MdListAlt,
  MdPersonOutline,
  MdRadar,
} from 'react-icons/md'

export const customerTabs = [
  { key: 'home', label: 'Ana Sayfa', icon: MdHomeWork, activeIcon: MdHomeWork },
  { key: 'categories', label: 'Hizmetler', icon: MdGridView, activeIcon: MdGridView },
  { key: 'requests', label: 'Taleplerim', icon: MdListAlt, activeIcon: MdListAlt },
  { key: 'messages', label: 'Mesajlar', icon: MdChatBubbleOutline, activeIcon: MdChat },
  { key: 'profile', label: 'Profil', icon: MdPersonOutline, activeIcon: MdPersonOutline },
]

export const providerTabs = [
  { key: 'dashboard', label: 'Panel', icon: MdDashboardCustomize, activeIcon: MdDashboardCustomize },
  { key: 'opportunities', label: 'Firsatlar', icon: MdRadar, activeIcon: MdRadar },
  { key: 'jobs', label: 'Islerim', icon: MdHandyman, activeIcon: MdHandyman },
  { key: 'settings', label: 'Profil', icon: MdPersonOutline, activeIcon: MdPersonOutline },
]
