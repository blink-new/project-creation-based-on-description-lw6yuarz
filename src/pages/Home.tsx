import { Hero } from '../components/Hero'
import { Feature } from '../components/Feature'
import { features } from '../lib/data'

export default function Home() {
  return (
    <>
      <Hero />
      <section id="features" className="container mx-auto py-24 px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      
      <section id="cta" className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already boosting their productivity with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/dashboard" 
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-primary shadow-sm hover:bg-gray-100 focus:outline-none transition-colors"
            >
              Go to Dashboard
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-primary-foreground/10 focus:outline-none transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}