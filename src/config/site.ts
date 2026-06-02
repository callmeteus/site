export const site = {
    name: "Gio",
    domain: "https://gio.pet",
    age: 28,
    location: "Londrina, PR, Brazil",
    bio: "Developer, modder, and creative tinkerer. I build things for games, write about tech, and share music & art on the side.",
    locale: "en",
    languageNote:
        "Most of my social feeds and channels are in Portuguese. I'm from Brazil.",
    pixKey: "pix@gio.pet",
    seo: {
        title: "Gio | Developer & Creator",
        description:
            "Personal portfolio, links, and micro tech blog. Game modding, code, music sketches, and fursona art.",
        ogImage: "/og-image.svg",
    },
} as const;

export type SiteConfig = typeof site;
