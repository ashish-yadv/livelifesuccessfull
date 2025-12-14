import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface SolutionSectionProps {
  onGetStarted: () => void;
}

export function SolutionSection({ onGetStarted }: SolutionSectionProps) {
  const features = [
    '30-day blueprint to rebuild discipline from the ground up',
    'Habit mastery system',
    'Daily accountability (no coach required)',
    // 'Reset routines for when you fall off track',
    // 'Morning & night ritual guides',
    'Distraction-proofing framework',
    'Identity-based habit formation',
    'Science-backed minimal effort techniques',
  ];

  return (
    <section id="solution" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Habit Mastery Bundle 2.png"
                alt='Habit Mastery Bundle'
                width={600}
                height={600}
                className='w-full h-full object-cover'
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
              <div className="absolute bottom-8 left-8 text-white">
                <div className="font-medium text-3xl">30 Days</div>
                <div className="text-lg opacity-90">To Transform Your Life</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-[#FE8D2A]/10 rounded-full mb-6">
              <span className="text-[#FE8D2A]">The Solution</span>
            </div>

            <h2 className="font-medium text-4xl sm:text-5xl lg:text-6xl mb-6">
              Habit Mastery System
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A complete framework to rebuild your discipline, one day at a time. No fluff. No overwhelm. Just simple, proven systems that work.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FE8D2A] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={onGetStarted}
              className="group px-8 py-4 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span className="font-semibold">
                Start Your 30-Day Transformation
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust Badge */}
            <div className="mt-8 flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 text-[#FE8D2A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lifetime access & updates included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
