import { Calendar, FileText, HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, NewspaperIcon, QrCodeIcon, Rotate3D, WaypointsIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Templates",
        href: "/templates",
    },
    {
        title: "Components",
        href: "/components",
    },
    {
        title: "Developers",
        href: "/developers",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "https://dematrix.vercel.app",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Achievements",
        href: "/achievements",
    },
];
