'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function CookieConsent() {
  return (
    <>
      <Script id="iubenda-config" strategy="afterInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            "siteId":3947513,
            "cookiePolicyId":33519082,
            "lang":"en",
            "storage":{"useSiteId":true}
          };
        `}
      </Script>
      <Script 
        src="https://cs.iubenda.com/autoblocking/3947513.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="//cdn.iubenda.com/cs/gpp/stub.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
        async
      />
    </>
  );
}
