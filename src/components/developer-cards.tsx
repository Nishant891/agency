"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PLANS } from "@/utils";
import { Squircle } from "lucide-react";
import Link from "next/link";

type DeveloperPlan = {
  info: string;
  price: {
    monthly: string;
  };
  image?: string;
  Products: {
    text: string;
    tooltip?: string;
  }[];
  btn: {
    text: string;
    href: string;
  };
};

interface DevelopersCardProps {
  developers?: DeveloperPlan[];
}

const DevelopersCard: React.FC<DevelopersCardProps> = ({ developers = PLANS }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full md:gap-8 justify-center items-stretch max-w-6xl mx-auto pt-6">
        {developers.map((developer) => (
          <Card
            key={developer.price.monthly}
            className="flex flex-col w-full border-border rounded-xl h-full"
          >
            <CardHeader className="border-b border-border bg-foreground/[0.03] pb-4 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-muted border border-border mb-3">
                {developer.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={developer.image}
                    alt={developer.price.monthly}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              <h5 className="text-xl font-semibold">
                {developer.price.monthly}
              </h5>
              <CardDescription className="mt-1">
                {developer.info}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 pb-0 flex-grow">
              <ul className="space-y-3">
                {developer.Products.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Squircle className="text-purple-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    {feature.tooltip ? (
                      <TooltipProvider>
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger asChild>
                            <p className="border-b !border-dashed border-border cursor-pointer text-sm leading-relaxed">
                              {feature.text}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <p className="text-sm leading-relaxed">
                        {feature.text}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="w-full mt-auto pt-4 pb-6">
              <Link
                href={developer.btn.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "100%" }}
                className={buttonVariants({ variant: "primary" })}
              >
                {developer.btn.text}
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DevelopersCard;
