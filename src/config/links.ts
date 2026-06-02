export type LinkLanguage = "pt" | "en";
export type LinkGroup = "social" | "support" | "telegram";

export interface SiteLink {
    id: string;
    label: string;
    href: string;
    icon: string;
    description?: string;
    group: LinkGroup;
    languages: LinkLanguage[];
    accentClass: string;
    external?: boolean;
}

export const linkGroups: Record<LinkGroup, string> = {
    social: "Connect",
    support: "Support",
    telegram: "Telegram",
};

export const links: SiteLink[] = [
    {
        id: "x",
        label: "X / Twitter",
        href: "https://x.com/giofolf",
        icon: "simple-icons:x",
        group: "social",
        languages: ["pt"],
        accentClass: "bg-zinc-900 text-white",
        external: true,
    },
    {
        id: "instagram",
        label: "Instagram",
        href: "https://instagram.com/gio.folf",
        icon: "simple-icons:instagram",
        group: "social",
        languages: ["pt"],
        accentClass: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white",
        external: true,
    },
    {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/giofolf/",
        icon: "simple-icons:facebook",
        group: "social",
        languages: ["pt"],
        accentClass: "bg-[#1877F2] text-white",
        external: true,
    },
    {
        id: "kofi",
        label: "Ko-fi",
        href: "https://ko-fi.com/giofolf",
        icon: "simple-icons:kofi",
        group: "support",
        languages: ["en", "pt"],
        accentClass: "bg-[#FF5E5B] text-white",
        external: true,
    },
    {
        id: "telegram-songs",
        label: "Gio & Songs",
        href: "https://t.me/gioandsongs",
        icon: "simple-icons:telegram",
        description: "Music & unfinished sketches",
        group: "telegram",
        languages: ["pt"],
        accentClass: "bg-[#26A5E4] text-white",
        external: true,
    },
    {
        id: "telegram-den",
        label: "Gio's Den",
        href: "https://t.me/giosden",
        icon: "simple-icons:telegram",
        description: "Fursona art & more",
        group: "telegram",
        languages: ["en"],
        accentClass: "bg-[#26A5E4] text-white",
        external: true,
    },
];

export const getLinksByGroup = (group: LinkGroup) =>
    links.filter((link) => link.group === group);
