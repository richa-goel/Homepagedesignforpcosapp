import { useState } from 'react';
import { Heart, Zap, Moon, Smile, Frown, Activity } from 'lucide-react';
import { Card } from './ui/card';

export function TodaySymptoms() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<number[]>([]);

  const symptoms = [
    { icon: Smile, label: 'Positive mood', likelihood: 'High', color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { icon: Zap, label: 'High energy', likelihood: 'High', color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { icon: Activity, label: 'Increased libido', likelihood: 'Medium', color: 'text-pink-500', bgColor: 'bg-pink-50' },
    { icon: Heart, label: 'Clear skin', likelihood: 'Medium', color: 'text-rose-500', bgColor: 'bg-rose-50' },
    { icon: Moon, label: 'Better sleep', likelihood: 'Low', color: 'text-indigo-500', bgColor: 'bg-indigo-50' }
  ];

  const toggleSymptom = (index: number) => {
    setSelectedSymptoms(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-white shadow-lg border-0 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full -mr-16 -mt-16" />
      
      <div className="relative">
        <div className="mb-5">
          <h3 className="font-semibold mb-1">How are you feeling today?</h3>
          <p className="text-sm text-gray-500">Based on Day 15 • Follicular Phase</p>
        </div>
        
        <div className="space-y-2">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            const isSelected = selectedSymptoms.includes(index);
            
            return (
              <button
                key={index}
                onClick={() => toggleSymptom(index)}
                className={`
                  w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300
                  ${isSelected 
                    ? `${symptom.bgColor} ring-2 ring-purple-400 shadow-md scale-[1.02]` 
                    : 'bg-white hover:bg-gray-50 hover:shadow-md'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl ${symptom.bgColor} flex items-center justify-center transition-transform ${isSelected ? 'scale-110' : ''}`}>
                    <Icon className={`w-5 h-5 ${symptom.color}`} />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{symptom.label}</p>
                    <p className="text-xs text-gray-500">Likelihood: {symptom.likelihood}</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected 
                    ? 'bg-purple-500 border-purple-500' 
                    : 'border-gray-300'
                }`}>
                  {isSelected && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {selectedSymptoms.length > 0 && (
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
            <p className="text-sm font-medium">
              ✨ {selectedSymptoms.length} symptom{selectedSymptoms.length > 1 ? 's' : ''} logged today
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
