import { SectionLabel } from "@/src/components/ui/SectionLabel";

export function BlogHero() {
    return (
        <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/80">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="mb-6">
                    <SectionLabel>Insights &amp; Systems</SectionLabel>
                </div>

                <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-[1.2]">
                    Systems Over{" "}
                    <span className="text-[#FE8D2A]">Motivation.</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Practical frameworks on discipline, habit formation, and
                    building a life you don&apos;t need to escape from.
                </p>

            </div>
        </section>
    );
}