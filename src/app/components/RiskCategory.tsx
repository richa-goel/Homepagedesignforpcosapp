import { ShieldAlert, ShieldCheck, Shield, TrendingUp, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

type RiskLevel = 'low' | 'medium' | 'high';

interface RiskCategoryProps {
  riskLevel?: RiskLevel;
}

export function RiskCategory({ riskLevel = 'medium' }: RiskCategoryProps) {
  const riskConfig = {
    low: {
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgGradient: 'from-emerald-500 to-teal-500',
      bgLight: 'bg-emerald-50',
      message: 'Start early. Gentle daily habits can prevent long-term imbalance.'
    },
    medium: {
      icon: Shield,
      color: 'text-amber-600',
      bgGradient: 'from-amber-500 to-orange-500',
      bgLight: 'bg-amber-50',
      message: 'Consistency can bring meaningful improvement within months.'
    },
    high: {
      icon: ShieldAlert,
      color: 'text-rose-600',
      bgGradient: 'from-rose-500 to-pink-500',
      bgLight: 'bg-rose-50',
      message: 'Lifestyle support + medical guidance gives you the strongest path forward.'
    }
  };

  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <Card className="overflow-hidden shadow-xl border-0 bg-white">
      {/* Header with Image */}
      <div className="relative h-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1559568147-fef5fddb6905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhhcHB5JTIwaGVhbHRoeXxlbnwxfHx8fDE3NjcyMDgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Wellness"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${config.bgGradient} opacity-90`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="font-bold">
              {riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)} Risk
            </h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed mb-4">
          {config.message}
        </p>

        <div className={`${config.bgLight} rounded-xl p-4 flex items-center gap-3`}>
          <TrendingUp className={config.color} />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Your journey starts here</p>
            <p className="text-xs text-gray-600">Personalized guidance awaits</p>
          </div>
          <ArrowRight className="text-gray-400" />
        </div>
      </div>
    </Card>
  );
}
