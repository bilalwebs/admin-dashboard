# Nexus Admin Dashboard

A premium, production-grade admin dashboard built with React, TypeScript, and Tailwind CSS. Designed with a focus on modern UI/UX, smooth animations, and a polished visual experience inspired by Stripe, Linear, and Vercel.

## Features

- **Dashboard Overview** — KPI cards with sparkline trends, growth indicators, and hover animations
- **Revenue & Sales Charts** — Interactive area and bar charts powered by Recharts
- **User Distribution** — Donut chart with role-based breakdown
- **Users Table** — Full-featured data table with search, sorting, pagination, and row actions
- **Activity Feed** — Real-time timeline of platform events (users, orders, payments, system alerts)
- **Quick Actions** — Shortcut grid for common admin tasks
- **Theme System** — Light and dark mode with localStorage persistence and smooth transitions
- **Responsive Layout** — Collapsible sidebar for desktop, drawer navigation for mobile, fluid breakpoints
- **Glassmorphism UI** — Translucent cards, premium shadows, and backdrop blur effects
- **Framer Motion Animations** — Page transitions, staggered card reveals, hover micro-interactions
- **Skeleton Loaders** — Loading states for cards, charts, and table rows

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| TypeScript 6 | Type safety |
| Vite 8 | Build tooling |
| Tailwind CSS 4 | Utility-first styling |
| Recharts 3 | Data visualization |
| Framer Motion 12 | Animations |
| Lucide React | Icon system |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ActivityFeed/       # Real-time activity timeline
│   ├── Charts/             # Revenue, Sales, User Distribution charts
│   ├── DashboardCards/     # KPI metric cards with sparklines
│   ├── Navbar/             # Top navigation with search, notifications, profile
│   ├── QuickActions/       # Admin shortcut grid
│   ├── Sidebar/            # Collapsible desktop sidebar + mobile drawer
│   ├── UI/                 # Reusable primitives (Badge, Dropdown, Skeleton)
│   └── UsersTable/         # Data table with sort, filter, pagination
├── context/
│   ├── SidebarContext/     # Sidebar open/collapsed state
│   └── ThemeContext/        # Light/dark theme management
├── data/                   # Sample data (users, charts, notifications, activity)
├── hooks/                  # Custom hooks (useMediaQuery)
├── pages/
│   └── Dashboard/          # Main dashboard page layout
├── types/                  # TypeScript interfaces and types
├── utils/                  # Utility functions (cn, formatNumber, timeAgo)
├── App.tsx                 # Root layout with sidebar + navbar
├── index.css               # Global styles, scrollbar, premium utilities
└── main.tsx                # Entry point
```

## Design System

**Typography** — Inter (400, 500, 600, 700, 800)

**Color Palette**

| Role | Light | Dark |
|---|---|---|
| Background | `gray-50` | `gray-950` |
| Surface | `white` | `gray-900` |
| Border | `gray-200` | `gray-800` |
| Primary | `indigo-600` | `indigo-400` |
| Success | `emerald-600` | `emerald-400` |
| Warning | `amber-600` | `amber-400` |
| Error | `red-600` | `red-400` |

**Border Radius** — Cards use `2xl` (16px), badges use `full`, buttons use `xl` (12px)

**Shadows** — Custom `shadow-premium` and `shadow-premium-lg` utilities tuned for both themes

## Customization

### Adding a New Sidebar Item

Edit `src/components/Sidebar/Sidebar.tsx`:

```ts
const navItems = [
  // ...existing items
  { label: 'Reports', icon: FileText, path: '/reports', badge: 5 },
]
```

### Adding a New KPI Card

Edit the `cards` array in `src/components/DashboardCards/DashboardCards.tsx`:

```ts
{
  title: 'Conversion Rate',
  value: '3.24%',
  change: 1.8,
  changeLabel: 'vs last month',
  icon: Percent,
  color: 'from-cyan-500 to-blue-500',
  bgLight: 'bg-cyan-50',
  bgDark: 'dark:bg-cyan-500/10',
  iconColor: 'text-cyan-600 dark:text-cyan-400',
  trend: [28, 32, 30, 35, 33, 38, 36],
}
```

### Modifying the Theme

The theme system uses Tailwind's `dark:` variant. Colors are defined inline using Tailwind utility classes. To change the primary color, replace `indigo` references throughout the components.

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## License

MIT
