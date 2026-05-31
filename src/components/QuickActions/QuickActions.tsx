import { motion } from 'framer-motion'
import { UserPlus, ShoppingBag, PackagePlus, FileBarChart } from 'lucide-react'
import { quickActions } from '../../data/dashboardData'
import { cn } from '../../utils/cn'

const iconMap: Record<string, typeof UserPlus> = {
  UserPlus,
  ShoppingBag,
  PackagePlus,
  FileBarChart,
}

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-premium overflow-hidden"
    >
      <div className="p-5 lg:p-6 border-b border-gray-100 dark:border-gray-800">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Common tasks at your fingertips</p>
      </div>

      <div className="p-5 lg:p-6 grid grid-cols-2 gap-3">
        {quickActions.map((action, index) => {
          const Icon = iconMap[action.icon]
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'flex flex-col items-center gap-2.5 p-4 rounded-xl border border-gray-100 dark:border-gray-800',
                'hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm transition-all duration-200',
                'bg-gray-50/50 dark:bg-gray-800/30 group cursor-pointer'
              )}
            >
              <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover:scale-110',
                action.bgLight,
                action.bgDark
              )}>
                <Icon className={cn('w-5 h-5', action.color)} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{action.label}</p>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">{action.description}</p>
              </div>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
