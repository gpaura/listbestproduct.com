import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: [string, string, { page_path: string }]) => void;
  }
}
//
export const useAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: pathname,
      });
    }
  }, [pathname]);
};
