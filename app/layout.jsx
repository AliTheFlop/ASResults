// [14] layout.jsx - Corrected Code

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import { copperplate } from "@/lib/fonts.js";
import FacebookPixelEvents from "@/components/FacebookPixelEvents";
import { Suspense } from "react"; // 1. Import Suspense

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AS Results | Online Marketing Agency",
    description: "We guarantee more growth and more clients or you don't pay.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${copperplate.variable}`}>
            <head>
                {/* Google Tag Manager */}
                <Script id="gtm-script" strategy="afterInteractive">
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKRWHJDT');
          `}
                </Script>
                {/* End Google Tag Manager */}
                {/* Facebook Pixel Code */}
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '716793411282060');
              fbq('track', 'PageView');
            `,
                    }}
                />
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=716793411282060&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
            </head>
            <body className={inter.className}>
                {/* GTM NoScript */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-WKRWHJDT"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End GTM NoScript */}
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
                {/* 2. Wrap the component in Suspense */}
                <Suspense fallback={null}>
                    <FacebookPixelEvents />
                </Suspense>
            </body>
        </html>
    );
}
