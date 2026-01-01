import { BookOpen, ChevronRight, Clock, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';

export function KnowMore() {
  const articles = [
    {
      title: 'Understanding PCOS: Causes and Symptoms',
      category: 'Basics',
      readTime: '5 min',
      color: 'from-purple-500 to-fuchsia-500',
      icon: '🔬'
    },
    {
      title: 'How Yoga Helps Manage PCOS Naturally',
      category: 'Exercise',
      readTime: '7 min',
      color: 'from-pink-500 to-rose-500',
      icon: '🧘‍♀️'
    },
    {
      title: 'PCOS-Friendly Diet: What to Eat and Avoid',
      category: 'Nutrition',
      readTime: '10 min',
      color: 'from-emerald-500 to-teal-500',
      icon: '🥗'
    },
    {
      title: 'Benefits of Reusable Menstrual Products',
      category: 'Wellness',
      readTime: '4 min',
      color: 'from-teal-500 to-cyan-500',
      icon: '🌿'
    },
    {
      title: 'Sleep and Stress: Impact on Hormonal Balance',
      category: 'Lifestyle',
      readTime: '6 min',
      color: 'from-blue-500 to-indigo-500',
      icon: '😴'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-600" />
          <h3 className="font-semibold">Learn & Explore</h3>
        </div>
        <TrendingUp className="w-5 h-5 text-green-500" />
      </div>
      
      <div className="space-y-3">
        {articles.map((article, index) => (
          <button
            key={index}
            className="w-full group"
          >
            <Card className="p-4 bg-white hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden relative">
              {/* Gradient Accent */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${article.color} group-hover:w-2 transition-all`} />
              
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${article.color} flex items-center justify-center text-2xl shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {article.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 text-left">
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h4 className="font-semibold text-sm mt-0.5 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-1 mt-1 text-gray-500">
                    <Clock className="w-3 h-3" />
                    <p className="text-xs">{article.readTime} read</p>
                  </div>
                </div>
                
                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
}
