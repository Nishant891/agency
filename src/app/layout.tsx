import { Providers } from "@/components";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { aeonik, cn, generateMetadata, inter } from "@/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scrollbar">
      <head>
        {/* SSR: Apply theme BEFORE paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme") || "system";
                  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const useDark = theme === "dark" || (theme === "system" && prefersDark);
                  if (useDark) {
                    document.documentElement.classList.add("dark");
                    // Force immediate reflow
                    document.documentElement.style.display = 'none';
                    document.documentElement.offsetHeight;
                    document.documentElement.style.display = '';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased !font-default overflow-x-hidden",
          aeonik.variable,
          inter.variable
        )}
      >
        <Providers>
          <ThemeProvider>
            <Toaster richColors theme="dark" position="top-right" />
            {children}
            <Analytics />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}