"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, pageview } from "./index";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!pathname) return;
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const searchString = searchParams?.toString();
    const url = searchString ? `${pathname}?${searchString}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsTracker() {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `,
            }}
          />
        </>
      )}
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
