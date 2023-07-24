import "~/styles/globals.css";

import localFont from "next/font/local";

const satoshi = localFont({
  src: "../../public/Satoshi-Variable.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${satoshi.className} p-8 max-w-5xl bg-white mx-auto min-h-screen`}
    >
      <Component {...pageProps} />
    </div>
  );
}
