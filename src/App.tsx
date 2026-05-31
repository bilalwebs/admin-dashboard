import { ThemeProvider } from './context/ThemeContext'
import { SidebarProvider } from './context/SidebarContext'
import { Sidebar } from './components/Sidebar'
import { Navbar } from './components/Navbar'
import { Dashboard } from './pages/Dashboard'
import { useSidebar } from './context/SidebarContext'
import { useIsMobile } from './hooks/useMediaQuery'
import { cn } from './utils/cn'

function AppLayout() {
  const { isCollapsed } = useSidebar()
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 dark:bg-mesh-dark transition-colors duration-300">
      <Sidebar />
      <div
        className={cn(
          'transition-all duration-300 min-h-screen flex flex-col',
          isMobile ? 'ml-0' : isCollapsed ? 'ml-[80px]' : 'ml-[260px]'
        )}
      >
        <Navbar />
        <main className="flex-1 p-4 lg:p-6 xl:p-8">
          <Dashboard />
        </main>

        {/* Footer */}
        <footer className="px-4 lg:px-6 xl:px-8 py-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-500">
            <span>&copy; 2026 Nexus. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <AppLayout />
      </SidebarProvider>
    </ThemeProvider>
  )
}
