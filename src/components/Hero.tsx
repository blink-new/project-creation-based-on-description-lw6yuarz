import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                Just Launched
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                All-in-one productivity solution
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Streamline your workflow, enhance collaboration, and skyrocket productivity with our intuitive SaaS platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-6 font-medium">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="px-6 font-medium">
                Live Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden bg-gray-200">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${i + 30}.jpg`}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600">
                  Join 10,000+ users
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-3 text-sm font-medium text-gray-600">
                  4.9/5 from 1,000+ reviews
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:pl-16 animate-fade-in">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80" 
                alt="Product dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-24 border-t border-gray-200 pt-12">
          <p className="text-center text-sm font-medium text-gray-600 mb-8">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
            {['Google', 'Microsoft', 'Airbnb', 'Facebook', 'Stripe', 'Amazon'].map((company) => (
              <div key={company} className="col-span-1 flex justify-center">
                <span className="text-xl font-bold text-gray-400">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;