export type NavId = "home" | "explore" | "activity" | "settings" | "about";

export type NavItem = {
  id: NavId;
  label: string;
  kicker: string;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home", kicker: "Start here" },
  { id: "explore", label: "Explore", kicker: "Extension points" },
  { id: "activity", label: "Activity", kicker: "Recent signals" },
  { id: "settings", label: "Settings", kicker: "Look and feel" },
  { id: "about", label: "About", kicker: "Stack" },
];

export const modules = [
  {
    name: "Navigation",
    file: "src/content.ts",
    detail: "Add a sidebar entry and it shows up on the left.",
  },
  {
    name: "Panels",
    file: "src/panels.tsx",
    detail: "Each view is a small component. Swap the body, keep the frame.",
  },
  {
    name: "Keys",
    file: "src/App.tsx",
    detail: "Keyboard handling lives in one place, next to the layout.",
  },
] as const;

export const events = [
  { time: "09:14", label: "Workspace ready", tone: "ok" as const },
  { time: "09:16", label: "Typecheck passed", tone: "ok" as const },
  { time: "09:18", label: "Waiting for the next command", tone: "wait" as const },
  { time: "09:21", label: "No background jobs", tone: "idle" as const },
];
