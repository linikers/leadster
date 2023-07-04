import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Modal from "react-modal";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue-0: #f0f8ff;
    --color-blue-1: #9ac6e7;
    --color-blue-2: #0077f4;
    --color-blue-3: #1c3c50;

    --color-green-1: #10d1b7;
    --color-green-2: #00d59f;

  }
`;
Modal.setAppElement("#__next");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
