import { useState } from 'react';
import { Play, Apple, Leaf, CheckSquare, Activity, Calendar, Flame, Award, ChevronRight, Lock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HealTabProps {
  isSignedUp?: boolean;
}

export function HealTab({ isSignedUp = false }: HealTabProps) {
  const [signedUp, setSignedUp] = useState(isSignedUp);

  if (!signedUp) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NjcxNDQzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="HEAL Journey"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                <Activity className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Your Personalized HEAL Journey</h2>
              <p className="text-sm opacity-90">Transform your PCOS management in 3 months</p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            {[
              { icon: Play, text: 'Daily cycle-synced yoga sessions', color: 'from-purple-500 to-fuchsia-500' },
              { icon: Apple, text: 'Personalized PCOS-friendly meal plans', color: 'from-emerald-500 to-teal-500' },
              { icon: Leaf, text: 'Eco-friendly product guidance', color: 'from-teal-500 to-cyan-500' },
              { icon: CheckSquare, text: 'Comprehensive routine tracking', color: 'from-blue-500 to-indigo-500' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-medium text-gray-800">{feature.text}</p>
                </div>
              );
            })}
          </div>

          <Button 
            onClick={() => setSignedUp(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              Start Your HEAL Journey
              <ChevronRight className="w-5 h-5" />
            </span>
          </Button>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            3-month commitment • Personalized for you
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-6 space-y-6">
      {/* Progress Banner */}
      <Card className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
        
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-sm opacity-90 mb-1">HEAL Journey Progress</p>
            <h3 className="text-2xl font-bold">Week 4 of 12</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
              <Flame className="w-8 h-8" />
            </div>
            <p className="text-xs">12 day streak</p>
          </div>
        </div>
        
        <div className="mt-4 w-full h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white rounded-full w-1/3" />
        </div>
      </Card>

      {/* Exercise Videos */}
      <Card className="overflow-hidden shadow-lg border-0 group">
        <div className="relative h-48 overflow-hidden cursor-pointer">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758274526406-4c3a319da0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NjcyMDgzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Yoga session"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-xl">
              <Play className="w-8 h-8 text-purple-600 ml-1" />
            </div>
            <p className="text-white font-semibold text-lg">Gentle Flow Yoga</p>
            <p className="text-white/80 text-sm">15 min • Follicular Phase</p>
          </div>

          {/* Duration badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium">
            NEW
          </div>
        </div>
        
        <div className="p-5 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold">Today's Yoga Session</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            This gentle sequence is designed for your current cycle phase to support hormonal balance and boost energy.
          </p>
          <div className="flex gap-2">
            <div className="flex-1 text-center p-2 bg-purple-100 rounded-lg">
              <p className="text-xs text-gray-600">Calories</p>
              <p className="font-semibold text-purple-600">~80</p>
            </div>
            <div className="flex-1 text-center p-2 bg-purple-100 rounded-lg">
              <p className="text-xs text-gray-600">Level</p>
              <p className="font-semibold text-purple-600">Beginner</p>
            </div>
            <div className="flex-1 text-center p-2 bg-purple-100 rounded-lg">
              <p className="text-xs text-gray-600">Focus</p>
              <p className="font-semibold text-purple-600">Balance</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Diet for the Day */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-white shadow-lg border-0">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
              <Apple className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Today's Meal Plan</h3>
              <p className="text-xs text-gray-500">1,650 cal • Low GI</p>
            </div>
          </div>
          <Award className="w-6 h-6 text-amber-500" />
        </div>
        
        <div className="space-y-3">
          {[
            { meal: 'BREAKFAST', name: 'Oats with berries & flaxseeds', desc: 'Anti-inflammatory, high in fiber', time: '8:00 AM', color: 'from-amber-400 to-orange-400' },
            { meal: 'LUNCH', name: 'Quinoa salad with leafy greens', desc: 'Balanced protein and complex carbs', time: '1:00 PM', color: 'from-emerald-400 to-teal-400' },
            { meal: 'DINNER', name: 'Grilled fish with roasted vegetables', desc: 'Omega-3 rich, supports hormones', time: '7:00 PM', color: 'from-blue-400 to-indigo-400' }
          ].map((item, index) => (
            <div key={index} className="p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all cursor-pointer border border-green-100">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-green-600">{item.meal}</span>
                    <span className="text-xs text-gray-400">• {item.time}</span>
                  </div>
                  <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${item.color} shadow-lg flex-shrink-0 mt-1`} />
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl">
          View Full Nutrition Details
        </Button>
      </Card>

      {/* Reusable Products */}
      <Card className="overflow-hidden shadow-lg border-0">
        <div className="relative h-32 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1713082063908-cd994b8a2372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZsb3dlciUyMHB1cnBsZXxlbnwxfHx8fDE3NjcyMDgzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Eco products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-cyan-600/90" />
          <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
            <div className="flex items-center gap-3">
              <Leaf className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Eco-Friendly Switch</h3>
                <p className="text-xs opacity-90">Week 2 Challenge</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">40%</p>
              <p className="text-xs opacity-90">Complete</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-gradient-to-br from-teal-50 to-white">
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            Reusable menstrual products reduce chemical exposure and are better for your body and the planet. 
            Make the switch this week! 🌿
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-xl">
              Learn More
            </Button>
            <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white rounded-xl">
              Shop Now
            </Button>
          </div>
        </div>
      </Card>

      {/* Daily Routine Tracker */}
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-white shadow-lg border-0">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold">Daily Habits</h3>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-blue-600">2/3</p>
            <p className="text-xs text-gray-500">completed</p>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {[
            { task: 'Morning yoga session', done: true, time: '7:00 AM' },
            { task: 'Log all meals', done: true, time: '9:00 PM' },
            { task: 'Evening meditation', done: false, time: '9:30 PM' }
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                item.done 
                  ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' 
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  item.done 
                    ? 'bg-green-500' 
                    : 'border-2 border-gray-300'
                }`}>
                  {item.done && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className={`text-sm font-medium ${item.done ? 'text-green-900 line-through' : 'text-gray-800'}`}>
                    {item.task}
                  </p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl">
          Open Full Tracker
        </Button>
      </Card>

      {/* Cycle & Symptom Tracking */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-white shadow-lg border-0 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -mr-16 -mt-16" />
        
        <div className="relative flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Track Your Day</h3>
              <p className="text-xs text-gray-500">Day 15 • Follicular Phase</p>
            </div>
          </div>
          <div className="text-center">
            <div className="relative w-14 h-14">
              <svg className="transform -rotate-90 w-14 h-14">
                <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="none" className="text-purple-200" />
                <circle 
                  cx="28" 
                  cy="28" 
                  r="24" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeDasharray={`${2 * Math.PI * 24}`}
                  strokeDashoffset={`${2 * Math.PI * 24 * (1 - 12/30)}`}
                  className="text-purple-600"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Flame className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <p className="text-xs font-semibold text-purple-600 mt-1">12 days</p>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 relative">
          Keep your streak going! Daily tracking helps personalize your HEAL journey.
        </p>
        
        <div className="grid grid-cols-2 gap-3 relative">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl">
            Log Today
          </Button>
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-xl">
            View History
          </Button>
        </div>
      </Card>
    </div>
  );
}
