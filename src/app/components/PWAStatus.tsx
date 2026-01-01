import { useEffect, useState } from 'react';
import { Smartphone, Check } from 'lucide-react';
import { isInstalled, getDisplayMode } from '../utils/pwa';

export function PWAStatus() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    setIsPWA(isInstalled());
    
    // Listen for display mode changes
    const mediaQuery = window.matchMedia('(display-mode: standalone)');
    const handleChange = () => setIsPWA(isInstalled());
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!isPWA) return null;

  return (
    <div className="fixed top-20 left-4 right-4 z-10 animate-in slide-in-from-top-5">
      <div className="max-w-2xl mx-auto px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl shadow-lg flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Check className="w-4 h-4" />
        </div>
        <p className="text-sm font-medium">
          Running as installed app • {getDisplayMode()} mode
        </p>
        <Smartphone className="w-4 h-4 ml-auto" />
      </div>
    </div>
  );
}
