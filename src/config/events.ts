export interface FurryEvent {
    id: string;
    name: string;
    day: string;
    month: string;
    year: string;
    date: string;
    location: string;
    detail: string;
    href: string;
}

export const events: FurryEvent[] = [
    {
        id: "patas-2026",
        name: "Patas 2026",
        day: "11-13",
        month: "DEC",
        year: "2026",
        date: "December 11-13, 2026",
        location: "Sorocaba, SP, Brazil",
        detail: "Charity convention · GameFur",
        href: "https://eventopatas.com/",
    },
    {
        id: "furcamp-2027",
        name: "Furcamp 2027",
        day: "05-09",
        month: "FEB",
        year: "2027",
        date: "February 5-9, 2027",
        location: "Embu-Guaçu, SP, Brazil",
        detail: "Camping convention · Galactic Groove",
        href: "https://furcamp.com/",
    },
    {
        id: "nfc-2027",
        name: "NFC 2027",
        day: "24-28",
        month: "FEB",
        year: "2027",
        date: "February 24-28, 2027",
        location: "Malmö, Sweden",
        detail: "NordicFuzzCon · Crime Noir",
        href: "https://nordicfuzzcon.org/",
    },
    {
        id: "furzue-2027",
        name: "Furzuê 2027",
        day: "28-30",
        month: "MAY",
        year: "2027",
        date: "May 28-30, 2027",
        location: "Londrina, PR, Brazil",
        detail: "First hotel furry convention in Paraná",
        href: "https://furzue.com/",
    },
    {
        id: "brasil-furfest-2027",
        name: "Brasil FurFest 2027",
        day: "10-12",
        month: "SEP",
        year: "2027",
        date: "September 10-12, 2027",
        location: "Poços de Caldas, MG, Brazil",
        detail: "South America's largest · Conspiracy Theories",
        href: "https://bff.brasilfurfest.com.br/",
    },
];
