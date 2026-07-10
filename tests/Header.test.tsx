import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("@/contexts/LocaleContext", () => ({
  useLocale: () => ({ locale: "en", l: (path: string) => path }),
}));

vi.mock("@/components/LocaleSwitcher", () => ({
  LocaleSwitcher: () => <button type="button">Switch language</button>,
}));

vi.mock("@/lib/i18n", () => ({
  tr: (key: string) => key,
}));

import { Header } from "@/components/Header";

beforeEach(() => {
  Object.defineProperty(window, "innerWidth", { configurable: true, value: 375 });
});

describe("Header mobile navigation", () => {
  it("does not expose the modal dialog while the drawer is closed", () => {
    render(<Header />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("uses safe external-link attributes inside the opened drawer", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));

    const steamLinks = screen.getAllByRole("link", { name: "Buy on Steam" });
    expect(steamLinks).toHaveLength(2);
    steamLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("closes the mobile drawer and releases scrolling when the viewport becomes desktop-sized", async () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(document.body.style.overflow).toBe("hidden");

    Object.defineProperty(window, "innerWidth", { configurable: true, value: 768 });
    fireEvent(window, new Event("resize"));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(document.body.style.overflow).toBe("");
    });
  });
});
