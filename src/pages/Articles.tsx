import Navbar from '@/components/Navbar';
import ContentPreview from '@/components/ContentPreview';
import Footer from '@/components/Footer';

const Articles = () => {
  const articlesData = [
    {
      id: '1',
      title: 'The Future of Remote Work Culture',
      description: 'An in-depth analysis of how distributed teams are reshaping corporate culture and productivity paradigms.',
      category: 'Business',
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'AI Ethics in Modern Product Design',
      description: 'Exploring the moral implications and practical considerations of integrating AI into user experiences.',
      category: 'Technology',
      readTime: '12 min read'
    },
    {
      id: '3',
      title: 'The Psychology of Viral Content',
      description: 'Understanding the cognitive triggers and social mechanisms that make content spread across networks.',
      category: 'Psychology',
      readTime: '6 min read',
      isLocked: true
    },
    {
      id: '4',
      title: 'Building Sustainable Business Models',
      description: 'How companies are adapting their revenue models for long-term sustainability and growth.',
      category: 'Business',
      readTime: '10 min read'
    },
    {
      id: '5',
      title: 'The Creator Economy Revolution',
      description: 'Deep dive into how individual creators are disrupting traditional media and entertainment.',
      category: 'Creator Economy',
      readTime: '15 min read'
    },
    {
      id: '6',
      title: 'Decentralized Finance Explained',
      description: 'A comprehensive guide to understanding DeFi protocols and their impact on traditional banking.',
      category: 'Finance',
      readTime: '12 min read',
      isLocked: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-editorial text-primary mb-4">
              Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth analysis and thought-provoking perspectives on the topics that matter most.
            </p>
          </div>
        </div>
        <ContentPreview title="" items={articlesData} type="articles" />
      </div>
      <Footer />
    </div>
  );
};

export default Articles;