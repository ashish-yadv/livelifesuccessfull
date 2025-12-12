import { Clock, Shield, User, Lightbulb } from 'lucide-react';

export function ValueSection() {
  const modules = [
    {
      icon: Clock,
      title: 'The 10-Minute Rule',
      description: 'Why committing to just 10 minutes eliminates resistance and builds momentum. This simple trick rewires your brain to stop procrastinating.',
    },
    {
      icon: Shield,
      title: 'How to Stop Self-Sabotage',
      description: 'Identify the hidden patterns that keep you stuck. Learn to recognize your triggers and create protective systems that prevent relapse.',
    },
    {
      icon: User,
      title: 'Identity-Based Discipline',
      description: 'Stop forcing yourself to do things. Instead, become the type of person who naturally does them. Shift your identity, shift your habits.',
    },
    {
      icon: Lightbulb,
      title: 'Reduce Mental Clutter',
      description: 'Decision fatigue kills discipline. Learn to automate, simplify, and structure your day so that doing the right thing becomes the easy thing.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block px-4 py-2 bg-[#d4af37]/10 rounded-full mb-6">
            <span className="text-[#FE8D2A]">Core Frameworks</span>
          </div>
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6">
            The Science Behind
            <br />
            <span className="text-[#FE8D2A]">Lasting Change</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            These aren&apos;t random tips. They&apos;re proven frameworks that address the root causes of inconsistency.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 sm:p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#FE8D2A] dark:hover:border-[#FE8D2A] transition-all duration-300 hover:shadow-xl">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#D87620] to-[#FE8D2A] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <module.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-medium text-2xl sm:text-3xl mb-4">
                  {module.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {module.description}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FE8D2A] rounded-full flex items-center justify-center font-semibold text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#d4af37]/5 to-[#b8941f]/5 p-8 sm:p-12 rounded-2xl border border-[#d4af37]/20">
            <p className="text-2xl sm:text-3xl leading-relaxed sm:leading-9">
              These frameworks work together to create a complete system. You don&apos;t need more information—you need the{' '}
              <span className="text-[#FE8D2A] italic">right information</span>, applied consistently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
