export type Herb = {
    id: number;
    benefits: string[];
    name: string;
    isCulinary: boolean;
    image: string;
    alt: string;
    urlLink: string;
    price: number;
    description: string;
}

export const herbsData: Herb[] = [
    {
        id: 1,
        benefits: ["Medicinal", "Anti-oxidant"],
        name: "Oregano",
        isCulinary: true,
        image: "oregano.jpg",
        alt: "Photo of oregano plant.",
        urlLink: "https://en.wikipedia.org/wiki/Oregano",
        price: 8.49,
        description: "A fragrant Mediterranean herb valued for its strong flavor and antioxidant-rich medicinal properties."
    },
    {
        id: 2,
        benefits: ["Medicinal", "Anti-oxidant", "Anti-inflammatory", "Anti-bacterial"],
        name: "Basil",
        isCulinary: true,
        image: "basil.jpg",
        alt: "Photo of basil plant.",
        urlLink: "https://en.wikipedia.org/wiki/Basil",
        price: 6.95,
        description: "A popular aromatic herb often used in Italian cooking, known for its healing and antibacterial effects."
    },
    {
        id: 3,
        benefits: ["Medicinal", "Anti-inflammatory"],
        name: "Nettle",
        isCulinary: true,
        image: "nettle.jpg",
        alt: "Photo of nettle plant.",
        urlLink: "https://en.wikipedia.org/wiki/Urtica",
        price: 4.79,
        description: "A nutrient-rich herb traditionally used to reduce inflammation and support joint and skin health."
    },
    {
        id: 4,
        benefits: ["Medicinal", "Anti-microbial"],
        name: "Thyme",
        isCulinary: true,
        image: "thyme.jpg",
        alt: "Photo of thyme plant.",
        urlLink: "https://en.wikipedia.org/wiki/Thyme",
        price: 5.32,
        description: "An aromatic herb with antiseptic qualities often used to flavor dishes and relieve respiratory issues."
    },
    {
        id: 5,
        benefits: ["Medicinal", "Anti-inflammatory", "Anti-oxidant", "Digestive", "immune-booster"],
        name: "Ginger",
        isCulinary: true,
        image: "ginger.jpg",
        alt: "Photo of ginger root.",
        urlLink: "https://en.wikipedia.org/wiki/Ginger",
        price: 9.10,
        description: "A warming spice known for aiding digestion, reducing inflammation, and boosting the immune system."
    },
    {
        id: 6,
        benefits: ["Medicinal", "Sedative", "Calming", "Anti-stress", "Sedative"],
        name: "Lavender",
        isCulinary: true,
        image: "lavender.jpg",
        alt: "Photo of lavender plant.",
        urlLink: "https://en.wikipedia.org/wiki/Lavandula",
        price: 12.45,
        description: "A fragrant purple-flowered herb cherished for its calming aroma and stress-relieving properties."
    },
    {
        id: 7,
        benefits: ["Medicinal", "Sedative", "Anti-stress", "Digestive", "Anti-inflammatory", "Skin-soothing"],
        name: "Chamomile",
        isCulinary: true,
        image: "chamomile.jpg",
        alt: "Photo of chamomile plant.",
        urlLink: "https://en.wikipedia.org/wiki/Chamomile",
        price: 7.58,
        description: "A gentle herb famous for its soothing tea, promoting relaxation, digestion, and skin health."
    },
    {
        id: 8,
        benefits: ["Medicinal", "Sedative", "Anti-stress", "Digestive"],
        name: "Melissa",
        isCulinary: true,
        image: "melissa.jpg",
        alt: "Photo of St. Melissa plant.",
        urlLink: "https://en.wikipedia.org/wiki/Lemon_balm",
        price: 10.27,
        description: "Also known as lemon balm, this herb helps calm the mind, ease digestion, and relieve mild anxiety."
    },
    {
        id: 9,
        benefits: ["Medicinal", "immune-booster"],
        name: "Echinacea",
        isCulinary: false,
        image: "echinacea.jpg",
        alt: "Photo of echinacea plant.",
        urlLink: "https://en.wikipedia.org/wiki/Echinacea",
        price: 13.11,
        description: "A flowering plant often used to strengthen the immune system and help fight off colds and infections."
    },
    {
        id: 10,
        benefits: ["Medicinal", "Anti-inflammatory", "Anti-bacterial", "Anti-stress"],
        name: "St. John's Wort",
        isCulinary: false,
        image: "st-johns-wort.jpg",
        alt: "Photo of St. John's Wort plant.",
        urlLink: "https://en.wikipedia.org/wiki/Hypericum_perforatum",
        price: 11.36,
        description: "A yellow-flowered herb widely used to support mood balance and reduce symptoms of mild depression."
    },
    {
        id: 11,
        benefits: ["Medicinal", "Anti-inflammatory", "Astringent", "Skin-soothing"],
        name: "Witch Hazel",
        isCulinary: false,
        image: "witch-hazel.jpg",
        alt: "Photo of witch hazel plant.",
        urlLink: "https://en.wikipedia.org/wiki/Witch-hazel",
        price: 7.94,
        description: "A natural astringent extracted from its bark and leaves, commonly used to soothe and tone the skin."
    },
    {
        id: 12,
        benefits: ["Medicinal", "Digestive", "Anti-stress", "Sedative"],
        name: "Catnip",
        isCulinary: false,
        image: "catnip.jpg",
        alt: "Photo of catnip plant.",
        urlLink: "https://en.wikipedia.org/wiki/Catnip",
        price: 6.25,
        description: "A calming herb for humans and a favorite of cats, known to ease stress and aid in digestion."
    }
];
