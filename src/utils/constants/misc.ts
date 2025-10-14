import { BarChart3Icon, FolderOpenIcon, Origami, Rocket, Telescope, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "Ideation and Discovery",
        description: "We collaborate closely with you to understand your vision and define the problem you're solving.",
        icon: Telescope,
    },
    {
        title: "Design and Development",
        description: "Our experts bring your idea to life through thoughtful design and cutting-edge development, ensuring a polished, functional product.",
        icon: Origami,
    },
    {
        title: "Launch and Optimization",
        description: "We deploy the product and fine-tune it, ensuring it performs flawlessly and evolves with your needs.",
        icon: Rocket,
    },
] as const;

export const Products = [
    {
        title: "Inquirix",
        description: "Transforming PDFs into Interactive Knowledge.",
    },
    {
        title: "Advanced analytics",
        description: "Track and measure the performance of your links.",
    },
    {
        title: "Password protection",
        description: "Secure your links with a password.",
    },
    {
        title: "Custom QR codes",
        description: "Generate custom QR codes for your links.",
    },
    {
        title: "Link expiration",
        description: "Set an expiration date for your links.",
    },
    {
        title: "Team collaboration",
        description: "Share links with your team and collaborate in real-time.",
    },
] as const;

export const REVIEWS = [
    // Lightning-fast Websites Review
    {
        name: "Ava Morgan",
        username: "@ava_morgan",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        review: "They built us a lightning-fast website that feels silky smooth on every device. It honestly gave our brand a huge boost in credibility."
    },
    
    // Interactive Dashboards Review
    {
        name: "Madison Reed",
        username: "@madison_reed",
        avatar: "https://randomuser.me/api/portraits/women/15.jpg",
        rating: 5,
        review: "Our new dashboard is interactive, clean, and makes data analysis fun instead of a chore. The speed blew us away!"
    },

    // Responsive Websites Review
    {
        name: "Hannah Scott",
        username: "@hannah_scott",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        review: "Finally — a website that looks and works perfect on mobile and desktop. Their attention to detail is insane."
    },

    // Communication & Collaboration Review
    {
        name: "Michael Davis",
        username: "@michael_davis",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        rating: 4,
        review: "Communication was solid and they kept us updated. The only hiccup was a slight delay in delivery, but the final result was worth it."
    },

    // Talented Team Review
    {
        name: "Isla Thompson",
        username: "@isla_thompson",
        avatar: "https://randomuser.me/api/portraits/women/18.jpg",
        rating: 5,
        review: "Such a creative and skilled team! They nailed everything from visuals to backend architecture seamlessly."
    },

    // Ideation to Hosting Review
    {
        name: "Benjamin Lee",
        username: "@benjamin_lee",
        avatar: "https://randomuser.me/api/portraits/men/27.jpg",
        rating: 5,
        review: "They took us from rough ideas to a polished, hosted site in record time. The whole process felt effortless."
    },

    // Scaling Up Review
    {
        name: "Owen Martinez",
        username: "@owen_martinez",
        avatar: "https://randomuser.me/api/portraits/men/29.jpg",
        rating: 5,
        review: "Their scaling expertise let us handle thousands of users with no slowdowns. Truly a partner for long-term growth."
    },

    // Productivity Boost Review
    {
        name: "James Walker",
        username: "@james_walker",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        rating: 4,
        review: "The tools boosted our team’s productivity a lot. A few minor UI quirks exist, but nothing that breaks the workflow."
    },

    // Team Collaboration Review
    {
        name: "Ella White",
        username: "@ella_white",
        avatar: "https://randomuser.me/api/portraits/women/29.jpg",
        rating: 5,
        review: "Collaboration was smooth — they felt like an extension of our own team. The final delivery impressed everyone here."
    },

    // Full-service Development Review
    {
        name: "Henry Adams",
        username: "@henry_adams",
        avatar: "https://randomuser.me/api/portraits/men/23.jpg",
        rating: 5,
        review: "From brainstorming features to deploying the site, they handled it all. Truly a full-service development team."
    },
] as const;
