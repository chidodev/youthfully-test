import Head from 'next/head';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';

// Component Imports
import Layout from 'src/layouts';
import ThemeComponent from 'src/theme/ThemeComponent';

// context
import {
  SettingsConsumer,
  SettingsProvider,
} from 'src/context/settingsContext';

import { createEmotionCache } from 'src/utils/create-emotion-cache';

// Global css styles
import '../../styles/globals.css';

// extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Youthfully Test</title>
        <meta name="description" content="youthfull test" />
        <meta name="keywords" content="NextJS, SSR" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                {getLayout(<Component {...pageProps} />)}
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
};

export default App;
