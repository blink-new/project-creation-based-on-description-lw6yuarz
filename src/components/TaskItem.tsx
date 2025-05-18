import { useState } from 'react'
import { Check, Trash, Edit, MoreHorizontal, Flag } from 'lucide-react'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Task } from '../lib/types'
import { TaskEditor } from './TaskEditor'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (task: Task) => void
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = (editedTask: Task) => {
    onEdit(editedTask)
    setIsEditing(false)
  }

  if (isEditing) {
    return <TaskEditor task={task} onSave={handleSave} onCancel={() => setIsEditing(false)} />
  }

  return (
    <Card className="p-3 bg-opacity-60 transition-all hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 flex-1">
          <Checkbox
            id={`task-${task.id}`}
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
          />
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <label
                htmlFor={`task-${task.id}`}
                className={`font-medium cursor-pointer ${
                  task.completed ? 'line-through text-muted-foreground' : ''
                }`}
              >
                {task.title}
              </label>
              
              {task.priority && (
                <Badge
                  variant="outline"
                  className={
                    task.priority === 'high'
                      ? 'text-red-500'
                      : task.priority === 'medium'
                      ? 'text-amber-500'
                      : 'text-green-500'
                  }
                >
                  <Flag className="mr-1 h-3 w-3" />
                  {task.priority}
                </Badge>
              )}
            </div>
            
            {task.description && (
              <p className="text-sm text-muted-foreground mt-1">
                {task.description}
              </p>
            )}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onToggle(task.id)}>
              <Check className="mr-2 h-4 w-4" />
              Mark as {task.completed ? 'incomplete' : 'complete'}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setIsEditing(true)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDelete(task.id)}>
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )
}