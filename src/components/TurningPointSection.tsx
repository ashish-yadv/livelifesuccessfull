export function TurningPointSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block px-4 py-2 bg-[#FE8D2A]/10 rounded-full mb-6">
            <span className="text-[#FE8D2A]">The Turning Point</span>
          </div>
          <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6">
            How I Found My Way Back
          </h2>
        </div>

        {/* Story Timeline */}
        <div className="space-y-12 sm:space-y-16">
          {/* Realization 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FE8D2A] to-[#FE8D2A] rounded-2xl flex items-center justify-center">
                <span className="font-semibold text-white text-2xl">1</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-2xl sm:text-3xl mb-4">
                I Wasn&apos;t Lazy. I Was Overwhelmed.
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                For years, I thought I lacked discipline. But the real issue was having too many goals, too many options, and no clear path forward. My brain was exhausted from decision fatigue before I even started.
              </p>
            </div>
          </div>

          {/* Realization 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#D87620] to-[#FE8D2A] rounded-2xl flex items-center justify-center">
                <span className="font-semibold text-white text-2xl">2</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-2xl sm:text-3xl mb-4">
                Discipline Didn&apos;t Disappear—It Slowly Eroded.
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                It wasn&apos;t one big failure. It was a thousand small compromises. Skipping one workout, one morning routine, one focused work session. Over time, those small choices became my new normal.
              </p>
            </div>
          </div>

          {/* Realization 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FE8D2A] to-[#FE8D2A] rounded-2xl flex items-center justify-center">
                <span className="font-semibold text-white text-2xl">3</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-2xl sm:text-3xl mb-4">
                I Rebuilt My Habits Through Simple Systems, Not Motivation.
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                I stopped relying on how I &quot;felt&quot; each morning. Instead, I created frameworks that worked regardless of my mood. Small, repeatable systems that required minimal willpower but created maximum momentum.
              </p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="mt-20 p-6 sm:p-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border-l-4 border-[#FE8D2A]">
          <p className="text-2xl sm:text-3xl italic leading-relaxed">
            The breakthrough wasn&apos;t learning more. It was simplifying everything. Removing the noise. Building one habit at a time. Trusting the process, not the feeling.
          </p>
        </div>

        {/* Trust Building Statement */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            This system isn&apos;t theory. It&apos;s what pulled me out of years of inconsistency.
            <br />
            <span className="text-[#FE8D2A]">And it will work for you too.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
