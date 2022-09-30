// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

function ForceDarkMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode]);

  return children;
}

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            overflow-x: hidden;
            background: #17171d;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GlobalStyle>
        <ForceDarkMode>
          <Component {...pageProps} />
        </ForceDarkMode>
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
