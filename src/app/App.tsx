import { useState } from 'react';
import { Bell, Sparkles, User as UserIcon } from 'lucide-react';
import { CycleCalendar } from './components/CycleCalendar';
import { TodaySymptoms } from './components/TodaySymptoms';
import { RiskCategory } from './components/RiskCategory';
import { FourPillars } from './components/FourPillars';
import { Testimonials } from './components/Testimonials';
import { KnowMore } from './components/KnowMore';
import { HealTab } from './components/HealTab';
import { BottomNav } from './components/BottomNav';
import { InstallPrompt } from './components/InstallPrompt';
import { OfflineIndicator } from './components/OfflineIndicator';
import { Button } from './components/ui/button';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isHealSignedUp, setIsHealSignedUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-pink-50/30 to-white pb-24">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-20 shadow-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  HEAL
                </h1>
                <p className="text-xs text-gray-500">PCOS Wellness</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2 rounded-xl hover:bg-purple-50 transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              </button>
              <button className="p-2 rounded-xl hover:bg-purple-50 transition-colors">
                <UserIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {activeTab === 'home' && (
        <main className="max-w-2xl mx-auto px-6 py-6 space-y-6">
          {/* Welcome Banner */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-48">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NjcxNDQzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wellness"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-600/60 to-pink-600/80" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 inline-block">
                <h2 className="text-xl font-bold mb-1">Hello, Sarah! ✨</h2>
                <p className="text-sm opacity-90">
                  Day 15 • Follicular Phase • Your energy is rising!
                </p>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm" />
          </div>

          {/* Cycle Calendar */}
          <CycleCalendar />

          {/* Today's Symptoms */}
          <TodaySymptoms />

          {/* Risk Category */}
          <RiskCategory riskLevel="medium" />

          {/* Four Pillars */}
          <FourPillars />

          {/* CTA Button */}
          <div className="py-6">
            <button
              onClick={() => {
                setIsHealSignedUp(true);
                setActiveTab('heal');
              }}
              className="group relative w-full overflow-hidden rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-[1.02] active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-size-200 animate-gradient" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative px-8 py-6 flex items-center justify-between text-white">
                <div className="text-left">
                  <p className="text-sm opacity-90 mb-1">Ready to transform?</p>
                  <p className="text-xl font-bold">Start Your 3-Month HEAL Journey</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>
            </button>
            
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-500">
              <span>✓ Personalized plans</span>
              <span>✓ Expert guidance</span>
              <span>✓ Track progress</span>
            </div>
          </div>

          {/* Testimonials */}
          <Testimonials />

          {/* Know More */}
          <KnowMore />

          {/* Footer Message */}
          <div className="text-center py-6">
            <p className="text-sm text-gray-500 mb-2">
              Join 10,000+ women managing PCOS naturally
            </p>
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                />
              ))}
            </div>
          </div>
        </main>
      )}

      {activeTab === 'heal' && (
        <HealTab isSignedUp={isHealSignedUp} />
      )}

      {activeTab === 'track' && (
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl">📊</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Detailed Tracking
          </h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="max-w-2xl mx-auto px-6 py-12 text-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-4xl">👤</span>
          </div>
          <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Your Profile
          </h2>
          <p className="text-gray-600">Settings coming soon...</p>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* PWA Install Prompt */}
      <InstallPrompt />

      {/* Offline Indicator */}
      <OfflineIndicator />
    </div>
  );
}