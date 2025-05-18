import { Check } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: '$9',
    duration: 'per month',
    features: [
      '5 projects',
      '10GB storage',
      'Basic analytics',
      'Email support',
      'Community access'
    ],
    highlighted: false,
    buttonText: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing teams and businesses',
    price: '$29',
    duration: 'per month',
    features: [
      '15 projects',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Team collaboration',
      'Custom domains'
    ],
    highlighted: true,
    buttonText: 'Get Started'
  },
  {
    name: 'Enterprise',
    description: 'Advanced features for large organizations',
    price: '$99',
    duration: 'per month',
    features: [
      'Unlimited projects',
      '500GB storage',
      'Enterprise analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'SSO authentication',
      'Advanced security',
      'Dedicated account manager'
    ],
    highlighted: false,
    buttonText: 'Contact Sales'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Choose the perfect plan for your needs
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple, transparent pricing that grows with you. All plans come with a 14-day money-back guarantee.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col ${plan.highlighted 
                ? 'border-blue-600 shadow-lg shadow-blue-100' 
                : 'border-gray-200'}`}
            >
              {plan.highlighted && (
                <div className="px-4 py-1 text-center text-sm font-medium text-white bg-blue-600 rounded-t-lg">
                  Most Popular
                </div>
              )}
              <CardHeader className={plan.highlighted ? '' : 'pt-6'}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.duration}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}