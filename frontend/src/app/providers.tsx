"use client"
import { type ReactElement, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function Providers({
    children,
    ...props
  }: {
    children: ReactNode;
  }): ReactElement {
    return (
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </NextThemesProvider>
    );
  }
  