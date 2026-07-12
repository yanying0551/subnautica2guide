import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalProvider } from "@/contexts/LocaleContext";
import { getLocale } from "@/lib/server-locale";
import { getAlternates } from "@/lib/seo-metadata";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isZh = locale === "zh";
  const description = isZh
    ? "深海迷航2 终极粉丝指南。查找生物位置、资源地图、基地建造技巧、联机指南、新手攻略和抢先体验更新追踪。内容已针对抢先体验版更新。"
    : "The ultimate fan-made Subnautica 2 guide. Find creature locations, resource maps, base building tips, co-op guides, beginner walkthroughs, and EA update tracker. Updated for Early Access.";

  return {
    title: {
      default: isZh
        ? "深海迷航2 指南——攻略、生物、资源与基地建造"
        : "Subnautica 2 Guide — Walkthroughs, Creatures, Resources & Base Building",
      template: isZh ? "%s — 深海迷航2 指南" : "%s — Subnautica 2 Guide",
    },
    description,
    metadataBase: new URL("https://subnautica2guide.wiki"),
    openGraph: {
      title: isZh ? "深海迷航2 指南" : "Subnautica 2 Guide",
      description: isZh
        ? "深海迷航2 终极粉丝指南——涵盖攻略、生物、资源、基地建造、联机等内容。"
        : "The ultimate fan-made Subnautica 2 guide — creatures, resources, base building, co-op, and more.",
      siteName: isZh ? "深海迷航2 指南" : "Subnautica 2 Guide",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: getAlternates("/", locale),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html
      lang={locale === "zh" ? "zh-CN" : "en"}
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        {/* Privacy-friendly analytics by Plausible. */}
        <script
          async
          src="https://plausible.shipsolo.io/js/pa-_Pi62oDF-K3FFKudE4D1K.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init();
            `,
          }}
        />
        {/* Optional GA4 and Clarity analytics are injected only when configured. */}
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${JSON.stringify(gaId)});
                `,
              }}
            />
          </>
        ) : null}
        {clarityId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", ${JSON.stringify(clarityId)});
              `,
            }}
          />
        ) : null}
        {/* Schema: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Subnautica 2 Guide",
              url: "https://subnautica2guide.wiki",
              description:
                "The ultimate fan-made Subnautica 2 guide — walkthroughs, creatures, resources, base building, and co-op guides.",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LocalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocalProvider>
      </body>
    </html>
  );
}
