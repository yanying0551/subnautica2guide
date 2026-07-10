"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/contexts/LocaleContext";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { tr } from "@/lib/i18n";
import { useState, useEffect, useRef, useCallback } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const { locale, l } = useLocale();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Refs for focus management: the button that opened the drawer, the drawer
  // panel itself, and the close button (first focusable element inside).
  const openButtonRef = useRef<HTMLButtonElement | null>(null);
  const drawerPanelRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close on Escape, and trap focus inside the drawer while open.
  useEffect(() => {
    if (!drawerOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        setDrawerOpen(false);
        return;
      }

      // Focus trap: when Tabbing past the last focusable element, wrap to the
      // first; when Shift+Tab past the first, wrap to the last.
      if (e.key === "Tab" && drawerPanelRef.current) {
        const focusables = drawerPanelRef.current.querySelectorAll<HTMLElement>(
          FOCUSABLE_SELECTOR
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
          if (active === first || !drawerPanelRef.current.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (active === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handler, true);
    return () => document.removeEventListener("keydown", handler, true);
  }, [drawerOpen]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close the mobile-only drawer when its trigger becomes unavailable at the
  // desktop breakpoint. This also releases the focus trap and scroll lock.
  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setDrawerOpen(false);
    };

    window.addEventListener("resize", closeOnDesktop);
    closeOnDesktop();
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  // When the drawer opens: move focus into it (to the close button, which is
  // the first meaningful control). When it closes: restore focus to the
  // hamburger button that opened it.
  useEffect(() => {
    if (drawerOpen) {
      // Defer one tick so the drawer is mounted/visible before focusing.
      const id = window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 30);
      return () => window.clearTimeout(id);
    } else {
      openButtonRef.current?.focus();
    }
  }, [drawerOpen]);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const navLinks = [
    { href: "/", label: tr("nav.home", locale) },
    { href: "/creatures", label: tr("nav.creatures", locale) },
    { href: "/resources", label: tr("nav.resources", locale) },
    { href: "/base-building", label: tr("nav.base-building", locale) },
    { href: "/biomods", label: tr("nav.biomods", locale) },
    { href: "/guides/multiplayer", label: tr("nav.coop", locale) },
    { href: "/updates/roadmap", label: tr("nav.roadmap", locale) },
  ];

  // Check if a nav link is active. We use the Next.js router pathname (from
  // `usePathname`) rather than `window.location.pathname` because the latter
  // can lag behind by one render after client-side navigation, leaving the
  // previous page highlighted until a second render or a hard reload.
  const activePath = pathname;
  const isActive = (href: string) => {
    const cleanPath = href === "/" ? "/" : href.replace(/\/$/, "");
    if (cleanPath === "/") return activePath === "/" || activePath === "/zh-cn" || activePath === "/zh-cn/";
    return activePath === cleanPath || activePath === l(cleanPath) || activePath.startsWith(l(cleanPath));
  };

  const panelId = "mobile-nav-drawer";
  const titleId = "mobile-nav-title";

  return (
    <header className="sticky top-0 z-30 border-b border-deep-400/15 bg-[#0b1926]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:py-0">
        <button
          ref={openButtonRef}
          onClick={openDrawer}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-deep-300 hover:text-white hover:bg-deep-400/10 transition-colors"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          aria-controls={panelId}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <Link href={l("/")} className="group inline-flex items-center gap-2.5 text-deep-200 hover:text-deep-200/90 transition-colors shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-deep-400/30 bg-deep-400/5 text-sm font-bold text-deep-300 shadow-[0_0_22px_rgba(34,211,238,0.10)] overflow-hidden relative transition-transform duration-300 group-hover:scale-105 group-hover:border-deep-400/50">
            <span className="relative z-10">S2</span>
          </span>
          <div>
            <span className="font-display font-bold text-[1.02rem] leading-none text-white sm:text-[1.2rem]">{tr("brand.title", locale)}</span>
            <span className="block text-[0.7rem] text-deep-400/60 font-medium tracking-wider uppercase">{tr("brand.subtitle", locale)}</span>
          </div>
        </Link>

        <nav className="hidden lg:flex flex-wrap justify-end gap-x-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={l(link.href)}
                className={`relative px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-colors ${
                  active
                    ? "text-sky-50 bg-deep-400/15 shadow-[inset_0_0_0_1px_rgba(34,211,238,0.3)] after:absolute after:bottom-[-1px] after:left-1/2 after:w-[18px] after:h-[2px] after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-deep-400 after:to-transparent after:rounded-full"
                    : "text-slate-400 hover:text-deep-300 hover:bg-white/[0.04]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <Link
            href="https://store.steampowered.com/app/1962700/Subnautica_2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium bg-deep-400/10 text-deep-300 border border-deep-400/25 px-3.5 py-1.5 rounded-full hover:bg-deep-400/20 hover:border-deep-400/40 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26.81-1 1.39-1.9 1.39h-1v-3c0-1.1-.9-2-2-2H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            Buy on Steam
          </Link>
        </div>
      </div>

      {drawerOpen && (
        <>
      {/* Mobile sidebar overlay.
          Decorative backdrop — hidden from AT by aria-hidden. */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Mobile sidebar drawer (Dialog pattern).
          role="dialog" + aria-modal tells assistive tech this is a modal
          overlay; aria-labelledby points at the brand title that now also
          serves as the dialog heading. */}
      <div
        ref={drawerPanelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`fixed top-0 left-0 z-50 h-full w-72 max-w-[80vw] bg-[#0b1926] border-r border-deep-400/15 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          drawerOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-5 py-4 border-b border-deep-400/10">
            <span id={titleId} className="font-display font-bold text-white text-sm">
              {tr("brand.title", locale)}
            </span>
            <button
              ref={closeButtonRef}
              onClick={closeDrawer}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-deep-300 hover:text-white hover:bg-deep-400/10 transition-colors"
              aria-label="Close navigation menu"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-3">
          <Link
            href={l("/guides")}
            onClick={closeDrawer}
            className="flex items-center gap-2 bg-deep-800/30 border border-deep-400/15 rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-deep-300 hover:border-deep-400/30 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h10" />
            </svg>
            <span>{locale === "zh" ? "浏览全部攻略" : "Browse all guides"}</span>
          </Link>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={l(link.href)}
                  onClick={closeDrawer}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active
                      ? "text-deep-300 bg-deep-400/12 border border-deep-400/20"
                      : "text-slate-400 hover:text-white hover:bg-deep-400/8"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-deep-400" : "bg-deep-700"}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-deep-400/10 px-4 py-4 space-y-3">
            <div className="flex items-center gap-2">
              <LocaleSwitcher />
            </div>
            <Link
              href="https://store.steampowered.com/app/1962700/Subnautica_2/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeDrawer}
              className="flex items-center justify-center gap-2 text-sm font-medium bg-deep-400/10 text-deep-300 border border-deep-400/25 px-4 py-2.5 rounded-lg hover:bg-deep-400/20 hover:border-deep-400/40 transition-colors w-full"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26.81-1 1.39-1.9 1.39h-1v-3c0-1.1-.9-2-2-2H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              Buy on Steam
            </Link>
          </div>
        </div>
      </div>
        </>
      )}
    </header>
  );
}
