import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent" />
      
      {/* Abstract shapes for visual effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:max-w-2xl md:mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block">Bringing Your Ideas</span>
            <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              To Life Digitally
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We help ambitious companies like yours transform ideas into beautiful, functional digital experiences that customers love and remember.
          </motion.p>
          
          <motion.div 
            className="mt-10 max-w-sm mx-auto sm:flex sm:justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button className="w-full mb-4 sm:mb-0 sm:w-auto" size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" size="lg">
              Learn More
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-card overflow-hidden rounded-xl shadow-2xl relative border">
            <img
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Dashboard preview"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium inline-block">
                Now Available
              </span>
              <h3 className="mt-4 text-xl font-semibold">Horizon Analytics Dashboard</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track your KPIs and make data-driven decisions with our intuitive dashboard.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}