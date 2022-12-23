import { CacheProvider, EmotionCache } from "@emotion/react";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

import Copyright from "../components/Copyright";
import Header from "../components/Header";
import createEmotionCache from "../emotion/createEmotionCache";
import { createDarkTheme } from "../themes/darkTheme";
import { createLightTheme } from "../themes/lightTheme";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const changeTheme = () => {
    const newTheme = !isDarkTheme;

    localStorage.setItem("theme", newTheme === true ? "dark" : "light");

    setIsDarkTheme(newTheme);
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Next.js Quickstart</title>
      </Head>
      <ThemeProvider
        theme={isDarkTheme ? createDarkTheme() : createLightTheme()}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Header isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <Container sx={{ pt: 6, pb: 2 }}>
          <Component {...pageProps} />
        </Container>
        <Copyright />
      </ThemeProvider>
    </CacheProvider>
  );
}
