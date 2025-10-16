import { Providers } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { aeonik, cn, generateMetadata, inter } from "@/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scrollbar">
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
                    aeonik.variable,
                    inter.variable,
                )}
            >
                <Providers>
                    <ThemeProvider>
                    <Toaster richColors theme="dark" position="top-right" />
                    {children}
                    </ThemeProvider>
                </Providers>
            </body>
        </html>
    );
};