import { House, Heart, Calendar, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const navItems = [
    { icon: House, label: "Home", id: "home", gradient: "from-purple-500 to-fuchsia-500" },
    { icon: Heart, label: "HEAL", id: "heal", gradient: "from-pink-500 to-rose-500" },
    { icon: Calendar, label: "Track", id: "track", gradient: "from-blue-500 to-indigo-500" },
    { icon: User, label: "Profile", id: "profile", gradient: "from-green-500 to-teal-500" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-purple-100 px-4 py-2 shadow-2xl z-20">
      <div className="max-w-2xl mx-auto flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`relative flex flex-col items-center gap-1 px-5 py-2.5 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Active background */}
              {isActive && (
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-2xl`} />
              )}
              
              {/* Icon container */}
              <div className={`relative ${
                isActive 
                  ? `w-12 h-12 rounded-2xl bg-gradient-to-r ${item.gradient} shadow-lg flex items-center justify-center transform -translate-y-2`
                  : ''
              }`}>
                <Icon className={`w-6 h-6 transition-colors ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400'
                }`} />
              </div>
              
              {/* Label */}
              <span className={`text-xs transition-all relative ${
                isActive 
                  ? 'font-semibold bg-gradient-to-r ' + item.gradient + ' bg-clip-text text-transparent' 
                  : 'text-gray-500'
              }`}>
                {item.label}
              </span>
              
              {/* Active indicator dot */}
              {isActive && (
                <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r ${item.gradient}`} />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
