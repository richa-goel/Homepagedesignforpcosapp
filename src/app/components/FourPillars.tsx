import { Dumbbell, Apple, Leaf, Calendar, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FourPillars() {
  const pillars = [
    {
      icon: Dumbbell,
      title: 'Guided Yoga',
      subtitle: 'Daily exercises',
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-fuchsia-500',
      image: 'https://images.unsplash.com/photo-1758274526406-4c3a319da0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NjcyMDgzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      progress: 65
    },
    {
      icon: Apple,
      title: 'Smart Diet',
      subtitle: 'Meal plans',
      color: 'text-green-600',
      bgGradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1720287333807-4cec121e7e5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2NzIwODMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      progress: 40
    },
    {
      icon: Leaf,
      title: 'Eco Products',
      subtitle: 'Sustainable care',
      color: 'text-teal-600',
      bgGradient: 'from-teal-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1713082063908-cd994b8a2372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZsb3dlciUyMHB1cnBsZXxlbnwxfHx8fDE3NjcyMDgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      progress: 20
    },
    {
      icon: Calendar,
      title: 'Daily Habits',
      subtitle: 'Track routine',
      color: 'text-blue-600',
      bgGradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1743748978909-169017ab0720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMHBlYWNlZnVsJTIwYmVkcm9vbXxlbnwxfHx8fDE3NjcyMDgzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      progress: 85
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-semibold px-1">Four Pillars of HEAL</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <button
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {/* Background Image */}
              <div className="relative h-36 overflow-hidden">
                <ImageWithFallback
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.bgGradient} opacity-85 group-hover:opacity-75 transition-opacity`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />
                </div>
                
                <div className="text-left text-white">
                  <h4 className="font-semibold mb-0.5">{pillar.title}</h4>
                  <p className="text-xs opacity-90 mb-2">{pillar.subtitle}</p>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${pillar.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
