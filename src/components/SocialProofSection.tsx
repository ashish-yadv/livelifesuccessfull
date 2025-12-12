import { Star, Quote } from 'lucide-react';

export function SocialProofSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Marketing Manager',
      content: 'I\'ve tried every productivity app and system out there. This is the only one that actually stuck. The 30-day structure gave me exactly what I needed—clarity and consistency.',
      rating: 5,
      achievement: 'Built a 90-day streak',
    },
    {
      name: 'James K.',
      role: 'Software Developer',
      content: 'I was stuck in analysis paralysis for months. This system cut through all the noise and gave me simple steps to follow. Within 2 weeks, I had my morning routine down.',
      rating: 5,
      achievement: 'Rebuilt morning routine',
    },
    {
      name: 'Alex P.',
      role: 'College Student',
      content: 'As someone who constantly restarted habits, this was a game-changer. The reset routines taught me that falling off track isn\'t failure—it\'s part of the process.',
      rating: 5,
      achievement: 'Stopped habit guilt',
    },
    {
      name: 'Maya R.',
      role: 'Entrepreneur',
      content: 'The distraction-proofing framework alone was worth it. I went from scattered and overwhelmed to focused and in control. My business and mental health both improved.',
      rating: 5,
      achievement: 'Doubled productivity',
    },
    {
      name: 'David L.',
      role: 'Teacher',
      content: 'I didn\'t need motivation speeches. I needed a system. This gave me that. The accountability templates keep me on track without needing an external coach.',
      rating: 5,
      achievement: 'Lost 15 lbs consistently',
    },
    {
      name: 'Emma T.',
      role: 'Designer',
      content: 'Finally, something that works for people with ADHD. The simplicity is key. No overwhelming dashboards, just clear steps and daily check-ins.',
      rating: 5,
      achievement: 'Completed first 30 days',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Real People.
            <br />
            <span className="text-[#FE8D2A]">Real Transformations.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            1,000+ people have already used this system to rebuild their habits and reclaim their discipline.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#FE8D2A] dark:hover:border-[#FE8D2A] transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#FE8D2A] opacity-20 mb-4" />

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FE8D2A] text-[#FE8D2A]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Achievement Badge */}
              <div className="inline-block px-3 py-1 bg-[#FE8D2A]/10 rounded-full mb-4">
                <span className="text-sm text-[#FE8D2A]">✓ {testimonial.achievement}</span>
              </div>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="font-medium text-5xl text-[#FE8D2A] mb-2">1,000+</div>
            <div className="text-gray-600 dark:text-gray-400">People Transformed</div>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="font-medium text-5xl text-[#FE8D2A] mb-2">4.9/5</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          <div className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div className="font-medium text-5xl text-[#FE8D2A] mb-2">30 Days</div>
            <div className="text-gray-600 dark:text-gray-400">To See Results</div>
          </div>
        </div>
      </div>
    </section>
  );
}
