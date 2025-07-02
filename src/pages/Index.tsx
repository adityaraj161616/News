import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContentPreview from '@/components/ContentPreview';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  // Sample content data
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
    }
  ];

  const toolsData = [
    {
      id: '1',
      title: 'ROI Calculator for Content Marketing',
      description: 'Calculate the return on investment for your content marketing campaigns with advanced attribution modeling.',
      category: 'Marketing'
    },
    {
      id: '2',
      title: 'Team Productivity Analyzer',
      description: 'Analyze team performance patterns and identify optimization opportunities using data-driven insights.',
      category: 'Management'
    },
    {
      id: '3',
      title: 'Market Sentiment Tracker',
      description: 'Track real-time sentiment analysis across social media and news sources for your industry.',
      category: 'Analytics',
      isLocked: true
    }
  ];

  const playbooksData = [
    {
      id: '1',
      title: 'Complete Guide to B2B Sales Automation',
      description: 'Step-by-step framework for implementing sales automation that increases conversion rates by 40%.',
      category: 'Sales'
    },
    {
      id: '2',
      title: 'Content Strategy Playbook 2024',
      description: 'Comprehensive guide to building content strategies that drive engagement and business growth.',
      category: 'Content'
    },
    {
      id: '3',
      title: 'Remote Team Management Blueprint',
      description: 'Proven methodologies for managing distributed teams and maintaining high performance.',
      category: 'Management',
      isLocked: true
    }
  ];

  const reportsData = [
    {
      id: '1',
      title: 'SaaS Revenue Analysis Q4 2024',
      description: 'Detailed breakdown of top SaaS companies\' revenue streams, growth patterns, and market positioning.',
      category: 'SaaS'
    },
    {
      id: '2',
      title: 'Creator Economy Income Report',
      description: 'Comprehensive analysis of creator earnings across platforms, trends, and monetization strategies.',
      category: 'Creator Economy'
    },
    {
      id: '3',
      title: 'Tech Startup Funding Landscape',
      description: 'In-depth look at venture capital trends, valuation metrics, and funding patterns in tech.',
      category: 'Venture Capital',
      isLocked: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Content Sections */}
      <div className="bg-background">
        <ContentPreview 
          title="Latest Articles" 
          items={articlesData} 
          type="articles" 
        />
        
        <div className="bg-muted/30">
          <ContentPreview 
            title="Interactive Tools" 
            items={toolsData} 
            type="tools" 
          />
        </div>
        
        <ContentPreview 
          title="Expert Playbooks" 
          items={playbooksData} 
          type="playbooks" 
        />
        
        <div className="bg-muted/30">
          <ContentPreview 
            title="Income Reports" 
            items={reportsData} 
            type="reports" 
          />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;