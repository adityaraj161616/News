import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current || !subtitleRef.current || !ctaRef.current) return;

    // Set initial states
    gsap.set([titleRef.current.children, subtitleRef.current, ctaRef.current], {
      y: 60,
      opacity: 0
    });

    // Create timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate title words
    tl.to(titleRef.current.children, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3")
    .to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Editorial workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <div ref={titleRef} className="mb-6">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-editorial font-normal text-white leading-tight">
            <span className="inline-block">Intelligent</span>{' '}
            <span className="inline-block">insights</span>{' '}
            <span className="inline-block">for</span>{' '}
            <span className="inline-block">modern</span>{' '}
            <span className="inline-block">minds</span>
          </h1>
        </div>

        <div ref={subtitleRef}>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover curated analysis, actionable insights, and exclusive tools 
            that transform how you think about business, technology, and culture.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-accent text-white px-8 py-6 text-lg shadow-glow hover:shadow-xl transition-smooth"
          >
            Start Reading
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
          >
            Browse Archive
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;