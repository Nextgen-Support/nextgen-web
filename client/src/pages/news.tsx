import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Smartphone, Shield, Computer, Cpu, Award, Building } from "lucide-react";
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: "PNG strengthens collaboration with China",
    date: "March 15, 2025",
    excerpt: "Papua New Guinea and China have signed a new agreement to enhance technological cooperation and digital infrastructure development.",
    category: "Partnerships",
    icon: Building,
    color: "bg-blue-600",
    sourceUrl: "https://www.thenational.com.pg/png-china-strengthen-ties/"
  },
  {
    id: 2,
    title: "New data center launched in Port Moresby",
    date: "February 28, 2025",
    excerpt: "NextGen Technologies has opened a state-of-the-art data center to support growing digital needs in the Pacific region.",
    category: "Infrastructure",
    icon: Cpu,
    color: "bg-green-600",
    sourceUrl: "https://www.looppng.com/business/new-data-center-png-12345"
  },
  {
    id: 3,
    title: "Cybersecurity awareness month kicks off",
    date: "February 10, 2025",
    excerpt: "National campaign launched to educate businesses and individuals about online security best practices.",
    category: "Security",
    icon: Shield,
    color: "bg-red-600",
    sourceUrl: "https://www.pngcybersecurity.gov.pg/awareness-2025"
  },
  {
    id: 4,
    title: "Digital transformation in PNG businesses",
    date: "January 25, 2025",
    excerpt: "Local enterprises are rapidly adopting cloud solutions and digital tools to improve operations and customer experience.",
    category: "Technology",
    icon: Computer,
    color: "bg-purple-600",
    sourceUrl: "https://www.pngbusinessnews.com/digital-transformation-2025"
  },
  {
    id: 5,
    title: "5G network expansion announced",
    date: "January 15, 2025",
    excerpt: "Major telecom providers reveal plans to expand 5G coverage to major centers across Papua New Guinea.",
    category: "Connectivity",
    icon: Smartphone,
    color: "bg-yellow-600",
    sourceUrl: "https://www.pngictnews.com/5g-expansion-2025"
  },
  {
    id: 6,
    title: "Women in tech conference 2025",
    date: "March 8, 2025",
    excerpt: "Annual event celebrates achievements of women in PNG's technology sector and encourages STEM education.",
    category: "Women in Tech",
    icon: Award,
    color: "bg-pink-600",
    sourceUrl: "https://www.pngbusinessnews.com/articles/2025/3/women-in-tech-business-breakfast-plays-up-innovation-png-awards"
  }
];

const NewsPage = () => {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and insights from NextGen Technologies and the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`${item.color} p-2 rounded-lg mr-3`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <a 
                      href={item.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/news"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
