import { X, RotateCcw, Brain, Zap, Calendar, Shuffle } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: RotateCcw,
      title: 'Constantly Restarting Habits',
      description: 'You start strong on Monday, but by Thursday, you\'re back to square one. The cycle repeats every week.',
    },
    {
      icon: Calendar,
      title: 'Losing Discipline After 3–4 Days',
      description: 'Motivation fades fast. What felt possible on day one feels impossible by day four.',
    },
    {
      icon: Brain,
      title: 'Overthinking But Not Executing',
      description: 'You plan, research, and optimize—but never actually start. Analysis paralysis keeps you stuck.',
    },
    {
      icon: Zap,
      title: 'Feeling Stuck, Overwhelmed, Unfocused',
      description: 'Too many goals, too many distractions. You don\'t know where to begin or what to prioritize.',
    },
    {
      icon: Shuffle,
      title: 'Lack of Structure, No Accountability',
      description: 'Without a clear system or someone to answer to, it\'s too easy to let things slide.',
    },
    {
      icon: X,
      title: 'Self-Sabotage & Excuses',
      description: '"I\'ll start tomorrow." "I\'m too tired." "I don\'t have time." The excuses feel real, but they\'re patterns.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6">
            You&apos;re Not Lazy.
            <br />
            <span className="text-[#FE8D2A]">You&apos;re Overwhelmed.</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            These are the real struggles that keep you trapped in the cycle of starting and stopping. You&apos;re not alone.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#d4af37] dark:hover:border-[#FE8D2A] transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 bg-[#FE8D2A]/10 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-[#FE8D2A]" />
              </div>
              <h3 className="font-medium text-xl mb-4">{problem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emotional Hook */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-[#FE8D2A]/5 to-[#FE8D2A]/5 p-8 sm:p-12 rounded-2xl border border-[#FE8D2A]/20">
            <p className="text-2xl sm:text-3xl italic text-gray-700 dark:text-gray-300 leading-relaxed sm:leading-9">
              &quot;I kept blaming myself for lacking willpower. But the truth was, I didn&apos;t have a system. I was running on empty, expecting motivation to carry me forever.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
