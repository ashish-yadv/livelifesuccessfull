import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/From Lost to Focused.png"
                alt="From lost to focused"
                width={600}
                height={600}
                className="w=full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div> */}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-[#FE8D2A]/10 rounded-full mb-6">
              <span className="text-[#FE8D2A]">About the Founder</span>
            </div>

            <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6">
              From Lost to Focused
            </h2>

            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I spent years trapped in the cycle of starting and stopping. Every Monday was a &quot;fresh start.&quot; Every Thursday was a failure. I blamed myself, thinking I just wasn&apos;t disciplined enough.
              </p>

              <p>
                But the truth was different. I wasn&apos;t lacking willpower—I was lacking <span className="text-[#FE8D2A]">a system</span>.
              </p>

              <p>
                After hitting rock bottom, I realized that motivation is temporary, but systems are permanent. I started studying behavioral psychology, habit formation, and minimalism. I tested everything on myself first.
              </p>

              <p>
                The Habit Mastery System is the result of that journey. It&apos;s everything I learned, simplified into a 30-day framework that works.
              </p>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <p className="text-xl text-gray-900 dark:text-gray-100 italic">
                  &quot;I rebuilt my discipline after losing focus for years. I share everything I learned so you don&apos;t waste more time restarting.&quot;
                </p>
                <div className="mt-4">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Founder</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">LiveLifeSuccessfull</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="p-6 sm:p-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
            <h3 className="font-medium text-[#FE8D2A] text-2xl sm:text-3xl mb-4">My Mission</h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              To help people stop restarting and start building. To make discipline simple, not complicated. To prove that systems beat motivation every single time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
