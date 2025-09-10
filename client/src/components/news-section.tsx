import {
  Calendar,
  ArrowRight,
  Smartphone,
  Shield,
  Computer,
  Cpu,
  Award,
  Building,
} from "lucide-react";

// 📰 TEMPLATE NEWS ITEMS — Replace these with your actual news data and links
const newsItems = [
  {
    id: 1,
    title: "PNG strengthens collaboration with China", // 🖊️ Replace this title
    excerpt:
      "ICT Minister Timothy Masiu signed an MOU with China to boost digital infrastructure and services—from AI, IoT, and cloud computing to cybersecurity and 5G—supporting flagship projects like the eGovernment portal, Digital ID wallet, and analogue-to-digital broadcasting migration.", // 🖊️ Replace this excerpt
    date: "June 3, 2025", // 🖊️ Replace this with article date
    category: "Category ICT", // 🖊️ Replace this with category (e.g., AI, Web Dev, Security)
    icon: Building, // 🌐 Choose an icon (Cloud, Smartphone, Shield, etc.)
    color: "bg-blue-600", // 🎨 Choose a Tailwind color
    sourceUrl:
      "https://www.postcourier.com.pg/ict-minister-announces-partnership-with-china-for-enhanced-digital-transformation-in-png/?utm_source=chatgpt.com", // 🔗 Replace with real article link
  },
  {
    id: 2,
    title: "AI Summit 2025 held in Port Moresby",
    excerpt:
      "The ITI-hosted summit (early June) featured Minister Masiu and highlighted generative AI, AI in banking, education, and climate. Organized by PNG’s Centre for Advancement of Internet Technology, it marks a significant step in AI awareness and capacity-building.",
    date: "April 7, 2025",
    category: "Category AI",
    icon: Cpu,
    color: "bg-green-500",
    sourceUrl:
      "https://www.postcourier.com.pg/the-2025-ai-summit-shaping-papua-new-guineas-digital-future/?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "Women in Tech & Innovation Awards",
    excerpt:
      "Hosted by POMCCI, this event highlighted female leaders—such as Crystal Kewe and Priscilla Kevin—unveiling AI-led health and finance systems. It also shortlisted entries for Innovation PNG 2025, spotlighting grassroots tech solutions.",
    date: "February 27, 2025",
    category: "Women in Tech",
    icon: Award,
    color: "bg-purple-600",
    sourceUrl:
      "https://www.pngbusinessnews.com/articles/2025/3/women-in-tech-business-breakfast-plays-up-innovation-png-awards?utm_source=chatgpt.com",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, trends, and insights from Nextgen Technology Limited and the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg overflow-hidden">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className={`${item.color} p-2 rounded-full text-white mr-3`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-medium flex items-center text-sm"
                    >
                      Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
