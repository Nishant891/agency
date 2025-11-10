"use client";

import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, NAV_LINKS } from "@/utils";
import { LucideIcon, Send, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../global/max-width-wrapper";
import MobileNavbar from "./mobile-navbar";
import AnimationContainer from "../global/animation-container";
import { useTheme } from "@/components/providers/theme-provider";

const Navbar = () => {
  const { resolvedTheme, toggleTheme } = useTheme(); // Use resolvedTheme!
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 8);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 inset-x-0 h-24 w-full border-b border-transparent z-[99999] select-none transition-all duration-500",
        scroll
          ? "border-background/80 bg-background/80 backdrop-blur-md"
          : "bg-background/60"
      )}
    >
      <AnimationContainer reverse delay={0.01} className="size-full">
        <MaxWidthWrapper className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" className="flex items-center">
            <img
              src="/icons/logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="text-lg font-bold font-heading !leading-none">
              Yumeo
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.title}>
                    {link.menu ? (
                      <>
                        <NavigationMenuTrigger className="text-foreground">
                          {link.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul
                            className={cn(
                              "grid gap-1 p-4 md:w-[400px] lg:w-[500px] rounded-xl !bg-background !text-foreground",
                              link.title === "Products"
                                ? "lg:grid-cols-[.75fr_1fr]"
                                : "lg:grid-cols-2"
                            )}
                          >
                            {link.title === "Products" && (
                              <li className="row-span-4 pr-2 relative rounded-lg overflow-hidden">
                                <div className="absolute inset-0 !z-10 h-full w-[calc(100%-10px)] bg-[linear-gradient(to_right,rgb(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgb(38,38,38,0.5)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgb(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.1)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/"
                                    className="flex h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b from-muted/50 to-muted p-4 no-underline outline-none focus:shadow-md z-20 relative"
                                  >
                                    <h6 className="mb-2 mt-4 text-lg font-medium">
                                      All Products
                                    </h6>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      Products made personally and for the customers.
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            )}
                            {link.menu.map((menuItem) => (
                              <ListItem
                                key={menuItem.title}
                                title={menuItem.title}
                                href={menuItem.href}
                                icon={menuItem.icon}
                              >
                                {menuItem.tagline}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "text-foreground")}
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle – FIXED */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              className="relative p-2 rounded-full bg-transparent hover:bg-accent/20 transition-colors duration-200 flex items-center justify-center overflow-hidden"
            >
              <Sun
                className={cn(
                  "h-5 w-5 text-foreground absolute transition-all duration-300",
                  resolvedTheme === "dark"
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-90 scale-0 opacity-0"
                )}
              />
              <Moon
                className={cn(
                  "h-5 w-5 text-foreground absolute transition-all duration-300",
                  resolvedTheme === "dark"
                    ? "rotate--90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                )}
              />
            </button>

            {/* Contact Button */}
            <div className="hidden lg:flex">
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nishant19072003@gmail.com"
                className={cn(
                  buttonVariants({ variant: "primary" }),
                  "bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
                )}
              >
                Get in Touch
                <Send className="h-3.5 w-3.5 fill-white" />
              </Link>
            </div>

            <MobileNavbar />
          </div>
        </MaxWidthWrapper>
      </AnimationContainer>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon: LucideIcon }
>(({ className, title, href, icon: Icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            <Icon className="h-4 w-4 text-foreground" />
            <h6 className="text-sm font-medium !leading-none text-foreground">{title}</h6>
          </div>
          <p className="line-clamp-1 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;