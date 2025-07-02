import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.children,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 gradient-subtle"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-editorial text-primary mb-4">
              Never miss an insight
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join thousands of curious minds getting our weekly digest of breakthrough 
              analysis, emerging trends, and actionable intelligence.
            </p>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base"
                required
              />
              <Button 
                type="submit" 
                size="lg"
                className="gradient-accent text-white px-8 shadow-glow hover:shadow-xl transition-smooth"
              >
                Subscribe
              </Button>
            </form>
          ) : (
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-accent font-medium">
                🎉 Thank you for subscribing! Check your email to confirm.
              </p>
            </div>
          )}

          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              No spam, ever. Unsubscribe with one click.{' '}
              <a href="#" className="text-accent hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by professionals at
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              {['Google', 'Microsoft', 'Apple', 'Meta', 'Netflix'].map((company) => (
                <span key={company} className="text-sm font-medium">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;