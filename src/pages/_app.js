import Head from "next/head";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import "../styles/global.css";
import "../styles/main.css";
import "../styles/landing-sections.css";
import { ToastContainer } from "react-toastify";
import { SettingsProvider } from "@/context/useSiteSettings";
import { useRouter } from "next/router";
import { normalizePath } from "@/utils/functionUtils";
import { renderHeadTags } from "@/utils/renderHeadTags";
import useLenis, { LenisContext } from "@/hooks/useLenis";

export default function App({ Component, pageProps }) {
  const lenisRef = useLenis();
  const router = useRouter();

  const currentPath = normalizePath(router.asPath);

  const matchedHead = pageProps?.heads?.find(
    (h) => normalizePath(h.target_url) === currentPath,
  );

  const finalHead = matchedHead?.head || pageProps?.globalHead || null;

  return (
    <>
      <Head>
        {/* Preconnect for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>

        {/* Poppins Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nanum+Pen+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>

        {finalHead && renderHeadTags(finalHead)}
      </Head>

      <ToastContainer autoClose={3000} limit={1} />

      <SettingsProvider>
        <LenisContext.Provider value={lenisRef}>
          <Navbar />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </LenisContext.Provider>
      </SettingsProvider>
    </>
  );
}
