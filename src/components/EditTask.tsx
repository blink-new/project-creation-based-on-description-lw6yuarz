import { useState } from 'react'
import { Task } from '../lib/types'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { motion } from 'framer-motion'

interface EditTaskProps {
  task: Task
  onSave: (task: Task) => void
  onCancel: () => void
}

export function EditTask({ task, onSave, onCancel }: EditTaskProps) {
  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description || '')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(task.priority)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return

    const updatedTask: Task = {
      ...task,
      title: title.trim(),
      description: description.trim() || undefined,
      priority
    }

    onSave(updatedTask)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="mb-6"
    >
      <Card className="p-5 border-2 border-primary/20 mt-3">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-title">Task Title</Label>
              <Input
                id="edit-title"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1"
                autoFocus
                required
              />
            </div>
            
            <div>
              <Label htmlFor="edit-description">Description (optional)</Label>
              <Textarea
                id="edit-description"
                placeholder="Enter task description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 resize-none"
                rows={3}
              />
            </div>

            <div>
              <Label>Priority</Label>
              <RadioGroup 
                value={priority} 
                onValueChange={(value) => setPriority(value as 'low' | 'medium' | 'high')}
                className="flex space-x-4 mt-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="low" id="edit-low" />
                  <Label htmlFor="edit-low" className="text-green-500 font-medium cursor-pointer">Low</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="edit-medium" />
                  <Label htmlFor="edit-medium" className="text-amber-500 font-medium cursor-pointer">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="high" id="edit-high" />
                  <Label htmlFor="edit-high" className="text-destructive font-medium cursor-pointer">High</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end space-x-2 pt-2">
              <Button variant="outline" type="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </div>
        </form>
      </Card>
    </motion.div>
  )
}