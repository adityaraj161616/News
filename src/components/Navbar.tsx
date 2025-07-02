import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl lg:text-2xl font-editorial font-bold text-primary">
              LetterLift
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/articles" className="text-foreground hover:text-accent transition-snappy">
              Articles
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-snappy">
              Tools
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-snappy">
              Playbooks
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-snappy">
              Reports
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              <a href="/login">Sign In</a>
            </Button>
            
            <Button size="sm" className="hidden lg:flex gradient-accent text-white">
              Subscribe
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-snappy">
                Articles
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-snappy">
                Tools
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-snappy">
                Playbooks
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-accent transition-snappy">
                Reports
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="gradient-accent text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;