import { Instagram, Twitter, Github, Facebook } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            {navigation.main.map((item) => (
              <a key={item.name} href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Blink App, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}