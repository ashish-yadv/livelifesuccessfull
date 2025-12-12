import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onGetStarted: () => void;
}

export function FinalCTASection({ onGetStarted }: FinalCTASectionProps) {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#b8941f]/10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1501597301489-8b75b675ba0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwbWVkaXRhdGlvbiUyMG1vcm5pbmd8ZW58MXx8fHwxNzY1MDc5NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm rounded-3xl p-12 sm:p-16 border border-gray-200 dark:border-gray-800 shadow-2xl">
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-8">
            Discipline Isn&apos;t Motivation.
            <br />
            <span className="text-[#FE8D2A]">It&apos;s Systems.</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            If you&apos;re ready to rebuild your life piece by piece, to stop restarting and start finishing, to finally become consistent—today is the day.
          </p>

          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            className="group px-10 py-5 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-xl transition-all duration-300 inline-flex items-center space-x-3 shadow-xl hover:shadow-2xl text-lg sm:text-xl"
          >
            <span>Start the Habit Mastery Bundle</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="mt-6 text-gray-500 dark:text-gray-400">
            Join 1,000+ people who&apos;ve already transformed their lives
          </p>

          {/* Secondary Message */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <p className="text-lg text-gray-600 dark:text-gray-400 italic max-w-2xl mx-auto">
              &quot;The best time to start was 30 days ago. The second best time is now. Don&apos;t let another Monday slip by.&quot;
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <svg className="w-6 h-6 text-[#FE8D2A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium text-gray-600 dark:text-gray-400">Instant Access</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <svg className="w-6 h-6 text-[#FE8D2A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium text-gray-600 dark:text-gray-400">Lifetime Updates</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <svg className="w-6 h-6 text-[#FE8D2A]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium text-gray-600 dark:text-gray-400">30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
