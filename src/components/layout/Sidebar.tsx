import { BarChart3, Home, LayoutDashboard, Settings, ShoppingCart, Users } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 h-full", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-xl font-semibold tracking-tight">
            Dash<span className="text-primary">Board</span>
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" size="sm" className="w-full justify-start gap-2">
              <Home className="h-4 w-4" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
            Management
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Users
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <ShoppingCart className="h-4 w-4" />
              Products
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}