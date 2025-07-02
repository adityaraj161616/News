import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  isLocked?: boolean;
}

interface ContentPreviewProps {
  title: string;
  items: ContentItem[];
  type: 'articles' | 'tools' | 'playbooks' | 'reports';
}

const ContentPreview = ({ title, items, type }: ContentPreviewProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // Animate cards on scroll
    gsap.fromTo(
      cardsRef.current.children,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const getTypeIcon = () => {
    switch (type) {
      case 'articles': return '📰';
      case 'tools': return '🧰';
      case 'playbooks': return '📚';
      case 'reports': return '📊';
      default: return '📄';
    }
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">{getTypeIcon()}</span>
            <h2 className="text-3xl lg:text-4xl font-editorial text-primary">
              {title}
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {type === 'articles' && "In-depth analysis and thought-provoking perspectives on the topics that matter."}
            {type === 'tools' && "Interactive resources and calculators to enhance your decision-making process."}
            {type === 'playbooks' && "Step-by-step guides and frameworks for implementing proven strategies."}
            {type === 'reports' && "Comprehensive research and data-driven insights from industry leaders."}
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {items.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-editorial transition-smooth cursor-pointer relative overflow-hidden"
            >
              {item.isLocked && (
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 z-10 flex items-center justify-center backdrop-blur-sm">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Premium
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-lg font-editorial group-hover:text-accent transition-snappy leading-tight">
                    {item.title}
                  </CardTitle>
                  {item.readTime && (
                    <Badge variant="outline" className="text-xs shrink-0">
                      {item.readTime}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-smooth text-accent hover:text-accent"
                  >
                    {type === 'tools' ? 'Try Now' : 'Read More'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All {title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;