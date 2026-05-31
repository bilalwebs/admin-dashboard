import type { User, Notification, Message, Activity, QuickAction } from '../types'

export const users: User[] = [
  { id: 'USR-001', name: 'Olivia Martin', email: 'olivia.martin@email.com', role: 'Admin', status: 'active', avatar: 'OM', joinDate: '2024-01-15', lastActive: '2026-05-25T10:30:00' },
  { id: 'USR-002', name: 'Jackson Lee', email: 'jackson.lee@email.com', role: 'Editor', status: 'active', avatar: 'JL', joinDate: '2024-02-20', lastActive: '2026-05-25T09:15:00' },
  { id: 'USR-003', name: 'Isabella Nguyen', email: 'isabella.n@email.com', role: 'Viewer', status: 'inactive', avatar: 'IN', joinDate: '2024-03-10', lastActive: '2026-05-20T14:00:00' },
  { id: 'USR-004', name: 'William Kim', email: 'william.kim@email.com', role: 'Moderator', status: 'active', avatar: 'WK', joinDate: '2024-04-05', lastActive: '2026-05-25T11:45:00' },
  { id: 'USR-005', name: 'Sofia Davis', email: 'sofia.davis@email.com', role: 'Editor', status: 'suspended', avatar: 'SD', joinDate: '2024-05-12', lastActive: '2026-05-18T08:30:00' },
  { id: 'USR-006', name: 'James Wilson', email: 'james.w@email.com', role: 'Viewer', status: 'active', avatar: 'JW', joinDate: '2024-06-01', lastActive: '2026-05-25T07:20:00' },
  { id: 'USR-007', name: 'Mia Johnson', email: 'mia.j@email.com', role: 'Admin', status: 'active', avatar: 'MJ', joinDate: '2024-07-18', lastActive: '2026-05-25T12:00:00' },
  { id: 'USR-008', name: 'Benjamin Brown', email: 'ben.brown@email.com', role: 'Editor', status: 'active', avatar: 'BB', joinDate: '2024-08-22', lastActive: '2026-05-24T16:45:00' },
  { id: 'USR-009', name: 'Charlotte Taylor', email: 'charlotte.t@email.com', role: 'Moderator', status: 'inactive', avatar: 'CT', joinDate: '2024-09-14', lastActive: '2026-05-15T10:00:00' },
  { id: 'USR-010', name: 'Ethan Martinez', email: 'ethan.m@email.com', role: 'Viewer', status: 'active', avatar: 'EM', joinDate: '2024-10-30', lastActive: '2026-05-25T08:10:00' },
  { id: 'USR-011', name: 'Amelia Garcia', email: 'amelia.g@email.com', role: 'Editor', status: 'active', avatar: 'AG', joinDate: '2024-11-08', lastActive: '2026-05-25T06:30:00' },
  { id: 'USR-012', name: 'Lucas Anderson', email: 'lucas.a@email.com', role: 'Viewer', status: 'suspended', avatar: 'LA', joinDate: '2024-12-01', lastActive: '2026-05-10T09:00:00' },
  { id: 'USR-013', name: 'Harper Thomas', email: 'harper.t@email.com', role: 'Admin', status: 'active', avatar: 'HT', joinDate: '2025-01-15', lastActive: '2026-05-25T11:00:00' },
  { id: 'USR-014', name: 'Alexander White', email: 'alex.w@email.com', role: 'Moderator', status: 'active', avatar: 'AW', joinDate: '2025-02-20', lastActive: '2026-05-24T14:30:00' },
  { id: 'USR-015', name: 'Evelyn Harris', email: 'evelyn.h@email.com', role: 'Editor', status: 'inactive', avatar: 'EH', joinDate: '2025-03-10', lastActive: '2026-05-12T08:00:00' },
]

export const revenueData = [
  { name: 'Jan', revenue: 42000, expenses: 28000, profit: 14000 },
  { name: 'Feb', revenue: 38000, expenses: 25000, profit: 13000 },
  { name: 'Mar', revenue: 51000, expenses: 32000, profit: 19000 },
  { name: 'Apr', revenue: 47000, expenses: 29000, profit: 18000 },
  { name: 'May', revenue: 62000, expenses: 35000, profit: 27000 },
  { name: 'Jun', revenue: 58000, expenses: 33000, profit: 25000 },
  { name: 'Jul', revenue: 71000, expenses: 38000, profit: 33000 },
  { name: 'Aug', revenue: 68000, expenses: 36000, profit: 32000 },
  { name: 'Sep', revenue: 79000, expenses: 41000, profit: 38000 },
  { name: 'Oct', revenue: 85000, expenses: 44000, profit: 41000 },
  { name: 'Nov', revenue: 92000, expenses: 47000, profit: 45000 },
  { name: 'Dec', revenue: 105000, expenses: 52000, profit: 53000 },
]

