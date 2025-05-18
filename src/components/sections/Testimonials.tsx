import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent } from '../ui/card';

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    initials: string;
  };
}

function Testimonial({ content, author }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-muted-foreground opacity-50"
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
          </div>
          <p className="flex-grow text-muted-foreground mb-6">{content}</p>
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-xs text-muted-foreground">{author.role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      content: "Stellar has transformed our workflow. We've cut our development time in half and our team can now focus on creating features that truly matter to our users.",
      author: {
        name: "Sarah Johnson",
        role: "CTO, TechVision",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        initials: "SJ",
      },
    },
    {
      content: "The pre-built components and intuitive API made it incredibly easy to get our app up and running. The documentation is top-notch and support is fantastic.",
      author: {
        name: "Mark Anderson",
        role: "Lead Developer, Nexus",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        initials: "MA",
      },
    },
    {
      content: "Moving to Stellar was the best decision we made last year. Our site is faster, more responsive, and our conversion rates have increased by 24%.",
      author: {
        name: "Elena Rivera",
        role: "Product Manager, Elevate",
        avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        initials: "ER",
      },
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and developers say about our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}