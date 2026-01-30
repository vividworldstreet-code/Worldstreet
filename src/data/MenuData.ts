interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "About",
        link: "/about",
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Markets",
        link: "/#markets",
        sub_menus: [
            { link: "/markets/forex", title: "Forex" },
            { link: "/markets/crypto", title: "Cryptocurrencies" },
            { link: "/markets/commodities", title: "Commodities" },
            { link: "/markets/indices", title: "Indices" },
            { link: "/markets/cfds", title: "CFDs" },
        ],
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Trade Tools",
        link: "/#tools",
        sub_menus: [
            { link: "/tools/copy-trading", title: "Copy Trading" },
            { link: "/tools/pamm", title: "PAMM" },
            { link: "/tools/vivid-ai", title: "Vivid AI" },
            { link: "/tools/signals", title: "Trading Signals" },
        ],
    },
    {
        id: 5,
        has_dropdown: true,
        title: "Education",
        link: "/#education",
        sub_menus: [
            { link: "/academy", title: "WS Academy" },
            { link: "/webinars", title: "Webinars" },
            { link: "/videos", title: "Videos" },
            { link: "/podcasts", title: "Podcasts" },
        ],
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Leaderboard",
        link: "/trader-of-the-week",
    },
];
export default menu_data;
