import { CheckCircle2, Download, Mail } from 'lucide-react';

interface ThankYouPageProps {
  type: 'purchase' | 'lead';
  onBackToHome: () => void;
}

export function ThankYouPage({ type, onBackToHome }: ThankYouPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d4af37]/5 to-[#b8941f]/5 px-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 sm:p-12 text-center border border-gray-200 dark:border-gray-800">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-white" />
        </div>

        {type === 'purchase' ? (
          <>
            {/* Purchase Success */}
            <h1 className="text-4xl sm:text-5xl mb-6">
              Welcome to Your
              <br />
              <span className="text-[#d4af37]">Transformation!</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Thank you for your purchase. You&apos;ve taken the first step towards rebuilding your discipline and habits.
            </p>

            {/* Next Steps */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8 text-left">
              <h3 className="text-2xl mb-6 text-center">What Happens Next?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center text-white">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Check Your Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We&apos;ve sent your access details and welcome guide to your inbox.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center text-white">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Download Your Materials</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Access the complete Habit Mastery System, templates, and bonus materials.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center text-white">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">Start Day 1 Tomorrow</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Begin your 30-day transformation journey. Follow the system, trust the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#d4af37]/10 rounded-xl p-6 mb-8">
              <p className="text-gray-700 dark:text-gray-300 italic">
                &quot;Remember: Progress over perfection. Every day counts, but no day defines you.&quot;
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Lead Magnet Success */}
            <h1 className="text-4xl sm:text-5xl mb-6">
              Your Guide Is
              <br />
              <span className="text-[#d4af37]">On Its Way!</span>
            </h1>

            <div className="mb-8">
              <Mail className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Check your email inbox for the{' '}
                <span className="text-[#d4af37]">Free 30-Day Discipline Reset Guide</span>.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8 text-left">
              <h3 className="text-2xl mb-4 text-center">What&apos;s Inside Your Free Guide:</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">The 30-day discipline reset framework</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">The 10-minute rule explained</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Daily structure templates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">How to stop self-sabotage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Mental clarity worksheets</span>
                </div>
              </div>
            </div>

            <div className="bg-[#d4af37]/10 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Didn&apos;t receive the email?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Check your spam folder or contact us at{' '}
                <a href="mailto:support@livelifesuccessfull.com" className="text-[#d4af37] hover:underline">
                  support@livelifesuccessfull.com
                </a>
              </p>
            </div>
          </>
        )}

        {/* Back to Home Button */}
        <button
          onClick={onBackToHome}
          className="px-8 py-3 bg-[#d4af37] hover:bg-[#b8941f] text-white rounded-lg transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
