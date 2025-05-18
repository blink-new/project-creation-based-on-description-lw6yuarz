import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section className="py-24 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="bg-black/10 backdrop-blur-sm p-8 md:p-12 lg:p-16 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Ideas into Reality?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Join thousands of developers building amazing experiences with our platform.
              Start your journey today and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90 font-medium">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-medium">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}