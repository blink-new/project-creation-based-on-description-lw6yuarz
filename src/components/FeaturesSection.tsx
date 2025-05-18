import { Cpu, Globe, ShieldCheck, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Lightning Fast',
    description: 'Optimized performance for instant load times and smooth interactions across all devices.'
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Global Scale',
    description: 'Deploy worldwide with automatic scaling that handles traffic spikes effortlessly.'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Enterprise Security',
    description: 'Bank-grade protection with end-to-end encryption and advanced threat detection.'
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'AI Powered',
    description: 'Intelligent features that adapt to your needs and provide personalized experiences.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to build modern applications that scale with your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}