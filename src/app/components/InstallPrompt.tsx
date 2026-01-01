import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after 3 seconds
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Detect if app was installed
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setShowPrompt(false);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again for this session
    localStorage.setItem('installPromptDismissed', 'true');
  };

  // Don't show if already installed or dismissed
  if (isInstalled || !showPrompt || !deferredPrompt) return null;

  // Check if dismissed in this session
  if (localStorage.getItem('installPromptDismissed')) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-30 animate-in slide-in-from-bottom-5">
      <Card className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl max-w-md mx-auto">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <Download className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold mb-1">Install HEAL App</h4>
            <p className="text-sm opacity-90">
              Get quick access to your wellness journey. Install on your home screen!
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={handleDismiss}
            variant="outline"
            className="flex-1 border-white/30 text-white hover:bg-white/20"
          >
            Not Now
          </Button>
          <Button
            onClick={handleInstall}
            className="flex-1 bg-white text-purple-600 hover:bg-white/90"
          >
            Install
          </Button>
        </div>
      </Card>
    </div>
  );
}
