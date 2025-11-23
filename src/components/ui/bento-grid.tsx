import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  CalendarIcon,
  Link2Icon,
  SearchIcon,
  WaypointsIcon,
  FileText,
  Rotate3d,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";
import { BentoCardHover } from "./bento-card-hover";
import Image from "next/image";

export const CARDS = [
  {
    Icon: FileText,
    name: "Deckit",
    description: "Create amazing PPTs with AI",
    href: "https://deckit.ai/workspace", //Link to inquirix
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] border border-border border-r-0">
        <CardHeader>
          <CardTitle>AI powered PPTs</CardTitle>
          <CardDescription>
            Create and edit amazing PPTs with AI
          </CardDescription>
        </CardHeader>
        <CardContent className="-mt-4">
          <Label>Upload Documents</Label>
          <Input
            type="file"
            placeholder="Insert your PDF here..."
            className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
          />
        </CardContent>
      </Card>
    ),
  },
  {
    Icon: Rotate3d,
    name: "Shoppy",
    description:
      "A full stack ecommerce application",
    href: "https://www.fintechsandbox.org/startup/alpha-exchange/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Command className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] p-2">
        <Input placeholder="Search books, gadgets, t-shirts..." />
        <div className="mt-1 cursor-pointer">
          <div className="px-4 py-2 hover:bg-muted rounded-md flex justify-between items-center">
            <span>Nike Shoe</span>
            <span className="text-green-600 text-sm">$230</span>
          </div>
          <div className="px-4 py-2 hover:bg-muted rounded-md flex justify-between items-center">
            <span>Black Hoodie</span>
            <span className="text-blue-600 text-sm">$20</span>
          </div>
          <div className="px-4 py-2 hover:bg-muted rounded-md flex justify-between items-center">
            <span>ASUS Laptop</span>
            <span className="text-orange-600 text-sm">$4215</span>
          </div>
          <div className="px-4 py-2 hover:bg-muted rounded-md flex justify-between items-center">
            <span>The Alchemist</span>
            <span className="text-purple-600 text-sm">$8</span>
          </div>
          <div className="px-4 py-2 hover:bg-muted rounded-md flex justify-between items-center">
            <span>Risk Management</span>
            <span className="text-red-600 text-sm">VaR: -$2.1K</span>
          </div>
          <div className="px-4 py-2 hover:bg-muted rounded-md flex justify-between items-center">
            <span>AI Trade Signals</span>
            <span className="text-green-600 text-sm">Strong Buy</span>
          </div>
        </div>
      </Command>
    ),
  },
  {
    Icon: WaypointsIcon,
    name: "SEC Filings Analysis",
    description:
      "Analyze 10-K, 10-Q, 8-K FORMS 3,4,5 SEC Filings for hundereds of companies",
    href: "https://sec-filing-analyzer.vercel.app/", //Optix ka site link
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
    background: (
      <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]" />
    ),
  },
  {
  Icon: CalendarIcon,
  name: "Brunel",
  description:
    "Find freelancers near you",
  className: "col-span-3 lg:col-span-1",
  href: "#",
  cta: "Learn more",
  background: (
    <Image 
      alt="Brunel" 
      src="/brunel.png" 
      width={300} 
      height={400}
      className="absolute border-2 border-gray-400 right-10 top-10 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] object-cover"
    />
  ),
},
];

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <BentoCardHover className={className}>
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 -translate-y-10">
      <Icon className="h-12 w-12 origin-left text-neutral-700" />
      <h3 className="text-xl font-semibold text-neutral-300 dark:text-neutral-700">{name}</h3>
      <p className="max-w-lg text-neutral-400 dark:text-neutral-500">{description}</p>
    </div>
    <div className={cn("absolute bottom-0 flex w-full flex-row items-center p-4")}>
      <Link
        href={href}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "cursor-pointer text-white dark:text-black",
        })}
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03]" />
  </BentoCardHover>
);

export { BentoCard, BentoGrid };