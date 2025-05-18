import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">B</div>
          <span className="text-xl font-semibold">Blink</span>
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          <NavLinks className="flex space-x-6" />
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Log in</Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <NavLinks className="flex flex-col space-y-3" />
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full">Log in</Button>
              <Button className="w-full">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks({ className }: { className?: string }) {
  return (
    <div className={cn('text-sm font-medium', className)}>
      <Link to="/features" className="text-muted-foreground transition-colors hover:text-foreground">
        Features
      </Link>
      <Link to="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">
        Pricing
      </Link>
      <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
        About
      </Link>
      <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
        Blog
      </Link>
    </div>
  )
}