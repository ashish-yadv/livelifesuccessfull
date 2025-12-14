import { Check, ArrowRight, Shield } from 'lucide-react';

interface PricingSectionProps {
  onGetStarted: () => void;
}

export function PricingSection({ onGetStarted }: PricingSectionProps) {
  const features = [
    'Complete 30-day discipline framework',
    'Habit tracking templates',
    'Daily accountability system',
    'Reset routines for setbacks',
    'Morning & night ritual guides',
    'Distraction-proofing framework',
    'Identity-based habit formation guide',
    'Lifetime access & updates',
    'Bonus: Mental clarity worksheets',
    'Bonus: Focus optimization checklist',
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.2]">
            Simple Pricing.
            <br />
            <span className="text-[#FE8D2A]">Lifetime Value.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            One-time payment. No subscriptions. No hidden fees. Just the complete system.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#D87620] to-[#FE8D2A] text-white px-6 py-2 rounded-full shadow-lg">
                Most Popular
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl border-2 border-[#d4af37] p-6 sm:p-12 shadow-2xl">
              {/* Header */}
              <div className="text-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-3xl mb-4">Habit Mastery Bundle</h3>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-gray-400 line-through">$199</span>
                  <span className="text-6xl text-[#FE8D2A]">$32</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400"> • One-time payment • Lifetime access</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-[#FE8D2A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={onGetStarted}
                className="w-full group px-8 py-5 bg-[#D87620] hover:bg-[#FE8D2A] text-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl text-lg cursor-pointer"
              >
                <span className="font-semibold">
                  Start Today
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust Badges */}
              <div className="mt-8 space-y-3">
                {/* <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Shield className="w-5 h-5 text-[#FE8D2A]" />
                  <span>Secure payment processing</span>
                </div> */}
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Check className="w-5 h-5 text-[#FE8D2A]" />
                  <span>Instant access after purchase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Comparison */}
        <div className="mt-16 text-center">
          <p className="font-semibold text-gray-600 dark:text-gray-400 mb-4">Compare the value:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="font-medium text-2xl text-[#FE8D2A] mb-1">$1,500+</div>
              <div className="font-medium text-sm text-gray-600 dark:text-gray-400">1-on-1 Coaching</div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="font-medium text-2xl text-[#FE8D2A] mb-1">$2,000+</div>
              <div className="font-medium text-sm text-gray-600 dark:text-gray-400">Online Courses</div>
            </div>
            <div className="p-4 bg-[#FE8D2A] text-white rounded-xl">
              <div className="font-medium text-2xl mb-1">$32</div>
              <div className="font-medium text-sm">This Complete System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
