import { Calendar, Droplet, Sparkles, Sun, Moon as MoonIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';

export function CycleCalendar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const today = 15;
  const currentPhase = 'Follicular';
  const daysInCycle = 28;
  const cycleProgress = (today / daysInCycle) * 100;
  
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  
  const getCyclePhase = (day: number) => {
    if (day <= 5) return 'menstrual';
    if (day <= 13) return 'follicular';
    if (day <= 16) return 'ovulation';
    return 'luteal';
  };
  
  const getPhaseColor = (phase: string) => {
    switch(phase) {
      case 'menstrual': return 'bg-rose-400';
      case 'follicular': return 'bg-purple-400';
      case 'ovulation': return 'bg-emerald-400';
      case 'luteal': return 'bg-blue-400';
      default: return 'bg-gray-200';
    }
  };

  const phaseInfo = {
    menstrual: { icon: Droplet, color: 'from-rose-500 to-pink-500', text: 'Menstrual Phase' },
    follicular: { icon: Sparkles, color: 'from-purple-500 to-fuchsia-500', text: 'Follicular Phase' },
    ovulation: { icon: Sun, color: 'from-emerald-500 to-teal-500', text: 'Ovulation Phase' },
    luteal: { icon: MoonIcon, color: 'from-blue-500 to-indigo-500', text: 'Luteal Phase' }
  };

  const currentInfo = phaseInfo[getCyclePhase(today)];
  const PhaseIcon = currentInfo.icon;

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-white to-purple-50/30 shadow-lg border-0">
      {/* Header with Gradient */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full bg-gradient-to-r ${currentInfo.color} p-6 text-white relative overflow-hidden transition-all duration-300 hover:shadow-lg`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-left">Your Cycle</h3>
                <p className="text-xs opacity-90 text-left">December 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-2xl font-bold">Day {today}</p>
                <p className="text-xs opacity-90">of {daysInCycle}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-white/20"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  strokeDashoffset={`${2 * Math.PI * 36 * (1 - cycleProgress / 100)}`}
                  className="text-white"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <PhaseIcon className="w-8 h-8" />
              </div>
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold mb-1">{currentInfo.text}</p>
              <p className="text-xs opacity-90">Energy levels are rising, great time for activity</p>
            </div>
          </div>
        </div>
      </button>

      {/* Calendar Grid - Collapsible */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6">
          <div className="grid grid-cols-7 gap-2 mb-3">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center text-xs font-semibold text-gray-400">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => {
              const phase = getCyclePhase(day);
              const isToday = day === today;
              
              return (
                <button
                  key={day}
                  className={`
                    aspect-square flex items-center justify-center rounded-xl text-sm relative
                    transition-all duration-200 hover:scale-110
                    ${getPhaseColor(phase)} bg-opacity-15
                    ${isToday ? 'ring-2 ring-offset-2 ring-purple-500 font-bold scale-110' : 'hover:bg-opacity-25'}
                  `}
                >
                  <span className={isToday ? 'text-purple-900' : 'text-gray-700'}>
                    {day}
                  </span>
                  {isToday && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 p-2 rounded-lg bg-rose-50">
              <Droplet className="w-4 h-4 text-rose-500" />
              <span className="text-xs text-gray-700">Menstrual</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-purple-50">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-xs text-gray-700">Follicular</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-50">
              <Sun className="w-4 h-4 text-emerald-500" />
              <span className="text-xs text-gray-700">Ovulation</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50">
              <MoonIcon className="w-4 h-4 text-blue-500" />
              <span className="text-xs text-gray-700">Luteal</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}