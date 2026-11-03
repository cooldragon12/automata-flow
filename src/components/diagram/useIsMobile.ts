"use client"
import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 767px)";

const subscribe = (onChange: () => void) => {
    const mql = window.matchMedia(QUERY);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
};

/** True below Tailwind's `md` breakpoint. */
export const useIsMobile = () =>
    useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);
