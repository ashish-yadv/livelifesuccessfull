import { Download, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

interface LeadMagnetSectionProps {
  onDownloadGuide: () => void;
}

export function LeadMagnetSection({ onDownloadGuide }: LeadMagnetSectionProps) {
  const benefits = [
    'Discover the exact framework to reset your discipline in 30 days',
    'Get daily structure templates you can start using today',
    'Understand how to stop self-sabotage patterns',
    'Build identity-based habits that actually stick',
    'Reduce mental clutter and decision fatigue',
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-[#d4af37]/5 to-[#b8941f]/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left Side: Visual */}
            <div className="bg-gradient-to-br from-[#D87620] to-[#FE8D2A] p-4 sm:p-12 flex flex-col justify-center items-center text-white">
              <Image
                src="/discipline-reset-checklist.png"
                alt='The Discipline Reset Checklist'
                width={720}
                height={720}
                className='w-full shadow-2xl'
              />
            </div>

            {/* Right Side: Form & Benefits */}
            <div className="p-6 sm:p-12">
              <h3 className="font-semibold text-3xl text-[#FE8D2A] sm:text-4xl text-left mb-4">
                The Discipline Reset Checklist
              </h3>
              <h4 className="font-medium text-xl sm:text-2xl mb-6">
                What You&apos;ll Learn Inside:
              </h4>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#FE8D2A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
                <p className="text-xm text-center align-middle opacity-90 flex">
                  Zero fluff. Pure action.
                </p>
                <div className="text-center mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-end justify-center gap-2 mb-2">
                    <span className="text-gray-400 line-through">$47</span>
                    <span className="text-3xl text-[#FE8D2A]">$0</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onDownloadGuide}
                className="w-full group px-8 py-4 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span className="font-semibold">
                  Download Guide
                </span>
              </button>

              <p className="mt-4 text-sm text-center text-gray-500 dark:text-gray-400">
                No spam. Just the checklist and occasional insights. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Join 1,000+ people who&apos;ve already downloaded this guide and started their transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
