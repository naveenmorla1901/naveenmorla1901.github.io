// components/GoogleAnalytics.tsx
'use client';

export default function GoogleAnalytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-1YGRDEM4BK`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1YGRDEM4BK', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}