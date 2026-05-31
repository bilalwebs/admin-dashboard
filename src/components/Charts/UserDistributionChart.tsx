import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { userDistribution } from '../../data/dashboardData'

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl p-3">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: payload[0].payload.color }} />
        <span className="text-xs font-medium text-gray-900 dark:text-white">{payload[0].name}</span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {payload[0].value} users ({((payload[0].value / 92) * 100).toFixed(0)}%)
      </p>
    </div>
  )
}

export function UserDistributionChart() {
  const total = userDistribution.reduce((sum, d) => sum + d.value, 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-5 lg:p-6 shadow-premium"
    >
      <div className="mb-6">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">User Distribution</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">By role across platform</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userDistribution}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
              >
                {userDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{total}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3 w-full">
          {userDistribution.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(0)
            return (
              <div key={item.name} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: item.color }}
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 w-8 text-right">{percentage}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
