interface SectionLabelProps {
    children: React.ReactNode;
}

/**
 * The orange eyebrow pill label used across all sections.
 * e.g. "The Solution", "About the Founder", "Insights & Systems"
 */
export function SectionLabel({ children }: SectionLabelProps) {
    return (
        <div className="inline-block px-4 py-2 bg-[#FE8D2A]/10 rounded-full mb-6 border border-[#FE8D2A]/20">
            <span className="text-[#FE8D2A] text-sm font-semibold uppercase tracking-widest">
                {children}
            </span>
        </div>
    );
}