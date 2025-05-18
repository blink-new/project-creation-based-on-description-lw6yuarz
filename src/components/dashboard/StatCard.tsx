import { ArrowDown, ArrowUp, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../../lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: number;
  description?: string;
}

export function StatCard({ title, value, icon: Icon, change, description }: StatCardProps) {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="flex items-center space-x-1 text-xs text-muted-foreground">
            <span className={cn(
              "flex items-center",
              isPositive && "text-emerald-500",
              isNegative && "text-red-500"
            )}>
              {isPositive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
              <span>{Math.abs(change)}%</span>
            </span>
            <span>{description || "from last month"}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}