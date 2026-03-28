import type { ReactNode } from "react";

interface SidebarWidgetProps {
    label: string;
    children: ReactNode;
    /** Renders a bottom border divider. Default: true */
    divider?: boolean;
}

/**
 * Shared wrapper for every sidebar widget.
 * Handles the label, spacing, and optional divider consistently.
 * Adding a new sidebar widget = create the content, wrap in SidebarWidget.
 */
export function SidebarWidget({
    label,
    children,
    divider = true,
}: SidebarWidgetProps) {
    return (
        <div
            className={[
                "pb-8 mb-8",
                divider ? "border-b border-gray-200 dark:border-gray-800" : "",
            ].join(" ")}
        >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                {label}
            </p>
            {children}
        </div>
    );
}