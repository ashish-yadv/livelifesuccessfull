import Image from 'next/image';

const realizations = [
    {
        number: '1',
        heading: "I Wasn't Lazy. I Was Overwhelmed.",
        body: "For years, I thought I lacked discipline. But the real issue was having too many goals, too many options, and no clear path forward. My brain was exhausted from decision fatigue before I even started.",
    },
    {
        number: '2',
        heading: "Discipline Didn't Disappear — It Slowly Eroded.",
        body: "It wasn't one big failure. It was a thousand small compromises. Skipping one workout, one morning routine, one focused work session. Over time, those small choices became my new normal.",
    },
    {
        number: '3',
        heading: "I Rebuilt My Habits Through Simple Systems, Not Motivation.",
        body: 'I stopped relying on how I "felt" each morning. Instead, I created frameworks that worked regardless of my mood. Small, repeatable systems that required minimal willpower but created maximum momentum.',
    },
];

export function FounderSection() {
    return (
        <section id="about" className="relative py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/80 overflow-hidden">

            {/* ── BACKGROUND TEXTURE ───────────────────────────────────────────────
          Radial dot grid at very low opacity — adds depth without noise.
          Two radial glows anchor the composition top-right and bottom-left.
      ──────────────────────────────────────────────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #FE8D2A 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                {/* Top-right warm glow */}
                <div
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.08]"
                    style={{ background: 'radial-gradient(circle, #FE8D2A, transparent 70%)' }}
                />
                {/* Bottom-left cool shadow */}
                <div
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04] dark:opacity-[0.06]"
                    style={{ background: 'radial-gradient(circle, #FE8D2A, transparent 70%)' }}
                />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

                {/* ── HEADER ───────────────────────────────────────────────────────── */}
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-block px-4 py-2 bg-[#FE8D2A]/10 rounded-full mb-6 border border-[#FE8D2A]/20">
                        <span className="text-[#FE8D2A] text-sm font-semibold uppercase tracking-widest">
                            About the Founder
                        </span>
                    </div>
                    <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.2]">
                        From Lost to{' '}
                        <span className="text-[#FE8D2A]">Focused</span>
                    </h2>
                </div>

                {/* ── IMAGE + OPENING STORY ─────────────────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16">

                    {/* Image — decorated frame with orange glow accent */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/From Lost to Focused.webp"
                                    alt="From lost to focused"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Opening story */}
                    <div className="order-1 lg:order-2 space-y-5 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            I spent years trapped in the cycle of starting and stopping.
                            Every Monday was a "fresh start." Every Thursday was a failure.
                            I blamed myself, thinking I just wasn't disciplined enough.
                        </p>
                        <p>
                            But the truth was different. I wasn't lacking willpower — I was
                            lacking{' '}
                            <span className="text-[#FE8D2A] font-semibold">a system</span>.
                        </p>
                        <p>
                            After hitting rock bottom, I realized that motivation is
                            temporary, but systems are permanent. I studied behavioral
                            psychology, habit formation, and minimalism — and tested
                            everything on myself first.
                        </p>

                        {/* Founder attribution inline with the story */}
                        <div className="pt-5 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-base text-gray-900 dark:text-gray-100 italic mb-3">
                                "I rebuilt my discipline after losing focus for years. I share
                                everything I learned so you don't waste more time restarting."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-px bg-[#FE8D2A]" />
                                <div>
                                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        Founder
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        LiveLifeSuccessfull
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bridge line */}
                <p className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-12 sm:mb-14">
                    Here&#39;s what I discovered:
                </p>

                {/* ── REALIZATIONS — timeline layout ───────────────────────────────── */}
                <div className="relative mb-16 sm:mb-20">

                    {/* Vertical connector line running through the number badges */}
                    <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#FE8D2A] via-[#FE8D2A]/40 to-transparent hidden md:block" />

                    <div className="space-y-6 sm:space-y-8">
                        {realizations.map((r) => (
                            <div
                                key={r.number}
                                className="
                  group relative flex flex-col md:flex-row gap-6 md:gap-8 items-start
                  p-6 rounded-2xl
                  bg-white/60 dark:bg-gray-800/40
                  border border-gray-200/80 dark:border-gray-700/50
                  hover:border-[#FE8D2A]/40 dark:hover:border-[#FE8D2A]/30
                  hover:bg-white dark:hover:bg-gray-800/70
                  hover:shadow-lg hover:shadow-[#FE8D2A]/5
                  transition-all duration-300
                "
                            >
                                {/* Left accent bar — slides in on hover */}
                                <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-[#FE8D2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Number badge — sits on the connector line */}
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="
                    w-14 h-14 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-[#FE8D2A] to-[#D87620]
                    shadow-lg shadow-[#FE8D2A]/25
                    group-hover:shadow-[#FE8D2A]/40
                    group-hover:scale-105
                    transition-all duration-300
                  ">
                                        <span className="font-bold text-white text-xl">{r.number}</span>
                                    </div>
                                </div>

                                <div className="flex-1 pt-1">
                                    <h3 className="font-semibold text-xl sm:text-2xl mb-3 text-gray-900 dark:text-gray-100 group-hover:text-[#FE8D2A] transition-colors duration-300">
                                        {r.heading}
                                    </h3>
                                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {r.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── KEY INSIGHT QUOTE ────────────────────────────────────────────────
            Large decorative quote mark + dramatic left border treatment.
        ──────────────────────────────────────────────────────────────────────── */}
                <div className="relative mb-12 sm:mb-16">
                    {/* Decorative large quote mark */}
                    <div
                        className="absolute -top-6 -left-2 text-[120px] leading-none font-serif text-[#FE8D2A]/10 dark:text-[#FE8D2A]/15 select-none pointer-events-none"
                        aria-hidden="true"
                    >
                        "
                    </div>

                    <div className="relative p-6 sm:p-12 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
                        {/* Orange top accent line */}
                        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#FE8D2A] to-transparent" />

                        <p className="text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-gray-900 dark:text-gray-100 mb-6">
                            The breakthrough wasn't learning more. It was simplifying
                            everything. Removing the noise. Building one habit at a time.
                            Trusting the process, not the feeling.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                            This system isn't theory. It's what pulled me out of years of
                            inconsistency.{' '}
                            <span className="text-[#FE8D2A] font-semibold">
                                And it will work for you too.
                            </span>
                        </p>
                    </div>
                </div>

                {/* ── MISSION ──────────────────────────────────────────────────────────
            Glowing border treatment to signal importance.
        ──────────────────────────────────────────────────────────────────────── */}
                <div className="relative text-center max-w-3xl mx-auto">
                    {/* Outer glow */}
                    <div
                        className="absolute -inset-1 rounded-2xl blur-lg opacity-10"
                        style={{ background: 'linear-gradient(135deg, #FE8D2A, #D87620)' }}
                    />
                    <div className="relative p-6 sm:p-12 bg-white dark:bg-gray-900 rounded-2xl border border-[#FE8D2A]/20 shadow-lg">
                        <div className="flex items-center justify-center gap-3 mb-5">
                            <div className="h-px w-8 bg-[#FE8D2A]/40" />
                            <h3 className="text-[#FE8D2A] text-sm font-bold uppercase tracking-widest">
                                My Mission
                            </h3>
                            <div className="h-px w-8 bg-[#FE8D2A]/40" />
                        </div>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            To help 100,000+ people stop restarting and start building. To
                            make discipline simple, not complicated. To prove that systems
                            beat motivation — not once, but every single time.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}