export const salesData = [
  { name: 'Mon', sales: 120, returns: 8 },
  { name: 'Tue', sales: 145, returns: 12 },
  { name: 'Wed', sales: 132, returns: 6 },
  { name: 'Thu', sales: 168, returns: 15 },
  { name: 'Fri', sales: 190, returns: 10 },
  { name: 'Sat', sales: 210, returns: 18 },
  { name: 'Sun', sales: 175, returns: 9 },
]

export const userDistribution = [
  { name: 'Admin', value: 8, color: '#6366f1' },
  { name: 'Editor', value: 24, color: '#8b5cf6' },
  { name: 'Viewer', value: 45, color: '#a78bfa' },
  { name: 'Moderator', value: 15, color: '#c4b5fd' },
]

export const notifications: Notification[] = [
  { id: '1', title: 'New user registered', message: 'Olivia Martin just created an account', time: '2026-05-25T10:30:00', read: false, type: 'info' },
  { id: '2', title: 'Payment received', message: 'Order #1234 — $2,450.00', time: '2026-05-25T09:15:00', read: false, type: 'success' },
  { id: '3', title: 'Server alert', message: 'CPU usage exceeded 90%', time: '2026-05-25T08:00:00', read: true, type: 'warning' },
  { id: '4', title: 'Deployment failed', message: 'Build #456 failed on production', time: '2026-05-24T22:00:00', read: true, type: 'error' },
  { id: '5', title: 'Weekly report ready', message: 'Your analytics report is available', time: '2026-05-24T09:00:00', read: true, type: 'info' },
]

export const messages: Message[] = [
  { id: '1', sender: 'Olivia Martin', avatar: 'OM', message: 'Hey, can you review the latest design mockups?', time: '2026-05-25T10:30:00', read: false },
  { id: '2', sender: 'Jackson Lee', avatar: 'JL', message: 'The API integration is complete. Ready for QA.', time: '2026-05-25T09:15:00', read: false },
  { id: '3', sender: 'Sofia Davis', avatar: 'SD', message: 'Meeting at 3pm to discuss the roadmap.', time: '2026-05-24T16:00:00', read: true },
  { id: '4', sender: 'William Kim', avatar: 'WK', message: 'Pushed the hotfix for the login issue.', time: '2026-05-24T14:30:00', read: true },
]

export const activities: Activity[] = [
  { id: '1', user: 'Olivia Martin', avatar: 'OM', action: 'created a new account', target: '', time: '2026-05-25T10:30:00', type: 'user' },
  { id: '2', user: 'System', avatar: 'SY', action: 'processed payment for', target: 'Order #1234', time: '2026-05-25T10:15:00', type: 'payment' },
  { id: '3', user: 'Jackson Lee', avatar: 'JL', action: 'updated product', target: 'Premium Widget', time: '2026-05-25T09:45:00', type: 'product' },
  { id: '4', user: 'Mia Johnson', avatar: 'MJ', action: 'completed order', target: 'Order #1230', time: '2026-05-25T09:30:00', type: 'order' },
  { id: '5', user: 'System', avatar: 'SY', action: 'detected unusual activity from', target: 'IP 192.168.1.45', time: '2026-05-25T09:00:00', type: 'system' },
  { id: '6', user: 'Harper Thomas', avatar: 'HT', action: 'approved refund for', target: 'Order #1228', time: '2026-05-25T08:45:00', type: 'payment' },
  { id: '7', user: 'William Kim', avatar: 'WK', action: 'suspended user', target: 'Lucas Anderson', time: '2026-05-25T08:30:00', type: 'user' },
  { id: '8', user: 'Benjamin Brown', avatar: 'BB', action: 'published new product', target: 'Starter Kit', time: '2026-05-25T08:00:00', type: 'product' },
]

export const quickActions: QuickAction[] = [
  { id: '1', label: 'Add User', icon: 'UserPlus', color: 'text-indigo-600 dark:text-indigo-400', bgLight: 'bg-indigo-50', bgDark: 'dark:bg-indigo-500/10', description: 'Create a new user account' },
  { id: '2', label: 'New Order', icon: 'ShoppingBag', color: 'text-emerald-600 dark:text-emerald-400', bgLight: 'bg-emerald-50', bgDark: 'dark:bg-emerald-500/10', description: 'Place a new order' },
  { id: '3', label: 'Add Product', icon: 'PackagePlus', color: 'text-amber-600 dark:text-amber-400', bgLight: 'bg-amber-50', bgDark: 'dark:bg-amber-500/10', description: 'Add a new product listing' },
  { id: '4', label: 'Send Report', icon: 'FileBarChart', color: 'text-purple-600 dark:text-purple-400', bgLight: 'bg-purple-50', bgDark: 'dark:bg-purple-500/10', description: 'Generate & send analytics report' },
]
