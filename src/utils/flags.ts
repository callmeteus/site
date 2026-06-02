import type { LinkLanguage } from "../config/links";

/** Local Twemoji flag SVGs. Emoji flags do not render on Windows. */
const flagPath: Record<LinkLanguage, string> = {
    pt: "/flags/br.svg",
    en: "/flags/us.svg",
};

const flagLabels: Record<LinkLanguage, string> = {
    pt: "Content in Portuguese",
    en: "Content in English",
};

export function getFlagSvgUrl(lang: LinkLanguage): string {
    return flagPath[lang];
}

export function getFlagLabel(lang: LinkLanguage): string {
    return flagLabels[lang];
}

export function getFlagCode(lang: LinkLanguage): string {
    return lang === "pt" ? "BR" : "EN";
}
