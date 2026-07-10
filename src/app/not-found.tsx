import { getLocale, l, pick } from "@/lib/server-locale";

export default async function NotFound() {
  const locale = await getLocale();

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-deep-100 mb-4">404</h1>
      <p className="text-deep-300 mb-6">
        {pick(
          "This page hasn't been built yet — we're adding new guides daily.",
          "此页面尚未完成——我们每天都在添加新的指南内容。",
          locale,
        )}
      </p>
      <a
        href={l("/", locale)}
        className="inline-block bg-deep-400/90 text-deep-900 font-semibold px-6 py-2.5 rounded-lg hover:bg-deep-400 transition-all shadow-lg shadow-deep-400/20"
      >
        {pick("Back to Home", "回到首页", locale)}
      </a>
    </div>
  );
}
