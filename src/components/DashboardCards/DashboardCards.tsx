import { motion } from 'framer-motion'
import { Users, DollarSign, ShoppingCart, Activity, TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../../utils/cn'

const cards = [
  {
    title: 'Total Users',
    value: '24,892',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    bgLight: 'bg-indigo-50',
    bgDark: 'dark:bg-indigo-500/10',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    trend: [35, 42, 38, 45, 40, 52, 48],
  },
  {
    title: 'Total Revenue',
    value: '$847,520',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: DollarSign,
    color: 'from-emerald-500 to-emerald-600',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-500/10',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    trend: [28, 35, 32, 40, 38, 45, 42],
  },
  {
    title: 'Total Orders',
    value: '1,429',
    change: -3.1,
    changeLabel: 'vs last month',
    icon: ShoppingCart,
    color: 'from-amber-500 to-orange-500',
    bgLight: 'bg-amber-50',
    bgDark: 'dark:bg-amber-500/10',
    iconColor: 'text-amber-600 dark:text-amber-400',
    trend: [45, 42, 48, 40, 35, 38, 32],
  },
  {
    title: 'Active Sessions',
    value: '1,893',
    change: 24.8,
    changeLabel: 'vs last month',
    icon: Activity,
    color: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-500/10',
    iconColor: 'text-purple-600 dark:text-purple-400',
    trend: [30, 35, 32, 38, 42, 45, 50],
  },
]

function MiniSparkline({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const width = 80
  const height = 32
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width
      const y = height - ((v - min) / range) * height
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  )
}

const sparklineColors: Record<string, string> = {
  'Total Users': '#6366f1',
  'Total Revenue': '#10b981',
  'Total Orders': '#f59e0b',
  'Active Sessions': '#a855f7',
}

export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ y: -2, transition: { duration: 0.2 } }}
          className="group relative rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-5 lg:p-6 overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-300"
        >
          {/* Subtle gradient background on hover */}
          <div className={cn(
            'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
            `bg-gradient-to-br ${card.color}`,
            '[mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_70%)]',
            'mix-blend-overlay'
          )} />

          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.title}</span>
              <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', card.bgLight, card.bgDark)}>
                <card.icon className={cn('w-5 h-5', card.iconColor)} />
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.08 + 0.2 }}
                  className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight"
                >
                  {card.value}
                </motion.p>
                <div className="flex items-center gap-1.5 mt-2">
                  {card.change >= 0 ? (
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3.5 h-3.5 text-red-500" />
                  )}
                  <span className={cn(
                    'text-xs font-semibold',
                    card.change >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
                  )}>
                    {card.change >= 0 ? '+' : ''}{card.change}%
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{card.changeLabel}</span>
                </div>
              </div>

              <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                <MiniSparkline data={card.trend} color={sparklineColors[card.title]} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
