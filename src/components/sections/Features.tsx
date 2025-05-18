import { Code, Shield, Zap } from 'lucide-react';
import { Feature } from '../Feature';

export function Features() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides everything you need to build modern, responsive applications
            with the latest technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            icon={Zap}
            title="Lightning Fast"
            description="Built on top of React and Vite for incredibly fast development and production performance."
          />
          <Feature 
            icon={Shield}
            title="Secure by Default"
            description="Best practices for security built-in, with TypeScript for type safety and code quality."
          />
          <Feature 
            icon={Code}
            title="Developer Friendly"
            description="Intuitive APIs, comprehensive documentation, and a fantastic developer experience."
          />
        </div>
      </div>
    </section>
  );
}