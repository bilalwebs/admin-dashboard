import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Bell,
  MessageSquare,
  Sun,
  Moon,
  Menu,
  ChevronDown,
  User,
  LogOut,
  Settings as SettingsIcon,
} from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useSidebar } from '../../context/SidebarContext'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { Dropdown } from '../UI/Dropdown'
import { notifications, messages } from '../../data/dashboardData'
import { cn, timeAgo, getInitials } from '../../utils/cn'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { toggle: toggleSidebar } = useSidebar()
  const isMobile = useIsMobile()
  const [searchFocused, setSearchFocused] = useState(false)

  const unreadNotifications = notifications.filter((n) => !n.read).length
  const unreadMessages = messages.filter((m) => !m.read).length

  return (
    <header className="sticky top-0 z-20 h-16 border-b border-gray-200/80 dark:border-gray-800/80 bg-white/70 dark:bg-gray-950/70 backdrop-blur-2xl">
      <div className="flex items-center justify-between h-full px-4 lg:px-6 gap-4">
        {/* Left: Mobile menu + Search */}
        <div className="flex items-center gap-3 flex-1">
          {isMobile && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          )}

          {/* Search Bar */}
          <div className={cn(
            'relative flex items-center max-w-md flex-1 transition-all duration-300',
            searchFocused && 'max-w-lg'
          )}>
            <Search className="absolute left-3 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search anything..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-400 transition-all"
            />
            <kbd className="hidden sm:flex absolute right-3 items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.95, rotate: 180 }}
            onClick={toggleTheme}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
          >
            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Notifications */}
          <Dropdown
            align="right"
            trigger={
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              >
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </motion.button>
            }
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Notifications</h3>
            </div>
            <div className="max-h-[320px] overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    'px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer border-b border-gray-50 dark:border-gray-800/50 last:border-0',
                    !notification.read && 'bg-indigo-50/50 dark:bg-indigo-500/5'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      'w-2 h-2 mt-2 rounded-full flex-shrink-0',
                      notification.type === 'info' && 'bg-blue-500',
                      notification.type === 'success' && 'bg-emerald-500',
                      notification.type === 'warning' && 'bg-amber-500',
                      notification.type === 'error' && 'bg-red-500'
                    )} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{notification.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{notification.message}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{timeAgo(notification.time)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2.5 border-t border-gray-100 dark:border-gray-800">
              <button className="w-full text-center text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                View all notifications
              </button>
            </div>
          </Dropdown>

          {/* Messages */}
          <Dropdown
            align="right"
            trigger={
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                {unreadMessages > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {unreadMessages}
                  </span>
                )}
              </motion.button>
            }
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">Messages</h3>
            </div>
            <div className="max-h-[320px] overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer border-b border-gray-50 dark:border-gray-800/50 last:border-0',
                    !msg.read && 'bg-indigo-50/50 dark:bg-indigo-500/5'
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {msg.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{msg.sender}</p>
                        <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">{timeAgo(msg.time)}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 truncate">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2.5 border-t border-gray-100 dark:border-gray-800">
              <button className="w-full text-center text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                View all messages
              </button>
            </div>
          </Dropdown>

          {/* User Profile */}
          <Dropdown
            align="right"
            trigger={
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-1"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                  {getInitials('Alex Morgan')}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-medium text-gray-900 dark:text-white leading-tight">Alex Morgan</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight">Admin</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 hidden sm:block" />
              </motion.button>
            }
          >
            <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Alex Morgan</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">alex@nexus.com</p>
            </div>
            <div className="py-1">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <User className="w-4 h-4" />
                Profile
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <SettingsIcon className="w-4 h-4" />
                Settings
              </button>
            </div>
            <div className="py-1 border-t border-gray-100 dark:border-gray-800">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                <LogOut className="w-4 h-4" />
                Sign out
              </button>
            </div>
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
