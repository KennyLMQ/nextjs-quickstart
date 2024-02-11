"use client";

import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import * as React from "react";
import { useState } from "react";

import Copyright from "@/components/Copyright";
import Header from "@/components/Header";
import { createDarkTheme } from "@/themes/darkTheme";
import { createLightTheme } from "@/themes/lightTheme";

export default function RootLayout(props: { children: React.ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  React.useEffect(() => {
    // This code runs on the client after initial render
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkTheme(storedTheme === "dark");
    }
  }, []);

  const changeTheme = () => {
    const newTheme = !isDarkTheme;

    localStorage.setItem("theme", newTheme === true ? "dark" : "light");

    setIsDarkTheme(newTheme);
  };

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider
            theme={isDarkTheme ? createDarkTheme() : createLightTheme()}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Header isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
            <Container sx={{ pt: 8, pb: 2 }}>{props.children}</Container>
            <Copyright></Copyright>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
