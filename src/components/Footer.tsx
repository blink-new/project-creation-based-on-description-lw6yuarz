import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github, 
  ArrowRight 
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">Stellar</div>
            <p className="text-muted-foreground">
              Building the future of web development with beautiful UI components and powerful tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Marketplace</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Integrations</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Changelog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">Partners</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates about new features and releases.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} Stellar. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}