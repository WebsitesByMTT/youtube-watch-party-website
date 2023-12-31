import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Have a blast with the Youtube watch party",
  description:
    "Youtube Watch Party: endless videos, movies, series & more. Chat, audio/video call while streaming together. Entertainment & fun in one place!",
  openGraph: {
    title: "Have a blast with the Youtube watch party",
    description:
      "Youtube Watch Party: endless videos, movies, series & more. Chat, audio/video call while streaming together. Entertainment & fun in one place!",
    url: "https://www.youtubeparty.com/",
    type: "website",
    image: "https://www.youtubeparty.com/main-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/main-logo.svg" />
        <link rel="canonical" href="https://www.youtubeparty.com/" />
        <meta
          name="google-site-verification"
          content="u5uF32XvpbzE0bD8SJwAuf5P12rPPRnHxEEpl7_4jdk"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1PP7YT2LF5" />
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1PP7YT2LF5');
          `,
          }}
        />
      </head>
      <body>
        <Schema />
        {children}
        <Footer />
      </body>
    </html>
  );
}
