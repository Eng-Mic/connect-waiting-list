import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata = {
  title: "Connect. Fostering Collaboration & Synergy.",
  description: "Creating a space where your idea matters and your investment matters.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.png",
        href: "/icon.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon.png",
        href: "/icon.png",
      },
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("font-poppins antialiased", poppins.variable)}
      >
          <>
            <ClientLayout>{children}</ClientLayout>
          </>
      </body>
    </html>
  );
}
