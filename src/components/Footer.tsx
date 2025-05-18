import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center mr-2">
                <span className="text-white text-sm">TF</span>
              </div>
              <span className="text-xl font-bold">TaskFlow</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              TaskFlow helps teams organize, track, and manage their work efficiently. Streamline your workflow and boost productivity.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Github} />
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'].map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'Guides', 'API Reference', 'Community', 'Templates'].map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact', 'Legal'].map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </span>
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </span>
            <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon: Icon }) {
  return (
    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
      <Icon className="h-5 w-5" />
    </a>
  )
}

function FooterLink({ label }) {
  return (
    <li>
      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
        {label}
      </a>
    </li>
  )
}