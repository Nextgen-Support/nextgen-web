import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Smartphone, Cloud, Shield } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "The Future of ERP Systems for Small Businesses",
    excerpt: "Cloud-based ERP solutions are revolutionizing how small and medium enterprises manage their operations, offering scalability and cost-effectiveness.",
    date: "January 15, 2024",
    category: "ERP Technology",
    icon: Cloud,
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Mobile-First Web Development Trends",
    excerpt: "With mobile traffic exceeding desktop, businesses need responsive websites that deliver exceptional user experiences across all devices.",
    date: "January 10, 2024",
    category: "Web Development",
    icon: Smartphone,
    color: "bg-green-500"
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices for Remote Work",
    excerpt: "Essential security measures every organization should implement to protect their data and systems in today's remote work environment.",
    date: "January 5, 2024",
    category: "IT Security",
    icon: Shield,
    color: "bg-purple-600"
  }
];

export default function NewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Tech News & Insights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest technology trends, best practices, and insights that can help your business grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`${item.color} rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                    <span className="mx-2">•</span>
                    <span className="text-blue-600 font-medium">{item.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto border">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Want to Stay Updated?</h3>
            <p className="text-slate-600 mb-6">
              Contact us to learn more about implementing these technologies in your business or to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/67571570096" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                WhatsApp: +67571570096
              </a>
              <a 
                href="mailto:info@atech-png.com.pg"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}