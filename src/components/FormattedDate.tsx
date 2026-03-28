"use client";

interface FormattedDateProps {
    rawDate: string; // "YYYY-MM-DD"
}

/**
 * Formats a date string in the user's local timezone.
 * Parses as a local date (not UTC) to prevent the off-by-one-day
 * issue that occurs when new Date("YYYY-MM-DD") is interpreted as UTC midnight.
 */
export default function FormattedDate({ rawDate }: FormattedDateProps) {
    const parts = rawDate.split("-").map(Number);
    const year = parts[0] ?? new Date().getFullYear();
    const month = parts[1] ?? 1;
    const day = parts[2] ?? 1;

    // Construct as local date — avoids UTC shift
    const date = new Date(year, month - 1, day);

    return (
        <>
            {date.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </>
    );
}