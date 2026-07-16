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
    ? "深海迷航2独立粉丝指南。详细玩法内容正在进行来源审查，尚不应视为已经核验的参考资料。"
    : "An independent fan guide for Subnautica 2. Detailed gameplay content is under source review and should not be treated as verified reference material.";

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
        ? "深海迷航2独立粉丝指南；详细玩法内容正在进行来源审查。"
        : "An independent fan guide for Subnautica 2; detailed gameplay content is under source review.",
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
                "An independent fan guide for Subnautica 2; detailed gameplay content is under source review.",
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
