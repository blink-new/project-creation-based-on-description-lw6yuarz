import { ArrowDown, ArrowUp, DollarSign, Users, ShoppingCart, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export const StatsCard = ({
  title,
  value,
  icon,
  change,
  className,
}: StatsCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div
            className={cn(
              "flex items-center text-xs mt-1",
              change.isPositive ? "text-emerald-500" : "text-rose-500"
            )}
          >
            {change.isPositive ? (
              <ArrowUp className="mr-1 h-3 w-3" />
            ) : (
              <ArrowDown className="mr-1 h-3 w-3" />
            )}
            <span>{change.value} from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Revenue"
        value="$45,231.89"
        icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        change={{ value: "12%", isPositive: true }}
      />
      <StatsCard
        title="Active Users"
        value="2,431"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
        change={{ value: "8%", isPositive: true }}
      />
      <StatsCard
        title="Sales"
        value="1,257"
        icon={<ShoppingCart className="h-4 w-4 text-muted-foreground" />}
        change={{ value: "3%", isPositive: false }}
      />
      <StatsCard
        title="Active Sessions"
        value="846"
        icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        change={{ value: "10%", isPositive: true }}
      />
    </div>
  );
}