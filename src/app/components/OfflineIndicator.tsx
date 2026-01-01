import { useEffect, useState } from 'react';
import { WifiOff, Wifi } from 'lucide-react';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOffline, setShowOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOffline(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Auto-hide online message after 3 seconds
  useEffect(() => {
    if (isOnline && !showOffline) {
      const timer = setTimeout(() => setShowOffline(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, showOffline]);

  if (!showOffline && isOnline) return null;

  return (
    <div className="fixed top-20 left-4 right-4 z-50 animate-in slide-in-from-top-5">
      <div className={`max-w-2xl mx-auto px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 ${
        isOnline 
          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
          : 'bg-gradient-to-r from-orange-500 to-red-500'
      } text-white`}>
        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          {isOnline ? (
            <Wifi className="w-5 h-5" />
          ) : (
            <WifiOff className="w-5 h-5" />
          )}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">
            {isOnline ? 'Back Online!' : 'You\'re Offline'}
          </p>
          <p className="text-xs opacity-90">
            {isOnline 
              ? 'Your data is syncing...' 
              : 'Don\'t worry, your data is saved locally'}
          </p>
        </div>
      </div>
    </div>
  );
}
