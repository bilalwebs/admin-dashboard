import { motion } from 'framer-motion'
import { UserPlus, CreditCard, Package, ShoppingCart, AlertTriangle, User } from 'lucide-react'
import { activities } from '../../data/dashboardData'
import { cn, getInitials, timeAgo } from '../../utils/cn'
import type { Activity } from '../../types'

const typeIcons: Record<Activity['type'], typeof User> = {
  user: UserPlus,
  payment: CreditCard,
  product: Package,
  order: ShoppingCart,
  system: AlertTriangle,
}

const typeColors: Record<Activity['type'], string> = {
  user: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400',
  payment: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
  product: 'bg-amber-100 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
  order: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
  system: 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',
}

const avatarColors = [
  'from-indigo-500 to-purple-500',
  'from-emerald-500 to-teal-500',
  'from-amber-500 to-orange-500',
  'from-rose-500 to-pink-500',
  'from-blue-500 to-cyan-500',
]

function getAvatarColor(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarColors[Math.abs(hash) % avatarColors.length]
}

export function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.5 }}
      className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-premium overflow-hidden"
    >
      <div className="p-5 lg:p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Latest actions across the platform</p>
          </div>
          <button className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
            View all
          </button>
        </div>
      </div>

      <div className="p-5 lg:p-6">
        <div className="space-y-0">
          {activities.map((activity, index) => {
            const Icon = typeIcons[activity.type]
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.04, duration: 0.3 }}
                className="relative flex gap-3 pb-5 last:pb-0 group"
              >
                {/* Timeline line */}
                {index < activities.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-px bg-gray-200 dark:bg-gray-800 group-last:hidden" />
                )}

                {/* Icon */}
                <div className={cn(
                  'relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                  typeColors[activity.type]
                )}>
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {activity.user === 'System' ? (
                      <span className="font-medium text-gray-900 dark:text-white">System</span>
                    ) : (
                      <span className="font-medium text-gray-900 dark:text-white">{activity.user}</span>
                    )}
                    {' '}{activity.action}{' '}
                    {activity.target && (
                      <span className="font-medium text-gray-900 dark:text-white">{activity.target}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{timeAgo(activity.time)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
