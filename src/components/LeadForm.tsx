import { useState } from 'react';
import { X, Loader2 } from 'lucide-react';

interface LeadFormProps {
  type: 'purchase' | 'lead';
  onClose: () => void;
  onSubmit: (data: { name: string; email: string }) => void;
}

export function LeadForm({ type, onClose, onSubmit }: LeadFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onSubmit({ name, email });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            {type === 'purchase' ? (
              <>
                <h3 className="text-3xl mb-3">Start Your Transformation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get instant access to the Habit Mastery System
                </p>
              </>
            ) : (
              <>
                <h3 className="text-3xl mb-3">Download Your Free Guide</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get the 30-Day Discipline Reset Guide instantly
                </p>
              </>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-colors"
                placeholder="Enter your name"
                disabled={loading}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-colors"
                placeholder="your@email.com"
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-[#d4af37] hover:bg-[#b8941f] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <span>{type === 'purchase' ? 'Proceed to Payment' : 'Send Me the Guide'}</span>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400">
            {type === 'purchase'
              ? 'Secure payment powered by Stripe. Your information is safe.'
              : 'We respect your privacy. No spam, ever. Unsubscribe anytime.'}
          </p>
        </div>
      </div>
    </div>
  );
}
