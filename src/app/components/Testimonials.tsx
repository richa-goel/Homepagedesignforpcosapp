import { Quote, Heart } from 'lucide-react';
import { Card } from './ui/card';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya M.',
      age: 28,
      location: 'Mumbai',
      text: 'After 3 months on the HEAL journey, my cycles became more regular and my symptoms reduced significantly. The personalized approach really works!',
      rating: 5,
      avatar: '🌸'
    },
    {
      name: 'Anjali S.',
      age: 32,
      location: 'Bangalore',
      text: 'The combination of yoga, diet tracking, and daily routine monitoring helped me understand my body better. I feel more in control now.',
      rating: 5,
      avatar: '🌺'
    },
    {
      name: 'Riya K.',
      age: 26,
      location: 'Delhi',
      text: 'Switching to reusable products and following the guided exercises made such a difference. I wish I had found this app sooner!',
      rating: 5,
      avatar: '🌼'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <h3 className="font-semibold">Success Stories</h3>
        <Heart className="w-5 h-5 text-pink-500" />
      </div>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-5 bg-gradient-to-br from-purple-50 via-pink-50 to-white border-0 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative">
              <Quote className="w-8 h-8 text-purple-300 mb-3" />
              
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}, {testimonial.age}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
