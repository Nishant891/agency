"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { PLANS } from "@/utils"; // Assuming PLANS is imported from your utils file
import { Squircle } from "lucide-react";
import Link from "next/link";

// Define the type for a developer plan based on your PLANS structure
type DeveloperPlan = {
  name: string;
  info: string;
  price: {
    monthly: string;
  };
  Products: {
    text: string;
    tooltip?: string; // Optional tooltip
  }[];
  btn: {
    text: string;
    href: string;
  };
};

// Define the type for the component props if needed later
interface DevelopersCardProps {
  developers?: DeveloperPlan[]; // Optional prop to pass developers, defaults to PLANS
}

const DevelopersCard: React.FC<DevelopersCardProps> = ({ developers = PLANS }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full md:gap-8 flex-wrap justify-center items-stretch max-w-5xl mx-auto pt-6"> {/* Changed to a regular div layout, added items-stretch */}
        {developers.map((developer) => (
          <Card
            key={developer.price.monthly} // Use name as key for uniqueness
            className="flex flex-col w-full border-border rounded-xl h-full" // Added h-full for consistent height
          >
            <CardHeader className="border-b border-border bg-foreground/[0.03] pb-4"> {/* Simplified header styling */}
              <CardDescription>
                {developer.info}
              </CardDescription>
              <h5 className="text-xl font-semibold mt-1"> {/* Adjusted text size and margin */}
                {developer.price.monthly}
              </h5>
            </CardHeader>
            <CardContent className="pt-4 pb-0 flex-grow"> {/* Added flex-grow and adjusted padding */}
              <ul className="space-y-3"> {/* Added list styling for features */}
                {developer.Products.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2"> {/* Changed to list item, used items-start for alignment */}
                    <Squircle className="text-purple-500 w-4 h-4 mt-0.5 flex-shrink-0" /> {/* Adjusted icon alignment and prevented shrinking */}
                    {feature.tooltip ? ( // Conditional rendering for tooltip
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
            <CardFooter className="w-full mt-auto pt-4 pb-6"> {/* Adjusted footer padding */}
              <Link
                href={developer.btn.href}
                target="_blank" // Recommended for external links
                rel="noopener noreferrer" // Security best practice for target="_blank"
                style={{ width: "100%" }}
                className={buttonVariants({ variant: "primary" })} // Using default variant, can be customized
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