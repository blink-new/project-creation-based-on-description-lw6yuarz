import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background py-12 md:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Design and Build</span>
            <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Faster Than Ever
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create beautiful, modern websites with ease. Streamline your workflow and focus on what matters most.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="group">
              Get Started <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute -top-40 left-0 right-0 z-[-1] mx-auto h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -bottom-40 left-0 right-0 z-[-1] mx-auto h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
    </div>
  )
}