import { motion } from 'framer-motion'
import { Check, Zap, Shield, Palette, Code, Layers } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary-500" />,
    title: "Lightning Fast",
    description: "Build and deploy websites in minutes, not days. Our optimized workflow saves you time and effort."
  },
  {
    icon: <Palette className="h-10 w-10 text-primary-500" />,
    title: "Beautiful Design",
    description: "Create stunning user interfaces with our pre-designed components and customizable themes."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary-500" />,
    title: "Rock Solid",
    description: "Built on modern technologies with reliability and security at its core. Rest easy knowing your project is safe."
  },
  {
    icon: <Code className="h-10 w-10 text-primary-500" />,
    title: "Developer Friendly",
    description: "Clean code, comprehensive documentation, and intuitive APIs make development a breeze."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary-500" />,
    title: "Fully Customizable",
    description: "Tailor every aspect of your website to match your brand with our flexible customization options."
  },
  {
    icon: <Check className="h-10 w-10 text-primary-500" />,
    title: "Production Ready",
    description: "Deploy with confidence. Your projects are optimized for performance, accessibility, and SEO."
  }
]

export function Features() {
  return (
    <section className="py-12 md:py-20 bg-secondary/50">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Designed for everyone
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Everything you need to build modern websites at any scale
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}