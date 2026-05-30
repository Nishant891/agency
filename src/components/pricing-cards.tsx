"use client";

import { Zap, Globe, Server } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* 1. Static Websites */}
          <div className="flex flex-col border border-border rounded-2xl p-8 bg-card hover:bg-accent/5 transition-colors h-full">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-purple-500 mr-2" />
              <h3 className="text-xl font-bold text-foreground">Static Website</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Fast, secure, and SEO-friendly sites deployed globally.
            </p>
            <ul className="text-foreground mb-6 space-y-2 text-sm">
              <li>• Personal Blog</li>
              <li>• Portfolio Site</li>
              <li>• Company Landing Page</li>
              <li>• Event or Product Showcase</li>
            </ul>
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">₹10,000</div>
            </div>
            <Link
              href="mailto:nishant19072003@gmail.com?subject=Inquiry: Static Website"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full py-5 font-medium mt-auto"
              )}
            >
              Get Started
            </Link>
          </div>

          {/* 2. Dynamic Websites (Featured) */}
          <div className="relative flex flex-col border-2 border-purple-500 rounded-2xl p-8 bg-card shadow-lg h-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-purple-500 mr-2" />
              <h3 className="text-xl font-bold text-foreground">Dynamic Website</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Interactive, real-time apps with modern stack.
            </p>
            <ul className="text-foreground mb-6 space-y-2 text-sm">
              <li>• Dashboard Apps (Admin Panels)</li>
              <li>• SaaS MVPs</li>
              <li>• E-commerce (Product Catalog)</li>
              <li>• Authenticated User Portals</li>
            </ul>
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">₹30,000</div>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Built with: <strong>Next.js, tRPC, Supabase, Clerk</strong>
            </p>
            <Link
              href="mailto:nishant19072003@gmail.com?subject=Inquiry: Dynamic Website"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "w-full py-5 font-medium bg-purple-500 hover:bg-purple-600 text-white mt-auto"
              )}
            >
              Build My App
            </Link>
          </div>

          {/* 3. Full-Stack Application */}
          <div className="flex flex-col border border-border rounded-2xl p-8 bg-card hover:bg-accent/5 transition-colors h-full">
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-purple-500 mr-2" />
              <h3 className="text-xl font-bold text-foreground">Full-Stack App</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              End-to-end custom solutions with scalable backend.
            </p>
            <ul className="text-foreground mb-6 space-y-2 text-sm">
              <li>• Custom CRM or ERP</li>
              <li>• Real-time Collaboration Tools</li>
              <li>• Multi-tenant SaaS Platforms</li>
              <li>• API-First Applications</li>
            </ul>
            <div className="mb-6">
              <div className="text-3xl font-bold text-foreground">Custom Pricing</div>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Backend: <strong>Node.js / Python</strong><br />
              DB: <strong>MySQL, Neon (PostgreSQL)</strong><br />
              ORM: <strong>Prisma</strong>
            </p>
            <Link
              href="mailto:nishant19072003@gmail.com?subject=Inquiry: Full-Stack Application"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full py-5 font-medium mt-auto"
              )}
            >
              Discuss Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
