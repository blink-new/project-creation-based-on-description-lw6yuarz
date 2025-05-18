import { useState } from 'react'
import { PlusIcon, ListTodoIcon } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { toast } from 'sonner'

// Define Task type
interface Task {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Learn React',
      completed: true,
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Build a task app',
      completed: false,
      createdAt: new Date()
    },
    {
      id: '3',
      title: 'Style with Tailwind',
      completed: false,
      createdAt: new Date()
    }
  ])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  // Add new task
  const addTask = () => {
    if (!newTaskTitle.trim()) return

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      completed: false,
      createdAt: new Date()
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle('')
    toast.success('Task added successfully!')
  }

  // Toggle task completion
  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed } 
          : task
      )
    )
  }

  // Delete task
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
    toast.success('Task removed!')
  }

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">My Tasks</h1>
        <p className="text-muted-foreground mt-1">
          Manage your daily tasks and stay productive.
        </p>
      </div>

      {/* New Task Input */}
      <Card className="mb-8 p-6 shadow-md">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskTitle}
            onChange={e => setNewTaskTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-3 py-2 border rounded-md bg-background"
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask} className="flex items-center gap-1">
            <PlusIcon className="h-4 w-4" />
            Add Task
          </Button>
        </div>
      </Card>

      {/* Task List */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold mb-4">Your Tasks ({tasks.length})</h2>
        
        {tasks.map(task => (
          <Card key={task.id} className="p-4 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                {task.title}
              </span>
              <span className="text-xs text-muted-foreground">
                {task.createdAt.toLocaleDateString()}
              </span>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => deleteTask(task.id)}
                className="ml-2"
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
        
        {tasks.length === 0 && (
          <Card className="p-8 flex flex-col items-center justify-center text-center">
            <div className="bg-secondary rounded-full p-3 mb-3">
              <ListTodoIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No tasks yet</h3>
            <p className="text-muted-foreground mt-1">
              Add a new task to get started
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}