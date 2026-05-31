import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingCart,
  Package,
  Settings,
  LogOut,
  ChevronLeft,
  Sparkles,
} from 'lucide-react'
import { useSidebar } from '../../context/SidebarContext'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { cn } from '../../utils/cn'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/', active: true },
  { label: 'Analytics', icon: BarChart3, path: '/analytics' },
  { label: 'Users', icon: Users, path: '/users', badge: 12 },
  { label: 'Orders', icon: ShoppingCart, path: '/orders', badge: 3 },
  { label: 'Products', icon: Package, path: '/products' },
  { label: 'Settings', icon: Settings, path: '/settings' },
]

const bottomItems = [
  { label: 'Logout', icon: LogOut, path: '/logout' },
]

export function Sidebar() {
  const { isOpen, isCollapsed, toggle, collapse, close } = useSidebar()
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                onClick={close}
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed left-0 top-0 bottom-0 w-[280px] z-50 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col"
              >
                <SidebarContent onClose={close} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="fixed left-0 top-0 bottom-0 z-30 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden"
    >
      <SidebarContent isCollapsed={isCollapsed} onCollapse={collapse} onExpand={toggle} />
    </motion.aside>
  )
}

interface SidebarContentProps {
  isCollapsed?: boolean
  onClose?: () => void
  onCollapse?: () => void
  onExpand?: () => void
}

function SidebarContent({ isCollapsed, onClose, onCollapse, onExpand }: SidebarContentProps) {
  return (
    <>
      {/* Logo */}
      <div className={cn(
        'flex items-center h-16 px-5 border-b border-gray-100 dark:border-gray-800',
        isCollapsed ? 'justify-center' : 'gap-3'
      )}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Nexus
          </motion.span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
          <motion.button
            key={item.label}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative',
              item.active
                ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white',
              isCollapsed && 'justify-center px-0'
            )}
          >
            {item.active && (
              <motion.div
                layoutId="activeTab"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-indigo-600 dark:bg-indigo-400 rounded-r-full"
              />
            )}
            <Icon className={cn('w-5 h-5 flex-shrink-0', item.active ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-gray-500')} />
            {!isCollapsed && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </motion.button>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-gray-100 dark:border-gray-800 space-y-1">
        {/* Upgrade CTA */}
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-1 mb-2 p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20"
          >
            <p className="text-xs font-semibold text-indigo-900 dark:text-indigo-300">Upgrade to Pro</p>
            <p className="text-[11px] text-indigo-600/70 dark:text-indigo-400/60 mt-0.5 leading-relaxed">Unlock advanced analytics and team features</p>
            <button className="mt-2 w-full py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </motion.div>
        )}

        {bottomItems.map((item) => {
          const Icon = item.icon
          return (
          <motion.button
            key={item.label}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-500/10 dark:hover:text-red-400 transition-all duration-200',
              isCollapsed && 'justify-center px-0'
            )}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>{item.label}</span>}
          </motion.button>
          )
        })}

        {/* Collapse Button (Desktop) */}
        {onCollapse && (
          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            onClick={isCollapsed ? onExpand : onCollapse}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white transition-all duration-200',
              isCollapsed && 'justify-center px-0'
            )}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="w-5 h-5 flex-shrink-0" />
            </motion.div>
            {!isCollapsed && <span>Collapse</span>}
          </motion.button>
        )}
      </div>
    </>
  )
}
