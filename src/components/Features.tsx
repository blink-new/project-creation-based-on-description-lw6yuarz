import { 
  Code, 
  LayoutGrid, 
  Shield, 
  Zap, 
  RefreshCw, 
  BarChart3, 
  Smartphone, 
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <LayoutGrid className="h-6 w-6 text-indigo-600" />,
      title: "Beautiful Components",
      description: "Pre-built, customizable UI components that are easy to use and extend."
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: "Lightning Fast",
      description: "Optimized for performance with minimal bundle size and fast load times."
    },
    {
      icon: <Code className="h-6 w-6 text-indigo-600" />,
      title: "Developer Experience",
      description: "Built with TypeScript for better type safety and development experience."
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-600" />,
      title: "Secure by Default",
      description: "Best practices for security baked in from the start. Sleep better at night."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-indigo-600" />,
      title: "Automatic Updates",
      description: "Stay up-to-date with the latest features and security patches automatically."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
      title: "Advanced Analytics",
      description: "Gain insights into user behavior with our built-in analytics dashboard."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-indigo-600" />,
      title: "Mobile Responsive",
      description: "Looks great on all devices, from mobile phones to desktop computers."
    },
    {
      icon: <Palette className="h-6 w-6 text-indigo-600" />,
      title: "Customizable Themes",
      description: "Easily customize the look and feel to match your brand identity."
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Stellar</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you build better products faster
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}