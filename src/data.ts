export type Herb = {
    id: number;
    benefits: string[];
    name: string;
    isCulinary: boolean;
    image: string;
    alt: string;
    urlLink: string;
}

export const herbsData: Herb[] = [
    {
        id: 1,
        benefits: ["Medicinal", "Anti-oxidant"],
        name: "Oregano",
        isCulinary: true,
        image: "oregano.jpg",
        alt: "Photo of oregano plant.",
        urlLink: "https://en.wikipedia.org/wiki/Oregano"
    },
    {
        id: 2,
        benefits: ["Medicinal", "Anti-oxidant", "Anti-inflammatory", "Anti-bacterial"],
        name: "Basil",
        isCulinary: true,
        image: "basil.jpg",
        alt: "Photo of basil plant.",
        urlLink: "https://en.wikipedia.org/wiki/Basil"
    },
    {
        id: 3,
        benefits: ["Medicinal", "Anti-inflammatory"],
        name: "nettle",
        isCulinary: true,
        image: "nettle.jpg",
        alt: "Photo of nettle plant.",
        urlLink: "https://en.wikipedia.org/wiki/Urtica"
    },
    {
        id: 4,
        benefits: ["Medicinal", "Anti-microbial"],
        name: "thyme",
        isCulinary: true,
        image: "thyme.jpg",
        alt: "Photo of thyme plant.",
        urlLink: "https://en.wikipedia.org/wiki/Thyme"
    },
    {
        id: 5,
        benefits: ["Medicinal", "Anti-inflammatory", "Anti-oxidant", "Digestive", "immune-booster"],
        name: "Ginger",
        isCulinary: true,
        image: "ginger.jpg",
        alt: "Photo of ginger root.",
        urlLink: "https://en.wikipedia.org/wiki/Ginger"
    },
    {
        id: 6,
        benefits: ["Medicinal", "Sedative", "Calming", "Anti-stress", "Sedative"],
        name: "Lavender",
        isCulinary: true,
        image: "lavender.jpg",
        alt: "Photo of lavender  plant.",
        urlLink: "https://en.wikipedia.org/wiki/Lavandula"
    },
    {
        id: 7,
        benefits: ["Medicinal", "Sedative", "Anti-stress", "Digestive", "Anti-inflammatory", "Skin-soothing"],
        name: "Chamomile",
        isCulinary: true,
        image: "chamomile.jpg",
        alt: "Photo of chamomile  plant.",
        urlLink: "https://en.wikipedia.org/wiki/Chamomile"
    },
    {
        id: 8,
        benefits: ["Medicinal", "Sedative", "Anti-stress", "Digestive"],
        name: "Melissa",
        isCulinary: true,
        image: "melissa.jpg",
        alt: "Photo of St. Melissa  plant.",
        urlLink: "https://en.wikipedia.org/wiki/Lemon_balm"
    },
    {
        id: 9,
        benefits: ["Medicinal", "immune-booster"],
        name: "echinacea",
        isCulinary: false,
        image: "echinacea.jpg",
        alt: "Photo of echinacea plant.",
        urlLink: "https://en.wikipedia.org/wiki/Echinacea"
    },
    {
        id: 10,
        benefits: ["Medicinal", "Anti-inflammatory", "Anti-bacterial", "Anti-stress"],
        name: "St. John's Wort",
        isCulinary: false,
        image: "st-johns-wort.jpg",
        alt: "Photo of St. John's Wort plant.",
        urlLink: "https://en.wikipedia.org/wiki/Hypericum_perforatum"
    },
    {
        id: 11,
        benefits: ["Medicinal", "Anti-inflammatory", "astringent", "Skin-soothing"],
        name: "Witch Hazel",
        isCulinary: false,
        image: "witch-hazel.jpg",
        alt: "Photo of witch hazel plant.",
        urlLink: "https://en.wikipedia.org/wiki/Witch-hazel"
    },
    {
        id: 12,
        benefits: ["Medicinal", "Digestive", "Anti-stress", "Sedative"],
        name: "Catnip",
        isCulinary: false,
        image: "catnip.jpg",
        alt: "Photo of catnip plant.",
        urlLink: "https://en.wikipedia.org/wiki/Catnip"
    }
];
