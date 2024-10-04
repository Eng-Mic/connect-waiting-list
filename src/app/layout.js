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
  title: "Connect: Fostering Collaboration & Synergy.",
  description: "Building a community with the right tools, resources, and network needed to turn bold ideas into impactful realities.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon.png",
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
