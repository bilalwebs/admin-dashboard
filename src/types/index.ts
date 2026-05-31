export interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer' | 'Moderator'
  status: 'active' | 'inactive' | 'suspended'
  avatar: string
  joinDate: string
  lastActive: string
}

export interface KpiCard {
  title: string
  value: string
  change: number
  changeLabel: string
  icon: string
  color: string
  gradient: string
}

export interface ChartDataPoint {
  name: string
  value: number
  [key: string]: string | number
}

export interface NavItem {
  label: string
  icon: string
  path: string
  badge?: number
}

export interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: 'info' | 'warning' | 'success' | 'error'
}

export interface Message {
  id: string
  sender: string
  avatar: string
  message: string
  time: string
  read: boolean
}

export type SortDirection = 'asc' | 'desc'
export type SortField = keyof User

export interface Activity {
  id: string
  user: string
  avatar: string
  action: string
  target: string
  time: string
  type: 'user' | 'order' | 'product' | 'system' | 'payment'
}

export interface QuickAction {
  id: string
  label: string
  icon: string
  color: string
  bgLight: string
  bgDark: string
  description: string
}
