import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Check } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

function PricingTier({ title, price, description, features, isPopular, ctaText }: PricingTierProps) {
  return (
    <Card className={`flex flex-col h-full ${isPopular ? 'border-primary shadow-lg' : ''}`}>
      {isPopular && (
        <div className="absolute inset-x-0 -top-5 flex justify-center">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-primary text-primary-foreground">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className={`${isPopular ? 'pt-8' : ''}`}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="text-primary mr-2 h-5 w-5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isPopular ? "default" : "outline"} 
          className="w-full"
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function PricingSection() {
  const pricingTiers = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for small projects and individuals",
      features: [
        "Up to 5 projects",
        "Basic components",
        "Community support",
        "1GB storage",
        "Monthly updates"
      ],
      ctaText: "Get Started"
    },
    {
      title: "Professional",
      price: "$79",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Advanced components",
        "Priority support",
        "10GB storage",
        "Weekly updates",
        "API access",
        "Custom themes"
      ],
      isPopular: true,
      ctaText: "Start Free Trial"
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations with specific needs",
      features: [
        "Unlimited everything",
        "Premium components",
        "24/7 dedicated support",
        "Unlimited storage",
        "Daily updates",
        "Full API access",
        "Custom development",
        "SLA guarantee"
      ],
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that's right for you and start building amazing applications today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="relative">
              <PricingTier {...tier} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}