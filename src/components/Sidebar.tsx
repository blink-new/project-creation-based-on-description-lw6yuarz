import {
  BarChart3,
  Home,
  LayoutDashboard,
  MessagesSquare,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'
import { useMobile } from '../hooks/use-mobile'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const isMobile = useMobile()

  const navItems = [
    { icon: Home, label: 'Home' },
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Customers' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: MessagesSquare, label: 'Messages' },
    { icon: Settings, label: 'Settings' },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 border-r bg-sidebar-background transition-transform duration-300 ease-in-out",
          isMobile && !isOpen && "-translate-x-full",
          !isMobile && !isOpen && "-translate-x-48",
          isOpen && "translate-x-0"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary">
              <div className="flex h-full items-center justify-center text-lg font-bold text-primary-foreground">
                B
              </div>
            </div>
            <span className={cn("text-lg font-semibold transition-opacity", !isOpen && !isMobile && "opacity-0")}>
              Blink App
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-3">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              size="lg"
              className={cn(
                "justify-start gap-3", 
                !isOpen && !isMobile && "justify-center px-0"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className={cn("transition-opacity", !isOpen && !isMobile && "sr-only")}>
                {item.label}
              </span>
            </Button>
          ))}
        </div>
      </aside>
    </>
  )
}