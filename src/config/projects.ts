export interface Project {
    id: string;
    title: string;
    description: string;
    href: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: "hytale-modding",
        title: "Hytale Modding",
        description: "Tools and mods for the Hytale ecosystem: UI builders, auth, load balancing, and more.",
        href: "https://github.com/giofolf",
        tags: ["Java", "Game Dev", "Mods"],
    },
    {
        id: "furzue",
        title: "Furzuê",
        description: "Annual furry meetup in Londrina, PR: event site, community, and behind-the-scenes writeups.",
        href: "https://furzue.com",
        tags: ["Community", "Events"],
    },
];
