import { ArrowRight, Download } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
  onDownloadGuide: () => void;
}

export function HeroSection({ onGetStarted, onDownloadGuide }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/Vector.png"
          alt="Minimal workspace"
          className="w-full h-full relative object-cover"
        /> */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-semibold text-5xl sm:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-[1.2]">
            Rebuild Your Discipline.
            <br />
            <span className="text-[#FE8D2A]">
              Rebuild Your Life.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 max-w-3xl mx-auto">
            Simple systems to help you regain consistency, focus, and control.<br/>One day at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto group px-8 py-4 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <span className="font-semibold">
                Habit Mastery Bundle
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onDownloadGuide}
              className="w-full sm:w-auto group px-8 py-4 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-gray-200 dark:border-gray-700 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              <span className="font-semibold">
                Free Discipline Reset Checklist
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="font-medium text-4xl mb-2">1,000+</div>
                <div className="text-gray-600 dark:text-gray-400">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-4xl mb-2">30 Days</div>
                <div className="text-gray-600 dark:text-gray-400">To Rebuild Habits</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-4xl mb-2">Science Backed</div>
                <div className="text-gray-600 dark:text-gray-400">Simple Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-[#FE8D2A] rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
