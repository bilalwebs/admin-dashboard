import { motion } from 'framer-motion'
import { Calendar, Download } from 'lucide-react'
import { DashboardCards } from '../../components/DashboardCards'
import { RevenueChart } from '../../components/Charts/RevenueChart'
import { SalesChart } from '../../components/Charts/SalesChart'
import { UserDistributionChart } from '../../components/Charts/UserDistributionChart'
import { UsersTable } from '../../components/UsersTable'
import { ActivityFeed } from '../../components/ActivityFeed'
import { QuickActions } from '../../components/QuickActions'

export function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-1"
          >
            Welcome back, Alex. Here's what's happening with your business today.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">May 2026</span>
          </button>
          <button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-500/20">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </motion.div>
      </div>

      {/* KPI Cards */}
      <DashboardCards />

      {/* Quick Actions + Activity Feed Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
        <QuickActions />
        <ActivityFeed />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-5">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <UserDistributionChart />
        </div>
      </div>

      {/* Sales Chart */}
      <SalesChart />

      {/* Users Table */}
      <UsersTable />
    </motion.div>
  )
}
