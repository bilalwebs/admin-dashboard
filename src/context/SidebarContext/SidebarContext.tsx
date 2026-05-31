import { createContext, useContext, useState, type ReactNode } from 'react'

interface SidebarContextType {
  isOpen: boolean
  isCollapsed: boolean
  toggle: () => void
  collapse: () => void
  expand: () => void
  close: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)
  const collapse = () => setIsCollapsed(true)
  const expand = () => setIsCollapsed(false)
  const close = () => setIsOpen(false)

  return (
    <SidebarContext.Provider value={{ isOpen, isCollapsed, toggle, collapse, expand, close }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) throw new Error('useSidebar must be used within SidebarProvider')
  return context
}
