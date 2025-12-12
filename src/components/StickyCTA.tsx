import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface StickyMobileCTAProps {
  onClick: () => void;
}

export function StickyCTA({ onClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-2xl">
        <div className="px-4 py-3">
          <button
            onClick={onClick}
            className="w-full group px-6 py-4 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
