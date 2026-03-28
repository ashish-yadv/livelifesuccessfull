import { solutionProducts } from './SolutionProducts';
import { SectionLabel } from './ui/SectionLabel';
import { SolutionCard } from './ui/SolutionCard';

export function NewSolutionSection() {
    return (
        <section id="solution" className="py-24 sm:py-32 bg-white dark:bg-gray-900/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">

                    {/* Label */}
                    <SectionLabel>The Solution</SectionLabel>

                    <h2 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.2]">
                        One System.
                        <br />
                        <span className="text-[#FE8D2A]">Three Ways.</span>
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Whether you want to start simple or go all-in, every version is
                        built on the same science.
                    </p>
                </div>

                {/* Cards grid — loop lives here */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {solutionProducts.map((product) => (
                        <SolutionCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Transition line into Pricing */}
                <p className="text-center mt-16 text-gray-500 dark:text-gray-400 text-base">
                    Every option includes lifetime access.{' '}
                    <a
                        href="#pricing"
                        className="text-[#FE8D2A] font-semibold hover:underline underline-offset-4"
                    >
                        Choose your starting point below ↓
                    </a>
                </p>

            </div>
        </section>
    );
}