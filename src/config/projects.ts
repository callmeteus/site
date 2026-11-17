export interface Project {
    id: string;
    title: string;
    description: string;
    href: string;
    tags: string[];
    scope: string;
}

export const projects: Project[] = [
    {
        id: "furzue",
        title: "Furzuê",
        description: "Annual furry meetup in Londrina, PR: event site, community, and behind-the-scenes writeups.",
        href: "https://furzue.com",
        tags: ["Community", "Events"],
        scope: "community & events",
    },
    {
        id: "hytale-modding",
        title: "Hytale Modding",
        description: "Tools and mods for the Hytale ecosystem: UI builders, auth, load balancing, and more.",
        href: "https://github.com/callmeteus",
        tags: ["Java", "Game Dev", "Mods"],
        scope: "tools & mods for games",
    },
    {
        id: "stillmark",
        title: "Stillmark",
        description: "Interactive roadmap and execution plan management for AI agents.",
        href: "https://github.com/callmeteus/stillmark",
        tags: ["TypeScript", "AI", "CLI"],
        scope: "planning for AI agents",
    },
    {
        id: "social-sharer",
        title: "Social Sharer",
        description: "Chrome extension that sends posts from X/Twitter and Facebook to Telegram channels with native media in one click.",
        href: "https://github.com/callmeteus/social-telegram-embedder",
        tags: ["TypeScript", "Chrome Extension", "Telegram"],
        scope: "browser extension",
    },
];
