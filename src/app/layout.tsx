import { Outfit, Jost, Crimson_Pro } from 'next/font/google';
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";
import { VideoProvider } from '@/provider/VideoProvider';

const outfit_bold = Outfit({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-body'
});
const outfit_heading = Outfit({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-heading'
});
const outfit_p = Outfit({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-p'
});
const jost_primary = Jost({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-primary'
});
const crismon_secondary = Crimson_Pro({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: '--tp-ff-secondary'
});


export const metadata: Metadata = {
  title: "Qasyoun Private University",
  description:
    "Qasyoun Private University (QPU) — official site migration in progress from qpu.edu.sy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}>
        <VideoProvider>
          {children}
        </VideoProvider>
      </body>
    </html>
  );
}
