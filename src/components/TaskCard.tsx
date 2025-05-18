import { Check, Clock, Trash2 } from 'lucide-react';
import { Task } from '../lib/types';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '../lib/utils';

interface TaskCardProps {
  task: Task;
  onToggleComplete: () => void;
  onDelete: () => void;
}

export function TaskCard({ task, onToggleComplete, onDelete }: TaskCardProps) {
  const priorityColors = {
    low: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    medium: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    high: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300',
  };

  return (
    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex items-start gap-4">
        <button
          onClick={onToggleComplete}
          className={cn(
            "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
            task.completed 
              ? "bg-primary border-primary text-primary-foreground" 
              : "border-gray-300 dark:border-gray-600"
          )}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed && <Check className="h-3 w-3" />}
        </button>

        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className={cn(
              "text-base font-medium",
              task.completed && "line-through text-gray-500 dark:text-gray-400"
            )}>
              {task.title}
            </h3>
            
            <div className="flex items-center gap-2">
              <span className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                priorityColors[task.priority]
              )}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              
              <button
                onClick={onDelete}
                className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
                aria-label="Delete task"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <p className={cn(
            "mt-1 text-sm text-gray-600 dark:text-gray-300",
            task.completed && "line-through text-gray-400 dark:text-gray-500"
          )}>
            {task.description}
          </p>
          
          <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
            <Clock className="mr-1 h-3 w-3" />
            <span>Created {formatDistanceToNow(task.createdAt, { addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}