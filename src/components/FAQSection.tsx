import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What if I fail again?',
      answer: 'Failure isn\'t the problem—restarting without a system is. This framework includes reset routines specifically designed for when you fall off track. The difference is, you\'ll have a clear path back instead of starting from scratch every time.',
    },
    {
      question: 'I\'ve tried other systems—how is this different?',
      answer: 'Most systems are too complex or rely on motivation. This one is built on simplicity and structure. You\'re not adding more to your plate—you\'re removing the noise and focusing on what actually works. Plus, it\'s designed for real people with real constraints, not ideal scenarios.',
    },
    {
      question: 'How long before I see results?',
      answer: 'Most people notice a shift in the first 7 days—not perfection, but clarity. By day 14, habits start feeling automatic. By day 30, you\'ll have a system that works. The key is that results build on each other, so every day matters.',
    },
    {
      question: 'Is this beginner-friendly?',
      answer: 'Absolutely. This is designed for people who are starting from zero or restarting after a long break. No prerequisites. No complicated jargon. Just simple, step-by-step guidance.',
    },
    {
      question: 'Do I need any apps or tools?',
      answer: 'No. Everything can be done with pen and paper if you prefer. The templates are provided as PDFs, so you can print them or use them digitally. The system works with whatever tools you\'re comfortable with.',
    },
    {
      question: 'What if I don\'t have 30 days to commit?',
      answer: 'The framework is 30 days, but you can start seeing benefits immediately. Even if you only complete 10 days, you\'ll have learned principles that last a lifetime. The goal isn\'t perfection—it\'s progress.',
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes. 30-day money-back guarantee. If you try the system and it doesn\'t work for you, just send an email and we\'ll refund you completely. No questions, no hassle.',
    },
    {
      question: 'Will this work for people with ADHD or other focus challenges?',
      answer: 'Many users with ADHD have found success because the system is designed to be simple and structured. The key is removing decision fatigue and creating clear, repeatable routines. That said, everyone is different, so use the system in a way that works for you.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Questions?
            <br />
            <span className="text-[#FE8D2A]">We&apos;ve Got Answers.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to know before you start.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:border-[#D87620] dark:hover:border-[#FE8D2A]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-medium text-lg sm:text-xl pr-4">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 bg-[#d4af37]/10 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#FE8D2A]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#FE8D2A]" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-6">
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-[#D87620]/5 to-[#FE8D2A]/5 rounded-2xl border border-[#d4af37]/20">
            <p className="font-semibold text-xl text-gray-700 dark:text-gray-300 mb-4">
              Still have questions?
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email us at{' '}
              {/* <a href="mailto:livelifesuccessfulll@gmail.com" className="text-[#FE8D2A] italic hover:underline">
                livelifesuccessfulll@gmail.com
              </a> */}
              <Link href="mailto:livelifesuccessfulll@gmail.com"
                className="text-[#FE8D2A] italic hover:underline">
                livelifesuccessfulll@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
