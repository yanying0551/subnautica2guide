// Type definitions for the site

export interface CopyData {
  title: string;
  meta: string;
  h1: string;
  sections: Section[];
  faq: FaqItem[];
  schema?: Record<string, unknown>;
  tlDr?: string;
  internalLinks?: string[];
}

export interface Section {
  heading: string;
  level: 2 | 3;
  content: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ResourcePage {
  slug: string;
  name: string;
  icon: string;
}

export interface GuidePage {
  slug: string;
  name: string;
  description: string;
}

// Resource data
export const resources: ResourcePage[] = [
  { slug: "copper", name: "Copper", icon: "🟤" },
  { slug: "silver", name: "Silver", icon: "⚪" },
  { slug: "lead", name: "Lead", icon: "⚫" },
  { slug: "salt", name: "Salt", icon: "🧂" },
  { slug: "titanium", name: "Titanium", icon: "🔘" },
  { slug: "quartz", name: "Quartz", icon: "💎" },
  { slug: "gold", name: "Gold", icon: "🟡" },
  { slug: "lithium", name: "Lithium", icon: "🔋" },
];

export const guides: GuidePage[] = [
  { slug: "beginner-guide", name: "Beginner Guide", description: "Your first hour on Luca — what to do and where to go." },
  { slug: "digestive-incompatibility", name: "Digestive Incompatibility Cure", description: "How to cure digestive incompatibility." },
  { slug: "angel-comb", name: "Angel Comb Guide", description: "Where to find and how to use the Angel Comb." },
  { slug: "feedback-resonator", name: "Feedback Resonator Guide", description: "How to unlock and use the Feedback Resonator." },
  { slug: "multiplayer", name: "Co-op Multiplayer Guide", description: "How to play Subnautica 2 with friends." },
];

export const quickLinks = [
  { href: "/creatures", label: "Creatures", icon: "🐟" },
  { href: "/resources", label: "Resources", icon: "⛏️" },
  { href: "/base-building", label: "Base Building", icon: "🏗️" },
  { href: "/biomods", label: "Biomods", icon: "🧬" },
  { href: "/guides/multiplayer", label: "Co-op Guide", icon: "🎮" },
  { href: "/updates/roadmap", label: "Roadmap", icon: "📋" },
];
